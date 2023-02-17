import { createElement } from "react";

interface TypographyProps extends React.HTMLAttributes<HTMLHeadingElement> {
  variant?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p"; // default: p
  children: React.ReactNode;
}

export default function Typography({ variant = "p", children, ...rest }: TypographyProps) {
  return createElement(variant, rest, children);
}
