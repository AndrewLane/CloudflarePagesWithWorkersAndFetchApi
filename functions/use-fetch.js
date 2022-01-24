export async function onRequestGet({}) {
  const url = "https://swapi.dev/api/planets/1/";
  const result = await fetch(url, {
    method: "GET",
  });
  const data = await result.json();
  const info = JSON.stringify(data);
  return new Response(info, null, 2);
}
