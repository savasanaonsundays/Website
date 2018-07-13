const Validator = require('validator');
const isEmpty = require('./is-empty');//IMPORTING THE IS-EMPTY FILE ALSO IN VALIDATION

module.exports = function validateRegisterInput(data) { //WE CAN ACCESS THIS FUCTION FROM OUTSIDE/IT TAKES IN DATA
  let errors = {}; 

  //IF ITS NOT EMPTY IS JUST WHAT IT IS E.G DATDATA EMAIL IF IT IS IT IS AN EMPTY STRING AND THEN IT WILL GO BELOW AND GET TESTED AS EMPTY STRING 
  data.email = !isEmpty(data.email) ? data.email : '';
  data.password = !isEmpty(data.password) ? data.password : '';
  data.password2 = !isEmpty(data.password2) ? data.password2 : '';


  if (Validator.isEmpty(data.email)) {
    errors.email = 'Email field is required';
  }

  if (!Validator.isEmail(data.email)) {
    errors.email = 'Email is invalid';//ADD THIS COMMENT TO THE ERRORS OJECT
  }

  if (Validator.isEmpty(data.password)) {
    errors.password = 'Password field is required';
  }
//BELOW IF NOT (USING VALIDATOR) THE LENGTH OF THE PASSWORD IN LESS THAN 6 OR MORE THAN 30 THEY GET THE ERROR MESSAGE-NEEDS THE RETURN {ERRORS  PART TO RETURN IT 
  if (!Validator.isLength(data.password, { min: 6, max: 30 })) {
    errors.password = 'Password must be at least 6 characters';
  }//IF THEIR IS AN ERROR HERE THEN WE ARE GOING TO SAY ERRORS. WE WILL TAKE THAT OBJECT AND WE ARE GOING TO ADD A PASSWORD KEY AD SET THE VALUE TO THE MESSAGE THERE 

  if (Validator.isEmpty(data.password2)) {
    errors.password2 = 'Confirm Password field is required';
  }
 
  if (!Validator.equals(data.password, data.password2)) {
    errors.password2 = 'Passwords must match';
  }

  return {
    errors,//RETURN AN OBJECT WITH THE ERRORS WHICH WOULD BE ERRORS: ERRORS SO WE CAN JUST DO ERRORS ONCE
    isValid: isEmpty(errors) //RETURN IF IT IS VALID OR NOT/USING THE IS EMPTY FUNCTION INSIDE THE IS EMPTY FILE IN VALIDATION
  };
};
