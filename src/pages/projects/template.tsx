import TopText from "../../components/TopText";

interface ProjectDetailsProps {
  title: string;
  description: string;
  images: string[];
}

function ProjectDetails({}: ProjectDetailsProps) {
  return (
    <>
      <TopText
        title="Demo"
        backgroundImage="https://cdn.pixabay.com/photo/2025/04/24/16/18/goose-9556271_960_720.jpg"
      />
      <div className="container p-5">
        <div className="row">
          <div className="col-12">
            <p>Project description goes here.</p>
          </div>
        </div>
        <div className="row">
          {["https://dummyimage.com/220x185/ff0000/fff.png"].map(
            (image, index) => (
              <div key={index} className="col-6 col-md-4">
                <img
                  src={image}
                  alt={`Project Image ${index + 1}`}
                  className="img-fluid"
                />
              </div>
            )
          )}
        </div>
      </div>
    </>
  );
}

export default ProjectDetails;
