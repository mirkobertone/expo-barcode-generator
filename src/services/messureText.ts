import type { InternalOptions } from '../types';

// Approximate character widths for different font weights (in relative units)
const CHAR_WIDTH_RATIOS = {
  normal: 0.6,
  bold: 0.65,
  '100': 0.5,
  '200': 0.52,
  '300': 0.55,
  '400': 0.6,
  '500': 0.62,
  '600': 0.65,
  '700': 0.65,
  '800': 0.67,
  '900': 0.7
};

function calculateTextWidthFallback(string: string, options: InternalOptions): number {
  // Get the character width ratio based on font weight
  const fontWeight = options.fontOptions || 'normal';
  const charRatio =
    CHAR_WIDTH_RATIOS[fontWeight as keyof typeof CHAR_WIDTH_RATIOS] || CHAR_WIDTH_RATIOS.normal;

  // Calculate approximate width: string length * font size * character width ratio
  return string.length * options.fontSize * charRatio;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function messureText(string: string, options: InternalOptions, context?: any) {
  let ctx;

  if (context) {
    ctx = context;
  } else {
    // Fallback calculation for native environments where Canvas context is not available
    return calculateTextWidthFallback(string, options);
  }

  try {
    ctx.font = options.fontOptions + ' ' + options.fontSize + 'px ' + options.font;
    // Calculate the width of the encoding
    const size = ctx.measureText(string).width;
    return size;
  } catch {
    // If measureText fails (e.g., in native environment), use fallback
    return calculateTextWidthFallback(string, options);
  }
}
