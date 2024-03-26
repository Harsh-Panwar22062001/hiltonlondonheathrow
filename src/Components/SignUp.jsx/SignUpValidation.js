// SignUpValidation.js

export default function Validation(formData) {
    const { name, email, password, passwordRepeat } = formData;
    const errors = {};
  
    const name_pattern = /^[a-zA-Z .-]+$/; // Allow alphabets, spaces, periods, and hyphens
    const email_pattern = /^[a-zA-Z0-9.!#$%&'+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)$/;
    const password_pattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[A-Za-z\d@$!%*?&]{8,}$/;
  
    if (!name) {
      errors.name = "Name should not be empty";
    } else if (!name_pattern.test(name)) {
      errors.name = "Name should only contain alphabets, spaces, periods, and hyphens";
    }
  
    if (!email) {
      errors.email = "Email should not be empty";
    } else if (!email_pattern.test(email)) {
      errors.email = "Email format is invalid";
    }
  
    if (!password) {
      errors.password = "Password should not be empty";
    } else if (!password_pattern.test(password)) {
      errors.password = "Password did not match requirements";
    }
  
    if (!passwordRepeat) {
      errors.passwordRepeat = "Please repeat your password";
    } else if (password !== passwordRepeat) {
      errors.passwordRepeat = "Passwords do not match";
    }
  
    return errors;
  }
  