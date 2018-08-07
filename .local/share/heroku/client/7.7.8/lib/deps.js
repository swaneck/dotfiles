"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    get fs() {
        return fetch('fs-extra');
    },
    get HTTP() {
        return fetch('http-call').HTTP;
    },
    get file() {
        return fetch('./file');
    },
    get UserConfig() {
        return fetch('./user_config').default;
    },
};
const cache = {};
function fetch(s) {
    if (!cache[s]) {
        cache[s] = require(s);
    }
    return cache[s];
}
