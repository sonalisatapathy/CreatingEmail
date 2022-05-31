import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const RecentAccess = () => {
  return (
    <Container>
      <Row>
        <Col
          sm={9}
          style={{
            height: "200px",
            width: "600px",
            border: "2px solid #ccc",
            marginTop: "20px",
          }}
        >
          Recently Accessed
        </Col>

        <Col
          sm={3}
          style={{
            height: "200px",
            width: "300px",
            border: "2px solid #ccc",
            margin: "20px",
          }}
        >
          Useful Links
        </Col>
      </Row>
    </Container>
  );
};

export default RecentAccess;
