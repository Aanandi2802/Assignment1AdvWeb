import React, { useState } from 'react';
import { Card, Button, Modal, Form } from 'react-bootstrap';
import ListGroup from 'react-bootstrap/ListGroup';

const CourseCard = (props) => {
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

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => {
    
    setShow(true)
    setShowModal(false)

  
  }
const loremIpsum = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
  return (
    <div className="mt-5">
<Card style={{ width: '18rem', ...props.style }}>
      <Card.Img variant="top" src="https://picsum.photos/200" />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>
{loremIpsum}        </Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>Instructor: {props.instructor}</ListGroup.Item>
        <ListGroup.Item>Term: {props.term}</ListGroup.Item>
        <ListGroup.Item>Start date: {props.startDate}</ListGroup.Item>
      </ListGroup>
      <Card.Body>
        <Button variant="primary" onClick={handleCardClick}>Advanced options</Button>

      </Card.Body>
    </Card>

       <Modal show={showModal} onHide={handleModalClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="name">
              <Form.Label>Course name</Form.Label>
              <Form.Control type="text" placeholder="Enter course name" value={props.title} onChange={e => setName(e.target.value)} />
            </Form.Group>
            <Form.Group controlId="email">
              <Form.Label>Instructor</Form.Label>
              <Form.Control type="text" placeholder="Enter your email" value={props.instructor} onChange={e => setEmail(e.target.value)} />
            </Form.Group>
            <Form.Group controlId="term">
              <Form.Label>Term</Form.Label>
              <Form.Control type="text" placeholder="Enter your email" value={props.term} onChange={e => setEmail(e.target.value)} />
            </Form.Group>
            <Form.Group controlId="startDate">
              <Form.Label>start date</Form.Label>
              <Form.Control type="text" placeholder="Enter your email" value={props.startDate} onChange={e => setEmail(e.target.value)} />
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
          <Button variant="danger" onClick={handleShow}>Remove course</Button>

        </Modal.Footer>
      </Modal> 

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Are you sure?</Modal.Title>
        </Modal.Header>
        <Modal.Body>You are trying to delete a course!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="danger" onClick={handleClose}>
            Delete course
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default CourseCard;
