import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

function Home() {
  return(
    <>
      <Container className="my-5">
        <Row>
          <Col data-aos="fade-up" className="m-4 default">
            <h1> hello </h1>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Home;