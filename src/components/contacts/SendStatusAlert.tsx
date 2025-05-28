import { Alert } from "react-bootstrap";
import { useTranslation } from "react-i18next";

interface SendStatusAlertProps {
	sendStatus: 'success' | 'error' | null;
	setSendStatus: (status: null) => void;
}

function SendStatusAlert({ sendStatus, setSendStatus }: SendStatusAlertProps) {
	const { t } = useTranslation("contact");

	if (!sendStatus) return null;

	return (
		<Alert
			variant={sendStatus === 'success' ? 'success' : 'danger'}
			className={
				sendStatus === 'success'
					? "bg-primary text-bg-primary"
					: "bg-danger-subtle text-danger"
			}
			dismissible
			onClose={() => setSendStatus(null)}
		>
			{sendStatus === 'success'
				? t("contact_success_message")
				: t("contact_error_message")}
		</Alert>
	);
}

export default SendStatusAlert;
