"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const vscode_1 = require("vscode");
const _1 = require("./");
const config_1 = require("../config");
class OpenSnippetController extends _1.BaseSnippetsController {
    initialize() {
        super.initialize();
        this.showQuickPick('Find snippet to open in app').then((item) => {
            if (item) {
                let uri = item.snippet.team
                    ? vscode_1.Uri.parse(`${config_1.default.appHost}/enter?action=goto_team_snippet&t=${item.snippet.team.guid}&s=${item.snippet.guid}`)
                    : vscode_1.Uri.parse(`${config_1.default.appHost}/enter?action=goto_snippet&s=${item.snippet.guid}`);
                vscode_1.commands.executeCommand('vscode.open', uri);
            }
        });
    }
}
exports.OpenSnippetController = OpenSnippetController;
//# sourceMappingURL=open-snippet.controller.js.map