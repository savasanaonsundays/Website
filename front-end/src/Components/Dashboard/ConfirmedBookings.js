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
    (function() {
      console.log(this.state.response);
    });
    return (
      <div>
        <div className="bookingsContainer">
          <ul>
            {!!this.state.response ? (
              this.state.response.map(item => (
                <li key={item._id} className="bookingItem">
                  <Row>
                    <Col sm="9" xs="6">
                      <div className="info">
                        {' '}
                        <span className="itemName">Name:</span>
                        {item.name}
                      </div>
                      <div className="info">
                        {' '}
                        <span className="itemName"> Date:</span> {item.date}
                      </div>
                      <div className="info">
                        {' '}
                        <span className="itemName">Hours:</span>
                        {item.hours}{' '}
                      </div>
                      <div className="info">
                        {' '}
                        <span className="itemName">Session:</span>
                        {item.session}{' '}
                      </div>
                      <div className="info">
                        {' '}
                        <span className="itemName">Email:</span>
                        {item.email}{' '}
                      </div>
                      <div className="info">
                        {' '}
                        <span className="itemName">Telephone:</span>
                        {item.tel}{' '}
                      </div>
                      <div className="info">
                        {' '}
                        <span className="itemName">Health:</span>
                        {item.health}{' '}
                      </div>
                      <div className="info">
                        {' '}
                        <span className="itemName">Comment:</span>
                        {item.comment}{' '}
                      </div>
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
                            fetch('/api/bookings/unconfirmed')
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
