import React from 'react';
import axios from 'axios';
import {
  Container,
  Row,
  Col,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  FormText
} from 'reactstrap';
import './contact.css';

class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: '' };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault(); // DO NO TOUCH

    const data = {
      name: event.target.name.value,
      email: event.target.email.value,
      tel: event.target.tel.value,
      comment: event.target.comment.value
    };

    axios
      .post('api/contacts/privatecontact', data)
      .then(resp => {
        alert(
          'MESSAGE HAS BEEN SENT! A response sent via email' + this.state.value
        );
        window.location.href = '/';
      })
      .catch(err => {
        alert('FIELDS MISSING!: please provide a correct email address');
      });
  }
  render() {
    return (
      <Container className="whiteBody">
        <Form onSubmit={this.handleSubmit}>
          <FormGroup>
            <Row>
              <Col className="formTitleContainer">
                <Label for="ContactTitle">
                  <h1 class="formTitle">Contact Us</h1>
                </Label>
              </Col>
            </Row>
            <Input plaintext>
              <b>(*) Please provide a correct email address</b>
            </Input>
          </FormGroup>
          <FormGroup>
            <Label for="ContactName">Name</Label>
            <Input
              type="text"
              name="name"
              id="ContactName"
              placeholder="Name"
            />
          </FormGroup>
          <FormGroup>
            <Label for="ContactEmail">*Email</Label>
            <Input
              type="email"
              name="email"
              id="ContactEmail"
              placeholder="Email"
            />
          </FormGroup>
          <FormGroup>
            <Label for="ContactTel">Phone Number</Label>
            <Input
              type="tel"
              name="tel"
              id="ContactTel"
              placeholder="Phone Number"
            />
          </FormGroup>
          <FormGroup>
            <Label for="ContactComment">Comment</Label>
            <Input
              type="textarea"
              rows="7"
              name="comment"
              id="ContactComment"
              placeholder="Please type any enquiries you have here"
            />
          </FormGroup>

          <Button color="primary" size="lg" block>
            Submit
          </Button>

          <Row>
            <Col sm="12">
              <Button color="danger" size="sm" href="/" className="clearButton">
                Home
              </Button>
            </Col>
          </Row>
        </Form>
      </Container>
    );
  }
}

export default Contact;
