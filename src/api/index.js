const BASE_URL = "https://dummyjson.com/products";

export function getQuery() {
    return fetch(BASE_URL).then((res) => {
      if (res.ok) {
        return res.json();
      }
      throw new Error(res.statusText);
    });
}
