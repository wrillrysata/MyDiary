"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

/* eslint-disable */
var _default = {
  userSignupValidation: function userSignupValidation(req, res, next) {
    var _req$body = req.body,
        userName = _req$body.userName,
        email = _req$body.email,
        password = _req$body.password;

    if (userName === '' || email === '') {
      return res.json({
        message: 'Please fill in all fields'
      });
    } else if (typeof email != 'string') {
      return res.json({
        message: 'Invalid email'
      });
    } else if (password != confirmPassword) {
      return res.json({
        message: 'Passwords do not match'
      });
    }

    return next();
  }
};
exports.default = _default;