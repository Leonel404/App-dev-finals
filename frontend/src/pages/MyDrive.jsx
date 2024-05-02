import React from "react";
import { Col, Container, Row } from "react-bootstrap";
const MyDrive = () => {
  return (
  <Container fluid className=" g-0">
      <Row className=" h-25">
        <Col className="h-100">
          <div className="welcome">
            <h1 className="mt-3 mx-2">My Drive</h1>
          </div>
          <div className="filter-container w-100 d-flex gap-3 px-5">
            <div className="filter ">
              <label htmlFor="">Files</label>
            </div>
            <div className="filter ">
              <label htmlFor="">Folder</label>
            </div>
          </div>
        </Col>
      </Row>
      <Row className=" h-100 bg-danger">
        <Col className="d-flex justify-content-center">
          <div className="table-container w-75 ">

          </div>
        </Col>
      </Row>
    </Container>
  )
};

export default MyDrive;
