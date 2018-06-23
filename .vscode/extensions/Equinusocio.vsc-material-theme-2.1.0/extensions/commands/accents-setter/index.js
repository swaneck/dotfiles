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
const vscode = require("vscode");
const settings_1 = require("./../../helpers/settings");
const fs_1 = require("./../../helpers/fs");
const REGEXP_HEX = /^#([0-9A-F]{6}|[0-9A-F]{8})$/i;
const accentsProperties = {
    'activityBarBadge.background': {
        alpha: 100,
        value: undefined
    },
    'list.activeSelectionForeground': {
        alpha: 100,
        value: undefined
    },
    'list.inactiveSelectionForeground': {
        alpha: 100,
        value: undefined
    },
    'list.highlightForeground': {
        alpha: 100,
        value: undefined
    },
    'scrollbarSlider.activeBackground': {
        alpha: 50,
        value: undefined
    },
    'editorSuggestWidget.highlightForeground': {
        alpha: 100,
        value: undefined
    },
    'textLink.foreground': {
        alpha: 100,
        value: undefined
    },
    'progressBar.background': {
        alpha: 100,
        value: undefined
    },
    'pickerGroup.foreground': {
        alpha: 100,
        value: undefined
    },
    'tab.activeBorder': {
        alpha: 100,
        value: undefined
    },
    'notificationLink.foreground': {
        alpha: 100,
        value: undefined
    },
    'editor.findWidgetResizeBorder': {
        alpha: 100,
        value: undefined
    },
    'editorWidget.border': {
        alpha: 100,
        value: undefined
    }
};
/**
 * Assigns colours
 */
const assignColorCustomizations = (colour, config) => {
    const newColour = isValidColour(colour) ? colour : undefined;
    Object.keys(accentsProperties).forEach(propertyName => {
        const accent = accentsProperties[propertyName];
        let colorProp = newColour;
        if (colour && accent.alpha < 100) {
            colorProp = `${colour}${accent.alpha > 10 ? accent.alpha : `0${accent.alpha}`}`;
        }
        if (accent) {
            config[propertyName] = colorProp;
        }
    });
};
/**
 * Determines if a string is a valid colour
 */
const isValidColour = (colour) => typeof colour === 'string' && REGEXP_HEX.test(colour);
/**
 * Sets workbench options
 */
const setWorkbenchOptions = (accentSelected, config) => vscode.workspace.getConfiguration().update('workbench.colorCustomizations', config, true)
    .then(() => settings_1.updateAccent(accentSelected), reason => vscode.window.showErrorMessage(reason));
/**
 * VSCode command
 */
exports.default = () => __awaiter(this, void 0, void 0, function* () {
    const themeConfigCommon = fs_1.getDefaultValues();
    const purgeColourKey = 'Remove accents';
    const options = Object.keys(themeConfigCommon.accents).concat(purgeColourKey);
    // shows the quick pick dropdown and wait response
    const accentSelected = yield vscode.window.showQuickPick(options);
    if (accentSelected === null || accentSelected === undefined) {
        Promise.resolve(null);
    }
    const config = vscode.workspace.getConfiguration().get('workbench.colorCustomizations');
    switch (accentSelected) {
        case purgeColourKey:
            assignColorCustomizations(undefined, config);
            yield setWorkbenchOptions(undefined, config);
            return Promise.resolve(true);
        default:
            assignColorCustomizations(themeConfigCommon.accents[accentSelected], config);
            yield setWorkbenchOptions(accentSelected, config);
            return Promise.resolve(true);
    }
});
//# sourceMappingURL=index.js.map