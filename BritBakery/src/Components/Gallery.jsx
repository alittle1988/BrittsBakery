import React from "react";
import Product from "./Product";
import { Container, Row, Col } from "react-bootstrap";

function Gallery(props) {
  const { products } = props;
  return (
    <Container fluid className="pt-5">
      <Row>
        <h1 className="text-center title" >Gallery</h1>
      </Row>
      <Row className="mt-5">
      {products.map((product) => {
        return <Col className="mt-3" lg={3}><Product product={product}  /></Col>;
      })}
      </Row>
    </Container>
  );
}

export default Gallery;
