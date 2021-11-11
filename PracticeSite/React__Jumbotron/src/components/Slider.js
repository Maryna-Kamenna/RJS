import React from "react";
import { Carousel } from "react-bootstrap";
import mozambik from "../mozambik.jpg";
import madagascar from "../madagascar.jpg";
import zanzibar from "../zanzibar.jpg";

export default function Slider() {
  return (
    <Carousel>
      <Carousel.Item style={{ height: "600px" }}>
        <img className="d-block w-100" src={mozambik} alt="First slide" />
        <Carousel.Caption>
          <h3> Web Designer Blog</h3>
          <p> Some text I must put here</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item style={{ height: "600px" }}>
        <img className="d-block w-100" src={madagascar} alt="Second slide" />
        <Carousel.Caption>
          <h3> Web Designer Blog 2</h3>
          <p> Some text I must put here</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item style={{ height: "600px" }}>
        <img className="d-block w-100" src={zanzibar} alt="Third slide" />
        <Carousel.Caption>
          <h3> Web Designer Blog 3</h3>
          <p> Some text I must put here</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}
