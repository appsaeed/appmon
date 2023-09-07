import { deviceTheme } from "../detection/index.js";
import { ThemeType } from "../types/themes.js";

export function setSession<SessionData>(
  name: string,
  data: SessionData
): SessionData {
  sessionStorage.setItem(name, btoa(JSON.stringify({ data: data })));
  return data;
}

export function getSession<SessionData>(name: string): SessionData | null {
  try {
    const str = sessionStorage.getItem(name) || "";
    return JSON.parse(atob(str))?.data;
  } catch (error) {
    return null;
  }
}

export function removeSession(name: string): void {
  sessionStorage.removeItem(name);
}

export function setLocalStorage<LocalStorgeData>(
  name: string,
  data: LocalStorgeData
): LocalStorgeData {
  localStorage.setItem(name, btoa(JSON.stringify({ data: data })));
  return data;
}

export function getLocalStorage<LocalStorgeData>(
  name: string
): LocalStorgeData | null {
  try {
    const str = localStorage.getItem(name) || "";
    return JSON.parse(atob(str))?.data;
  } catch (error) {
    return null;
  }
}

export function setThemeStore(mode: ThemeType, name = "user_theme"): ThemeType {
  localStorage.setItem(name, mode);
  return mode;
}

/**
 * get user theme from local storage
 */
export function getThemeStore(name = "user_theme"): ThemeType {
  const store = localStorage.getItem(name);
  if (store === "dark" || store === "light") {
    return store;
  }
  return deviceTheme();
}
