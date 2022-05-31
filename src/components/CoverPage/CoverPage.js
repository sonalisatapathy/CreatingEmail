import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import CreateEmailTemplate from "./CreateEmailTemplate";
import RecentAccess from "./RecentAccess";
import SideBarForCoverPage from "./SideBarForCoverPage";

function CoverPage() {
  return (
    <Container fluid>
      <Row
        style={{
          border: "2px solid #ccc",
          boxShadow: "5px -10px 20px grey",
          fontWeight: "bold",
        }}
      >
        Emails
      </Row>
      <Row>
        <Col sm={3} style={{ width: "14%" }}>
          <SideBarForCoverPage />
        </Col>
        <Col sm={9}>
          <CreateEmailTemplate />
          <RecentAccess />
        </Col>
      </Row>
    </Container>
  );
}

export default CoverPage;
