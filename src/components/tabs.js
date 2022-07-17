import React,{useState}from 'react'

import { Tabs,Tab } from 'react-bootstrap';
import Pending from './pending'

const TabSelect = ({token}) => {
    

    const [section,setSection] = useState('')
   
    const handleSelect =(key)=>{
        
         setSection(key)
    

    }





  return (
    <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example" className="mb-3" onSelect={handleSelect}>
        
  <Tab eventKey="MainEntrance" title="MainEntrance">
      {(section ==="MainEntrance") ?<Pending token={token} section={section}/>: null }
  </Tab>
  <Tab eventKey="Fresh" title="Fresh">
  {(section ==="Fresh") ?<Pending token={token} section={section}/>: null }
  </Tab>
  <Tab eventKey="FrontEnd" title="Front-end">
  {(section ==="FrontEnd") ?<Pending token={token} section={section}/>: null }
  </Tab>
  <Tab eventKey="FMCG" title="FMCG">
  {(section ==="FMCG") ?<Pending token={token} section={section}/>: null }
  </Tab>
  <Tab eventKey="GM" title="GM">
  {(section ==="GM") ?<Pending token={token} section={section}/>: null }
  </Tab>
  <Tab eventKey="Furniture" title="Furniture">
  {(section ==="Furniture") ?<Pending token={token} section={section}/>: null }
  </Tab>
  <Tab eventKey="Stockroom" title="Stockroom">
  {(section ==="Stockroom") ?<Pending token={token} section={section}/>: null }
  </Tab>
  <Tab eventKey="Receiving" title="Receiving">
  {(section ==="Receiving") ?<Pending  token={token} section={section}/>: null }
  </Tab>

</Tabs>
  )
}

export default  TabSelect