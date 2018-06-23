'use strict';
const vscode = require('vscode');
const vscode_1 = require('vscode');
const https = require('https');
class GFMDocumentContentProvider {
    constructor(_context) {
        this._context = _context;
        this._onDidChange = new vscode.EventEmitter();
    }
    provideTextDocumentContent(uri) {
        return vscode.workspace.openTextDocument(vscode_1.Uri.parse(uri.query)).then(document => {
            return this.request(document.getText()).then(body => {
                const head = [
                    '<!DOCTYPE html>',
                    '<html>',
                    '<head>',
                    '<meta http-equiv="Content-type" content="text/html;charset=UTF-8">',
                    `<base href="${document.uri.toString(true)}">`,
                    '</head>',
                    '<body>'
                ].join('\n');
                const tail = [
                    '</body>',
                    '</html>'
                ].join('\n');
                return head + body + tail;
            });
        });
    }
    get onDidChange() {
        return this._onDidChange.event;
    }
    update(uri) {
        this._onDidChange.fire(uri);
    }
    createOptions(body) {
        const options = {
            host: 'api.github.com',
            path: '/markdown',
            method: 'POST',
            headers: {
                'Content-Type': 'text/plain',
                'User-Agent': 'markup: markdown renderer'
            }
        };
        const config = vscode.workspace.getConfiguration('gfmpreview');
        const username = config.get('githubUsername', '');
        const password = config.get('githubPassword', '');
        if (!username || !password) {
            return options;
        }
        options.auth = `${username}:${password}`;
        return options;
    }
    request(body) {
        const options = this.createOptions(body);
        return new Promise((resolve, reject) => {
            const req = https.request(options, (res) => {
                let response = [];
                res.setEncoding('utf-8');
                res.on('data', (chunk) => response.push(chunk));
                res.on('end', () => resolve(response.join('')));
            });
            req.on('error', (err) => reject(err));
            req.write(JSON.stringify({
                'text': body,
                'mode': 'gfm'
            }));
            req.end();
        });
    }
}
exports.GFMDocumentContentProvider = GFMDocumentContentProvider;
//# sourceMappingURL=gfmProvider.js.map