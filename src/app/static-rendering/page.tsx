export default function StaticPage() {
  return (
    <div className="container">
      <h1>Static rendering</h1>
      <h2>This html is generated at build time.</h2>
      <p>value of Date.now() is {Date.now()}</p>

      <section>
        <h2>주의 !</h2>
        <p>
          개발 서버에서는 refresh를 하면 rebuild를 한다. 따라서 Date값이 매번
          달라진다. 하지만 프로덕션 환경에서는 최초 빌드 타임에만 빌드를 하기
          때문에 refresh를 해도 Date 값은 변하지 않는다.
        </p>
      </section>
    </div>
  );
}
