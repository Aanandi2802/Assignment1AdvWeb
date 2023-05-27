import React from "react";
import MappingCard from "../components/MappingCard";

function Mapping() {
  return (
    <div
      className="d-flex flex-column align-items-start"
      style={{
        marginLeft: "8%",
        marginRight: "8%",
        marginTop: "3%",
        marginBottom: "8%",
      }}
    >
      <div style={{fontSize:"32px", fontWeight: 700}}>Mapping</div>
      <div className="d-flex  flex-wrap justify-content-between" style={{width: "100%"}}>
        <MappingCard courseId="CSCI 5409" courseName="Networking" />
        <MappingCard courseId="CSCI 5408" courseName="Data" />
        <MappingCard courseId="CSCI 5901" courseName="ASDC" />
        <MappingCard courseId="CSCI 6901" courseName="ML" />
      </div>
    </div>
  );
}

export default Mapping;
