import Seo from '@/shared/layout-components/seo/seo';
import React from 'react';
import { Button } from 'react-bootstrap';
import dynamic from 'next/dynamic';
const DataTablesCom = dynamic(()=>import('@/shared/data/table/datatable/data-tables-com'), { ssr: false })

const Contacts = () => (
  <div>
    <Seo title={"Contacts"}/>
    {/* <!-- breadcrumb --> */}
    <div className="breadcrumb-header justify-content-between">
      <div className="left-content">
        <span className="main-content-title mg-b-0 mg-b-lg-1">CONTACTS</span>
      </div>
      <div className="justify-content-center mt-2">
        <Button variant="" type="button" className="btn btn-primary">
          <i className="fe fe-plus me-1"></i> Add New Contact
        </Button>
      </div>
    </div>
    {/* <!-- /breadcrumb --> */}

    {/* <!-- row --> */}
      
      <DataTablesCom/>
      {/* <!-- row closed --> */}
    </div>
);


Contacts.propTypes = {};

Contacts.defaultProps = {};

Contacts.layout = "Contentlayout"

export default Contacts;
