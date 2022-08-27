
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { adddestination, getdestination, updatedestination } from '../js/slice/destinationSlice';
import { useDispatch } from 'react-redux';

function AddDestination() {
  const dispatch = useDispatch();
    const [show, setShow] = useState(false);
const [dest, setdest] = useState({
  name:"",
  image:"",
  location:"",
  description:"",

})
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  return (
    <>
      <Button style={{backgroundColor:"#9e0000", border:"none"}} onClick={handleShow}>
        +
      </Button>

      <Modal show={show} onClick={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Destination</Modal.Title>
        </Modal.Header>
        <Modal.Body>

        <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Destination name</Form.Label>
        <Form.Control type="text" placeholder="destination name"  onChange={(e)=>setdest({...dest, name:e.target.value})}/>
        
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Destination image</Form.Label>
        <Form.Control type="text" placeholder="destination image"  onChange={(e)=>setdest({...dest, image:e.target.value})}/>
        
      </Form.Group>
      
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Destination Location</Form.Label>
        <Form.Control type="text" placeholder="destination location"  onChange={(e)=>setdest({...dest, location:e.target.value})}/>
        
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Destination Description</Form.Label>
        <Form.Control type="text" placeholder="destination description"  onChange={(e)=>setdest({...dest, description:e.target.value})}/>
        
      </Form.Group>
      
      
      </Form >

        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={()=>{dispatch(adddestination(dest)); dispatch(getdestination());handleClose()}}>
      Add
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default AddDestination