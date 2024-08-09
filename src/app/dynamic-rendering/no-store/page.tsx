export default async function Page() {
  const data = await fetch("http://localhost:3000/api", {
    cache: "no-store",
  });
  return (
    <div className="container">
      <h1>no-store</h1>
      <pre>{JSON.stringify(await data.json(), null, 2)}</pre>
      <div>Date.now() {Date.now()}</div>
    </div>
  );
}
