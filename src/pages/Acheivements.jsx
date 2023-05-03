import React from 'react';
import { Figure } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import ProgressBar from 'react-bootstrap/ProgressBar';

const Acheivements = () => {
  return (
    <div>
        <h2>Our Founder - Mr Abhishek Janta | Our media presence</h2>
        <ProgressBar now={100} />
        <Figure style={{
            padding: "15px",
            justifyContent: 'space-between'
        }}>
            <Figure.Image
                width="650"
                height="100%"
                src={require("../images/p1.jpeg")}
            />
            <Figure.Image
                width="650"
                height="100%"
                src={require("../images/p2.jpeg")}
            />
            <Figure.Caption>
            Janta Group has made significant strides in various fields and has achieved many notable accomplishments over the years. As a leading institution in the industry, Janta Group has a proven track record of excellence in providing top-notch services and products to its clients. With a team of highly skilled professionals and a strong commitment to innovation and growth, Janta Group has successfully established itself as a trusted brand in the market. Whether it's in the field of education, healthcare, or infrastructure, Janta Group has consistently delivered exceptional results and set new benchmarks for others to follow.
            </Figure.Caption>
            <br></br>
            <Button>Enroll With Us</Button>
            
            
        </Figure>
    </div>
  )
}

export default Acheivements