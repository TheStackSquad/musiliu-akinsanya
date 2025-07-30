//src/components/news/tagBadge.js
export default function TagBadge({ text }) {
  return (
    <span className="inline-block px-2 py-1 text-xs font-semibold uppercase tracking-wide bg-accent text-black rounded">
      {text}
    </span>
  );
}
