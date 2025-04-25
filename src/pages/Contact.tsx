import { Button, Form, Modal } from "react-bootstrap";
import { useTranslation } from "react-i18next";

function Contact({ show, onHide }: { show: boolean; onHide: () => void }) {
  const { t } = useTranslation("contact");

  return (
    <Modal show={show} onHide={onHide} backdrop={true} keyboard={true}>
      <Modal.Header closeButton>
        <Modal.Title>{t("contact_title")}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group className="mb-3" controlId="formName">
            <Form.Label>{t("contact_name")}</Form.Label>
            <Form.Control type="text" placeholder="Enter your name" required />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formEmail">
            <Form.Label>{t("contact_email")}</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter your email"
              required
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formPhone">
            <Form.Label>{t("contact_phone")}</Form.Label>
            <Form.Control type="text" placeholder="Enter your phone number" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formMessage">
            <Form.Label>{t("contact_message")}</Form.Label>
            <Form.Control
              as="textarea"
              rows={4}
              placeholder="Enter your message"
              required
            />
          </Form.Group>
          <Button variant="warning" type="submit" className="w-100">
            {t("contact_submit")}
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
}

export default Contact;
