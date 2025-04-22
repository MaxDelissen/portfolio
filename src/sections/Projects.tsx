import React from "react";
import ProjectCard from "../components/ProjectCard";
import { Container, Row, Col } from "react-bootstrap";

const Projects: React.FC = () => {
  const projects = [
    {
      id: 1,
      title: "Project One",
      description:
        "Description for project oneDescription for project oneDescription for project oneDescription for project oneDescription for project oneDescription for project oneDescription for project oneDescription for project oneDescription for project oneDescription for project oneDescription for project oneDescription for project oneDescription for project oneDescription for project oneDescription for project oneDescription for project one",
      image: "https://dummyimage.com/220x185/ff0000/fff.png",
    },
    {
      id: 2,
      title: "Project Two",
      description: "Description for project two",
      image: "https://dummyimage.com/220x185/ff0000/fff.png",
    },
    {
      id: 3,
      title: "Project Three",
      description: "Description for project three",
      image: "https://dummyimage.com/220x185/ff0000/fff.png",
    },
    {
      id: 4,
      title: "Project Four",
      description: "Description for project four",
      image: "https://dummyimage.com/220x185/ff0000/fff.png",
    },
    {
      id: 5,
      title: "Project Five",
      description: "Description for project five",
      image: "https://dummyimage.com/220x185/ff0000/fff.png",
    },
  ];

  return (
    <section className="projects-section py-5">
      <Container>
        <h2 id="projects-section" className="mb-4">
          My Projects
        </h2>
        <Row className="g-4">
          {projects.map((project) => (
            <Col
              key={project.id}
              xs={12} // 1 per row on mobile
              sm={6} // 2 per row on small screens
              md={4} // 3 per row on medium screens
              lg={3} // 4 per row on large screens
            >
              <ProjectCard
                key={project.id}
                title={project.title}
                description={project.description}
                image={project.image}
              />
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Projects;
