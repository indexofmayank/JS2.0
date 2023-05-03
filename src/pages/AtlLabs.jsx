import React from 'react'
import { Figure } from 'react-bootstrap'
import Button from 'react-bootstrap/Button';
import ProgressBar from 'react-bootstrap/ProgressBar';

const AtlLabs = () => {
    return (
        <div>
            <Figure style={{
            padding: "15px",
            justifyContent: 'space-between'
        }}>
            <Figure.Image
                width="650"
                height="100%"
                src={require("../images/atlIamge.jpeg")}
            />
            <Figure.Image
                width="650"
                height="100%"
                src={require("../images/atlImage2.jpeg")}
            />
            <Figure.Caption>
                With a vision to ‘Cultivate one Million children in India as Neoteric Innovators’, Atal Innovation Mission is establishing Atal Tinkering Laboratories (ATLs) in schools across India. The objective of this scheme is to foster curiosity, creativity, and imagination in young minds; and inculcate skills such as design mindset, computational thinking, adaptive learning, physical computing etc.

            </Figure.Caption>
            <Figure.Caption>
                Janta Group is committed to leveraging the power of robotics and artificial intelligence (AI) to drive innovation and progress in various industries. Our educational institute is dedicated to imparting knowledge and skills to the next generation of robotics and AI experts, empowering them to create groundbreaking solutions that can transform the world. With our contribution, we aim to inspire and nurture the potential of robotics and AI, fostering a culture of innovation and collaboration. Together, we can push the boundaries of technology and make a meaningful impact on society through the endless possibilities offered by robotics and AI.
            </Figure.Caption>
            <br></br>
            <Button>Enroll With Us</Button>
            
            
        </Figure>
        <ProgressBar now={100} />
        </div>
    )
}

export default AtlLabs