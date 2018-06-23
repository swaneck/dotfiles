"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const vscode_1 = require("vscode");
const _1 = require("./");
class InsertSnippetController extends _1.BaseSnippetsController {
    initialize() {
        super.initialize();
        this.showQuickPick('Find snippet to insert').then((item) => {
            if (item && vscode_1.window.activeTextEditor) {
                vscode_1.window.activeTextEditor.insertSnippet(new vscode_1.SnippetString(item.detail));
            }
        });
    }
}
exports.InsertSnippetController = InsertSnippetController;
//# sourceMappingURL=insert-snippet.controller.js.map