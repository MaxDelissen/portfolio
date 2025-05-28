import { Modal } from "react-bootstrap";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import emailjs from '@emailjs/browser';
import ContactForm from "../components/contacts/ContactForm.tsx"
import SendStatusAlert from "../components/contacts/SendStatusAlert.tsx";

function Contact({ show, onHide }: { show: boolean; onHide: () => void }) {
  const { t } = useTranslation("contact");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [isSending, setIsSending] = useState(false);
  const [sendStatus, setSendStatus] = useState<'success' | 'error' | null>(null);

  const SERVICE_ID = 'service_y7dewzn';
  const TEMPLATE_ID = 'template_szo72e7';
  const PUBLIC_KEY = 'EVtknihY9lL7H0MCX';

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSending(true);
    setSendStatus(null);

    const templateParams = {
      user_name: formData.name,
      user_email: formData.email,
      user_phone: formData.phone,
      message: formData.message,
    };

    try {
      await emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, {
        publicKey: PUBLIC_KEY,
      });
      setSendStatus('success');
      setFormData({ name: "", email: "", phone: "", message: "" });
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
        <SendStatusAlert sendStatus={sendStatus} setSendStatus={setSendStatus} />
        <ContactForm
          formData={formData}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          isSending={isSending}
        />
      </Modal.Body>
    </Modal>
  );
}

export default Contact;
