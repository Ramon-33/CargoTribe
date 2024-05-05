import React, { useState } from 'react';
import { Breadcrumb, Card, Col, Row, Button, Form } from 'react-bootstrap'; // Import Form component
import ImageViewer from "react-simple-image-viewer";
import Link from "next/link";

const FileDetailsCom = () => {
  const [htmlContent, setHtmlContent] = useState('');
  const [loading, setLoading] = useState(false);
  const [dimensions, setDimensions] = useState([]); // State to store the dimensions

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

  // Function to handle the click event of the "+ Dimensions" button
  const handleAddDimension = () => {
    setDimensions([...dimensions, {}]); // Add a new dimension object to the dimensions array
  };

  return (
    <div>
      {/* Breadcrumb */}
      <div className="breadcrumb-header justify-content-between">
        <div className="left-content">
          <span className="main-content-title mg-b-0 mg-b-lg-1">FILE DETAILS</span>
        </div>
        <div className="justify-content-center mt-2">
          <Breadcrumb className="breadcrumb">
            <Breadcrumb.Item className="breadcrumb-item tx-15" href="#!">
              Apps
            </Breadcrumb.Item>
            <Breadcrumb.Item className="breadcrumb-item" active aria-current="page">
              File details
            </Breadcrumb.Item>
          </Breadcrumb>
        </div>
      </div>
      {/* End Breadcrumb */}

      <Row className="row-sm">
        <Col xxl={8} xl={12} lg={12} md={12}>
          <Card className="custom-card overflow-hidden">
            <Card.Body className="px-4 pt-4">
              <Row>
                <Col>
                  <Form.Control
                    name="Website1"
                    placeholder="Origin"
                    type="text"
                  />
                </Col>
                <Col>
                  <Form.Control
                    name="Website2"
                    placeholder="Destination"
                    type="text"
                  />
                </Col>
                <Col>
                  <Form.Control
                    name="Website2"
                    placeholder="Commodity"
                    type="text"
                  />
                </Col>
                <Col>
                  <Form.Control
                    name="Website2"
                    placeholder="Ready"
                    type="text"
                  />
                </Col>
                <Col>
                  <Form.Control
                    name="Website2"
                    placeholder="Deadline"
                    type="text"
                  />
                </Col>
              </Row>
              <br />
              <div className="justify-content-center mt-2">
                <h5 className="mb-3">Dimensions: <Button variant="primary" type="button" onClick={handleAddDimension}> <i className="fe fe-plus me-1"></i> Dimensions </Button></h5>
              </div>
              {/* Render input boxes for each dimension */}
              {dimensions.map((dimension, index) => (
                <div key={index}>
                  <Row>
                    <Col>
                      <Form.Control placeholder="Pieces" type="text" />
                    </Col>
                    <Col>
                      <Form.Control placeholder="Length" type="text" />
                    </Col>
                    <Col>
                      <Form.Control placeholder="Width" type="text" />
                    </Col>
                    <Col>
                      <Form.Control placeholder="Height" type="text" />
                    </Col>
                    <Col>
                      <Form.Control placeholder="Weight" type="text" />
                    </Col>
                  </Row>
                  <br />
                </div>
              ))}
            </Card.Body>
          </Card>
        </Col>
        <Col md={12} xl={12} lg={12} xxl={4}>
          <Card className="custom-card">
            <Card.Body>

              
              <h5 className="mb-3">File details :</h5>
              <input type="file" onChange={handleFileChange} accept=".htm" />
              {loading ? (
                <div>Loading...</div>
              ) : (
                <div
                  dangerouslySetInnerHTML={{ __html: htmlContent }}
                  style={{ width: '100%', maxHeight: '80vh', overflowY: 'auto' }}
                />
              )}
            </Card.Body>
          </Card>
        </Col>
        <Col xxl={8} xl={12} lg={12} md={12}>
          {/* Your slider content */}
        </Col>
        <Col md={12} xl={12} lg={12} xxl={4}>
          {/* Your recent files content */}
        </Col>
      </Row>
    </div>
  );
};

export default FileDetailsCom;
