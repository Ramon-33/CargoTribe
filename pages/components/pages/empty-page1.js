import React, { useState } from 'react';
import { Breadcrumb, Card, Col, Row } from 'react-bootstrap';

const EmptyPage1 = () => {
  const [htmlContent, setHtmlContent] = useState('');
  const [loading, setLoading] = useState(false);

  const handleFileChange = async (event) => {
    setLoading(true);
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = async (e) => {
      const contents = e.target.result;
      setHtmlContent(contents);
      setLoading(false);
    };

    reader.readAsText(file);
  };

  const handleReplyAll = () => {
    
    // Implement reply all functionality here
    console.log('Reply All button clicked');
  };

  return (
    <div>
      {/* Breadcrumb */}
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
              className="breadcrumb-item"
              active
              aria-current="page"
            >
              Empty Page
            </Breadcrumb.Item>
          </Breadcrumb>
        </div>
      </div>
      {/* End Breadcrumb */}

      {/* Content */}
      <Row>
        <Col md={12} xl={12} xs={12} sm={12}>
          <Card>
            <Card.Body>
              <input type="file" onChange={handleFileChange} accept=".html" />
              {loading ? (
                <div>Loading...</div>
              ) : (
                <>
                  <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
                  <button onClick={handleReplyAll}>Reply All</button>
                </>
              )}
            </Card.Body>
          </Card>
        </Col>
      </Row>
      {/* End Content */}
    </div>
  );
};

export default EmptyPage1;
