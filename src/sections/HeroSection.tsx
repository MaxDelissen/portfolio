import {Button, Col, Container, Row} from "react-bootstrap";

import { useTranslation } from "react-i18next";

export default function HeroSection() {
	const { t } = useTranslation();

	return <section className="bg-primary py-5">
		<Container>
			<Row className="align-items-center">
				{/* Left side: text + button */}
				<Col md={6}>
					<div className="text-section">
						<h1 className="mb-2 text-text">Max Delissen</h1>
						<h2 className="mb-3 text-text-muted">{t('occupation')}</h2>
						<h3 className="mb-4 text-text-muted">{t('subtitle')}</h3>
						<Button variant="warning" size="lg" className="rounded-5">{t('see_work')}</Button>
					</div>
				</Col>

				{/* Right side: image */}
				<Col md={6} className="text-center">
					<img
						src="../../img/ProfilePicture.jpg"
						alt="Max Delissen"
						className="img-fluid rounded-5 shado FixedImage"
					/>
				</Col>
			</Row>
		</Container>
	</section>;
}