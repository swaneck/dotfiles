"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    env: process.env.CACHER_ENV || 'production',
    appHost: process.env.CACHER_APP_HOST || 'https://app.cacher.io',
    apiHost: process.env.CACHER_API_HOST || 'https://api.cacher.io',
    snippetsHost: process.env.CACHER_SNIPPETS_HOST || 'https://snippets.cacher.io'
};
//# sourceMappingURL=config.js.map