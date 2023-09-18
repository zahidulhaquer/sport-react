import Carousel from "react-bootstrap/Carousel";
import banner1 from "../../images/banner-one.jpg";
import banner2 from "../../images/banner-two.jpg";
import Button from "react-bootstrap/Button";

const Banner = () => {
  return (
    <Carousel data-bs-theme="light">
      <Carousel.Item>
        <img className="d-block w-100" src={banner1} alt="First slide" />
        <Carousel.Caption className="text">
          <h3>SPOTOGRAPHER</h3>
          <h2>Sports Photographer</h2>
          <p>Play Cricket with Football</p>
          <Button variant="secondary">Button</Button>{" "}
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={banner2} alt="Second slide" />
        <Carousel.Caption>
          <h3>Sport</h3>
          <h2>WWF</h2>
          <p>Play Cricket with Football</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <Button variant="secondary">Button</Button>{" "}
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default Banner;
