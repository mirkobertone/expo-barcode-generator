"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getMaximumHeightOfEncodings = getMaximumHeightOfEncodings;
function getMaximumHeightOfEncodings(encodings) {
    let maxHeight = 0;
    for (let i = 0; i < encodings.length; i++) {
        if (encodings[i].height > maxHeight) {
            maxHeight = encodings[i].height;
        }
    }
    return maxHeight;
}
