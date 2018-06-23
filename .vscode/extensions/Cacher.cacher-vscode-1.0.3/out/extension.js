'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
const vscode_1 = require("vscode");
const controllers_1 = require("./controllers");
const services_1 = require("./services");
const store_1 = require("./store");
function activate(context) {
    console.log('Cacher: Activated');
    let snippetsService = new services_1.SnippetsService();
    let setupController = new controllers_1.SetupController(snippetsService);
    setupController.initialize();
    let setupCommand = vscode_1.commands.registerCommand('cacher.setup', () => {
        setupController.promptForCredentials();
    });
    let refreshCommand = vscode_1.commands.registerCommand('cacher.refresh', () => {
        if (!store_1.default.loggedIn) {
            setupController.initialize();
        }
        snippetsService.fetchSnippets();
    });
    let insertSnippetCommand = vscode_1.commands.registerCommand('cacher.insertSnippet', () => {
        let insertSnippetController = new controllers_1.InsertSnippetController(setupController, snippetsService);
        insertSnippetController.initialize();
    });
    let createSnippetCommand = vscode_1.commands.registerCommand('cacher.createSnippet', () => {
        let createSnippetController = new controllers_1.CreateSnippetController(setupController, snippetsService);
        createSnippetController.initialize();
    });
    let openSnippetCommand = vscode_1.commands.registerCommand('cacher.openSnippet', () => {
        let openSnippetController = new controllers_1.OpenSnippetController(setupController, snippetsService);
        openSnippetController.initialize();
    });
    let openSnippetPageCommand = vscode_1.commands.registerCommand('cacher.openSnippetPage', () => {
        let openSnippetPageController = new controllers_1.OpenSnippetPageController(setupController, snippetsService);
        openSnippetPageController.initialize();
    });
    let showCommandsCommand = vscode_1.commands.registerCommand('cacher.showCommands', () => {
        let showCommandsController = new controllers_1.ShowCommandsController();
        showCommandsController.initialize();
    });
    context.subscriptions.push(setupController);
    context.subscriptions.push(setupCommand);
    context.subscriptions.push(refreshCommand);
    context.subscriptions.push(insertSnippetCommand);
    context.subscriptions.push(createSnippetCommand);
    context.subscriptions.push(openSnippetCommand);
    context.subscriptions.push(openSnippetPageCommand);
    context.subscriptions.push(showCommandsCommand);
}
exports.activate = activate;
function deactivate() {
}
exports.deactivate = deactivate;
//# sourceMappingURL=extension.js.map