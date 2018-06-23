"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs = require("fs");
const os = require("os");
const vscode_1 = require("vscode");
class SetupController {
    constructor() {
        this._cacherDir = `${os.homedir()}/.cacher`;
        this._credentialsFile = `${this._cacherDir}/credentials.json`;
    }
    /**
     * Ensures that the user has the API token/key set properly.
     */
    checkCredentials() {
        if (!fs.existsSync(this._credentialsFile)) {
            this.promptForCredentials();
        }
    }
    promptForCredentials() {
        if (!fs.existsSync(this._cacherDir)) {
            fs.mkdirSync(this._cacherDir);
        }
        vscode_1.window.showInformationMessage('Open Cacher to view your user credentials.', ...['View credentials']).then((selection) => {
            if (selection === 'View credentials') {
                vscode_1.commands.executeCommand('vscode.open', vscode_1.Uri.parse('https://app.cacher.io/enter?action=view_api_creds'));
            }
        });
        // Prompt user for API key/token
        vscode_1.window.showInputBox({
            ignoreFocusOut: true,
            password: true,
            prompt: 'Enter your Cacher user API key.',
            validateInput: this._validatePresentValue
        }).then((apiKey) => {
            vscode_1.window.showInputBox({
                ignoreFocusOut: true,
                password: true,
                prompt: 'Enter your Cacher user API token.',
                validateInput: this._validatePresentValue
            }).then((apiToken) => {
                if (apiKey && apiToken) {
                }
                else {
                    this._showInputError();
                }
            });
        });
    }
    _showInputError() {
        vscode_1.window.showErrorMessage('Cacher API key or token not valid.', ...['Try again']).then((selection) => {
            if (selection === 'Try again') {
                this.promptForCredentials();
            }
        });
    }
    _validatePresentValue(value) {
        if (!value || value.trim() !== '') {
            return 'Please enter API key.';
        }
        return null;
    }
}
exports.SetupController = SetupController;
//# sourceMappingURL=setup.controller.js.map