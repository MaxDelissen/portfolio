import { Form } from "react-bootstrap";
import { useTranslation } from "react-i18next";

interface Props {
	value: string;
	onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

function MessageField({ value, onChange }: Props) {
	const { t } = useTranslation("contact");

	return (
		<Form.Group className="mb-3" controlId="message">
			<Form.Label>{t("contact_message")}</Form.Label>
			<Form.Control
				as="textarea"
				rows={4}
				placeholder="Enter your message"
				value={value}
				onChange={onChange}
				required
			/>
		</Form.Group>
	);
}

export default MessageField;
