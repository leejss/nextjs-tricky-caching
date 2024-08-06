"use client";

import { useRouter } from "next/navigation";

export default function Revalidate() {
  const router = useRouter();
  return (
    <div>
      <button
        onClick={async () => {
          const result = await fetch(
            "http://localhost:3000/api/revalidate",
          ).then((res) => res.json());
          console.log("result", result);
        }}
      >
        Revalidate path
      </button>
      <button
        onClick={async () => {
          router.refresh();
        }}
      >
        refresh
      </button>
    </div>
  );
}
