import Imap from 'imap';

export default async function handler(req, res) {
  const imapConfig = {
    user: 'ramon_kolk@hotmail.com', // Update with your email address
    password: 'bloodbrothers3!', // Update with your email password
    host: 'outlook.office365.com',
    port: 993,
    tls: true
  };

  const imap = new Imap(imapConfig);

  imap.once('ready', () => {
    imap.openBox('INBOX', false, (err, box) => {
      if (err) {
        console.error('Error opening INBOX:', err);
        res.status(500).json({ message: 'Failed to fetch email.' });
        imap.end();
        return;
      }

      imap.search(['UNSEEN'], (searchErr, results) => {
        if (searchErr) {
          console.error('Error searching for emails:', searchErr);
          res.status(500).json({ message: 'Failed to fetch email.' });
          imap.end();
          return;
        }

        if (results.length === 0) {
          console.log('No unread emails found.');
          res.status(404).json({ message: 'No unread emails found.' });
          imap.end();
          return;
        }

        const newestEmailUID = results[results.length - 1]; // Get the UID of the newest unread email
        const fetch = imap.fetch(newestEmailUID, { bodies: '' });

        const fetchEmails = [];

        fetch.on('message', (msg) => {
          let body = '';
          msg.on('body', (stream, info) => {
            stream.on('data', (chunk) => {
              body += chunk.toString('utf8');
            });
          });
          msg.once('end', () => {
            const mailData = parseMail(body);
            fetchEmails.push(mailData);
          });
        });

        fetch.once('error', (fetchErr) => {
          console.error('Error fetching email:', fetchErr);
          res.status(500).json({ message: 'Failed to fetch email.' });
          imap.end();
        });

        fetch.once('end', () => {
          // Once the email is fetched, send JSON response
          imap.end();
          res.status(200).json({ message: 'Email fetched successfully.', emails: fetchEmails });
        });
      });
    });
  });

  imap.once('error', (err) => {
    console.error('IMAP error:', err);
    res.status(500).json({ message: 'Failed to fetch email.' });
    imap.end();
  });

  imap.connect();
}

function parseMail(rawEmail) {
  const subjectMatch = rawEmail.match(/Subject: (.*)/);
  const senderMatch = rawEmail.match(/From: (.*)/);
  const htmlMatch = rawEmail.match(/Content-Type: text\/html;[\s\S]*?([\s\S]*)--/); // Extract HTML content

  const subject = subjectMatch ? subjectMatch[1] : 'No Subject';
  const sender = senderMatch ? senderMatch[1] : 'Unknown Sender';
  const htmlContent = htmlMatch ? htmlMatch[1] : '<p>No HTML content</p>';

  return {
    subject: subject,
    sender: sender,
    htmlContent: htmlContent
  };
}
