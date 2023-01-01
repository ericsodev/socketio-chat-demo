import { getCookie, setCookie } from "./cookie";

export function getUser(): string {
  return getCookie("chat.display-name") ?? "";
}

export function setUser(name: string): string {
  return setCookie("chat.display-name", name) ?? "";
}
