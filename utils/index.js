export function shareToSocial(data) {
    try {
        navigator.share(data);
        return null;
    }
    catch (error) {
        return new Error(String(error));
    }
}
export function isElementInViewport(element) {
    const rect = element.getBoundingClientRect();
    return rect.top >= 0 && rect.left >= 0 && rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) && rect.right <= (window.innerWidth || document.documentElement.clientWidth);
}
