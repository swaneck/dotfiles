"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const vscode_1 = require("vscode");
const _1 = require("./");
const config_1 = require("../config");
class OpenSnippetPageController extends _1.BaseSnippetsController {
    initialize() {
        super.initialize();
        this.showQuickPick('Find snippet to open page').then((item) => {
            if (item) {
                vscode_1.commands.executeCommand('vscode.open', vscode_1.Uri.parse(`${config_1.default.snippetsHost}/snippet/${item.snippet.guid}`));
            }
        });
    }
}
exports.OpenSnippetPageController = OpenSnippetPageController;
//# sourceMappingURL=open-snippet-page.controller.js.map