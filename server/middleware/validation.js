
export default{
  userSignupValidation: (req, res, next) => {
    const {
      userName, email, password, confirmPassword
    } = req.body;
    if (!userName || !email || !password) {
      return res.json({ message: 'Please fill in all fields'});
    }
    if (typeof email !== 'string') {
      return res.json({ message: 'Invalid email' });
    }
    if (password !== confirmPassword) {
      return res.json({ message: 'Passwords do not match' });
    }
    next();
  },
};
