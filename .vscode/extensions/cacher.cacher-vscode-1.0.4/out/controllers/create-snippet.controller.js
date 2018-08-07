"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const vscode_1 = require("vscode");
const path = require("path");
const store_1 = require("../store");
const util_1 = require("../util");
const _ = require('lodash');
class CreateSnippetController {
    constructor(setupController, snippetsService) {
        this.setupController = setupController;
        this.snippetsService = snippetsService;
        this._fileContent = '';
        this._libraryGuid = store_1.default.personalLibrary.guid;
        this._title = '';
        this._description = '';
        this._filename = '';
        this._isPrivate = true;
        this._labelGuids = [];
        this._team = null;
    }
    initialize() {
        if (!store_1.default.loggedIn) {
            this.setupController.initialize();
        }
        if (!vscode_1.window.activeTextEditor) {
            return;
        }
        if (!this.snippetsService.initialized) {
            return;
        }
        let editor = vscode_1.window.activeTextEditor;
        let text = editor.document.getText();
        let selection = editor.selection;
        // Create from entire file if no selection
        let snippetText = text;
        if (selection) {
            let start = editor.document.offsetAt(selection.start);
            let end = editor.document.offsetAt(selection.end);
            // Must have content
            if (end > start) {
                snippetText = text.slice(start, end);
            }
        }
        if (snippetText.trim() === '') {
            vscode_1.window.showErrorMessage('Cannot create snippet without content.');
        }
        this._fileContent = snippetText;
        this._filename = path.basename(vscode_1.window.activeTextEditor.document.fileName);
        if (store_1.default.teams.length > 0) {
            this._promptForLibrary(() => {
                this._promptForTitle();
            });
        }
        else {
            this._promptForTitle();
        }
    }
    _promptForLibrary(callback) {
        let items = [
            {
                label: 'Personal Library',
                picked: true,
                guid: store_1.default.personalLibrary.guid,
                team: null
            }
        ];
        _.each(store_1.default.teams, (team) => {
            items.push({
                label: team.name,
                guid: team.library.guid,
                team: team
            });
        });
        return vscode_1.window.showQuickPick(items, { placeHolder: 'Select library for new snippet' }).then((item) => {
            if (!item) {
                vscode_1.window.showErrorMessage('Library selection required', ...['Try again']).then((selection) => {
                    if (selection === 'Try again') {
                        this._promptForLibrary(callback);
                    }
                });
                return;
            }
            this._libraryGuid = item.guid;
            this._team = item.team;
            callback();
        });
    }
    _promptForTitle() {
        vscode_1.window.showInputBox({
            ignoreFocusOut: true,
            prompt: 'Enter snippet title (required)',
            validateInput: (value) => {
                return util_1.validateValue('Enter snippet title', value);
            }
        }).then((title) => {
            if (!title) {
                vscode_1.window.showErrorMessage('Snippet title required', ...['Try again']).then((selection) => {
                    if (selection === 'Try again') {
                        this._promptForTitle();
                    }
                });
                return;
            }
            this._title = title;
            this._promptForDescription();
        });
    }
    _promptForDescription() {
        vscode_1.window.showInputBox({
            ignoreFocusOut: true,
            prompt: 'Enter snippet description (optional)'
        }).then((description) => {
            if (description) {
                this._description = description;
            }
            this._promptForFilename();
        });
    }
    _promptForFilename() {
        vscode_1.window.showInputBox({
            ignoreFocusOut: true,
            prompt: 'Enter filename (required)',
            value: this._filename,
            validateInput: (value) => {
                return util_1.validateValue('Enter filename', value);
            }
        }).then((filename) => {
            if (!filename) {
                vscode_1.window.showErrorMessage('Filename required', ...['Try again']).then((selection) => {
                    if (selection === 'Try again') {
                        this._promptForFilename();
                    }
                });
                return;
            }
            this._filename = filename;
            this._promptForPrivatePublic();
        });
    }
    _promptForPrivatePublic() {
        let items = [
            {
                label: 'Private',
                picked: true,
                isPrivate: true
            },
            {
                label: 'Public',
                isPrivate: false
            }
        ];
        vscode_1.window.showQuickPick(items, { placeHolder: 'Select snippet permission' }).then((item) => {
            if (!item) {
                vscode_1.window.showErrorMessage('Snippet permission required', ...['Try again']).then((selection) => {
                    if (selection === 'Try             n again') {
                        this._promptForPrivatePublic();
                    }
                });
                return;
            }
            this._isPrivate = item.isPrivate;
            this._promptForLabels();
        });
    }
    _promptForLabels() {
        let library = _.find([store_1.default.personalLibrary].concat(_.map(store_1.default.teams, 'library')), { guid: this._libraryGuid });
        let items = _.map(library.labels, (label) => {
            return {
                label: label.title,
                description: label.isPrivate ? 'Private' : 'Public',
                guid: label.guid
            };
        });
        // `canPickMany` is not in current Typescript definition
        let options = {
            ignoreFocusOut: true,
            placeHolder: 'Add labels to new snippet (optional)',
            canPickMany: true
        };
        vscode_1.window.showQuickPick(items, options).then((items) => {
            if (items && items.length > 0) {
                this._labelGuids = _.map(items, 'guid');
            }
            this._createSnippet();
        });
    }
    _createSnippet() {
        this.snippetsService.createSnippet(this._fileContent, this._libraryGuid, this._title, this._description, this._filename, this._isPrivate, this._labelGuids, this._team);
    }
}
exports.CreateSnippetController = CreateSnippetController;
//# sourceMappingURL=create-snippet.controller.js.map