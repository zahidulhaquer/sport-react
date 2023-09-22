import React from "react";
import SectionHeading from "../SectionHeading/SectionHeading";
import "./Moments.css";
import Single_All_Image from "../Single_All_Image/Single_All_Image";

const Moments = () => {
  return (
    <section className="moments-area">
      <SectionHeading heading="Some Moments" />
      <Single_All_Image />
    </section>
  );
};

export default Moments;
