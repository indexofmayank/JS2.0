import Carousel from 'react-bootstrap/Carousel';
import Button from "react-bootstrap/Button";

function MyCarousel() {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={require("../images/21770.jpg")}
          alt="First slide"
        />
       
        <Carousel.Caption>
          <h3 style={{
            backgroundColor: "black"
          }}>Janta Group | Robotics</h3>
          <p style={{
            backgroundColor: "black"
          }} >Let's bright the world.</p>
        </Carousel.Caption>
        
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src= {require("../images/4884785.jpg")}
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3 style={{
            backgroundColor: "black"
          }}>Janta Group | Coders</h3>
          <p style={{
            backgroundColor: "black"
          }}> From Perception to Abstraction to Create</p>
        </Carousel.Caption>
       
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={require("../images/i511.012_robot competition flat.jpg")}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3 style={{
            backgroundColor: "black"
          }}>Janta Group | Robotics Competitions</h3>
          <p style={{
            backgroundColor: "black"
          }}>
            We organise and propelled robotics in navie mind.
          </p>
        </Carousel.Caption>
        
      </Carousel.Item>
    </Carousel>
  );
}

export default MyCarousel;