import React from 'react';
import Card from 'react-bootstrap/Card';
import ProductCard from '../components/ProductCard';
import SampleKitArray from "../images/SampleKitArray.jpg"



const DigitalPaltfrom = () => {
  const ProductData = [
    {
      Header: "Featured - Kit",
      Title: "Janta Robo Kit",
      Image: require("../images/SampleKitArray.jpg"),
      Text: "Our robotic kit is the perfect tool for students to develop their skills in robotics and engineering. The kit comes complete with all the necessary components and instructions, allowing students to build their own robot from scratch. Our easy-to-use programming interface enables students to customize the robot's behavior and functionality, providing a hands-on learning experience. The kit is suitable for students of all ages and skill levels, making it an ideal tool for introducing students to the exciting world of robotics. With our robotic kit, students can explore their creativity, develop problem-solving skills, and gain valuable knowledge in the field of robotics.",
    },
    {
      Header: "Featured - Coding Classes",
      Title: "Online AI & MI",
      Image: require("../images/SampleCodingArray.jpg"),
      Text: "Janta Group offers an excellent online coding course that equips learners with the skills necessary to become proficient programmers. This course covers a wide range of programming languages and technologies, including Python, Java, HTML, and CSS, among others. The course is designed to be flexible, allowing learners to study at their own pace and in their own time. With the guidance of experienced instructors, learners can expect to gain a solid foundation in coding and programming that will be invaluable in today's digital world.",
    }
  ];

  return (

    <Card>
      <Card.Header>
        Digital Paltfroms
      </Card.Header>
      <Card.Title>Learn | Educate | Grow</Card.Title>
      <Card.Subtitle>What we offer</Card.Subtitle>
      <ProductCard props={ProductData} />
    </Card>
  );
}

export default DigitalPaltfrom
