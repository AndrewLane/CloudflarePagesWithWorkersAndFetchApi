export async function onRequestGet({}) {
  const res = await fetch(`https://rickandmortyapi.com/api/character/12`);
  const data = await res.json();
  const info = JSON.stringify(data);
  return new Response(info, null, 2);
}
