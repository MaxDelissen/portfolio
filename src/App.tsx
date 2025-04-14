import './App.css';
import {Button, Col, Container, Row} from "react-bootstrap";

export default function App() {
  return (
    <section className="bg-primary py-5">
      <Container>
        <Row className="align-items-center">
          {/* Left side: text + button */}
          <Col md={6}>
            <div className="text-section">
              <h1 className="mb-2">Max Delissen</h1>
              <h2 className="mb-3 text-secondary">Student Software Engineer</h2>
              <h3 className="mb-4 text-muted">
                Ik studeer software ontwikkeling en mobile app development bij Fontys hogescholen in Eindhoven
              </h3>
              <Button variant="primary" size="lg">Bekijk mijn werk</Button>
            </div>
          </Col>

          {/* Right side: image */}
          <Col md={6} className="text-center">
            <img
              src="/img/profile.png" // 👈 change this to your image path
              alt="Max Delissen"
              className="img-fluid rounded-4 shadow"
            />
          </Col>
        </Row>
      </Container>
    </section>
  );
}