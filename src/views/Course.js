import React, {useState} from 'react'
// import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import CourseCard from '../components/CourseCard';
import { Card, Button, Modal, Form } from 'react-bootstrap';
import ListGroup from 'react-bootstrap/ListGroup';

function Course() {
    const [showModal, setShowModal] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleCardClick = () => {
    setShowModal(true);
  };

  const handleModalClose = () => {
    setShowModal(false);
  };

  const handleEditClick = () => {
    // Perform any necessary actions when the edit button is clicked
  };

  const handleSaveClick = () => {
    // Perform any necessary actions when the save button is clicked
    setShowModal(false);
  };
  return (
     <div> <div className="d-flex flex-column align-items-start" style={{marginLeft: '8%',marginRight: '8%', marginTop: "3%", marginBottom: '8%'}}>      
              <div style={{fontSize:"32px", fontWeight: 700, marginBottom: "8px"}}>Courses</div>

        <div>
            <Button variant="outline-primary" onClick={handleCardClick}>Create <FontAwesomeIcon icon={faPlus} /></Button>
        </div>

        <div className="d-flex  flex-wrap justify-content-between" style={{width: "100%"}}>
            <CourseCard  title="data" code="CSCI 5409" instructor="Dr. dey" term="fall 23" startDate="23-03-2023" image="https://picsum.photos/200"/>
            <CourseCard title="web" code="CSCI 5701" instructor="Dr Tushar" term="fall 23" startDate="23-04-2023"  image="https://picsum.photos/200"/>
            <CourseCard title="ASDC" code="CSCI 5601" instructor="Dr Sharma" term="fall 23" startDate="23-07-2023" />
            <CourseCard title="Networking" code="CSCI 5709" instructor="Dr Darshana" term="Summer 23" startDate="25-03-2023"/>

        </div>
    </div>

    <Modal show={showModal} onHide={handleModalClose}>
        <Modal.Header closeButton>
          <Modal.Title>Create course</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="name">
              <Form.Label>Course name</Form.Label>
              <Form.Control type="text" placeholder="Enter course name" value={""} onChange={e => setName(e.target.value)} />
            </Form.Group>
            <Form.Group controlId="email">
              <Form.Label>Instructor</Form.Label>
              <Form.Control type="text" placeholder="Enter Instructor name" value={""} onChange={e => setEmail(e.target.value)} />
            </Form.Group>
            <Form.Group controlId="term">
              <Form.Label>Term</Form.Label>
              <Form.Control type="text" placeholder="Enter Term" value={""} onChange={e => setEmail(e.target.value)} />
            </Form.Group>
            <Form.Group controlId="startDate">
              <Form.Label>start date</Form.Label>
              <Form.Control type="text" placeholder="Enter start date" value={""} onChange={e => setEmail(e.target.value)} />
            </Form.Group>

            <Form.Group controlId="Description">
              <Form.Label>Description</Form.Label>
              <Form.Control as="textarea" rows={3} />
          </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleModalClose}>Close</Button>
          <Button variant="primary" onClick={handleSaveClick}>Save</Button>
        </Modal.Footer>
      </Modal> 

    </div>
  )
}

export default Course