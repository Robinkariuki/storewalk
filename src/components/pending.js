import React,{useState,useEffect,Fragment} from 'react'
import { Table,Form,Button,Tabs,Tab } from 'react-bootstrap';

import "./pending.css"
import axios from "axios";
import EditRow from './editRow';









const Pending = ({section}) => {

  
  const [pendingQ,setPending] = useState([])
  const [editItemId,setEditItemId] = useState(null);
  const [editFormData,setEditFormData] = useState({
    Question:"",
    State:"",
    Nextstep:"",
    Who:"",
    WhenTime:"",
    Done:"",


  })



    
    const getPending =  ()=>{
      console.log("fahs==>",section)
      axios({
        method:"post",
        url:"http://localhost:5000/storewalk/api/pendingData",
        data:{
          title:section
        },
          headers: {
            "Content-Type": "application/json"
          
          },

      })
      .then(resp=>{
        setPending(resp.data.data.recordset)
        console.log("data===>",resp.data.data.recordset)
      }).catch(err=>{
        console.log(err)
      })
    

    }

 useEffect(()=>{
   getPending()
 },[section])
    

const handleEditFormChange = (e)=>{
  e.preventDefault();
  const fieldName =e.target.getAttribute("name");
  const fieldValue = e.target.value;

  const newFormData ={...editFormData};
  newFormData[fieldName]= fieldValue;
  setEditFormData(newFormData);


}

const handleEditClick = (e,item)=>{
  e.preventDefault();
  setEditItemId(item.ID)
  const formValues = {
    Question:item.Question,
    State:item.State,
    Nextstep:item.Nextstep,
    Who:item.Who,
    WhenTime:item.WhenTime,
    Done:item.Done,

  }

  setEditFormData(formValues);

}
 
const handleEditFormSubmit=  (e)=>{
  e.preventDefault();
  const editItem ={
    id:editItemId,
    Question:editFormData.Question,
    State:editFormData.State,
    Nextstep:editFormData.Nextstep,
    Who:editFormData.Who,
    WhenTime:editFormData.WhenTime,
    Done:editFormData.Done,

  }

  const newpendingQ = [...pendingQ];
  const index = pendingQ.findIndex((pending)=> pending.ID === editItemId)

  newpendingQ[index]=editItem;
  setPending(newpendingQ);
  setEditItemId(null)

  const postEditData =  ()=>{
    console.log("nfms",newpendingQ)
      axios({
      method:"post",
      url:"http://localhost:5000/storewalk/api/editPendingData",
      data:{
        data:newpendingQ,
        title:section

      },
      
      headers: {
        "Content-Type": "application/json"
      
      },
    
    }).then(resp=>{
      console.log("submitted")
    }).catch(err=>{
      console.log(err)
    })
  }  

  postEditData()

}

const handleCancelClick =(e)=>{
  e.preventDefault()
  setEditItemId(null);
}


console.log("wah==>",section)
  return (
    <Form onSubmit={handleEditFormSubmit} >
    <Table striped bordered hover  responsive>
      <thead>
        <tr>
        
          <th >Question</th>
          <th>State</th>
          <th>Next Step</th>
          <th>Who</th>
          <th>When</th>
          <th>Done</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>

     
     

        {pendingQ.map((item)=>(
          <Fragment>
            {editItemId === item.ID ? <EditRow editFormData={editFormData} handleEditFormChange={handleEditFormChange} handleCancelClick={handleCancelClick} item={item}/>: 
                      <tr key={item.ID}>

                      <td>{item.Question}</td>
                      <td>{item.State}</td>
                      <td>{item.Nextstep}</td>
                      <td>{item.Who}</td>
                      <td>{item.WhenTime}</td>
                      <td>{item.Done}</td>
                      <td>
                        <Button type="button" onClick={(event)=> handleEditClick(event,item)}>Edit</Button>
                      </td>
                      </tr>
            
            }
   




          </Fragment>
          
        ))}
     
     
    

      </tbody>
    </Table>
    </Form>
    
    
 
  )






}

export default Pending