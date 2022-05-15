import { BASE_URL, SEARCH_MOVIES_URL } from "./constants";

function _getResponseData(res) {
  if (!res.ok) {
    return Promise.reject(`Ошибка: ${res.status}`);
  }
  return res.json();
}

export const getMovies = () => {
  return fetch(`${SEARCH_MOVIES_URL}`, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  }).then((res) => _getResponseData(res));
};
