"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getTotalWidthOfEncodings = getTotalWidthOfEncodings;
function getTotalWidthOfEncodings(encodings) {
    let totalWidth = 0;
    for (let i = 0; i < encodings.length; i++) {
        totalWidth += encodings[i].width;
    }
    return totalWidth;
}
