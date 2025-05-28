import { Form, Button } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import NameField from "./fields/NameField";
import EmailField from "./fields/EmailField";
import PhoneField from "./fields/PhoneField";
import MessageField from "./fields/MessageField";

interface Props {
	formData: {
		name: string;
		email: string;
		phone: string;
		message: string;
	};
	isSending: boolean;
	handleChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
	handleSubmit: (e: React.FormEvent) => void;
}

function ContactForm({ formData, isSending, handleChange, handleSubmit }: Props) {
	const { t } = useTranslation("contact");

	return (
		<Form onSubmit={handleSubmit}>
			<NameField value={formData.name} onChange={handleChange} />
			<EmailField value={formData.email} onChange={handleChange} />
			<PhoneField value={formData.phone} onChange={handleChange} />
			<MessageField value={formData.message} onChange={handleChange} />
			<Button
				variant="warning"
				className="w-100"
				type="submit"
				disabled={isSending}
			>
				{isSending ? t("contact_sending") : t("contact_submit")}
			</Button>
		</Form>
	);
}

export default ContactForm;
