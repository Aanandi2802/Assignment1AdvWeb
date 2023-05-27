import React, { useState } from 'react';
import { Card, Button, Modal, Form, DropdownButton, Dropdown } from 'react-bootstrap';
import ListGroup from 'react-bootstrap/ListGroup';
function MappingCard(props) {
    const [selectedOption, setSelectedOption] = useState('Select an Instructor');
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => {
    
        setShow(true)    
      
      }
    const handleOptionSelect = (option) => {
      setSelectedOption(option);
    };
  return (
    <div className="mt-5">
    <div >
      <Card style={{ width: "18rem", ...props.style }}>
        <Card.Img variant="top" src="https://picsum.photos/200" />
        <Card.Body>
          <Card.Title>{props.title}</Card.Title>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroup.Item>Id: {props.courseId}</ListGroup.Item>
          <ListGroup.Item>Course Name: {props.courseName}</ListGroup.Item>
        </ListGroup>
        <Card.Body>
        <DropdownButton variant="primary" title={selectedOption} >
          <Dropdown.Item onClick={() => handleOptionSelect('Dr. Dey')}>Dr. Dey</Dropdown.Item>
          <Dropdown.Item onClick={() => handleOptionSelect('Dr. Sharma')}>Dr. Sharma</Dropdown.Item>
          <Dropdown.Item onClick={() => handleOptionSelect('Dr. darshana')}>Dr. darshana</Dropdown.Item>
        </DropdownButton>
          <Button variant="primary" onClick={handleShow} style={{marginTop: "10px"}}>
            Allocate
          </Button>
        </Card.Body>
      </Card>
    </div>

 
    <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Are you sure?</Modal.Title>
        </Modal.Header>
        <Modal.Body>You are trying to map a professor to a course!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="success" onClick={handleClose}>
            Confirm
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default MappingCard;
