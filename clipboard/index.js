/**
 * @function copyImageToClipboard
 * @param url
 * @return {Promise<boolean>}
 */
export async function copyImageToClipboard(url) {
    try {
        const req = await fetch(url);
        const blob = await req.blob();
        navigator.clipboard.write([
            new ClipboardItem({
                [blob.type]: blob,
            }),
        ]);
        return new Promise((resolve, reject) => {
            resolve(true);
        });
    }
    catch (error) {
        return new Promise((resolve, reject) => {
            reject(error);
        });
    }
}
/**
 * @function imageToBlob
 * @param url
 * @returns
 */
export function imageToBlob(url) {
    const image = new Image();
    const canvas = document.createElement("canvas");
    const context = canvas.getContext("2d");
    image.crossOrigin = "anonymous";
    image.src = url;
    return new Promise((resolve, reject) => {
        image.onload = function () {
            canvas.width = image.width;
            canvas.height = image.height;
            context?.drawImage(image, 0, 0);
            canvas.toBlob((blob) => resolve(blob), "image/png", 0.75);
        };
        image.onerror = (error) => reject(error);
    });
}
/**
 * copy text to clipboard
 * @param text
 * @returns
 */
export async function toClipboard(text) {
    if ("clipboard" in navigator) {
        return await navigator.clipboard.writeText(text);
    }
    else {
        return document.execCommand("copy", true, text);
    }
}
/**
 * copy text to clipboard
 * @param text
 * @returns
 */
export function copyToClipboard(text) {
    try {
        if ("clipboard" in navigator) {
            window.navigator.clipboard.writeText(text);
        }
        else {
            fallbackToClipboard(text);
        }
        return true;
    }
    catch (error) {
        return error;
    }
}
export function fallbackToClipboard(text) {
    const textArea = document.createElement("textarea");
    textArea.value = text;
    // Avoid scrolling to bottom
    textArea.style.top = "0";
    textArea.style.left = "0";
    textArea.style.position = "fixed";
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();
    try {
        const successful = document.execCommand("copy");
        document.body.removeChild(textArea);
        if (!successful) {
            throw new Error("failed to copy text to clipboard useing dom execCommand");
        }
        else {
            return new Promise((resolve, reject) => {
                resolve(true);
            });
        }
    }
    catch (err) {
        return new Promise((resolve, reject) => {
            reject(err);
        });
    }
}
