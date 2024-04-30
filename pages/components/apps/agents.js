import Seo from '@/shared/layout-components/seo/seo';
import React, { useState } from 'react';
import { Button, Form, Modal } from 'react-bootstrap';
import dynamic from 'next/dynamic';
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://zmucpipjwaxsasizjdug.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InptdWNwaXBqd2F4c2FzaXpqZHVnIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTY4NzAxNzMzNSwiZXhwIjoyMDAyNTkzMzM1fQ.2D1XoLbkCJOXhOqnRPnsI0_uXq96ZNECYTinpYeFDkI';
const supabase = createClient(supabaseUrl, supabaseKey);

const DataTablesCom = dynamic(() => import('@/shared/data/table/datatable/agents-table'), { ssr: false });

const Agents = () => {
  const [showModal, setShowModal] = useState(false);
  const [newAgentData, setNewAgentData] = useState({
    Agent: '',
    Website: '',
    // Add other fields as needed
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setNewAgentData({ ...newAgentData, [name]: value });
  };

  const handleAddNewAgent = async () => {
    try {
      // Insert the new agent into the database
      const { data, error } = await supabase.from('agents').insert([newAgentData]);

      if (error) {
        throw error;
      }

      console.log("New agent added successfully:", data);
      // Optionally, you can show a success message or perform additional actions after successful insertion.

      // Close the modal after successful insertion
      setShowModal(false);
    } catch (error) {
      console.error("Error adding new agent:", error.message);
      // Optionally, you can show an error message or perform additional actions in case of an error.
    }
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
          <Button variant="" type="button" className="btn btn-primary" onClick={() => setShowModal(true)}>
            <i className="fe fe-plus me-1"></i> Add New Agent
          </Button>
        </div>
      </div>
      {/* <!-- /breadcrumb --> */}

      {/* <!-- row --> */}
      <DataTablesCom />
      {/* <!-- row closed --> */}

      {/* New Agent Modal */}
      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Add New Agent</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="formAgentName">
              <Form.Label>Agent Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter agent name"
                name="Agent"
                value={newAgentData.Agent}
                onChange={handleInputChange}
              />
            </Form.Group>
            <Form.Group controlId="formAgentWebsite">
              <Form.Label>Agent Website</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter agent website"
                name="Website"
                value={newAgentData.Website}
                onChange={handleInputChange}
              />
            </Form.Group>
            {/* Add other form fields as needed */}
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handleAddNewAgent}>
            Save
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

Agents.layout = "Contentlayout";

export default Agents;
