import { setCookie as set, getCookie as get } from "cookies-next";

export function setCookie(key: string, value: string): string | undefined {
  set(key, value);
  return get(key)?.toString() ?? "";
}

export function getCookie(key: string): string {
  return get(key)?.toString() ?? "";
}
