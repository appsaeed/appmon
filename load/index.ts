export function loadImage(url: string) {
    return new Promise<HTMLImageElement>((resolve, reject) => {
        const image = new Image();
        image.addEventListener("load", () => {
            resolve(image);
        });
        image.addEventListener("error", reject);
    });
}
