import React from "react";
import { Card, CardGroup, Col, Row } from "react-bootstrap";
// import { image1 } from "./images/createEmail.jpg";
function CreateEmailTemplate() {
  return (
    <CardGroup>
      <Card
        style={{ height: "210px", backgroundColor: "orange", margin: "9px" }}
      >
        <Card.Img
          variant="top"
          src="./images/createEmail.jpg"
          style={{ height: "140px" }}
        />
        <Card.Body style={{ textAlign: "center" }}>
          <Card.Title>Create an email</Card.Title>
        </Card.Body>
      </Card>
      <Card
        style={{ height: "210px", backgroundColor: "#87CEFA", margin: "9px" }}
      >
        <Card.Img
          variant="top"
          src="./images/emailUpload.jpg"
          style={{ height: "140px" }}
        />
        <Card.Body style={{ textAlign: "center" }}>
          <Card.Title>Email upload</Card.Title>
        </Card.Body>
      </Card>
      <Card
        style={{ height: "210px", backgroundColor: "#7053D4", margin: "9px" }}
      >
        <Card.Img
          variant="top"
          src="./images/manageTemplate.png"
          style={{ height: "140px" }}
        />
        <Card.Body style={{ textAlign: "center" }}>
          <Card.Title>Manage Templates</Card.Title>
        </Card.Body>
      </Card>
      <Card
        style={{ height: "210px", backgroundColor: "#B0B9FF", margin: "9px" }}
      >
        <Card.Img
          variant="top"
          src="./images/reportingAndDashboard.png"
          style={{ height: "140px" }}
        />
        <Card.Body style={{ textAlign: "center" }}>
          <Card.Title>ReportingAndDashboard</Card.Title>
        </Card.Body>
      </Card>
    </CardGroup>
  );
}

export default CreateEmailTemplate;
