"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.messureText = messureText;
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function messureText(string, options, context) {
    let ctx;
    if (context) {
        ctx = context;
    }
    else {
        return 0;
    }
    ctx.font = options.fontOptions + ' ' + options.fontSize + 'px ' + options.font;
    // Calculate the width of the encoding
    const size = ctx.measureText(string).width;
    return size;
}
