"use strict";
import isHappyNumber from "./isHappyNumber.js";
let i_1 = document.querySelector('#i_1');
let span = document.querySelector('span');
i_1.addEventListener('input', () => span.textContent = isHappyNumber(i_1.value));