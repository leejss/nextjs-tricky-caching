export const dynamic = "force-dynamic";
// Dynamic rendering
export default function DynamicPage() {
  return (
    <div>
      <h1>Dynamic rendering with Route segment config</h1>
      <div>Use force-dynamic</div>
      <a href="https://nextjs.org/docs/app/api-reference/file-conventions/route-segment-config">
        route-segment-config
      </a>
      <h1>{Date.now()}</h1>
    </div>
  );
}
