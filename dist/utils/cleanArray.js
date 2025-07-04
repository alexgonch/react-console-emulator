"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = cleanArray;

/**
 * Workaround to clean an array from 'ghost items'.
 * @param {Array} dirtyArray
 */
function cleanArray(dirtyArray) {
  var newArray = Array.from(dirtyArray);
  return newArray.filter(function (i) {
    return i !== undefined;
  });
}