import { ThemeType } from "../types/themes.js";

export function setSession<SessionData>(
  name: string,
  data: SessionData
): SessionData;

export function getSession<SessionData>(name: string): SessionData | null;

export function removeSession(name: string): void;

export function setLocalStorage<LocalStorgeData>(
  name: string,
  data: LocalStorgeData
): LocalStorgeData;

export function getLocalStorage<LocalStorgeData>(
  name: string
): LocalStorgeData | null;

export function setThemeStore(mode: ThemeType, name?: string): ThemeType;

export function getThemeStore(name?: string): ThemeType;
