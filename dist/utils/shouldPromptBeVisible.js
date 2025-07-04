"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _default = function _default(state, props) {
  var isNotReadOnly = !props.readOnly;
  var shouldHideWhenDisabled = props.hidePromptWhenDisabled;
  var shouldDisableOnProcess = props.disableOnProcess;
  var isDisabled = props.disabled;
  var isProcessing = state.processing; // If prompt should be hidden when disabled...

  /* istanbul ignore if: Covered by interactivity tests */

  if (shouldHideWhenDisabled) {
    if (isDisabled) return false; // ...hide on explicit prop-controlled disable...
    else if (shouldDisableOnProcess && isProcessing) return false; // ...or when disabling on process is enabled and terminal is processing.
  } // If no above conditions were met, the read-only state controls whether the prompt should be visible or not


  return isNotReadOnly;
};

exports["default"] = _default;