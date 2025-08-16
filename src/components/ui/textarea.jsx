export function Textarea(props) {
  return <textarea {...props} className={`w-full rounded-xl border px-3 py-2 outline-none focus:ring-2 focus:ring-green-600 ${props.className || ""}`} />;
}
