import type { ButtonHTMLAttributes } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/cn";

export const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 rounded-lg font-medium transition-colors duration-200 disabled:pointer-events-none disabled:opacity-40",
  {
    variants: {
      variant: {
        primary: "bg-rust-deep text-card hover:bg-barn",
        line: "border border-line bg-card text-ink hover:border-rust-deep",
        ghost: "bg-transparent text-ink hover:bg-paper-deep",
        sage: "bg-sage text-card hover:bg-barn",
      },
      size: {
        md: "min-h-11 px-4 text-sm",
        sm: "min-h-11 px-3 text-sm",
        icon: "size-11 shrink-0",
      },
    },
    defaultVariants: { variant: "primary", size: "md" },
  },
);

type Props = ButtonHTMLAttributes<HTMLButtonElement> & VariantProps<typeof buttonVariants>;

export function Button({ className, variant, size, type = "button", ...props }: Props) {
  return (
    <button type={type} className={cn(buttonVariants({ variant, size }), className)} {...props} />
  );
}
