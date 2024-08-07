"use client";

import { useRouter } from "next/navigation";

export default function RouterBack() {
  const router = useRouter();
  return (
    <div className="fixed top-4 left-4">
      <button
        className="bg-black text-white px-4 py-2 rounded-md"
        onClick={() => {
          router.back();
        }}
      >
        Back
      </button>
    </div>
  );
}
