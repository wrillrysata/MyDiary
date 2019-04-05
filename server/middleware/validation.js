
export default{
  userSignupValidation: (req, res) => {
    const {
      userName, email, password, confirmPassword
    } = req.body;
    if (!userName || !email || !password || !confirmPassword) {
      return res.status(400).json({ message: 'Please fill in all fields' });
    }
    if (email.trim() === '' || (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/).test(email) === false) {
      return res.status(400).json({ message: 'Invalid email' });
    }
    if (password !== confirmPassword) {
      return res.status(400).json({ message: 'Passwords do not match' });
    }
  },
};
