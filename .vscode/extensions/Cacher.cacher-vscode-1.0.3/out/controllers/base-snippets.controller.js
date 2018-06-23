"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const vscode_1 = require("vscode");
const _ = require('lodash');
const store_1 = require("../store");
class BaseSnippetsController {
    constructor(setupController, snippetsService) {
        this.setupController = setupController;
        this.snippetsService = snippetsService;
    }
    initialize() {
        if (!store_1.default.loggedIn) {
            this.setupController.initialize();
        }
        if (!this.snippetsService.initialized) {
            return;
        }
    }
    showQuickPick(placeHolder) {
        return vscode_1.window.showQuickPick(this._quickPickItems(), {
            matchOnDescription: true,
            matchOnDetail: true,
            placeHolder
        });
    }
    _quickPickItems() {
        let items = [];
        _.each(store_1.default.snippets, (snippet) => {
            _.each(snippet.files, (file) => {
                let description = file.description || '';
                if (snippet.team) {
                    description = `[${snippet.team.name}] ${description}`;
                }
                if (snippet.labels) {
                    _.each(snippet.labels, (label) => {
                        description = `(${label}) ${description}`;
                    });
                }
                items.push({
                    label: snippet.title,
                    description,
                    detail: file.content,
                    snippet
                });
            });
        });
        return items;
    }
}
exports.BaseSnippetsController = BaseSnippetsController;
//# sourceMappingURL=base-snippets.controller.js.map