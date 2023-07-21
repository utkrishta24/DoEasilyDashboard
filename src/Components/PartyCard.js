import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import DropdownButton from 'react-bootstrap/DropdownButton';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Dropdown from 'react-bootstrap/Dropdown';
import { FaPlus, FaCamera } from "react-icons/fa"
import { Form } from 'react-bootstrap';
import { Label } from 'reactstrap';
import "./Components.css"

function PartyCard(props) {

  const handleShow = () => setShow(true);

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);

  return (
    <div className="karigar-box">
      <div className="karigar-box-child" />
      <div className="karigar-rect" />
      <div className="amount-185000-dena-container">
        <p className="amount1">Amount</p>
        <p className="p">₹1,850.00</p>
        <p className="p">Dena</p>
      </div>
      <div className="gold-25966-gm-container">
        <p className="amount1">Gold</p>
        <p className="p">25.966 Gm</p>
        <p className="p">Lena</p>
      </div>
      <div className="silver-14200-kg-lena-container">
        <p className="silver-14200-kg">
          <p className="amount1">Silver</p>
          <p className="p">14.200 Kg</p>
        </p>
        <p className="p">Lena</p>
      </div>
      <div className="party">Party</div>
      <div className="add-karigar-button">
        <Button variant="secondary" onClick={handleShow}>
          <FaPlus />Add Party
        </Button>

        <Modal show={show} onHide={handleClose} {...props}
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered>
          <Modal.Header closeButton>
            <Modal.Title>Add Party <FaCamera /></Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Label>Party Groups *</Label><br />
              <DropdownButton as={ButtonGroup} title="Dropdown" id="bg-nested-dropdown">
                <Dropdown.Item eventKey="1">Karigar</Dropdown.Item>
                <Dropdown.Item eventKey="2">Bullion</Dropdown.Item>
                <Dropdown.Item eventKey="2">Customer</Dropdown.Item>
                <Dropdown.Item eventKey="2">Supplier</Dropdown.Item>
              </DropdownButton><br /><br />
              <div className="flex-container">
                <div className='flex-item'>
                  <Label>Name *</Label><br />
                  <input placeholder='Enter Name' />
                </div>
                <div className='flex-item'>
                  <Label>Phone Number</Label><br />
                  <input placeholder='Enter Phone Number' />
                </div>
              </div>
              <div className="flex-container">
                <div className='flex-item'>
                  <Label>Address</Label><br />
                  <input placeholder='Enter Address' />
                </div>
                <div className='flex-item'>
                  <Label>City</Label><br />
                  <input placeholder='Enter City' />
                </div>
                <div className='flex-item'>
                  <Label>Pincode</Label><br />
                  <input placeholder='Enter Pincode' />
                </div>
              </div>
              <div className="flex-container">
                <div className='flex-item'>
                  <Label>GSTIN</Label><br />
                  <input placeholder='Enter GSTIN' />
                </div>
                <div className='flex-item'>
                  <Label>PAN Number</Label><br />
                  <input placeholder='Enter PAN Number' />
                </div>
                <div className='flex-item'>
                  <Label>Aadhaar</Label><br />
                  <input placeholder='Enter Aadhaar' />
                </div>
              </div>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="white" onClick={handleClose}>
              Cancel
            </Button>
            <Button variant="secondary" onClick={handleClose}>
              Save
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    </div>
  );
}

export default PartyCard;