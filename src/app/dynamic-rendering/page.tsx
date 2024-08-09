import Link from "next/link";

export default function DynamicPage() {
  return (
    <div className="container">
      <h1 className="mb-[200px]">Dynamic Rendered Page</h1>
      <div className="flex flex-col gap-10">
        <div>
          <h2>Dynmaic functions 사용</h2>
          <div className="flex gap-4 items-center">
            <div>
              <h3>Soft navigation</h3>
              <div className="flex flex-col">
                <Link href={"/dynamic-rendering/cookies"}>cookies()</Link>
                <Link href={"/dynamic-rendering/headers"}>headers()</Link>
              </div>
            </div>
            <div>
              <h3>Window navigation</h3>
              <div className="flex flex-col">
                <a href={"/dynamic-rendering/cookies"}>cookies()</a>
                <a href={"/dynamic-rendering/headers"}>headers()</a>
              </div>
            </div>
          </div>
        </div>
        <div>
          <h2>Uncached request</h2>
          <div className="flex gap-4 items-center">
            <div>
              <h3>Soft navigation</h3>
              <div className="flex flex-col">
                <Link href={"/dynamic-rendering/no-store"}>no-store</Link>
              </div>
            </div>
            <div>
              <h3>Window navigation</h3>
              <div className="flex flex-col">
                <a href={"/dynamic-rendering/no-store"}>no-store</a>
              </div>
            </div>
          </div>
        </div>
        <div>
          <h2>Route segment config</h2>
          <div className="flex gap-4 items-center">
            <div>
              <h3>Soft navigation</h3>
              <div className="flex flex-col">
                <Link href={"/dynamic-rendering/force-dynamic"}>
                  force-dynamic
                </Link>
              </div>
            </div>
            <div>
              <h3>Window navigation</h3>
              <div className="flex flex-col">
                <a href={"/dynamic-rendering/force-dynamic"}>force-dynamic</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
