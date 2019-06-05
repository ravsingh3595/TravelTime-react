import Validator from 'validator';
import {isEmpty} from 'lodash';

export default function validateInput(data) {
  console.log(data)
  let errors = {};

  if (Validator.isEmpty(data.username+"")) {
    errors.username = 'Username is required';
  }
  if (Validator.isEmpty(data.email+"")) {
    errors.email = 'This field is required';
  }
  if (!Validator.isEmail(data.email)) {
    errors.email = 'Email is invalid';
  }
  if (Validator.isEmpty(data.password+"")) {
    errors.password = 'Password is required';
  }
  if (Validator.isEmpty(data.passwordConfirmation+"")) {
    errors.passwordConfirmation = 'This field is required';
  }
  // if (!Validator.equals(data.password+"", data.passwordConfirmation+"")) {
  //   errors.passwordConfirmation = 'Passwords must match';
  // }
  

   return {
    errors,
    isValid: isEmpty(errors)
   }


}
