import { useState, useEffect } from 'react';
import ExampleData from './data.json';
import { Button, Card, Container, Col, Row, Image } from 'react-bootstrap';

function Product() {
  const [cakes, setCakes] = useState(ExampleData);

  const getDataCakes = () => {
    setCakes(cakes);
  };

  useEffect(() => {
    getDataCakes();
  }, []);

  return (
    <>
      <Container>
        <Row className="justify-content-center">
          {cakes.map((cake) => {
            return (
              <Col
                sm="auto"
                md={4}
                className="mt-5"
              >
                <Card style={{ width: '100%' }}>
                  <Image
                    style={{ width: '100%', height: '330px' }}
                    variant="top"
                    src={cake.image}
                  />
                  <Card.Body>
                    <Card.Title>{cake.nama}</Card.Title>
                    <Card.Text>{cake.deskripsi}</Card.Text>
                    <Card.Text className="text-start ">{cake.harga}</Card.Text>
                    <Button
                      href="https://www.instagram.com/direct/t/340282366841710300949128245081431027650"
                      variant="primary"
                    >
                      Beli Sekarang
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
            );
          })}
        </Row>
      </Container>
    </>
  );
}

export default Product;
