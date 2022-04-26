import React from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import "./home.css"

const Home = () => {
  return (
    <div className="container">

      <div className ="row d-flex justify-content-center">
      <div className="col-md-4">

   <Form  >
   <Form.Group className="mb-3" controlId="Payroll Number">
    <Form.Label> Branch</Form.Label>
    <Form.Control  size="sm" type="text" placeholder=" Enter Branch" />

  </Form.Group>

       <Form.Group className="mb-3" controlId="name">
    <Form.Label>Name</Form.Label>
    <Form.Control  size="sm" type="text" placeholder="Enter Name" />

  </Form.Group>


  <Form.Group className="mb-3" controlId="title">
    <Form.Label> Title</Form.Label>
    <Form.Control  size="sm" type="text" placeholder="Enter Title" />

  </Form.Group>

  <Form.Group className="mb-3" controlId="Payroll Number">
    <Form.Label> Payroll Number</Form.Label>
    <Form.Control  size="sm" type="password" placeholder=" Enter Payroll Number" />

  </Form.Group>

  

  <Button variant="primary" size="sm">Submit</Button>
   </Form>
   </div>
   </div>
    </div>

  )
}

export default Home