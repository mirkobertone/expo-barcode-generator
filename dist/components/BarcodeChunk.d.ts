import type { InternalOptions } from '../types';
interface BarcodeChunkProps {
    binary: string;
    padding: number;
    options: InternalOptions;
}
export declare const BarcodeChunk: ({ binary, padding, options }: BarcodeChunkProps) => import("react").JSX.Element;
export {};
