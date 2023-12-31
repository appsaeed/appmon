export function loadImage(src) {
    return new Promise((resolve, reject) => {
        const image = new Image();
        image.src = src;
        image.addEventListener("load", () => {
            if (image.complete && image.naturalWidth) {
                resolve(image);
            }
            else {
                reject("couldn't load the image");
            }
        });
        image.addEventListener("error", reject);
    });
}
export function lazyLoad(element, config) {
    const { once = true } = config || {};
    return new Promise((resolve, reject) => {
        try {
            const observer = new IntersectionObserver((entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        resolve(entry.target);
                        if (once) {
                            observer.unobserve(entry.target);
                            observer.disconnect();
                        }
                    }
                });
            });
            if (element)
                observer.observe(element);
        }
        catch (error) {
            reject(error);
        }
    });
}
export function lazyLoadImage(src) {
    return new Promise((resolve, reject) => {
        //create observable view
        const observerCallback = (entries) => {
            entries.forEach((entry) => {
                if (entry.target && entry.isIntersecting) {
                    resolve(entry.target);
                }
            });
        };
        const observer = new IntersectionObserver(observerCallback);
        const image = new Image();
        image.src = src;
        image.addEventListener("load", () => {
            if (image.complete && image.naturalWidth) {
                observer.observe(image);
            }
            else {
                reject("couldn't load the image");
                observer.unobserve(image);
                observer.disconnect();
            }
        });
        image.addEventListener("error", (er) => {
            reject(er);
            observer.unobserve(image);
            observer.disconnect();
        });
    });
}
