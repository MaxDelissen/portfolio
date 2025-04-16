import React from "react";
import PropTypes from "prop-types";
import "./ProjectCard.css"; // Optional: Add styles here or import a CSS file

const ProjectCard = ({ id, title, description, image }) => {
  return (
    <div className="project-card">
      <img src={image} alt={title} className="project-card-image" />
      <div className="project-card-content">
        <h3 className="project-card-title">{title}</h3>
        <p className="project-card-description">{description}</p>
        <span className="project-card-id">ID: {id}</span>
      </div>
    </div>
  );
};

ProjectCard.propTypes = {
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

export default ProjectCard;
