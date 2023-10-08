"use strict";
const burger = document.querySelector('#burger');
const menu = document.querySelector('#menu');
burger === null || burger === void 0 ? void 0 : burger.addEventListener('click', () => {
    if (menu != null) {
        if (menu.classList.contains('hidden')) {
            menu.classList.remove('hidden');
        }
        else {
            menu.classList.add('hidden');
        }
    }
});
