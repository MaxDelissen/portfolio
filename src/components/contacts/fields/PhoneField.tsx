import { Form } from "react-bootstrap";
import { useTranslation } from "react-i18next";

interface Props {
	value: string;
	onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

function PhoneField({ value, onChange }: Props) {
	const { t } = useTranslation("contact");

	return (
		<Form.Group className="mb-3" controlId="phone">
			<Form.Label>{t("contact_phone")}</Form.Label>
			<Form.Control
				type="text"
				placeholder="Enter your phone number"
				value={value}
				onChange={onChange}
			/>
		</Form.Group>
	);
}

export default PhoneField;
