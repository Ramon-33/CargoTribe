import React from 'react'
import {  Card,Breadcrumb, Col, Row } from 'react-bootstrap';
import {BasicTable} from "../Opporunitiestable"

const DataTablesCom = () => {
  return (
    <div className="main-container container-fluid">
      {/* <!-- breadcrumb --> */}

      {/* <!-- /breadcrumb --> */}

      {/* <!-- Row --> */}
      <Row className=" row-sm">
        <Col lg={12}>
          <Card className="custom-card overflow-hidden">
            <Card.Body>
              <div className="table-responsive">
                <BasicTable />
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      {/* <!-- End Row --> */}
    </div>
  )
}

export default DataTablesCom