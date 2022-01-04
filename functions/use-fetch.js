export const onRequestGet = async ({}) => {
  const url = "https://swapi.dev/api/planets/1/";
  return fetch(url, {
    method: "GET",
    cache: "no-cache",
  });
};
