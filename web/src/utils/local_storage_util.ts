import { User } from "../types/user";

export function storeSession(user: User) {
  localStorage.setItem("session", JSON.stringify(user));
}

export function getSession(): User | null {
  const data = localStorage.getItem("session")
  return data ? JSON.parse(data) : null
}
