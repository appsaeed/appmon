import { deviceTheme } from "../detection/index.js";
export function setSession(name, data) {
    sessionStorage.setItem(name, btoa(JSON.stringify({ data: data })));
    return data;
}
export function getSession(name) {
    try {
        const str = sessionStorage.getItem(name) || "";
        return JSON.parse(atob(str))?.data;
    }
    catch (error) {
        return null;
    }
}
export function removeSession(name) {
    sessionStorage.removeItem(name);
}
export function setLocalStorage(name, data) {
    localStorage.setItem(name, btoa(JSON.stringify({ data: data })));
    return data;
}
export function getLocalStorage(name) {
    try {
        const str = localStorage.getItem(name) || "";
        return JSON.parse(atob(str))?.data;
    }
    catch (error) {
        return null;
    }
}
export function setThemeStore(mode, name = "user_theme") {
    localStorage.setItem(name, mode);
    return mode;
}
/**
 * get user theme from local storage
 */
export function getThemeStore(name = "user_theme") {
    const store = localStorage.getItem(name);
    if (store === "dark" || store === "light") {
        return store;
    }
    return deviceTheme();
}
