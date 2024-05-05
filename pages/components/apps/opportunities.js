import Seo from '@/shared/layout-components/seo/seo';
import React from 'react';
import { Button } from 'react-bootstrap';
import dynamic from 'next/dynamic';
const DataTablesCom = dynamic(()=>import('@/shared/data/table/datatable/opportunities-table'), { ssr: false })

const Opportunities = () => (
  <div>
    <Seo title={"Opportunities"}/>
    {/* <!-- breadcrumb --> */}
    <div className="breadcrumb-header justify-content-between">
      <div className="left-content">
        <span className="main-content-title mg-b-0 mg-b-lg-1">OPPORTUNITIES</span>
      </div>
      <div className="justify-content-center mt-2">
        <Button variant="" type="button" className="btn btn-primary">
          <i className="fe fe-plus me-1"></i> Add New Opportunity
        </Button>
      </div>
    </div>
    {/* <!-- /breadcrumb --> */}

    {/* <!-- row --> */}
      
      <DataTablesCom/>
      {/* <!-- row closed --> */}
    </div>
);


Opportunities.propTypes = {};

Opportunities.defaultProps = {};

Opportunities.layout = "Contentlayout"

export default Opportunities;
