"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BarcodeText = void 0;
const react_native_svg_1 = require("react-native-svg");
const BarcodeText = ({ text, width, padding, options }) => {
    // Draw the text if displayValue is set
    if (options.displayValue) {
        let x, y, textAnchor;
        if (options.textPosition == 'top') {
            y = options.fontSize - options.textMargin;
        }
        else {
            y = options.height + options.textMargin + options.fontSize;
        }
        // Draw the text in the correct X depending on the textAlign option
        if (options.textAlign == 'left' || padding > 0) {
            x = 0;
            textAnchor = 'start';
        }
        else if (options.textAlign == 'right') {
            x = width - 1;
            textAnchor = 'end';
        }
        // In all other cases, center the text
        else {
            x = width / 2;
            textAnchor = 'middle';
        }
        return (<react_native_svg_1.Text x={x} y={y} fontSize={options.fontSize} fontWeight={options.fontOptions} textAnchor={textAnchor} fill={options.lineColor}>
        {text}
      </react_native_svg_1.Text>);
    }
    else {
        return null;
    }
};
exports.BarcodeText = BarcodeText;
