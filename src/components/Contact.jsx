
import React from 'react';
import { Container, Form, Button } from 'react-bootstrap';

const Contact = () => {
  return (
    <Container className="mt-5">
      <h2>Contact Us</h2>
      <Form className="contact-form p-4 border rounded">
        <Form.Group controlId="formName">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" placeholder="Enter your name" />
        </Form.Group>

        <Form.Group controlId="formEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter your email" />
        </Form.Group>

        <Form.Group controlId="formMessage" className="mb-4"> {/* Add margin-bottom */}
          <Form.Label>Message</Form.Label>
          <Form.Control as="textarea" rows={5} placeholder="Enter your message" />
        </Form.Group>

        <Form.Group controlId="formSubmit">
          <Button variant="primary" type="submit" className="btn-block mt-2"> {/* Add margin-top */}
            Submit
          </Button>
        </Form.Group>
      </Form>
    </Container>
  );
};

export default Contact;
