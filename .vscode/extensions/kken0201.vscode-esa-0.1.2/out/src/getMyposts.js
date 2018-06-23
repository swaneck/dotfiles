"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const vscode = require("vscode");
const getPosts_1 = require("./getPosts");
const config = vscode.workspace.getConfiguration('esa');
function getMyPosts() {
    if (!config.myName) {
        vscode.window.showWarningMessage("Please set the Your ID");
    }
    getPosts_1.default(`@${config.myName}`);
}
exports.default = getMyPosts;
//# sourceMappingURL=getMyPosts.js.map