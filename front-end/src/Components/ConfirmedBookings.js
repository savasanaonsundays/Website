import React, { Component } from 'react';
import { Button } from 'reactstrap';
import PendingBookings from './PendingBookings';
import './bookings.css';
import { Container, Row, Col } from 'reactstrap';

export default class PendingBooking extends Component {
  constructor(props) {
    super(props);
    this.state = {
      response: ''
    };
  }

  componentDidMount() {
    //we callApi
    fetch('/api/bookings/confirmed')
      .then(res => res.json())
      .then(bookings => this.setState({ response: bookings }));
  }

  render() {
    console.log(this.state.response);
    return (
      <div>
        <div className="bookingsContainer">
          <ul>
            {!!this.state.response ? (
              this.state.response.map(item => (
                <li key={item._id} className="bookingItem">
                  <Row>
                    <Col sm="9" xs="6">
                      <div className="info"> Name:{item.name}</div>
                      <div className="info"> Date:{item.date} </div>
                      <div className="info"> Hours:{item.hours} </div>
                      <div className="info"> Session:{item.session} </div>
                      <div className="info"> Email:{item.email} </div>
                      <div className="info"> Telephone:{item.tel} </div>
                      <div className="info"> Health:{item.health} </div>
                      <div className="info"> Comment:{item.comment} </div>
                    </Col>

                    <Col sm="3" xs="6" className="cancelWrapper">
                      {/* <Button color="success" className="bookingButton" onClick>✓</Button>{} */}

                      <Button
                        color="danger"
                        className="cancelButton"
                        onClick={() => {
                          fetch('api/bookings/delete/' + item._id, {
                            method: 'delete'
                          }).then(
                            fetch('/api/bookings/all')
                              .then(res => res.json())
                              .then(bookings =>
                                this.setState({ response: bookings })
                              )
                          );
                        }}
                      >
                        ✕
                      </Button>
                      {}
                    </Col>
                  </Row>
                </li>
              ))
            ) : (
              <p>Loading...</p>
            )}
          </ul>
        </div>
      </div>
    );
  }
}
