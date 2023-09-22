import React from "react";
import { Container, Row } from "react-bootstrap";
import SingleImage from "../SingleImage/SingleImage";
import ImageOne from "../../images/banner-one.jpg";
import ImageTwo from "../../images/banner-two.jpg";

const Single_All_Image = () => {
  return (
    <div className="all-images">
      <Container>
        <Row>    
            <SingleImage image={ImageOne} />         
            <SingleImage image={ImageTwo} />       
            <SingleImage image={ImageOne} />          
            <SingleImage image={ImageTwo} />
            <SingleImage image={ImageOne} />         
            <SingleImage image={ImageTwo} />       
            <SingleImage image={ImageOne} />          
            <SingleImage image={ImageTwo} />
            <SingleImage image={ImageOne} />         
            <SingleImage image={ImageTwo} />       
            <SingleImage image={ImageOne} />          
            <SingleImage image={ImageTwo} />
        </Row>
      </Container>
    </div>
  );
};

export default Single_All_Image;
