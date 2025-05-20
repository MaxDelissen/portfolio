import { Card, Button } from "react-bootstrap";
import { useTranslation } from "react-i18next";

interface ProjectCardProps {
  id: number;
  title: string;
  description: string;
  image: string;
}

function ProjectCard({ id, title, description, image }: ProjectCardProps) {
  const { t } = useTranslation();

  return (
    <Card
      key={id}
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
          href={`/projects/${title.replace(/\s+/g, "-").toLowerCase()}`}
          style={{
            borderRadius: "30px",
            marginTop: "10px",
            paddingLeft: "20px",
            paddingRight: "20px",
            width: "55%",
          }}
        >
          {t("see_project")}
        </Button>
      </Card.Body>
    </Card>
  );
}

export default ProjectCard;
