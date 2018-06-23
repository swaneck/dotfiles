'use strict';
const vscode = require('vscode');
const vscode_1 = require('vscode');
const path = require('path');
const gfmProvider_1 = require('./gfmProvider');
function activate(context) {
    let provider = new gfmProvider_1.GFMDocumentContentProvider(context);
    let registration = vscode.workspace.registerTextDocumentContentProvider('gfm-markdown', provider);
    let c1 = vscode.commands.registerCommand('gfmarkdown.showPreview', showPreview);
    let c2 = vscode.commands.registerCommand('gfmarkdown.showPreviewToSide', uri => showPreview(uri, true));
    context.subscriptions.push(c1, c2, registration);
    vscode.workspace.onDidSaveTextDocument(document => {
        if (isTargetMarkdownFile(document)) {
            const uri = getMarkdownUri(document.uri);
            provider.update(uri);
        }
    });
    vscode.workspace.onDidChangeTextDocument(event => {
        if (isTargetMarkdownFile(event.document) && updateOnDocumentChanged()) {
            const uri = getMarkdownUri(event.document.uri);
            provider.update(uri);
        }
    });
}
exports.activate = activate;
function isTargetMarkdownFile(document) {
    return document.languageId === 'markdown' && document.uri.scheme !== 'gfm-markdown';
}
function getMarkdownUri(uri) {
    return uri.with({ scheme: 'gfm-markdown', path: uri.path + '.rendered', query: uri.toString() });
}
function updateOnDocumentChanged() {
    return vscode.workspace.getConfiguration('gfmpreview').get('previewUpdateOnChanged', false);
}
function showPreview(uri, sideBySide = false) {
    let resource = uri;
    if (!(resource instanceof vscode_1.Uri)) {
        if (vscode.window.activeTextEditor) {
            resource = vscode.window.activeTextEditor.document.uri;
        }
    }
    if (!(resource instanceof vscode_1.Uri)) {
        if (!vscode.window.activeTextEditor) {
            return vscode.commands.executeCommand('markdown.showSource');
        }
        return;
    }
    let thenable = vscode.commands.executeCommand('vscode.previewHtml', getMarkdownUri(resource), getViewColumn(sideBySide), `Preview '${path.basename(resource.fsPath)}'`);
    return thenable;
}
function getViewColumn(sideBySide) {
    const active = vscode.window.activeTextEditor;
    if (!active) {
        return vscode_1.ViewColumn.One;
    }
    if (!sideBySide) {
        return active.viewColumn;
    }
    switch (active.viewColumn) {
        case vscode_1.ViewColumn.One:
            return vscode_1.ViewColumn.Two;
        case vscode_1.ViewColumn.Two:
            return vscode_1.ViewColumn.Three;
    }
    return active.viewColumn;
}
function deactivate() {
}
exports.deactivate = deactivate;
//# sourceMappingURL=extension.js.map