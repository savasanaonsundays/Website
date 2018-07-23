import React, { Component } from 'react';
import PropTypes from 'prop-types';
// import axios from 'axios';
import { withRouter } from 'react-router-dom'; //USED IN THE LAST LINE OF THIS FILE
import classnames from 'classnames';
import { connect } from 'react-redux';
import { registerAdmin } from '../../actions/authActions';

class Register extends Component {
  //MAKING STATE IN THE COMPONENT
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
      password2: '',
      errors: {}
    };

    this.onChange = this.onChange.bind(this); //CAUSE IT DOESNT KNAOW HAT THIS IS?
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentDidMount() {
    if (this.props.auth.isAuthenticated) {
      this.props.history.push('/dashboard');
    }
  }

  componentWillReceiveProps(nextProps) {
    //THIS RUNS WHEN YOUR COMPONENTS RECEIVES PROPERTIES
    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors }); //WE WILL GET THE ERRORS FROM REDUX STATE IT GETS PUT INTO PROPS WITH MAPSTATETOPROPS THEN ONCE WE RECIEVE NEW   PROPERTIES IF  ERRORS IS INCLUDED WE ARE GOING TO SET IT TO COMPONENT STATE
    }
  }

  onChange(e) {
    //TO CHANGE COMPONENTS STATE
    this.setState({ [e.target.name]: e.target.value }); //WHENEVER THE USER TYPES IT FIRES OF ONCHANGE
  }
  //E.TARGET.VALUE IS THE VALUE OF THE INPUT
  //E.TARGET.NAME IS INSTEAD OF PUTTING THE ACTUAL NAME YOUR CHANGING
  onSubmit(e) {
    //REGISTERING A Admin /IT GOES INTO OBJECT WHEN YOU PUSH OBJECT LOG
    e.preventDefault();

    const newAdmin = {
      email: this.state.email,
      password: this.state.password,
      password2: this.state.password2
    };

    this.props.registerAdmin(newAdmin, this.props.history); //ALLOWS US TO USE HIS.PROPS.HISTORY TO REDIRECT FROM WITHIN THIS ACTION(EARLIER IN THE LINE)
  }

  // axios//INSTEAD OF FETCH
  // .post('/api/admins/register', newAdmin)
  // .then(res => console.log(res.data))
  // .catch(err => this.setState({ errors: err.response.data }));

  // .catch(err => {
  //   console.dir(err)
  //   // this.setState({ errors: err.response.data })
  // });

  render() {
    const { errors } = this.state; //IF WE PUT ERRORS IN CURLY BRACES WE CAN PULL IT OUT OF THIS.STATE. LIKE GOING CONST ERRORS = THIS.STATE.ERRORS

    return (
      <div className="register">
        <div className="container">
          <div className="row">
            <div className="col-md-8 m-auto">
              <h1 className="display-4 text-center">Sign Up</h1>
              <p className="lead text-center">Create admin account</p>
              <form noValidate onSubmit={this.onSubmit}>
                <div className="form-group">
                  <input
                    type="email"
                    className={classnames('form-control form-control-lg', {
                      'is-invalid': errors.email
                    })}
                    placeholder="Email Address"
                    name="email"
                    value={this.state.email}
                    onChange={this.onChange}
                  />
                  {errors.email && (
                    <div className="invalid-feedback">{errors.email}</div>
                  )}
                </div>
                <div className="form-group">
                  <input
                    type="password"
                    className={classnames('form-control form-control-lg', {
                      'is-invalid': errors.password
                    })}
                    placeholder="Password"
                    name="password"
                    value={this.state.password}
                    onChange={this.onChange}
                  />
                  {errors.password && (
                    <div className="invalid-feedback">{errors.password}</div>
                  )}
                </div>
                <div className="form-group">
                  <input
                    type="password"
                    className={classnames('form-control form-control-lg', {
                      'is-invalid': errors.password2
                    })}
                    placeholder="Confirm Password"
                    name="password2"
                    value={this.state.password2}
                    onChange={this.onChange}
                  />
                  {errors.password2 && (
                    <div className="invalid-feedback">{errors.password2}</div>
                  )}
                </div>
                <input type="submit" className="btn btn-info btn-block mt-4" />
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Register.propTypes = {
  registerAdmin: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});

export default connect(
  mapStateToProps,
  { registerAdmin }
)(withRouter(Register));
