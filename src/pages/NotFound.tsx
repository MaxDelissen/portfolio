import { Container, Row, Col, Button } from "react-bootstrap";

function NotFound() {
  return (
    <Container className="text-center mt-5">
      <Row>
        <Col>
          <h1 className="display-1 text-danger">404</h1>
          <h2 className="mb-4">Page Not Found</h2>
          <p className="mb-4">
            The page you are looking for does not exist or has been moved.
          </p>
          <Button variant="primary" href="/">
            Go to Homepage
          </Button>
        </Col>
      </Row>
    </Container>
  );
}

export default NotFound;
