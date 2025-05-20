import React from "react";
import ProjectCard from "../components/ProjectCard";
import { Container, Row, Col } from "react-bootstrap";
import { useTranslation } from "react-i18next";

// Import the JSON file
import projects from "../projects.json";

const Projects: React.FC = () => {
  const { t, i18n } = useTranslation();

  return (
    <section className="projects-section py-5">
      <Container>
        <div className="text-section-wrapper p-4">
          <h2 id="projects-section" className="mb-4">
            {t("my_projects")}
          </h2>
          <Row className="g-4">
            {projects.map((project) => (
              <Col key={project.id} xs={12} sm={6} md={4} lg={3}>
                <ProjectCard
                  id={project.id}
                  title={project.title}
                  // Show description based on current language
                  description={
                    i18n.language === "nl"
                      ? project.description_nl
                      : project.description_en
                  }
                  image={
                    project.image ||
                    "https://dummyimage.com/220x185/ff0000/fff.png"
                  }
                />
              </Col>
            ))}
          </Row>
        </div>
      </Container>
    </section>
  );
};

export default Projects;
