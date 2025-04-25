import { Container, Row, Col, Button } from "react-bootstrap";
import { t } from "i18next";

function NotFound() {
  return (
    <>
      <title>{t("not_found")}</title>
      <div className="bg-light vh-100 d-flex align-items-center justify-content-center">
        <Container className="text-center mt-5">
          <Row>
            <Col>
              <h1 className="display-1 text-danger">404</h1>
              <h2 className="mb-4">{t("not_found")}</h2>
              <p className="mb-4">{t("not_found_description")}</p>
              <Button variant="warning" href="/">
                {t("go_home")}
              </Button>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default NotFound;
