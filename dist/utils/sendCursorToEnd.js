"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _default = function _default(inputElement) {
  if (inputElement) {
    var cursorStart = inputElement.selectionStart;
    var cursorEnd = inputElement.selectionEnd; // Decouple execution for 2 ms (1 doesn't work for... Reasons) in order to properly send cursor to end

    setTimeout(function () {
      return inputElement.setSelectionRange(cursorStart, cursorEnd);
    }, 10);
  }
};

exports["default"] = _default;