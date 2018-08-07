"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const path = require("path");
const deps_1 = require("./deps");
const debug = require('debug')('heroku-cli:file');
function exists(f) {
    // debug('exists', f)
    // @ts-ignore
    return deps_1.default.fs.pathExists(f);
}
exports.exists = exists;
async function stat(file) {
    // debug('stat', file)
    return deps_1.default.fs.stat(file);
}
exports.stat = stat;
async function rename(from, to) {
    debug('rename', from, to);
    return deps_1.default.fs.rename(from, to);
}
exports.rename = rename;
async function remove(file) {
    if (!await exists(file))
        return;
    debug('remove', file);
    return deps_1.default.fs.remove(file);
}
exports.remove = remove;
async function ls(dir) {
    let files = await deps_1.default.fs.readdir(dir);
    let paths = files.map(f => path.join(dir, f));
    return Promise.all(paths.map(path => deps_1.default.fs.stat(path).then(stat => ({ path, stat }))));
}
exports.ls = ls;
async function removeEmptyDirs(dir) {
    let files;
    try {
        files = await ls(dir);
    }
    catch (err) {
        if (err.code === 'ENOENT')
            return;
        throw err;
    }
    let dirs = files.filter(f => f.stat.isDirectory()).map(f => f.path);
    for (let p of dirs.map(removeEmptyDirs))
        await p;
    files = await ls(dir);
    if (!files.length)
        await remove(dir);
}
exports.removeEmptyDirs = removeEmptyDirs;
async function readJSON(file) {
    debug('readJSON', file);
    return deps_1.default.fs.readJSON(file);
}
exports.readJSON = readJSON;
async function outputJSON(file, data, options = {}) {
    debug('outputJSON', file);
    return deps_1.default.fs.outputJSON(file, data, Object.assign({ spaces: 2 }, options));
}
exports.outputJSON = outputJSON;
function realpathSync(p) {
    return deps_1.default.fs.realpathSync(p);
}
exports.realpathSync = realpathSync;
