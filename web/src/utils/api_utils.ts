import { ajax } from 'jquery';
import { FormUser } from "../types/user";


function api_url(path: string){
  return `http://localhost:3000${path}`;
}

export function postUsers(user: FormUser) {
  return ajax({
    url: api_url("/users"),
    method: "POST",
    crossDomain: true,
    xhrFields: { withCredentials: true },
    data: { user },
  });
}

export function postSessions(user: FormUser) {
  return ajax({
    url: api_url("/sessions"),
    method: "POST",
    crossDomain: true,
    xhrFields: { withCredentials: true },
    data: { user }
  });
}

export function getUsers() {
  return ajax({
    url: api_url("/users")
  });
}
