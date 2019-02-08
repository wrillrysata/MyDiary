

/**
 * Validates input
 * @param {userData} userData
 * @returns {error} The result of validation
 */
export default function validator(userData) {
  const error = {};
  const { username, email, password } = userData;
  let hasError = false;

  if (email === '') {
    hasError = true;
    error.mailError = 'Email field cannot be empty';
  }

  if (username.length < 3) {
    hasError = true;
    error.userError = 'Username needs to be atleast 5 characters long';
  }


  if (password === '') {
    hasError = true;
    error.passError = 'Password field cannot be empty';
  }
  return error;
}
