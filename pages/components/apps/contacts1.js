import Seo from '@/shared/layout-components/seo/seo';
import React, { useState } from 'react';
import { Button, Form, Modal } from 'react-bootstrap';
import dynamic from 'next/dynamic';
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://zmucpipjwaxsasizjdug.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InptdWNwaXBqd2F4c2FzaXpqZHVnIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTY4NzAxNzMzNSwiZXhwIjoyMDAyNTkzMzM1fQ.2D1XoLbkCJOXhOqnRPnsI0_uXq96ZNECYTinpYeFDkI';
const supabase = createClient(supabaseUrl, supabaseKey);

const DataTablesCom = dynamic(()=>import('@/shared/data/table/datatable/data-tables-com'), { ssr: false })

const Contacts = () => {
  const [showModal, setShowModal] = useState(false);
  const [newContactData, setNewContactData] = useState({
    Agent: '',
    // Add other fields as needed
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setNewContactData({ ...newContactData, [name]: value });
  };

  const handleAddNewContact = async () => {
    try {
      // Get the maximum existing ID from the customers table
      const { data: maxIdData, error: maxIdError } = await supabase
        .from('customers')
        .select('id', { count: 'exact' })
        .order('id', { ascending: false })
        .range(0, 1);
  
      if (maxIdError) {
        throw maxIdError;
      }
  
      // Determine the next available ID
      const nextId = maxIdData.length > 0 ? maxIdData[0].id + 1 : 1;
  
      // Set the new ID for the new contact data
      const newContactWithId = { ...newContactData, id: nextId };
  
      // Insert the new Contact into the database
      const { data, error } = await supabase.from('customers').insert([newContactWithId]);

      // Clear the new contact data state
      setNewContactData({
      Agent: '', // Reset Agent field
      Firstname: '',
      Lastname: '',
      Email: '', 
      Phone: '',
      Mobile: '',
      // Add other fields as needed and reset them here
    });
  
      if (error) {
        throw error;
      }
  
      console.log("New contact added successfully:", data);
      // Optionally, you can show a success message or perform additional actions after successful insertion.
  
      // Close the modal after successful insertion
      setShowModal(false);
    } catch (error) {
      console.error("Error adding new contact:", error.message);
      // Optionally, you can show an error message or perform additional actions in case of an error.
    }
  };
  

  return (
    <div>
      <Seo title={"Contacts"} />
      {/* <!-- breadcrumb --> */}
      <div className="breadcrumb-header justify-content-between">
        <div className="left-content">
          <span className="main-content-title mg-b-0 mg-b-lg-1">CONTACTS</span>
        </div>
        <div className="justify-content-center mt-2">
          <Button variant="" type="button" className="btn btn-primary" onClick={() => setShowModal(true)}>
            <i className="fe fe-plus me-1"></i> Add New Contact
          </Button>
        </div>
      </div>
      {/* <!-- /breadcrumb --> */}

      {/* <!-- row --> */}
      <DataTablesCom />
      {/* <!-- row closed --> */}

      {/* New Contact Modal */}
      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Add New Contact</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="formContactName">
              <Form.Label>Agent Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Agent name"
                name="Agent"
                value={newContactData.Agent}
                onChange={handleInputChange}
              />
            </Form.Group>
            <Form.Group controlId="formContactWebsite">
              <Form.Label>Contact Firstname</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter contact Firstname"
                name="Firstname"
                value={newContactData.Firstname}
                onChange={handleInputChange}
              />
            </Form.Group>
            <Form.Group controlId="formContactEmail">
              <Form.Label>Contact Lastname</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter contact Lastname"
                name="Lastname"
                value={newContactData.Lastname}
                onChange={handleInputChange}
              />
            </Form.Group>
            <Form.Group controlId="formContactPhone Number">
              <Form.Label>Contact Email</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter contact Email"
                name="Email"
                value={newContactData.Email}
                onChange={handleInputChange}
              />
            </Form.Group>
            <Form.Group controlId="formContactCity">
              <Form.Label>Contact Phone</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter contact Phone"
                name="Phone"
                value={newContactData.Phone}
                onChange={handleInputChange}
              />
            </Form.Group>
            <Form.Group controlId="formContactAdress">
              <Form.Label>Contact Mobile</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter contact Mobile"
                name="Mobile"
                value={newContactData.Mobile}
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
          <Button variant="primary" onClick={handleAddNewContact}>
            Save
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

Contacts.layout = "Contentlayout";

export default Contacts;
