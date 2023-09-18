import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

const Service = ({ image, heading, price, text }) => {
  return (
    <Col lg={4}>
      <div className="single-service">
        <img src={image} className="w-100 mb-2" />
        <h3>{heading}</h3>
        <h5>Price: ${price}</h5>
        <p>{text}</p>
        <Button variant="secondary">Button</Button>
      </div>
    </Col>
  );
};

export default Service
