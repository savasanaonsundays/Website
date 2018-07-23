import React from 'react';
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

class PrivateYoga extends React.Component {
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
    alert('Form has been submitted ' + this.state.value);
    event.preventDefault();
  }
  render() {
    return (
      <Container>
        <Form onSubmit={this.handleSubmit}>
          <FormGroup>
            <Label for="PrivateYogaEmail">
              <h1>
                Private <u>Yoga</u> Booking Form
              </h1>
            </Label>
            <Input plaintext>
              <b>
                please fill out details below, all fields with (*) are required
              </b>
            </Input>
          </FormGroup>

          <FormGroup>
            <Label for="PrivateYogaDate">*Date</Label>
            <Input
              type="date"
              name="date"
              id="PrivateYogaDate"
              placeholder="Date"
            />
          </FormGroup>

          <FormGroup>
            <Label for="PrivateYogaSelectTime">*Hours</Label>
            <Input
              type="select"
              name="selectMulti"
              id="PrivateYogaSelectTime"
              multiple
            >
              <option>10AM</option>
              <option>11AM</option>
              <option>12PM</option>
              <option>1PM</option>
              <option>2PM</option>
              <option>3PM</option>
              <option>4PM</option>
              <option>5PM</option>
            </Input>
          </FormGroup>
          <FormGroup>
            <Label for="PrivateYogaName">*Name</Label>
            <Input
              type="text"
              name="name"
              id="PrivateYogaName"
              placeholder="Name"
            />
          </FormGroup>
          <FormGroup>
            <Label for="PrivateYogaEmail">*Email</Label>
            <Input
              type="email"
              name="email"
              id="PrivateYogaEmail"
              placeholder="Email"
            />
          </FormGroup>

          <FormGroup>
            <Label for="PrivateYogaTel">*Phone Number</Label>
            <Input
              type="tel"
              name="tel"
              id="PrivateYogaTel"
              placeholder="Phone Number"
            />
          </FormGroup>

          <FormGroup>
            <Label for="PrivateYogaComment">Comment</Label>
            <Input
              type="textarea"
              name="text"
              id="PrivateYogaComment"
              placeholder="Please post any question you may have here"
            />
          </FormGroup>

          <Button color="primary" size="lg" value="submit" block>
            Submit
          </Button>

          <Row>
            <Col sm="12" md={{ size: 8, offset: 11 }}>
              <Button color="danger" size="sm">
                Cancel
              </Button>
            </Col>
          </Row>
        </Form>
      </Container>
    );
  }
}

export default PrivateYoga;
