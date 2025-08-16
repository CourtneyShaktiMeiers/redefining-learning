// src/components/ui/button.jsx
export function Button({ children, href, ...props }) {
  const base =
    "inline-block px-4 py-2 rounded bg-black text-white hover:bg-gray-800 transition";
  if (href) {
    return (
      <a href={href} className={base} {...props}>
        {children}
      </a>
    );
  }
  return (
    <button className={base} {...props}>
      {children}
    </button>
  );
}
