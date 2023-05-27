import React from 'react'
import ApprovalAccordion from '../components/ApprovalAccordion'

function Approval() {
  return (
    <div>
    <div className="d-flex flex-column align-items-start" style={{marginLeft: '8%', marginTop: "3%", marginBottom: '3%'}}>
    <div style={{fontSize:"32px", fontWeight: 700, marginBottom: "8px"}}>Instructor requests</div> 
    
    </div>
    
    <ApprovalAccordion />

    </div>
    
    

  )
}

export default Approval