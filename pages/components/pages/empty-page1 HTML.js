import Seo from '@/shared/layout-components/seo/seo';
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
              <input type="file" onChange={handleFileChange} accept=".html" />
              {loading ? (
                <div>Loading...</div>
              ) : (
                <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
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
