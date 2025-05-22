import { Form } from "react-bootstrap";
import { useTranslation } from "react-i18next";

interface Props {
	value: string;
	onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

function NameField({ value, onChange }: Props) {
	const { t } = useTranslation("contact");

	return (
		<Form.Group className="mb-3" controlId="name">
			<Form.Label>{t("contact_name")}</Form.Label>
			<Form.Control
				type="text"
				placeholder="Enter your name"
				value={value}
				onChange={onChange}
				required
			/>
		</Form.Group>
	);
}

export default NameField;
