import Seo from '@/shared/layout-components/seo/seo';
import React from 'react';
import { Breadcrumb, Card, Col, Row } from 'react-bootstrap';
import dynamic from 'next/dynamic';
const DataTablesCom = dynamic(()=>import('@/shared/data/table/datatable/data-tables-com'), { ssr: false })

const Contacts = () => (
  <div>
      {/* <!-- breadcrumb --> */}
      <div className="breadcrumb-header justify-content-between">
        <div className="left-content">
          <span className="main-content-title mg-b-0 mg-b-lg-1">Contacts</span>
        </div>

      </div>
      {/* <!-- /breadcrumb -->

					<!-- row --> */}
      
      <DataTablesCom/>
      {/* <!-- row closed --> */}
    </div>
);


Contacts.propTypes = {};

Contacts.defaultProps = {};

Contacts.layout = "Contentlayout"

export default Contacts;
