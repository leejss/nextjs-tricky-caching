// to revalidate route cache

import Link from "next/link";
import Revalidate from "../components/Revalidate";
import { revalidateAll } from "../actions";

// revalidatePath : revalidate the Data cache and full route cache
export default async function Page() {
  const data = await fetch("http://localhost:3000/api").then((res) =>
    res.json(),
  );

  return (
    <div>
      <h1>Date {data.date}</h1>
      <Link href="/">Home</Link>
      <form action={revalidateAll}>
        <button type="submit">revalidateAll</button>
      </form>
      <Revalidate />
    </div>
  );
}
