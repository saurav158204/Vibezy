import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "group/button inline-flex shrink-0 items-center justify-center rounded-xl border border-transparent text-sm font-medium whitespace-nowrap transition-all duration-200 outline-none select-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 active:scale-[0.98] disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 cursor-pointer",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-rose-600 shadow-md shadow-rose-600/20",
        outline:
          "border-rose-200/50 dark:border-rose-900/50 bg-background/50 hover:bg-rose-500/10 hover:border-rose-400 text-foreground backdrop-blur-sm",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-rose-100 dark:hover:bg-rose-950/60",
        ghost:
          "hover:bg-rose-500/10 hover:text-rose-600 dark:hover:text-rose-300 text-foreground",
        destructive:
          "bg-destructive/10 text-destructive hover:bg-destructive/20 focus-visible:ring-destructive/20",
        link: "text-primary underline-offset-4 hover:underline",
        romantic:
          "bg-gradient-to-r from-rose-500 via-rose-600 to-pink-600 text-white shadow-lg shadow-rose-500/30 hover:shadow-rose-500/50 hover:opacity-95",
        glow:
          "bg-rose-500 text-white shadow-[0_0_20px_rgba(244,63,94,0.45)] hover:shadow-[0_0_30px_rgba(244,63,94,0.6)] hover:bg-rose-600",
        glass:
          "glass-card hover:bg-rose-500/10 text-foreground border-rose-300/40 dark:border-rose-800/40 hover:border-rose-400",
      },
      size: {
        default: "h-9.5 gap-2 px-4 py-2",
        xs: "h-6.5 gap-1 rounded-lg px-2 text-xs",
        sm: "h-8 gap-1.5 rounded-lg px-3 text-xs",
        lg: "h-11 gap-2.5 rounded-2xl px-6 text-base font-semibold",
        icon: "size-9.5 rounded-xl",
        "icon-sm": "size-8 rounded-lg",
        "icon-lg": "size-11 rounded-2xl",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "default", size = "default", asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
