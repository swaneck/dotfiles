'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
const vscode = require("vscode");
const getPosts_1 = require("./getPosts");
const esaService_1 = require("./esaService");
const postConverter_1 = require("./postConverter");
const openMdWithContent_1 = require("./openMdWithContent");
const config = vscode.workspace.getConfiguration('esa');
function searchCategory(category) {
    return getPosts_1.default(`category:${category}`);
}
function createPost() {
    let postInfo = {};
    vscode.window.showInputBox({
        placeHolder: 'Search...',
        prompt: 'Please enter the category name you want to search'
    })
        .then(searchStr => {
        return searchCategory(searchStr);
    })
        .then(res => {
        const options = Array.from(new Set(res.posts.map(item => item.category)));
        return vscode.window.showQuickPick(options);
    })
        .then(categoryStr => {
        return vscode.window.showInputBox({
            value: `${categoryStr}/`,
            prompt: 'Please enter article name(full path).'
        });
    })
        .then(fixedNameStr => {
        console.log(postInfo);
        return new Promise((resolve, reject) => {
            resolve(postInfo.name = fixedNameStr);
        });
    }).then(() => {
        const esaClient = new esaService_1.default(config.token, config.teamName);
        return esaClient.createPost(postInfo).catch(err => console.log(err));
    }).then((res) => {
        openMdWithContent_1.default(postConverter_1.addMetaData(res));
    });
}
exports.default = createPost;
//# sourceMappingURL=createPost.js.map