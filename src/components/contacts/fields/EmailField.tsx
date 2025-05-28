import { Form } from "react-bootstrap";
import { useTranslation } from "react-i18next";

interface Props {
	value: string;
	onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

function EmailField({ value, onChange }: Props) {
	const { t } = useTranslation("contact");

	return (
		<Form.Group className="mb-3" controlId="email">
			<Form.Label>{t("contact_email")}</Form.Label>
			<Form.Control
				type="email"
				placeholder="Enter your email"
				value={value}
				onChange={onChange}
				required
			/>
		</Form.Group>
	);
}

export default EmailField;
