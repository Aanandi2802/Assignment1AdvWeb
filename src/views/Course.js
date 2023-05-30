import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import CourseCard from '../components/CourseCard';
import { Card, Button, Modal, Form } from 'react-bootstrap';
import ListGroup from 'react-bootstrap/ListGroup';

function Course() {
  const [showModal, setShowModal] = useState(false);
  const [name, setName] = useState('');
  const [instructor, setInstructor] = useState('');
  const [term, setTerm] = useState('');
  const [startDate, setStartDate] = useState('');

  const handleCardClick = () => {
    setShowModal(true);
  };

  const handleModalClose = () => {
    setShowModal(false);
  };

  const handleSaveClick = (e) => {
    e.preventDefault(); // Prevent form submission

    // Perform form validation
    if (!name || !instructor || !term || !startDate) {
      // Handle form validation error, display an error message, or prevent form submission
      return;
    }

    // making sure the date is ahead of today's date.
    const currentDate = new Date();
    const selectedDate = new Date(startDate);

    if (selectedDate <= currentDate) {
      return;
    }

    // Perform save action
    setShowModal(false);
  };

  return (
    <div>
      <div className="d-flex flex-column align-items-start" style={{ marginLeft: '8%', marginRight: '8%', marginTop: '3%', marginBottom: '8%' }}>
        <div style={{ fontSize: '32px', fontWeight: 700, marginBottom: '8px' }}>Courses</div>

        <div>
          <Button variant="outline-primary" onClick={handleCardClick}>
            Create <FontAwesomeIcon icon={faPlus} />
          </Button>
        </div>

        <div className="d-flex flex-wrap justify-content-between" style={{ width: '100%' }}>
          <CourseCard title="data" code="CSCI 5409" instructor="Dr. dey" term="fall 23" startDate="23-03-2023" image="https://picsum.photos/200" />
          <CourseCard title="web" code="CSCI 5701" instructor="Dr Tushar" term="fall 23" startDate="23-04-2023" image="https://picsum.photos/200" />
          <CourseCard title="ASDC" code="CSCI 5601" instructor="Dr Sharma" term="fall 23" startDate="23-07-2023" />
          <CourseCard title="Networking" code="CSCI 5709" instructor="Dr Darshana" term="Summer 23" startDate="25-03-2023" />
        </div>
      </div>

      <Modal show={showModal} onHide={handleModalClose}>
        <Modal.Header closeButton>
          <Modal.Title>Create course</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSaveClick}>
            <Form.Group controlId="name">
              <Form.Label>Course name</Form.Label>
              <Form.Control type="text" placeholder="Enter course name" value={name} onChange={(e) => setName(e.target.value)} required />
            </Form.Group>
            <Form.Group controlId="instructor">
              <Form.Label>Instructor</Form.Label>
              <Form.Control type="text" placeholder="Enter Instructor name" value={instructor} onChange={(e) => setInstructor(e.target.value)} required />
            </Form.Group>
            <Form.Group controlId="term">
              <Form.Label>Term</Form.Label>
              <Form.Select value={term} onChange={(e) => setTerm(e.target.value)} required>
                <option value="">Select term</option>
                <option value="fall 23">Fall 23</option>
                <option value="summer 23">Summer 23</option>
              </Form.Select>
            </Form.Group>
            <Form.Group controlId="startDate">
              <Form.Label>Start date</Form.Label>
              <Form.Control type="date" value={startDate} onChange={(e) => setStartDate(e.target.value)} required min={new Date().toISOString().split('T')[0]} />
            </Form.Group>

            <Form.Group controlId="description">
              <Form.Label>Description</Form.Label>
              <Form.Control as="textarea" rows={3} />
            </Form.Group>
            <div className="mt-3">
            <Button variant="secondary" onClick={handleModalClose}>
              Close
            </Button>
            <Button variant="primary" type="submit">
              Save
            </Button></div>
          </Form>
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default Course;