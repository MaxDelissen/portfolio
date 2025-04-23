import { Button, Col, Container, Row } from "react-bootstrap";
import "./HeroSection.css";

import { useTranslation } from "react-i18next";
import { changeLanguage } from "i18next";
import i18n from "../i18n";

export default function HeroSection() {
  const { t } = useTranslation();

  return (
    <section className="hero-section py-5">
      <Container>
        <Row className="align-items-center">
          {/* Left side: text + button */}
          <Col md={6}>
            <div className="text-section-wrapper p-4">
              <div className="text-section">
                <h1 className="mb-2 text-text">Max Delissen</h1>
                <h2 className="mb-3 text-text-muted">{t("occupation")}</h2>
                <h3 className="mb-4 text-text-muted">{t("subtitle")}</h3>
                <Button
                  variant="warning"
                  size="lg"
                  className="rounded-5"
                  onClick={() => (window.location.href = "#projects-section")}
                >
                  {t("see_work")}
                </Button>
              </div>
            </div>
          </Col>

          {/* Right side: image */}
          <Col md={6} className="text-center">
            <img
              src="../../img/ProfilePicture.jpg"
              alt="Max Delissen"
              className="img-fluid rounded-5 shado FixedImage"
            />
          </Col>
        </Row>
      </Container>

      <button
        className="btn btn-sm btn-light position-absolute"
        style={{ top: "10px", right: "10px", fontSize: "2rem" }}
        onClick={() => changeLanguage(i18n.language === "en" ? "nl" : "en")}
      >
        {i18n.language === "nl" ? "🇬🇧" : "🇳🇱"}
      </button>
    </section>
  );
}
