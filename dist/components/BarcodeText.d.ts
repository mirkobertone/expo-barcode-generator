import type { InternalOptions } from '../types';
interface BarcodeTextProps {
    text: string;
    width: number;
    padding: number;
    options: InternalOptions;
}
export declare const BarcodeText: ({ text, width, padding, options }: BarcodeTextProps) => import("react").JSX.Element | null;
export {};
