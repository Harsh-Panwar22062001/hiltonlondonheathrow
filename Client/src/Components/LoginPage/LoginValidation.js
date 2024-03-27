export default function Validation(signIn) {
      const error = {};
      const name_pattern = /^[a-zA-Z .-]+$/; // Allow alphabets, spaces, periods, and hyphens
      const email_pattern = /^[a-zA-Z0-9.!#$%&'+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)$/;
      const password_pattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[A-Za-z\d@$!%*?&]{8,}$/;
    
      if (!signIn.name) {
        error.name = "Name should not be empty";
      } else if (!name_pattern.test(signIn.name)) {
        error.name = "Name should only contain alphabets, spaces, periods, and hyphens";
      } else {
        error.name = "";
      }
    
      // Check if email is empty
      if (!signIn.email) {
        error.email = "Email should not be empty";
      } else if (!email_pattern.test(signIn.email)) {
        error.email = "Email format is invalid";
      } else {
        error.email = "";
      }
    
      // Check if password is empty
      if (!signIn.password) {
        error.password = "Password should not be empty";
      } else if (!password_pattern.test(signIn.password)) {
        error.password = "Password did not match requirements";
      } else {
        error.password = "";
      }
    
      return error; // Return the error object
    }


    