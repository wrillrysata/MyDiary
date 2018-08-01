
export default{
  userSignupValidation: (req, res, next) => {
    const {
      userName, email, password, confirmPassword
    } = req.body;
    if (!userName || !email || !password) {
      return res.json({ message: 'Please fill in all fields' });
    }
    if (email.trim() === '' || (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/).test(email) === false) {
      return res.json({ message: 'Invalid email' });
    }
    if (password !== confirmPassword) {
      return res.json({ message: 'Passwords do not match' });
    }
    next();
  },
};
