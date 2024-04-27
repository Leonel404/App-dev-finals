import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./Home.css";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
function Home() {
  return (
    <Container fluid className="vh-100 g-0">
      <Row className=" h-25">
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
      <Row className=" h-100">
        <Col className="d-flex justify-content-center">
          <div className="table-container w-75 ">
            <DataTable>
              <Column field="name" header="Name"></Column>
              <Column field="price" header="Owner" body=""></Column>
              <Column field="category" header="Location"></Column>
            </DataTable>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Home;
