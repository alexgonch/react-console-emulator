"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireWildcard(require("react"));

var _reactInnerHtml = _interopRequireDefault(require("react-inner-html"));

var _defaults = _interopRequireDefault(require("defaults"));

var _TerminalMessage = _interopRequireDefault(require("./defs/types/TerminalMessage"));

var _TerminalMessage2 = _interopRequireDefault(require("./defs/styles/TerminalMessage"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var TerminalMessage = /*#__PURE__*/function (_Component) {
  (0, _inherits2["default"])(TerminalMessage, _Component);

  var _super = _createSuper(TerminalMessage);

  function TerminalMessage() {
    (0, _classCallCheck2["default"])(this, TerminalMessage);
    return _super.apply(this, arguments);
  }

  (0, _createClass2["default"])(TerminalMessage, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          content = _this$props.content,
          style = _this$props.style,
          className = _this$props.className;
      var styles = {
        message: (0, _defaults["default"])(style, _TerminalMessage2["default"])
      };
      return this.props.dangerMode && typeof content === 'string' ? /*#__PURE__*/_react["default"].createElement("div", (0, _extends2["default"])({
        className: className,
        style: styles.message
      }, (0, _reactInnerHtml["default"])(content))) : /*#__PURE__*/_react["default"].createElement("div", {
        className: className,
        style: styles.message
      }, content);
    }
  }]);
  return TerminalMessage;
}(_react.Component);

exports["default"] = TerminalMessage;
(0, _defineProperty2["default"])(TerminalMessage, "propTypes", _TerminalMessage["default"]);