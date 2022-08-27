import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { getdestination, updatedestination } from '../js/slice/destinationSlice';
import { useDispatch } from 'react-redux';

function EditDest({el}) {
  const dispatch=useDispatch();
    const [show, setShow] = useState(false);
const [edit, setedit] = useState({
  name:el.name,
  image:el.image,
  address:el.address,
  description:el.description,

})
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  return (
    <>
      <Button style={{backgroundColor:"#9e0000", border:"none"}} onClick={handleShow}>
        Edit
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Destination</Modal.Title>
        </Modal.Header>
        <Modal.Body>

        <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Destination name</Form.Label>
        <Form.Control type="text" placeholder={el.name}  onChange={(e)=>setedit({...edit, name:e.target.value})}/>
        
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Destination image</Form.Label>
        <Form.Control type="text" placeholder={el.image}  onChange={(e)=>setedit({...edit, image:e.target.value})}/>
        
      </Form.Group>
      
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Destination Address</Form.Label>
        <Form.Control type="text" placeholder={el.address}  onChange={(e)=>setedit({...edit, address:e.target.value})}/>
        
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Destination Description</Form.Label>
        <Form.Control type="text" placeholder={el.description}  onChange={(e)=>setedit({...edit, description:e.target.value})}/>
        
      </Form.Group>
      
      
      </Form >

        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={()=>{dispatch(updatedestination({id:el._id,edit})); dispatch(getdestination());handleClose()}}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default EditDest