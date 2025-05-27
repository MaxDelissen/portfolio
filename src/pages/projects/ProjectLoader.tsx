import ProjectPage from "./ProjectPage";

function createProjectPage(projectId: number) {
  return (
    <ProjectPage
      projectTitle={`Project ${projectId}`}
      projectDescription="Default project description. Update this with relevant details."
      imageLinks={[
        "https://dummyimage.com/600x400/ff00ff/fff",
        "https://dummyimage.com/600x400/00ff15/fff",
        "https://dummyimage.com/600x400/000/fff",
      ]}
      githubLink="https://github.com/your-repo"
    />
  );
}

export default createProjectPage;