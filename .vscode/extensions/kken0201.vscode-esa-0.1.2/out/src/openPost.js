'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
const vscode = require("vscode");
const openMdWithContent_1 = require("./openMdWithContent");
const postConverter_1 = require("./postConverter");
const getPosts_1 = require("./getPosts");
const config = vscode.workspace.getConfiguration('esa');
function openPost() {
    const options = [
        'Open From My Posts',
        'Open From Latest Posts',
    ];
    let postStore = [];
    vscode.window.showQuickPick(options).then(result => {
        switch (result) {
            case 'Open From Latest Posts':
                return getPosts_1.default();
            case 'Open From My Posts':
                if (config.myName === '')
                    throw '';
                return getPosts_1.default(`@${config.myName}`);
        }
    }).then(json => {
        postStore = json.posts;
        const posts = json.posts.map((post) => {
            return {
                description: post.name,
                detail: post.created_at,
                label: post.number
            };
        });
        return vscode.window.showQuickPick(posts);
    }).then((selected) => {
        if (!selected) {
            throw '';
        }
        return selected;
    }).then((selected) => {
        postStore.forEach(post => {
            if (post.number === selected.label) {
                openMdWithContent_1.default(postConverter_1.addMetaData(post));
            }
        });
    });
}
exports.default = openPost;
//# sourceMappingURL=openPost.js.map