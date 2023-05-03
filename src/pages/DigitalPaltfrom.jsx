import React from 'react';
import Card from 'react-bootstrap/Card';
import ProductCard from '../components/ProductCard';
import SampleKitArray from "../images/SampleKitArray.jpg"



const DigitalPaltfrom = () => {
  const ProductData = [
    {
      Header: "Featured - Kit",
      image: require("../images/SampleKitArray.jpg"),
      Text: "Our robotic kit is the perfect tool for students to develop their skills in robotics and engineering. The kit comes complete with all the necessary components and instructions, allowing students to build their own robot from scratch. Our easy-to-use programming interface enables students to customize the robot's behavior and functionality, providing a hands-on learning experience. The kit is suitable for students of all ages and skill levels, making it an ideal tool for introducing students to the exciting world of robotics. With our robotic kit, students can explore their creativity, develop problem-solving skills, and gain valuable knowledge in the field of robotics.",
    },
    {
      Header: "Featured - Kit",
      image: { SampleKitArray },
      Text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus et veniam tempora earum dignissimos eius iste quos pariatur optio magni numquam illo praesentium quo tenetur reiciendis, corporis quia incidunt nam!",
    }
  ];



  console.log(ProductData)
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
