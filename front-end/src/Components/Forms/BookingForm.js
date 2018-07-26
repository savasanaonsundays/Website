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
import './bookingform.css';

class BookingForm extends React.Component {
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
      session: event.target.session.value,
      date: event.target.date.value,
      hours: event.target.hours.value,
      name: event.target.name.value,
      email: event.target.email.value,
      tel: event.target.tel.value,
      health: event.target.health.value,
      comment: event.target.comment.value
    };

    axios
      .post('api/bookings/privatebooking', data)
      .then(resp => {
        alert(
          'FORM HAS BEEN SUCCESSFULLY SUBMITTED! A response or booking confirmation will be sent via email once approved' +
            this.state.value
        );
        window.location.href = '/';
      })
      .catch(err => {
        alert('FIELDS MISSING!: please fill in a required fields with (*) ');
      });
  }
  render() {
    return (
      <Container className="whiteBody">
        <Form onSubmit={this.handleSubmit}>
          <FormGroup>
            <Row>
              <Col className="formTitleContainer">
                <Label for="BookingFormEmail">
                  <h1 class="formTitle">Private Booking Form</h1>
                </Label>
              </Col>
            </Row>
            <Input plaintext>
              <b>
                Please fill out details below, all fields with (*) are required
              </b>
            </Input>
          </FormGroup>

          <FormGroup>
            <Label for="BookingFormSession">Choose Session</Label>
            <Input type="select" name="session" id="BookingFormSession">
              <option>Yoga Session</option>
              <option>Massage Session</option>
            </Input>
          </FormGroup>

          <FormGroup>
            <Label for="BookingFormDate">Date</Label>
            <Input
              type="date"
              name="date"
              id="BookingFormDate"
              placeholder="Date"
            />
          </FormGroup>

          <FormGroup>
            <Label for="BookingFormSelectTime">Hours</Label>
            <Input
              type="select"
              name="hours"
              id="BookingFormSelectTime"
              multiple
            >
              <option>--</option>
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
            <Label for="BookingFormName">*Name</Label>
            <Input
              type="text"
              name="name"
              id="BookingFormName"
              placeholder="Name"
            />
          </FormGroup>
          <FormGroup>
            <Label for="BookingFormEmail">*Email</Label>
            <Input
              type="email"
              name="email"
              id="BookingFormEmail"
              placeholder="Email"
            />
          </FormGroup>

          <FormGroup>
            <Label for="BookingFormTel">Phone Number</Label>
            <Input
              type="tel"
              name="tel"
              id="BookingFormTel"
              placeholder="Phone Number"
            />
          </FormGroup>

          <FormGroup>
            <Label for="BookingFormHealth">Health Issues</Label>
            <Input
              type="textarea"
              name="health"
              rows="7"
              id="BookingFormHealth"
              placeholder="Please write down as detail as possible any health issues, injuries, or medications that you are taking"
            />
          </FormGroup>

          <FormGroup>
            <Label for="BookingFormComment">Comment</Label>
            <Input
              type="textarea"
              rows="7"
              name="comment"
              id="BookingFormComment"
              placeholder="Please post any questions or anything else you would like to mention here"
            />
          </FormGroup>

          <Button color="primary" size="lg" block>
            Submit
          </Button>

          <Row>
            <Col sm="12">
              <Button
                color="danger"
                size="sm"
                href="/bookingform"
                className="clearButton"
              >
                Clear
              </Button>
            </Col>
          </Row>
        </Form>
      </Container>
    );
  }
}

export default BookingForm;
