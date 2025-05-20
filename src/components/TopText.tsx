import "./TopText.css";
import { Container } from "react-bootstrap";

type TopBarProps = {
  title: string;
  backgroundImage: string; // URL or path
};

function TopBar(props: TopBarProps) {
  return (
    <div
      className="top-bar"
      style={{
        backgroundImage: `url(${props.backgroundImage})`,
      }}
    >
      <div className="top-bar-overlay">
        <Container className="h-100 d-flex justify-content-center align-items-center">
          <h1 className="top-bar-title">{props.title}</h1>
        </Container>
      </div>
    </div>
  );
}

export default TopBar;
