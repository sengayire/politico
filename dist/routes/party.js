"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _party = _interopRequireDefault(require("../controllers/party"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var router = _express["default"].Router(); // Political party APIs


router.post('/', _party["default"].create);
router.get('/', _party["default"].getAll);
router.get('/:id', _party["default"].getOne);
router["delete"]('/:id', _party["default"].deleteOne);
router.patch('/:id/name', _party["default"].editOne);
var _default = router;
exports["default"] = _default;