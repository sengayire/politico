"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _office = _interopRequireDefault(require("../data/office"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var office = {
  create: function () {
    var _create = _asyncToGenerator(
    /*#__PURE__*/
    regeneratorRuntime.mark(function _callee(req, res) {
      var _req$body, id, type, name;

      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _req$body = req.body, id = _req$body.id, type = _req$body.type, name = _req$body.name;

              if (!type || !name) {
                res.status(200).send({
                  status: 400,
                  message: 'please provide all information'
                });
              } else {
                try {
                  res.status(200).send({
                    status: 200,
                    message: 'office created successfuly',
                    data: {
                      id: id,
                      type: type,
                      name: name
                    }
                  });
                } catch (error) {
                  res.send({
                    status: 400,
                    error: error
                  });
                }
              }

            case 2:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, this);
    }));

    function create(_x, _x2) {
      return _create.apply(this, arguments);
    }

    return create;
  }(),
  // get all available political office
  getAll: function () {
    var _getAll = _asyncToGenerator(
    /*#__PURE__*/
    regeneratorRuntime.mark(function _callee2(req, res) {
      return regeneratorRuntime.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              try {
                res.status(200).send({
                  status: 200,
                  data: _office["default"]
                });
              } catch (error) {
                res.status(404).send({
                  status: 404,
                  error: error
                });
              }

            case 1:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, this);
    }));

    function getAll(_x3, _x4) {
      return _getAll.apply(this, arguments);
    }

    return getAll;
  }(),
  // get a specific office
  getOne: function () {
    var _getOne = _asyncToGenerator(
    /*#__PURE__*/
    regeneratorRuntime.mark(function _callee3(req, res) {
      var id, records, row;
      return regeneratorRuntime.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              id = req.params.id.id;
              records = [_office["default"]];
              row = records.find(function (k) {
                return k.id === id;
              });

              if (row.length >= 1) {
                try {
                  res.status(200).send({
                    status: 200,
                    message: 'office has been found',
                    data: row[0]
                  });
                } catch (error) {
                  res.status(400).send({
                    error: error
                  });
                }
              } else {
                records.status(404).send({
                  status: 404,
                  message: 'Office not found!!!'
                });
              }

            case 4:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3, this);
    }));

    function getOne(_x5, _x6) {
      return _getOne.apply(this, arguments);
    }

    return getOne;
  }()
};
var _default = office;
exports["default"] = _default;