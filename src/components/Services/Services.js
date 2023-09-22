import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
// import Col from "react-bootstrap/Col";
// import Button from "react-bootstrap/Button";
import banner1 from "../../images/banner-one.jpg";
import banner2 from "../../images/banner-two.jpg";
import "./Services.css";
import Service from "../Service/Service";
import SectionHeading from "../SectionHeading/SectionHeading";

const Services = () => {
  return (
    <section className="service-area mb-5">
      <Container>
        <SectionHeading heading="My Services Heading" />
        <Row>
          <Service
            image={banner2}
            heading="Live Match Photography"
            price="100"
            text="My live match photography is best in the world. The quality of the photos are just amazing and beautiful and ready to use for your next platform."
          />

          <Service
            image={banner1}
            heading="Team Picture Day Photography"
            price="500"
            text="I offers top quality posed team & individual photography
        services for any size team and league. You will get best team
        photos from me."
          />

          <Service
            image={banner2}
            heading="Sporting Events Photography"
            price="1000"
            text="I'm the leading sporting event photographer in Bangladesh. I
        offer quality images and products, on-site printing and great
        pricing!"
          />
        </Row>
      </Container>
    </section>
  );
};

export default Services;
