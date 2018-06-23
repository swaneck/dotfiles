'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
const vscode = require("vscode");
const esaService_1 = require("./esaService");
const config = vscode.workspace.getConfiguration('esa');
function getPosts(query = '') {
    if (!config.teamName || !config.token) {
        vscode.window.showInformationMessage('Check readme for details.');
        vscode.window.showWarningMessage('Please set the token & API url first');
        return;
    }
    vscode.window.setStatusBarMessage('Requesting posts .....', 2);
    const esaClient = new esaService_1.default(config.token, config.teamName);
    return esaClient.getPosts(query)
        .then(res => res)
        .catch(err => console.log(err));
}
exports.default = getPosts;
//# sourceMappingURL=getPosts.js.map