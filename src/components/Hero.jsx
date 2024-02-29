import { Col, Container, Image, Row } from "react-bootstrap";
import image from "../assets/image/hero.png";

function Hero() {
  return (
    <div>
      <Container>
        <Col className="d-flex justify-content-center align-items-center pt-5">
          <Row className="col-6">
            <h1 className="hero-text">Welcome to the Movie-Verse</h1>
            <p className="hero-description">Find and save your favorite movies</p>
          </Row>
          <Row className="col-6">
            <Image src={image} alt="hero image" />
          </Row>
        </Col>
      </Container>
    </div>
  );
}

export default Hero;
