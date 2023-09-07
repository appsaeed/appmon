type FunctionCallback = (hasCopied?: boolean, error?: any) => void;

export declare function copyImageToClipboard(
  url: string,
  callback?: FunctionCallback
): Promise<void>;

export declare function imageToBlob(url: string): Promise<unknown>;

export declare function toClipboard(text: string): Promise<boolean | void>;

export declare function copyToClipboard(text: string): boolean;
