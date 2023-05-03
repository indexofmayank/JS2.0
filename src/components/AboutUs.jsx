import { ProgressBar } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Form from 'react-bootstrap/Form';


function AboutUs() {
    return (
        <div>
            <ProgressBar now={100} />
            <Card>
                <Card.Header><b><i>Who We Are</i></b></Card.Header>
                <Card.Body>
                    <Card.Title>Innovation | Creativity | Learning</Card.Title>
                    <Card.Text>
                        At Janta Group, we believe that robotics and artificial intelligence (AI) have the power to revolutionize the world we live in. With our expertise and resources in this field, we aim to make a significant contribution towards shaping the future of technology. Robotics and AI can assist in various industries, including healthcare, manufacturing, agriculture, and transportation, to name a few. By exploring and implementing new ideas, we are dedicated to unlocking the full potential of robotics and AI to create a better world for everyone. Join us at Janta Group, and together, we can build a brighter future through robotics and AI.
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>

            <div style={{
                padding: "25px"
            }}>
                <Form>
                    <Form.Group className="mb-3" controlId="ContactUsName" >
                        <Form.Label>Full Name</Form.Label>
                        <Form.Control type="text" placeholder="John Doe" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="contactUsEmailID">
                        <Form.Label>Email ID</Form.Label>

                        <Form.Control type="text" placeholder="Jonedoe@email.com" />
                        <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="ContactUsMessage">
                        <Form.Label>Message: </Form.Label>
                        <Form.Control as="textarea" placeholder="How we can assist you further" />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
            </div>
        </div>
    );
}

export default AboutUs;