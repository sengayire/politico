"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _office = _interopRequireDefault(require("../controllers/office"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var officeRoute = _express["default"].Router(); // Political party APIs


officeRoute.post('/', _office["default"].create);
officeRoute.get('/', _office["default"].getAll);
officeRoute.get('/:id', _office["default"].getOne);
var _default = officeRoute;
exports["default"] = _default;