'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
const METADATA_PATTERN = /^---[ \t]*\n((?:[ \t]*[^ \t:]+[ \t]*:[^\n]*\n)+)---[ \t]*\n/;
const METADATA_HEADER = `\
---
name: %s
number: %s
wip: %s
---
`;
function exactMetaData(text) {
    let data = {};
    if (text.startsWith('---')) {
        let match = METADATA_PATTERN.exec(text);
        if (match) {
            data['body_md'] = text.substring(match[0].trim().length).replace(/^\s+/, '');
            let metadataStr = match[1].trim();
            let metaArray = metadataStr.split('\n');
            metaArray.forEach(value => {
                let entry = value.split(':');
                const keyStr = entry[0];
                const valStr = entry[1].trim();
                if (keyStr === 'number') {
                    data[keyStr] = Number(valStr);
                }
                else {
                    data[keyStr] = valStr;
                }
                ;
            });
        }
    }
    return data;
}
exports.exactMetaData = exactMetaData;
function addMetaData(post) {
    const content = `\
---
name: ${post.name}
number: ${post.number}
wip: ${post.wip}
---

${post.body_md}
`;
    return content;
}
exports.addMetaData = addMetaData;
//# sourceMappingURL=postConverter.js.map