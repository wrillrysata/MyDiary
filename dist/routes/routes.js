"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _userController = _interopRequireDefault(require("../controllers/userController"));

var _authenticate = _interopRequireDefault(require("../middleware/authenticate"));

var _entryController = _interopRequireDefault(require("../controllers/entryController"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import validation from '../middleware/validation';
var router = function router(app) {
  app.get('/', function (req, res) {
    res.status(200).send('/index.html');
  });
  app.get('/api/v1/entries', _authenticate.default.checkToken, _entryController.default.getAll);
  app.get('/api/v1/entries/:id', _authenticate.default.checkToken, _entryController.default.getOne);
  app.post('/api/v1/entries', _authenticate.default.checkToken, _entryController.default.addNew);
  app.put('/api/v1/entries', _authenticate.default.checkToken, _entryController.default.updateEntry);
  app.delete('/api/v1/entries/:id', _authenticate.default.checkToken, _entryController.default.deleteEntry);
  /** Auth routes */

  app.post('/api/v1/auth/signup', _userController.default.findUser, _userController.default.createUser);
  app.post('/api/v1/auth/login', _userController.default.loginUser);
};

var _default = router;
exports.default = _default;