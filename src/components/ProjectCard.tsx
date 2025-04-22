import { Card, Button } from "react-bootstrap";

interface ProjectCardProps {
  key: number;
  title: string;
  description: string;
  image: string;
}

function ProjectCard({ key, title, description, image }: ProjectCardProps) {
  return (
    <Card
      key={key}
      className="bg-secondary text-black"
      style={{
        borderRadius: "30px",
        overflow: "hidden",
        height: "100%",
      }}
    >
      {/* Image */}
      <div style={{ padding: "16px", paddingBottom: "0px" }}>
        <Card.Img
          variant="top"
          src={image}
          alt={title}
          style={{
            borderRadius: "30px",
            width: "100%",
            objectFit: "cover",
          }}
        />
      </div>

      <Card.Body
        style={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        {/* Title */}
        <Card.Title
          style={{
            fontSize: "24px",
          }}
        >
          {title}
        </Card.Title>

        {/* Description */}
        <Card.Text style={{ fontSize: "12px", flexGrow: 1 }}>
          {description}
        </Card.Text>

        {/* Button */}
        <Button
          variant="warning"
          href={`/projects/${key}`}
          style={{
            borderRadius: "30px",
            marginTop: "10px",
            paddingLeft: "20px",
            paddingRight: "20px",
            width: "50%",
          }}
        >
          Learn more
        </Button>
      </Card.Body>
    </Card>
  );
}

export default ProjectCard;
