import React from "react";
import ProjectCard from "../components/ProjectCard"; // Adjust the import path as necessary
import "./Projects.css"; // Optional: Add custom styles for the grid

const Projects: React.FC = () => {
  const projects = [
    { id: 1, title: "Project One", description: "Description for project one" },
    { id: 2, title: "Project Two", description: "Description for project two" },
    {
      id: 3,
      title: "Project Three",
      description: "Description for project three",
    },
    {
      id: 4,
      title: "Project Four",
      description: "Description for project four",
    },
  ];

  return (
    <section className="projects-section">
      <h2>My Projects</h2>
      <div className="projects-grid">
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            description={project.description}
          />
        ))}
      </div>
    </section>
  );
};

export default Projects;
