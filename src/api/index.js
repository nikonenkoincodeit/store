const BASE_URL = "https://dummyjson.com/products";

export function getQuery({ limit, skip } = {}) {
  const query = `${BASE_URL}?limit=${limit}&skip=${skip}`;
  return fetch(query).then((res) => {
    if (res.ok) {
      return res.json();
    }
    throw new Error(res.statusText);
  });
}
