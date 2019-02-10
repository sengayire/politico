"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _party = _interopRequireDefault(require("./routes/party"));

var _office = _interopRequireDefault(require("./routes/office"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var app = (0, _express["default"])();
app.use(_express["default"].json());
app.use(_express["default"].urlencoded({
  extended: true
}));
app.get('/', function (req, res) {
  res.send({
    message: 'Welcome to my API'
  });
}); // political parties API

app.use('/api/v1/parties', _party["default"]); // political Office API

app.use('/api/v1/offices', _office["default"]); // assining a port for runing node

var port = process.env.PORT || 3000;
app.listen(port, function () {
  console.log("Server listening on port: ".concat(port));
});
var _default = app;
exports["default"] = _default;