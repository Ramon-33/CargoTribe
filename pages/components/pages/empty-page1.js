import Seo from '@/shared/layout-components/seo/seo';
import React, { useState, useEffect } from 'react';
import { Breadcrumb, Card, Col, Row } from 'react-bootstrap';
const Imap = require('imap');

const EmptyPage1 = () => {
  const [emails, setEmails] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const imapConfig = {
      user: 'ramon.kolk@rasa-it.nl',
      password: 'Zidi1994!',
      host: 'outlook.office365.com',
      port: 993,
      tls: true
    };

    const imap = new Imap(imapConfig);

    imap.once('ready', () => {
      imap.openBox('INBOX', false, (err, box) => {
        if (err) throw err;
        imap.search(['UNSEEN'], (err, results) => {
          if (err) throw err;
          const fetchEmails = [];
          results.forEach((emailId) => {
            const fetch = imap.fetch(emailId, { bodies: '' });
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
          });
          imap.end();
          setEmails(fetchEmails);
          setLoading(false);
        });
      });
    });

    imap.connect();

    return () => {
      imap.end();
    };
  }, []);

  const parseMail = (body) => {
    // Your parsing logic goes here
    // Extract subject, sender, body etc.
    return {
      subject: 'Test Subject',
      sender: 'sender@example.com',
      body: 'Test Body'
    };
  };

  return (
    <div>
      <Seo title={"Empty Page"}/>

      {/* <!-- breadcrumb --> */}
      <div className="breadcrumb-header justify-content-between">
        <div className="left-content">
          <span className="main-content-title mg-b-0 mg-b-lg-1">EMPTY PAGE</span>
        </div>
        <div className="justify-content-center mt-2">
          <Breadcrumb className="breadcrumb">
            <Breadcrumb.Item className="breadcrumb-item tx-15" href="#!">
              Pages
            </Breadcrumb.Item>
            <Breadcrumb.Item
              className="breadcrumb-item "
              active
              aria-current="page"
            >
              Empty Page
            </Breadcrumb.Item>
          </Breadcrumb>
        </div>
      </div>
      {/* <!-- /breadcrumb --> */}

      {/* <!-- row --> */}
      <Row>
        <Col md={12} xl={12} xs={12} sm={12} >
          <Card>
            <Card.Body>
              {loading ? (
                <div>Loading...</div>
              ) : (
                <>
                  {emails.map((email, index) => (
                    <div key={index}>
                      <h2>{email.subject}</h2>
                      <p>From: {email.sender}</p>
                      <p>{email.body}</p>
                    </div>
                  ))}
                </>
              )}
            </Card.Body>
          </Card>
        </Col>
      </Row>
      {/* <!-- row closed --> */}
    </div>
  );
};

export default EmptyPage1;
