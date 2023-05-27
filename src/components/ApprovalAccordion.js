import React, { useState } from 'react';
import { Card, Button, Modal, Form, DropdownButton, Dropdown } from 'react-bootstrap';
import Accordion from 'react-bootstrap/Accordion';

function ApprovalAccordion() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => {
    
        setShow(true)    
      
      }

      const [show2, setShow2] = useState(false);

      const handleClose2 = () => setShow2(false);
      const handleShow2 = () => {
      
          setShow2(true)    
        
        }
  return (<div>
    <div style={{ marginLeft: '8%', marginBottom: '3%', marginRight: '8%' }}>
      <Accordion defaultActiveKey={['0']} alwaysOpen>
        <Accordion.Item eventKey="0">
          <Accordion.Header>Request ID: #1</Accordion.Header>
          <Accordion.Body>
            <div className="d-flex flex-column align-items-start">
              <img src="https://picsum.photos/400" alt="Profile" style={{ width: '100px', height: '100px' }} />
              <h4>Name</h4>
              <p>Birthdate: MM/DD/YYYY</p>
              <p>Age: XX</p>
              <p>Field of Specialization: Field</p>
              <p>Education: Education Details</p>
              <a href="link-url">Link</a>
              <p>Description: Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
            <div className="d-flex align-items-start">
              <Button variant="success" onClick={handleShow}>Approve</Button>
              <Button variant="danger" className="ms-3" onClick={handleShow2}>Reject</Button>
            </div>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1" style={{marginTop: '3%'}}>
          <Accordion.Header>Request ID: #2</Accordion.Header>
          <Accordion.Body>
          <div className="d-flex flex-column align-items-start">
              <img src="https://picsum.photos/400" alt="Profile" style={{ width: '100px', height: '100px' }} />
              <h4>Name</h4>
              <p>Birthdate: MM/DD/YYYY</p>
              <p>Age: XX</p>
              <p>Field of Specialization: Field</p>
              <p>Education: Education Details</p>
              <a href="link-url">Link</a>
              <p>Description: Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
            <div className="d-flex align-items-start">
              <Button variant="success" onClick={handleShow}>Approve</Button>
              <Button variant="danger" className="ms-3" onClick={handleShow2}>Reject</Button>
            </div>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>

    <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Are you sure?</Modal.Title>
        </Modal.Header>
        <Modal.Body>You are trying to approve a professor's application.</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="success" onClick={handleClose}>
            Confirm
          </Button>
        </Modal.Footer>
      </Modal>

      <Modal show={show2} onHide={handleClose2}>
        <Modal.Header closeButton>
          <Modal.Title>Are you sure?</Modal.Title>
        </Modal.Header>
        <Modal.Body>You are trying to reject a professor's application.</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose2}>
            Close
          </Button>
          <Button variant="danger" onClick={handleClose2}>
            Reject
          </Button>
        </Modal.Footer>
      </Modal>

    </div>
  );
}

export default ApprovalAccordion;
