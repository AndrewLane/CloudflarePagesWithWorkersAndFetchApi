export const onRequestGet = async ({}) => {
  const url = "https://swapi.dev/api/planets/2/";
  return fetch(url, {
    method: "GET",
  });
};
