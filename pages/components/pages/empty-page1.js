// pages/components/pages/empty-page1.js
import Seo from '@/shared/layout-components/seo/seo';
import React, { useState, useEffect } from 'react';
import { Breadcrumb, Card, Col, Row } from 'react-bootstrap';

const EmptyPage1 = () => {
  const [emails, setEmails] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchEmails = async () => {
      try {
        const response = await fetch('/api/emails');
        if (!response.ok) {
          throw new Error('Failed to fetch emails');
        }
        const data = await response.json();
        setEmails(data.emails);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching emails:', error);
        setLoading(false);
      }
    };

    fetchEmails();
  }, []);

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
