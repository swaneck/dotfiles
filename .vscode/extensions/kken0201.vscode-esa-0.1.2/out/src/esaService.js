'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
const request = require('request-promise-native');
const vscode = require("vscode");
class EsaService {
    constructor(token, teamName) {
        this.token = token;
        this.teamName = teamName;
        this.token = token;
        this.teamName = teamName;
    }
    showStatusBarMsg(msg) {
        vscode.window.setStatusBarMessage(msg, 2000);
    }
    showInformationMsg(msg) {
        vscode.window.showInformationMessage(msg);
    }
    getPosts(query = '') {
        this.showStatusBarMsg('Requesting posts......');
        return request({
            uri: `https://api.esa.io/v1/teams/${this.teamName}/posts`,
            qs: {
                access_token: this.token,
                q: query
            },
            json: true
        }).then(function (response) {
            return response;
        }).catch(function (err) {
            console.log(err);
            this.showStatusBarMsg(err);
        });
    }
    createPost(post) {
        return request({
            url: `https://api.esa.io/v1/teams/${this.teamName}/posts`,
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${this.token}`
            },
            json: true,
            form: {
                post: Object.assign({}, post, { wip: true })
            }
        })
            .then(function (response) {
            this.showInformationMsg(`Created Post "${response.name}"`);
            return response;
        }.bind(this))
            .catch(function (err) {
            this.showInformationMsg(err);
        }.bind(this));
    }
    updatePost(post) {
        return request({
            url: `https://api.esa.io/v1/teams/${this.teamName}/posts/${post.number}`,
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${this.token}`
            },
            json: true,
            form: {
                post: post
            }
        })
            .then(function (response) {
            console.log(response);
            this.showInformationMsg(`Update Post "${response.name}"`);
            return response;
        }.bind(this))
            .catch(function (err) {
            this.showInformationMsg(err);
        }.bind(this));
    }
}
exports.default = EsaService;
//# sourceMappingURL=esaService.js.map