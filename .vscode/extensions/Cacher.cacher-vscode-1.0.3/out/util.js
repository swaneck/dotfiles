"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs = require("fs");
const os = require("os");
const CACHER_DIR = `${os.homedir()}/.cacher`;
const CREDENTIALS_FILE = `${CACHER_DIR}/credentials.json`;
function credentialsExist() {
    return fs.existsSync(CREDENTIALS_FILE);
}
exports.credentialsExist = credentialsExist;
function getCredentials() {
    if (fs.existsSync(CREDENTIALS_FILE)) {
        const json = JSON.parse(fs.readFileSync(CREDENTIALS_FILE).toString());
        return {
            key: json.key,
            token: json.token
        };
    }
    return { key: '', token: '' };
}
exports.getCredentials = getCredentials;
function saveCredentials(key, token) {
    if (!fs.existsSync(CACHER_DIR)) {
        fs.mkdirSync(CACHER_DIR);
    }
    const json = { key, token };
    fs.writeFileSync(CREDENTIALS_FILE, JSON.stringify(json));
}
exports.saveCredentials = saveCredentials;
function validateValue(message, value) {
    if (!value || value.trim() === '') {
        return message;
    }
    return null;
}
exports.validateValue = validateValue;
//# sourceMappingURL=util.js.map