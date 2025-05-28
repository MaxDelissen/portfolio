import ProjectPage from "./ProjectPage";
import projects from "../../projects.json";

function createProjectPage(projectId: number) {
  const project = projects.find((p) => p.id === projectId);

  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <ProjectPage
      projectTitle={project.title}
      projectDescription={project.description_en}
      imageLinks={project.images.length > 0 ? project.images : [
        "https://dummyimage.com/600x400/ff00ff/fff",
        "https://dummyimage.com/600x400/00ff15/fff",
        "https://dummyimage.com/600x400/000/fff",
      ]}
      githubLink="https://github.com/your-repo"
    />
  );
}

export default createProjectPage;
