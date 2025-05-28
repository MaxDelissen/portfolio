// src/pages/ProjectPage.tsx
import React from 'react';
import TopBar from '../../components/TopText.tsx'; // Assuming this component exists and handles the top bar
import {Container, Row, Col, Carousel, Button} from 'react-bootstrap';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faGithub} from '@fortawesome/free-brands-svg-icons';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import './ProjectPage.css'; // For custom styles if needed

// Define the props for the ProjectPage component
interface ProjectPageProps {
	projectTitle: string;
	projectDescription: string;
	imageLinks: string[]; // Array of image URLs for the carousel
	githubLink: string;
}

const ProjectPage: React.FC<ProjectPageProps> = ({
																									 projectTitle,
																									 projectDescription,
																									 imageLinks,
																									 githubLink,
																								 }) => {
	return (
		<div className="project-page">
			{/* The TopBar component is assumed to be handled separately */}
			<TopBar title={projectTitle} backgroundImage={imageLinks[0]}/> {/* Pass projectTitle to TopBar */}

			<Container className="my-5">
				<Row className="justify-content-center">
					<Col md={8} lg={7}>
						<h2
							className="mb-4">{projectTitle}</h2> {/* Display the project title again in the content area if desired, or remove if TopBar suffices */}
						<p className="project-description-text">
							{projectDescription}
						</p>
					</Col>
					<Col md={4} lg={5} className="d-flex align-items-center justify-content-center mt-4 mt-md-0">
						{imageLinks && imageLinks.length > 0 ? (
							<Carousel touch={true} className="w-100 project-carousel">
								{imageLinks.map((link, index) => (
									<Carousel.Item key={index}>
										<img
											className="d-block w-100 img-fluid project-carousel-image"
											src={link}
											alt={`Project slide ${index + 1}`}
										/>
									</Carousel.Item>
								))}
							</Carousel>
						) : (
							<div className="image-placeholder d-flex align-items-center justify-content-center w-100"
									 style={{height: '250px', backgroundColor: '#e9ecef', borderRadius: '5px'}}>
								<p className="text-muted">No images available</p>
							</div>
						)}
					</Col>
				</Row>
				<Row className="mt-5">
					<Col xs={12} className="text-start">
						<Button
							href={githubLink}
							target="_blank"
							rel="noopener noreferrer"
							variant="dark"
							className="github-button"
						>
							<FontAwesomeIcon icon={faGithub} className="me-2"/>
							GitHub
						</Button>
					</Col>
				</Row>
			</Container>
		</div>
	);
};

export default ProjectPage;