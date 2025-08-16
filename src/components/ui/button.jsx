export function Button({ asChild, children, className = "", variant = "default", size = "md", ...props }) {
  const base = "inline-flex items-center justify-center rounded-2xl px-4 py-2 font-medium shadow-sm transition hover:opacity-90";
  const variants = {
    default: "bg-primary text-white",
    outline: "border border-gray-300 text-foreground bg-white",
    ghost: "text-foreground",
    link: "text-primary underline underline-offset-4 p-0"
  };
  const sizes = { sm: "text-sm px-3 py-1.5", md: "", lg: "text-base px-5 py-2.5" };
  const cls = `${base} ${variants[variant] || variants.default} ${sizes[size] || ""} ${className}`;
  if (asChild) {
    const Comp = props.href ? "a" : "span";
    return <Comp className={cls} {...props}>{children}</Comp>;
  }
  return <button className={cls} {...props}>{children}</button>;
}
