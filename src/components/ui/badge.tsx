import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";
import { useAnimate } from "motion/react";

const badgeVariants = cva(
  "cursor-default inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        default:
          "border-transparent bg-primary text-primary-foreground hover:bg-primary/80",
        secondary:
          "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",
        destructive:
          "border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80",
        outline: "text-foreground",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  const [ref, animate] = useAnimate();
  const animationRef = React.useRef<ReturnType<typeof animate> | null>(null);

  const returnToColor = (
    variant: "default" | "secondary" | "destructive" | "outline",
  ): string => {
    switch (variant) {
      case "secondary":
        return "#E3E7EE";
      case "outline":
        return "#ffffff";
      default:
        return "";
    }
  };

  const handleMouseEnter = () => {
    animationRef.current = animate(
      ref.current,
      {
        backgroundColor: ["#ff3300", "#9ec6ff", returnToColor(variant)],
      },
      {
        duration: 1,
        repeat: 0,
        repeatType: "reverse",
        ease: "easeInOut",
      },
    );
  };

  // const handleMouseLeave = () => {
  //   animationRef.current?.cancel();
  // };

  return (
    <div
      ref={ref}
      onMouseEnter={handleMouseEnter}
      // onMouseLeave={handleMouseLeave}
      className={cn(badgeVariants({ variant }), className)}
      {...props}
    />
  );
}

export { Badge, badgeVariants };
