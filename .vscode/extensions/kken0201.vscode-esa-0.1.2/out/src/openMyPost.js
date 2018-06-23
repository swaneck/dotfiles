"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const vscode = require("vscode");
const getPosts_1 = require("./getPosts");
const openMdWithContent_1 = require("./openMdWithContent");
const config = vscode.workspace.getConfiguration('esa');
function openMyPost() {
    if (!config.myName) {
        vscode.window.showWarningMessage("Please set the Your ID");
    }
    getPosts_1.default(`@${config.myName}`).then((json) => {
        const posts = json.posts.map((post) => {
            return {
                description: post.name,
                detail: post.created_at,
                label: post.number,
                body: post.body_md
            };
        });
        return vscode.window.showQuickPick(posts);
    }).then(selected => {
        if (!selected) {
            throw "";
        }
        return selected;
    }).then(selected => {
        openMdWithContent_1.default(selected.body);
    });
}
exports.default = openMyPost;
//# sourceMappingURL=openMyPost.js.map