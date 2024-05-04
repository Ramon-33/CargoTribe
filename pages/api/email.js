// // pages/api/emails.js
// import Imap from 'imap';

// export default async function handler(req, res) {
//   const imapConfig = {
//     user: 'ramon_kolk@hotmail.com',
//     password: 'bloodbrothers3!',
//     host: 'outlook.office365.com',
//     port: 993,
//     tls: true
//   };

//   const imap = new Imap(imapConfig);

//   // Your IMAP logic here

//   imap.once('ready', () => {
//     // Fetch emails and send response
//   });

//   imap.connect();

//   return res.status(200).json({ message: 'Emails fetched successfully.' });
// }

// pages/api/emails.js
import Imap from 'imap';

export default async function handler(req, res) {
  const imapConfig = {
    user: 'ramon_kolk@hotmail.com',
    password: 'bloodbrothers3!',
    host: 'outlook.office365.com',
    port: 993,
    tls: true
  };

  const imap = new Imap(imapConfig);

  // Your IMAP logic here

  imap.once('ready', () => {
    // Fetch emails and send JSON response
    res.status(200).json({ message: 'Emails fetched successfully.', emails: [] });
    imap.end();
  });

  imap.once('error', (err) => {
    console.error('IMAP error:', err);
    res.status(500).json({ message: 'Failed to fetch emails.' });
    imap.end();
  });

  imap.connect();
}
