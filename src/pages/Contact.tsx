import { useState } from "react";
import { Button, Form, Modal, Alert } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import emailjs from '@emailjs/browser';
import 'bootstrap/dist/css/bootstrap.min.css';

function Contact({ show, onHide }: { show: boolean; onHide: () => void }) {
  const { t } = useTranslation("contact");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [isSending, setIsSending] = useState(false); // State for loading feedback
  const [sendStatus, setSendStatus] = useState<'success' | 'error' | null>(null); // State for submission status

  // --- EmailJS Credentials ---
  // IMPORTANT: Replace with your actual EmailJS IDs.
  // Consider using environment variables for these in a real application,
  // especially for TEMPLATE_ID and SERVICE_ID, though PUBLIC_KEY is fine on the frontend.
  const SERVICE_ID = 'service_y7dewzn'; // e.g., 'service_xxxxxxxx'
  const TEMPLATE_ID = 'template_szo72e7'; // e.g., 'template_xxxxxxxx'
  const PUBLIC_KEY = 'EVtknihY9lL7H0MCX'; // e.g., 'YOUR_PUBLIC_KEY_xxxxxxxx'
  // -------------------------

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => { // Change to handle submit event
    e.preventDefault(); // Prevent default form submission
    setIsSending(true);
    setSendStatus(null); // Reset status

    // The object passed to EmailJS must match the variables in your EmailJS template
    const templateParams = {
      user_name: formData.name, // Ensure these match your EmailJS template variables
      user_email: formData.email,
      user_phone: formData.phone,
      message: formData.message,
    };

    try {
      await emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, {
        publicKey: PUBLIC_KEY,
      });
      console.log('Email sent successfully!');
      setSendStatus('success');
      setFormData({ name: "", email: "", phone: "", message: "" }); // Clear form
      // onHide(); // You might want to keep the modal open briefly to show success message
    } catch (error) {
      console.error('Failed to send email:', error);
      setSendStatus('error');
    } finally {
      setIsSending(false);
    }
  };

  return (
    <Modal show={show} onHide={onHide} backdrop={true} keyboard={true}>
      <Modal.Header closeButton>
        <Modal.Title>{t("contact_title")}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {sendStatus === 'success' && (
          <Alert variant="success" onClose={() => setSendStatus(null)} dismissible>
            {t("contact_success_message")}
          </Alert>
        )}
        {sendStatus === 'error' && (
          <Alert variant="danger" onClose={() => setSendStatus(null)} dismissible>
            {t("contact_error_message")}
          </Alert>
        )}

        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="name">
            <Form.Label>{t("contact_name")}</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter your name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="email">
            <Form.Label>{t("contact_email")}</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="phone">
            <Form.Label>{t("contact_phone")}</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter your phone number"
              value={formData.phone}
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="message">
            <Form.Label>{t("contact_message")}</Form.Label>
            <Form.Control
              as="textarea"
              rows={4}
              placeholder="Enter your message"
              value={formData.message}
              onChange={handleChange}
              required
            />
          </Form.Group>
          <Button
            variant="warning"
            className="w-100"
            type="submit"
            disabled={isSending}
          >
            {isSending ? t("contact_sending") : t("contact_submit")}
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
}

export default Contact;