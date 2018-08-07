"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const vscode_1 = require("vscode");
class ShowCommandsController {
    initialize() {
        vscode_1.window.showQuickPick([
            {
                label: 'Insert Snippet',
                description: '⇧⌥I - Find and insert a Cacher snippet',
                picked: true
            },
            {
                label: 'Create Snippet',
                description: '⇧⌥C - Create a Cacher snippet from file or selection'
            },
            {
                label: 'Open Snippet in App',
                description: '⇧⌥O - Open a Cacher snippet in web app'
            },
            {
                label: 'Open Snippet Page',
                description: '⇧⌥P - Open the page for a Cacher snippet'
            },
            {
                label: 'Refresh Snippets',
                description: '⇧⌥R - Refresh Cacher snippets and labels'
            },
            {
                label: 'Setup',
                description: 'Setup a new Cacher user'
            }
        ], {
            placeHolder: 'Select Action'
        }).then((item) => {
            if (!item) {
                return;
            }
            switch (item.label) {
                case 'Insert Snippet': {
                    vscode_1.commands.executeCommand('cacher.insertSnippet');
                    break;
                }
                case 'Create Snippet': {
                    vscode_1.commands.executeCommand('cacher.createSnippet');
                    break;
                }
                case 'Open Snippet in App': {
                    vscode_1.commands.executeCommand('cacher.openSnippet');
                    break;
                }
                case 'Open Snippet Page': {
                    vscode_1.commands.executeCommand('cacher.openSnippetPage');
                    break;
                }
                case 'Refresh Snippets': {
                    vscode_1.commands.executeCommand('cacher.refresh');
                    break;
                }
                case 'Setup': {
                    vscode_1.commands.executeCommand('cacher.setup');
                    break;
                }
            }
        });
    }
}
exports.ShowCommandsController = ShowCommandsController;
//# sourceMappingURL=show-commands.controller.js.map