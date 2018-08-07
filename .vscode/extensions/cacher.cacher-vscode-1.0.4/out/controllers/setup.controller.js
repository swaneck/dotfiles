"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const vscode_1 = require("vscode");
const request = require('request');
const config_1 = require("../config");
const util_1 = require("../util");
const store_1 = require("../store");
class SetupController {
    constructor(snippetsService) {
        this.snippetsService = snippetsService;
    }
    initialize() {
        if (!util_1.credentialsExist()) {
            this.promptForSetup();
        }
        else {
            let credentials = util_1.getCredentials();
            this._validateCredentials(credentials.key, credentials.token).then(() => {
                console.log('Cacher: Credentials valid');
            }).catch(() => { });
        }
    }
    promptForSetup() {
        vscode_1.window.showInformationMessage('Set up your Cacher credentials to use snippets.', ...['Setup Cacher']).then((selection) => {
            if (selection === 'Setup Cacher') {
                this.promptForCredentials();
            }
        });
    }
    checkCredentials() {
        if (!util_1.credentialsExist()) {
            this.promptForCredentials();
        }
    }
    promptForCredentials() {
        vscode_1.window.showInformationMessage('Open Cacher to view your user credentials.', ...['View credentials']).then((selection) => {
            if (selection === 'View credentials') {
                vscode_1.commands.executeCommand('vscode.open', vscode_1.Uri.parse(`${config_1.default.appHost}/enter?action=view_api_creds`));
            }
        });
        // Prompt user for API key/token
        vscode_1.window.showInputBox({
            ignoreFocusOut: true,
            password: true,
            prompt: 'Enter your Cacher API key.',
            validateInput: this._validatePresentValue
        }).then((apiKey) => {
            vscode_1.window.showInputBox({
                ignoreFocusOut: true,
                password: true,
                prompt: 'Enter your Cacher API token.',
                validateInput: this._validatePresentValue
            }).then((apiToken) => {
                if (apiKey && apiToken) {
                    this._validateCredentials(apiKey, apiToken).then(() => {
                        vscode_1.window.showInformationMessage('Successfully set up Cacher.');
                    }).catch(() => { });
                }
                else {
                    this._showInputError();
                }
            });
        });
    }
    dispose() {
        this.snippetsService.dispose();
    }
    _validateCredentials(apiKey, apiToken) {
        return new Promise((resolve, reject) => {
            request({
                method: 'POST',
                url: `${config_1.default.apiHost}/vscode/validate`,
                headers: {
                    'X-Api-Key': apiKey,
                    'X-Api-Token': apiToken
                },
                strictSSL: config_1.default.env === 'production'
            }, (error, response, body) => {
                if (response.statusCode === 204) {
                    store_1.default.loggedIn = true;
                    util_1.saveCredentials(apiKey, apiToken);
                    resolve();
                    this.snippetsService.initialize();
                }
                else if (response.statusCode === 403) {
                    let jsonResp = JSON.parse(body);
                    if (jsonResp.error_code === 'NoPermission') {
                        this._showInputError();
                    }
                    else {
                        this._showUpgradeError();
                    }
                    reject();
                }
                else {
                    this._showInputError();
                    reject();
                }
            });
        });
    }
    _showUpgradeError() {
        vscode_1.window.showErrorMessage('Upgrade to the Pro or Team plan to use VSCode with Cacher.', ...['View plans']).then((selection) => {
            if (selection === 'View plans') {
                vscode_1.commands.executeCommand('vscode.open', vscode_1.Uri.parse(`${config_1.default.appHost}/enter?action=view_plans`));
                this.promptForSetup();
            }
        });
    }
    _showInputError() {
        vscode_1.window.showErrorMessage('Cacher API key or token not valid.', ...['Enter credentials']).then((selection) => {
            if (selection === 'Enter credentials') {
                this.promptForCredentials();
            }
        });
    }
    _validatePresentValue(value) {
        return util_1.validateValue('Please enter API key.', value);
    }
}
exports.SetupController = SetupController;
//# sourceMappingURL=setup.controller.js.map