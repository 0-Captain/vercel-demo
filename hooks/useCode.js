import { useState } from "react";

let _code = null;
const cbArray = [];

function setCode(val) {
  _code = val;
  cbArray.forEach((i) => i(val));
}

export const useCode = (cb) => {
  if (typeof cb == "function") {
    cbArray.push(cb);
  }
  return setCode;
};
