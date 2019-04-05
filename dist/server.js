"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = _interopRequireDefault(require("express"));

var _bodyParser = _interopRequireDefault(require("body-parser"));

var _path = _interopRequireDefault(require("path"));

var _cors = _interopRequireDefault(require("cors"));

var _routes = _interopRequireDefault(require("./routes/routes"));

var _CreateTables = _interopRequireDefault(require("./model/CreateTables"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PORT = process.env.PORT || 2000;
var app = (0, _express.default)();
app.use(_express.default.static('dist'));
app.get('/', function (req, res) {
  res.sendfile('index.html');
});
app.use(_bodyParser.default.json());
app.use((0, _cors.default)());
app.use(_bodyParser.default.urlencoded({
  extended: true
}));
(0, _routes.default)(app);
new _CreateTables.default().run(); // returns 404 for unknown routes

app.all('/api*', function (req, res) {
  res.status(404).json({
    message: 'The URL you entered does not exist'
  });
});
app.get('/*', function (req, res) {
  res.sendFile(_path.default.join(__dirname, 'index.html'));
});
app.listen(PORT, function () {
  console.log("listening on port ".concat(PORT));
});
var _default = app;
exports.default = _default;