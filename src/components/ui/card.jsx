export function Card({ className = "", children }) {
  return <div className={`rounded-2xl border shadow-sm bg-white ${className}`}>{children}</div>;
}
export function CardHeader({ children }) {
  return <div className="p-6 border-b">{children}</div>;
}
export function CardTitle({ className = "", children }) {
  return <h3 className={`text-xl font-semibold ${className}`}>{children}</h3>;
}
export function CardContent({ className = "", children }) {
  return <div className={`p-6 ${className}`}>{children}</div>;
}
