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

class PrivateMassage extends React.Component {
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
            <Label for="PrivateMassageEmail">
              <h1>
                Private <u>Massage</u> Booking Form
              </h1>
            </Label>
            <Input plaintext>
              <b>
                please fill out details below, all fields with (*) are required
              </b>
            </Input>
          </FormGroup>

          <FormGroup>
            <Label for="PrivateMassageDate">*Date</Label>
            <Input
              type="date"
              name="date"
              id="PrivateMassageDate"
              placeholder="Date"
            />
          </FormGroup>

          <FormGroup>
            <Label for="PrivateMassageSelectTime">*Hours</Label>
            <Input
              type="select"
              name="selectMulti"
              id="PrivateMassageSelectTime"
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
            <Label for="PrivateMassageName">*Name</Label>
            <Input
              type="text"
              name="name"
              id="PrivateMassageName"
              placeholder="Name"
            />
          </FormGroup>
          <FormGroup>
            <Label for="PrivateMassageEmail">*Email</Label>
            <Input
              type="email"
              name="email"
              id="PrivateMassageEmail"
              placeholder="Email"
            />
          </FormGroup>

          <FormGroup>
            <Label for="PrivateMassageTel">*Phone Number</Label>
            <Input
              type="tel"
              name="tel"
              id="PrivateMassageTel"
              placeholder="Phone Number"
            />
          </FormGroup>

          <FormGroup>
            <Label for="PrivateMassageHealth">*Health Issues</Label>
            <Input
              type="textarea"
              name="text"
              id="PrivateMassageHealth"
              placeholder="Please write down as detail as possible any health issues, injuries, or medications that you are taking"
            />
          </FormGroup>

          <FormGroup>
            <Label for="PrivateMassageComment">Comment</Label>
            <Input
              type="textarea"
              name="text"
              id="PrivateMassageComment"
              placeholder="Please post any questions or anything else you would like to mention here"
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

export default PrivateMassage;
