"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _bcrypt = _interopRequireDefault(require("bcrypt"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/** help from laura */
var _default = {
  /**
   * @description Hash the password
   * @function hashPassword
   * @param {string} password
   * @returns {object} hashed
   */
  hashPassword: function hashPassword(password) {
    return _bcrypt.default.hashSync(password, _bcrypt.default.genSaltSync(8));
  },

  /**
   * @description Compare the hashed password
   * @function comparePassword
   * @param {string} password
   * @param {string} hashedPassword
   * @returns {object} hashed
   */
  comparePassword: function comparePassword(password, hashedPassword) {
    return _bcrypt.default.compareSync(password, hashedPassword);
  }
};
exports.default = _default;