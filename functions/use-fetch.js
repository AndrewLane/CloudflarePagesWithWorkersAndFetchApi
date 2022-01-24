export const onRequestGet = async ({}) => {
  const url = "https://swapi.dev/api/planets/1/";
  const result = await fetch(url, {
    method: "GET",
    cache: "no-cache",
  });
  const data = await result.json();
  return new Response(JSON.stringify(data));
};
