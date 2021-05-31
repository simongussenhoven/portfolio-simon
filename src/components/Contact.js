import { Form, Button } from "react-bootstrap";
function Contact() {
    return (
        <section>
            <div className="banner p-5 bg-dark">
                <h1 className="text-white display-1 text-center">Contact</h1>
            </div>
            <div className="container my-5">Hello! Thanks for visiting the contact page. Please fill out the following form and click "Send", I will reply as soon as possible.</div>
            <div className="container">
                <Form data-netlify="true">
                <input type="hidden" name="form-name" value="name_of_my_form" />
                    <Form.Group controlId="exampleForm.ControlInput1">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="name@example.com" />
                    </Form.Group>
                    <Form.Group controlId="exampleForm.ControlInput2">
                        <Form.Label>Subject</Form.Label>
                        <Form.Control type="email" placeholder="Please type a subject" />
                    </Form.Group>
                    <Form.Group controlId="exampleForm.ControlTextarea1">
                        <Form.Label>Message body</Form.Label>
                        <Form.Control as="textarea" placeholder="Type your message here" rows={8} />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
            </div>
        </section>
    );
}
export default Contact;
