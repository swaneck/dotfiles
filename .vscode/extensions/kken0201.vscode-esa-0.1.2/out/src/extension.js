'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
const vscode = require("vscode");
const openPost_1 = require("./openPost");
const createPost_1 = require("./createPost");
const updatePost_1 = require("./updatePost");
const config = vscode.workspace.getConfiguration('esa');
function activate(context) {
    console.log('"vscode-esa" is now active!');
    let openPostCMD = vscode.commands.registerCommand('extension.openPost', () => {
        openPost_1.default();
    });
    let createPostCMD = vscode.commands.registerCommand('extension.createPost', () => {
        createPost_1.default();
    });
    let updatePostCMD = vscode.commands.registerCommand('extension.updatePost', () => {
        updatePost_1.default();
    });
    context.subscriptions.push(openPostCMD);
    context.subscriptions.push(createPostCMD);
    context.subscriptions.push(updatePostCMD);
}
exports.activate = activate;
function deactivate() {
}
exports.deactivate = deactivate;
//# sourceMappingURL=extension.js.map