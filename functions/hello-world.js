export const onRequestGet = async ({}) => {
  return new Response(
    JSON.stringify({ hello: "world", from: "Worker function" }),
    {
      headers: {
        "content-type": "application/json;charset=UTF-8",
      },
    }
  );
};
