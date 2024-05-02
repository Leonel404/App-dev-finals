import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./Home.css";
import Card from '../components/Card';

function Home() {
  return (
    <Container fluid className=" g-0">
      <Row className=" h-25 mb-3">
        <Col className="h-100">
          <div className="welcome">
            <h1 className="mt-3 mx-2">Welcome to Drive</h1>
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
      <Row className=" pb-5">
        <Col className="d-flex h-100">
          <div className="card-container h-100 w-100 d-flex "> 
          <Card title="Card Title" content="This is the content of the card." />
          <Card title="Card Title" content="This is the content of the card." />
          <Card title="Card Title" content="This is the content of the card." />
          <Card title="Card Title" content="This is the content of the card." />
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Home;
