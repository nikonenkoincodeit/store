const BASE_URL = "https://dummyjson.com/products";

export function getQuery({ limit, skip, searchQuery } = {}) {
  const query = `${BASE_URL}/search?q=${searchQuery}&limit=${limit}&skip=${skip}`;
  return fetch(query).then((res) => {
    if (res.ok) {
      return res.json();
    }
    throw new Error(res.statusText);
  });
}
