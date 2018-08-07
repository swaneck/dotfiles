"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const vscode_1 = require("vscode");
const _ = require('lodash');
const request = require('request');
const util_1 = require("../util");
const filetypes_1 = require("../filetypes");
const config_1 = require("../config");
const store_1 = require("../store");
// 1 hour
const REFRESH_INTERVAL_TIME = 1000 * 60 * 60;
class SnippetsService {
    get initialized() {
        return this._initialized;
    }
    constructor() {
        this._initialized = false;
        this._statusItem =
            vscode_1.window.createStatusBarItem(vscode_1.StatusBarAlignment.Left, 10);
        this._statusItem.show();
        this._statusItem.command = 'cacher.showCommands';
        this._setStatusBarLoaded();
    }
    initialize() {
        this.fetchSnippets();
        // Just in case
        if (this._refreshInterval) {
            clearInterval(this._refreshInterval);
        }
        this._refreshInterval = setInterval(() => this.fetchSnippets(), REFRESH_INTERVAL_TIME);
    }
    fetchSnippets() {
        if (!util_1.credentialsExist()) {
            return;
        }
        this._setStatusBarLoading();
        request({
            method: 'GET',
            url: `${config_1.default.apiHost}/vscode/snippets`,
            headers: this._requestHeaders(),
            strictSSL: config_1.default.env === 'production'
        }, (error, response, body) => {
            if (error) {
                return;
            }
            let json = JSON.parse(body);
            store_1.default.personalLibrary = json.personalLibrary;
            this._setSnippets(json);
            this._setTeams(json);
            this._initialized = true;
            this._setStatusBarLoaded();
        });
    }
    createSnippet(fileContent, libraryGuid, title, description, filename, isPrivate, labelGuids, team) {
        if (!util_1.credentialsExist()) {
            return;
        }
        this._setStatusBarLoading();
        let filetype = filetypes_1.getModeForPath(filename).mode.split('/')[2];
        let body = {
            snippet: {
                title,
                description,
                isPrivate,
                files: [
                    {
                        filename,
                        content: fileContent,
                        filetype,
                        isShared: false
                    }
                ]
            },
            labels: labelGuids,
            libraryGuid
        };
        request({
            method: 'POST',
            url: `${config_1.default.apiHost}/vscode/snippets`,
            headers: this._requestHeaders(),
            body,
            json: true,
            strictSSL: config_1.default.env === 'production'
        }, (error, response, body) => {
            if (body.status >= 400) {
                vscode_1.window.showErrorMessage('There was an error creating the snippet. Please try again.');
            }
            this._setStatusBarLoaded();
            let snippet = body.snippet;
            vscode_1.window.showInformationMessage(`New snippet "${snippet.title}" created.`, ...['Open in Cacher', 'Open snippet page']).then((selection) => {
                if (selection === 'Open in Cacher') {
                    let uri = team
                        ? vscode_1.Uri.parse(`${config_1.default.appHost}/enter?action=goto_team_snippet&t=${team.guid}&s=${snippet.guid}`)
                        : vscode_1.Uri.parse(`${config_1.default.appHost}/enter?action=goto_snippet&s=${snippet.guid}`);
                    vscode_1.commands.executeCommand('vscode.open', uri);
                }
                else if (selection === 'Open snippet page') {
                    vscode_1.commands.executeCommand('vscode.open', vscode_1.Uri.parse(`${config_1.default.snippetsHost}/snippet/${snippet.guid}`));
                }
            });
            // Update library with new snippet
            this.fetchSnippets();
        });
    }
    dispose() {
        this._statusItem.dispose();
        clearInterval(this._refreshInterval);
    }
    _setSnippets(response) {
        let labels = response.personalLibrary.labels;
        let personalSnippets = _.map(response.personalLibrary.snippets, (snippet) => {
            // Personal snippet
            let newSnippet = _.clone(snippet);
            newSnippet.team = null;
            // Find labels
            newSnippet.labels = this._snippetLabels(labels, snippet);
            return newSnippet;
        });
        let teamSnippets = [];
        _.each(response.teams, (team) => {
            let labels = team.library.labels;
            _.each(team.library.snippets, (snippet) => {
                let newSnippet = _.clone(snippet);
                newSnippet.team = team;
                newSnippet.labels = this._snippetLabels(labels, snippet);
                teamSnippets.push(newSnippet);
            });
        });
        store_1.default.snippets = personalSnippets.concat(teamSnippets);
    }
    _snippetLabels(labels, snippet) {
        return _.map(_.filter(labels, (label) => {
            return _.find(label.snippets, { guid: snippet.guid });
        }), (label) => label.title);
    }
    _setTeams(response) {
        store_1.default.teams = response.teams;
    }
    _setStatusBarLoading() {
        this._statusItem.text = '$(sync~spin) Snippets';
    }
    _setStatusBarLoaded() {
        this._statusItem.text = '</> Snippets';
    }
    _requestHeaders() {
        let credentials = util_1.getCredentials();
        return {
            'X-Api-Key': credentials.key,
            'X-Api-Token': credentials.token
        };
    }
}
exports.SnippetsService = SnippetsService;
//# sourceMappingURL=snippets.service.js.map