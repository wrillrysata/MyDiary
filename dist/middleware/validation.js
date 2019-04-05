"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _default = {
  userSignupValidation: function userSignupValidation(req, res) {
    var _req$body = req.body,
        userName = _req$body.userName,
        email = _req$body.email,
        password = _req$body.password,
        confirmPassword = _req$body.confirmPassword;

    if (!userName || !email || !password || !confirmPassword) {
      return res.status(400).json({
        message: 'Please fill in all fields'
      });
    }

    if (email.trim() === '' || /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email) === false) {
      return res.status(400).json({
        message: 'Invalid email'
      });
    }

    if (password !== confirmPassword) {
      return res.status(400).json({
        message: 'Passwords do not match'
      });
    }
  }
};
exports.default = _default;