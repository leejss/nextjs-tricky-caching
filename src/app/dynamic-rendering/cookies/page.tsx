import { cookies } from "next/headers";

export default function Page() {
  const data = cookies().getAll();
  return (
    <div className="container">
      <h1>cookies</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
      <div>Date.now() {Date.now()}</div>
    </div>
  );
}
