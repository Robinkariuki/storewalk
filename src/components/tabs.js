import React,{useState}from 'react'

import { Tabs,Tab } from 'react-bootstrap';
import Pending from './pending'

const TabSelect = () => {
    // const sectionsNames=["MainEntrance","Fresh","Front-end","FMCG","GM","Furniture","Stockroom","Receiving"]

    const [section,setSection] = useState('')
   
    const handleSelect =(key)=>{
        
         setSection(key)
        //  console.log(section)

    }


// console.log(section)



  return (
    <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example" className="mb-3" onSelect={handleSelect}>
        
  <Tab eventKey="MainEntrance" title="MainEntrance">
      {(section ==="MainEntrance") ?<Pending section={section}/>: null }
  </Tab>
  <Tab eventKey="Fresh" title="Fresh">
  {(section ==="Fresh") ?<Pending section={section}/>: null }
  </Tab>
  <Tab eventKey="FrontEnd" title="Front-end">
  {(section ==="FrontEnd") ?<Pending section={section}/>: null }
  </Tab>
  <Tab eventKey="FMCG" title="FMCG">
  {(section ==="FMCG") ?<Pending section={section}/>: null }
  </Tab>
  <Tab eventKey="GM" title="GM">
  {(section ==="GM") ?<Pending section={section}/>: null }
  </Tab>
  <Tab eventKey="Furniture" title="Furniture">
  {(section ==="Furniture") ?<Pending section={section}/>: null }
  </Tab>
  <Tab eventKey="Stockroom" title="Stockroom">
  {(section ==="Stockroom") ?<Pending section={section}/>: null }
  </Tab>
  <Tab eventKey="Receiving" title="Receiving">
  {(section ==="Receiving") ?<Pending section={section}/>: null }
  </Tab>

</Tabs>
  )
}

export default  TabSelect