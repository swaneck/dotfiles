"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const vscode_1 = require("vscode");
const ThemeCommands = require("./../commands");
const INFO_MESSAGE = 'You should reload the window for full activate the Material Theme.';
const OPTIONS = { ok: 'Reload now', cancel: 'Cancel' };
exports.infoMessage = () => __awaiter(this, void 0, void 0, function* () {
    if ((yield vscode_1.window.showInformationMessage(INFO_MESSAGE, OPTIONS.ok, OPTIONS.cancel)) === OPTIONS.ok) {
        ThemeCommands.fixIcons();
    }
});
//# sourceMappingURL=messages.js.map