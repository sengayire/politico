"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _partyData = _interopRequireDefault(require("../data/partyData"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var party = {
  // api to create creating a party
  create: function () {
    var _create = _asyncToGenerator(
    /*#__PURE__*/
    regeneratorRuntime.mark(function _callee(req, res) {
      var _req$body, id, name, hqAddress, logoUrl;

      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _req$body = req.body, id = _req$body.id, name = _req$body.name, hqAddress = _req$body.hqAddress, logoUrl = _req$body.logoUrl;

              if (!name || !hqAddress || !logoUrl) {
                res.send({
                  status: 400,
                  message: 'please fill into all information'
                });
              } else {
                try {
                  res.send({
                    status: 200,
                    message: 'Party created successfuly',
                    data: [{
                      id: id,
                      name: name,
                      hqAddress: hqAddress,
                      logoUrl: logoUrl
                    }]
                  });
                } catch (error) {
                  res.send({
                    status: 404,
                    error: 'can\'t create table'
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
  // api to get all political parties
  getAll: function () {
    var _getAll = _asyncToGenerator(
    /*#__PURE__*/
    regeneratorRuntime.mark(function _callee2(req, res) {
      return regeneratorRuntime.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              try {
                res.send({
                  status: 200,
                  data: _partyData["default"]
                });
              } catch (e) {
                res.send({
                  status: 404,
                  error: 'party can\'t be created'
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
  // get a specific party by id
  getOne: function () {
    var _getOne = _asyncToGenerator(
    /*#__PURE__*/
    regeneratorRuntime.mark(function _callee3(req, res) {
      var Id, records, row;
      return regeneratorRuntime.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              Id = req.params.id.Id;
              records = [_partyData["default"]];
              row = records.find(function (k) {
                return k.id === Id;
              });

              if (row.length !== 0) {
                try {
                  res.send({
                    status: 200,
                    message: 'record found!!!',
                    data: row
                  });
                } catch (error) {
                  res.send({
                    error: error
                  });
                }
              } else {
                res.status(400).send({
                  status: 400,
                  message: 'party not found!!!'
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
  }(),
  // delete a specific political party by id
  deleteOne: function () {
    var _deleteOne = _asyncToGenerator(
    /*#__PURE__*/
    regeneratorRuntime.mark(function _callee4(req, res) {
      var id, records, row;
      return regeneratorRuntime.wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              id = req.params.id.id;
              records = [_partyData["default"]];
              row = records.find(function (k) {
                return k.id === id;
              });

              if (row.length >= 1) {
                try {
                  res.status(200).send({
                    status: 200,
                    message: 'political party has been deleted successfull',
                    data: row[0]
                  });
                } catch (error) {
                  res.status(404).send({
                    status: 404,
                    error: error
                  });
                }
              } else {
                res.status(400).send({
                  status: 400,
                  message: 'party not deleted,plesse try again!!!'
                });
              }

            case 4:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4, this);
    }));

    function deleteOne(_x7, _x8) {
      return _deleteOne.apply(this, arguments);
    }

    return deleteOne;
  }(),
  editOne: function () {
    var _editOne = _asyncToGenerator(
    /*#__PURE__*/
    regeneratorRuntime.mark(function _callee5(req, res) {
      var name, Id, records, row;
      return regeneratorRuntime.wrap(function _callee5$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              name = req.body.name;
              Id = req.params.id.Id;
              records = [_partyData["default"]];
              row = records.find(function (k) {
                return k.id === Id;
              });

              if (row.length >= 1) {
                try {
                  res.status(200).send({
                    status: 200,
                    message: 'party edited successfuly',
                    data: [{
                      name: name
                    }]
                  });
                } catch (error) {
                  res.status(400).send({
                    status: 400,
                    error: error
                  });
                }
              } else {
                res.status(404).send({
                  status: 200,
                  message: 'party has not been edited'
                });
              }

            case 5:
            case "end":
              return _context5.stop();
          }
        }
      }, _callee5, this);
    }));

    function editOne(_x9, _x10) {
      return _editOne.apply(this, arguments);
    }

    return editOne;
  }()
};
var _default = party;
exports["default"] = _default;