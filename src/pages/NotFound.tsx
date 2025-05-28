import { Container, Row, Col, Button } from "react-bootstrap";
import { t } from "i18next";

interface NotFoundProps {
  isProject?: boolean;
}

function NotFound({ isProject }: NotFoundProps) {
  const title = isProject ? t("project_not_found") : t("not_found");
  const description = isProject
    ? t("not_found_description_project")
    : t("not_found_description");

  return (
    <div className="bg-light vh-100 d-flex align-items-center justify-content-center">
      <Container className="text-center mt-5">
        <Row>
          <Col>
            <h1 className="display-1 text-danger">404</h1>
            <h2 className="mb-4">{title}</h2>
            <p className="mb-4">{description}</p>
            <Button variant="warning" href="/">
              {t("go_home")}
            </Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default NotFound;