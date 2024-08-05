export default async function DynamicFetchPage() {
  const msg = await fetch("http://localhost:3000/api", {
    method: "GET",
    cache: "no-store",
  })
    .then((res) => res.json())
    .then((data) => data.message);
  return (
    <div>
      <h1>Uncached fetch - dynamically rendered page</h1>
      <h1>{msg}</h1>
    </div>
  );
}
