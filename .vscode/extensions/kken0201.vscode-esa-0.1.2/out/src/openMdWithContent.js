'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
const vscode = require("vscode");
function openMdWithContent(content) {
    return vscode.workspace.openTextDocument({ language: 'markdown' }).then(doc => {
        return vscode.window.showTextDocument(doc);
    }).then(editor => {
        let startPos = new vscode.Position(1, 0);
        editor.edit(edit => {
            edit.insert(startPos, content);
        });
    });
}
exports.default = openMdWithContent;
//# sourceMappingURL=openMdWithContent.js.map