// Renders JSON-LD structured data. All data is static and authored in this repository — never
// user input — so serialization via dangerouslySetInnerHTML is safe here.
export default function StructuredData({
  data,
}: {
  data: Record<string, unknown> | Record<string, unknown>[];
}) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
