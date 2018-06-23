'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
const vscode = require("vscode");
const esaService_1 = require("./esaService");
const postConverter_1 = require("./postConverter");
const config = vscode.workspace.getConfiguration('esa');
function updatePost() {
    if (vscode.window.activeTextEditor && vscode.window.activeTextEditor.document.languageId === 'markdown') {
        const content = postConverter_1.exactMetaData(vscode.window.activeTextEditor.document.getText());
        console.log(content);
        if (content.number !== 0 && content.name !== '') {
            const postData = Object.assign({}, content);
            const esaClient = new esaService_1.default(config.token, config.teamName);
            esaClient.updatePost(postData)
                .catch(res => console.log(res));
        }
        else {
            vscode.window.showWarningMessage('Not found required Metadata from this Markdown file.');
        }
    }
    else {
        vscode.window.showWarningMessage('Markdown file is not open. Please open and focus the Markdown file you want to update.');
    }
}
exports.default = updatePost;
//# sourceMappingURL=updatePost.js.map