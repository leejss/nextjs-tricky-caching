import Link from "next/link";

export default function HomePage() {
  return (
    <div className="flex flex-col gap-5 justify-center items-center">
      <h1>Rendering strategies by rendering timing</h1>
      <h2>Static rendering vs Dynamic rendering</h2>
      <div className="flex flex-col items-start gap-4">
        <p>Static rendering: rendered at build time.</p>
        <p>Dynamic rendering: rendered at request time.</p>
      </div>
      <h3>
        NextJS는 기본적으로 Static rendering을 하려고 하는데, 다음 두 가지
        경우에 Dynamic rendering 방식을 택한다.
      </h3>
      <ol>
        <li>1. Dynamic functions 사용</li>
        <li>2. Uncached request</li>
        <li>3. Route segment config</li>
      </ol>
      <hr className="w-full border-t-black" />
      <div className="flex gap-4">
        <section>
          <header>
            <h3>Soft Navigation (Link component)</h3>
          </header>
          <div className="flex flex-col">
            <Link href="static-rendering">Static rendering page</Link>
            <Link href="dynamic-rendering">Dynamic rendering page</Link>
          </div>
        </section>
        <section>
          <header>
            <h3>Window Navigation (anchor tag)</h3>
          </header>
          <div className="flex flex-col">
            <a href="static-rendering">Static rendering page</a>
            <a href="dynamic-rendering">Dynamic rendering page</a>
          </div>
        </section>
      </div>
    </div>
  );
}
