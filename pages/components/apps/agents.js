import Seo from '@/shared/layout-components/seo/seo';
import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import dynamic from 'next/dynamic';
const DataTablesCom = dynamic(() => import('@/shared/data/table/datatable/agents-table'), { ssr: false });

const Agents = () => {
  const [showModal, setShowModal] = useState(false);

  const handleAddNewAgent = () => {
    // Your logic to handle adding a new agent goes here
    // For now, let's just show a modal
    setShowModal(true);
  };

  return (
    <div>
      <Seo title={"Agents"} />
      {/* <!-- breadcrumb --> */}
      <div className="breadcrumb-header justify-content-between">
        <div className="left-content">
          <span className="main-content-title mg-b-0 mg-b-lg-1">AGENTS</span>
        </div>
        <div className="justify-content-center mt-2">
          <Button variant="" type="button" className="btn btn-primary" onClick={handleAddNewAgent}>
            <i className="fe fe-plus me-1"></i> Add New Agent
          </Button>
        </div>
      </div>
      {/* <!-- /breadcrumb --> */}

      {/* <!-- row --> */}

      <DataTablesCom />
      {/* <!-- row closed --> */}

      {showModal && (
        <div className="modal fade show" tabIndex="-1" role="dialog" aria-labelledby="addNewAgentModal" style={{ display: 'block', backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
          <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="addNewAgentModal">Add New Agent</h5>
                <button type="button" className="btn-close" aria-label="Close" onClick={() => setShowModal(false)}></button>
              </div>
              <div className="modal-body">
                {/* Your form inputs to add a new agent */}
                {/* For simplicity, let's just show a message */}
                <p>Add New Agent Form</p>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" onClick={() => setShowModal(false)}>Close</button>
                <button type="button" className="btn btn-primary" onClick={() => setShowModal(false)}>Save changes</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

Agents.layout = "Contentlayout";

export default Agents;
