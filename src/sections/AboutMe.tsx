import { Button, Col, Container, Row } from "react-bootstrap";

import { useTranslation } from "react-i18next";

export default function HeroSection() {
  const { t } = useTranslation();

  return (
    <section className="bg py-5">
      <Container>
        <Row className="align-items-center">
          <Col md={4} className="text-center">
            <img
              src="../../img/MaxWithFish.jpg"
              alt="Max Delissen"
              className="img-fluid rounded-5 shadow FixedImage"
            />
          </Col>
          <Col md={1}></Col>

          <Col md={6}>
            <div className="text-section">
              <h1 className="mb-2 text-text">{t("about_me_title")}</h1>
              <h4
                className="mb-4 text-justify text-text-muted"
                style={{ textAlign: "justify" }}
              >
                {t("about_me")}
              </h4>
              <Row className="mb-4">
                <div className="d-flex gap-3">
                  <Button variant="warning" size="lg" className="rounded-5">
                    {t("more_about_me")}
                  </Button>
                  <Button variant="warning" size="lg" className="rounded-5">
                    {t("contact_me")}
                  </Button>
                </div>
              </Row>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
