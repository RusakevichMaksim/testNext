export async function GET() {
  const myDataBaseData = {
    userId: 1,
    title: "delectus aut autem",
    completed: "false",
  };

  return new Response(JSON.stringify(myDataBaseData));
}
