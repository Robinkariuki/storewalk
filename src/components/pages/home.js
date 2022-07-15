import React,{useState} from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import "./home.css"
import PropTypes from 'prop-types';
import axios from "axios";




const Home = ({setToken}) => {

  const [branchName, setBranchName] = useState();
  const [branchId, setBranchId] = useState();

  const loginUser =  (credentials) =>{
    axios({
      url:"http://localhost:5000/storewalk/api/login",
      method:'POST',
      headers:{
         'Content-Type':'application/json'
      },
      data:JSON.stringify(credentials)
    }).then(resp=>{
      setToken(resp.data.token)
      
     
    })
    .catch(err=>{
       console.log(err)
    })
  
  }

  const handleSubmit = async  e =>{
    e.preventDefault();
    const token = await loginUser({
      Branch:branchName,
      storeID :branchId
    });

  
  }

  

  return (
    <div className="container">

      <div className ="row d-flex justify-content-center">
      <div className="col-md-4">

   <Form  onSubmit={handleSubmit}>
   <Form.Group className="mb-3" controlId="BranchName">
    <Form.Label> Branch Name</Form.Label>
    <Form.Control  size="sm" type="text" placeholder=" Enter Branch Name" onChange={e=>setBranchName(e.target.value)} />

  </Form.Group>

       <Form.Group className="mb-3" controlId="BranchID">
    <Form.Label>Branch ID</Form.Label>
    <Form.Control  size="sm" type="number" placeholder="Enter Branch ID"  onChange={e=>setBranchId(e.target.value)}/>

  </Form.Group>




  

  <Button type="submit" variant="primary" size="sm">Submit</Button>
   </Form>
   </div>
   </div>
    </div>

  )
}


Home.propTypes = {
  setToken:PropTypes.func.isRequired
};

export default Home