import { MAIN_URL } from "./constants";

function _getResponseData(res) {
  if (!res.ok) {
    return Promise.reject(`Ошибка: ${res.status}`);
  }
  return res.json();
}

export const register = ({ name, email, password }) => {
  return fetch(`${MAIN_URL}/signup`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ name, email, password }),
  }).then((res) => _getResponseData(res));
};

export const login = ({ email, password }) => {
  return fetch(`${MAIN_URL}/signin`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  }).then((res) => _getResponseData(res));
};

export const getUser = (token) => {
  return fetch(`${MAIN_URL}/users/me`, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  }).then((res) => _getResponseData(res));
};

export const updateUser = (token, email, name) => {
  return fetch(`${MAIN_URL}/users/me`, {
    method: "PATCH",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({ email, name }),
  }).then((res) => _getResponseData(res));
};
