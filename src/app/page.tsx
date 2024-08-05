import Link from "next/link";

export default function HomePage() {
  return (
    <div className="flex flex-col gap-5">
      <div className="flex flex-col gap-3">
        <h2>Subsequent navigation - affected by Router cache (client)</h2>
        <Link prefetch={false} href="/static">
          Go to Static
        </Link>
        <Link prefetch={false} href="/dynamic">
          Go to Dynamic
        </Link>
        <Link prefetch={false} href="/dynamic-fetch">
          Go to Dynamic Fetch
        </Link>
      </div>
      <div className="flex flex-col gap-3">
        <h2>Initial visit</h2>
        <a href="/static">Go to Static</a>
        <a href="/dynamic">Go to Dynamic</a>
        <a href="/dynamic-fetch">Go to Dynamic Fetch</a>
      </div>
    </div>
  );
}
