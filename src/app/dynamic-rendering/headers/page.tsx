import { headers } from "next/headers";

export default function Page() {
  const data = headers();
  return (
    <div className="container">
      <h1>headers</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
      <div>Date.now() {Date.now()}</div>
    </div>
  );
}
