import React from 'react'
import {  Card,Breadcrumb, Col, Row } from 'react-bootstrap';
import {BasicTable} from "../Agentstable"

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
              <div>
                <h6 className="main-content-label mb-1">Basic DataTable</h6>
                <p className="text-muted card-sub-title">
                  Searching, ordering and paging goodness will be immediately
                  added to the table, as shown in this example.
                </p>
              </div>
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