"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

interface CollapsibleProps {
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  children: React.ReactNode;
  className?: string;
}

function Collapsible({ open, onOpenChange, children, className }: CollapsibleProps) {
  const [internalOpen, setInternalOpen] = React.useState(false);
  const isControlled = open !== undefined;
  const isOpen = isControlled ? open : internalOpen;

  const handleToggle = () => {
    const next = !isOpen;
    if (!isControlled) setInternalOpen(next);
    onOpenChange?.(next);
  };

  return (
    <div className={cn("w-full", className)} data-state={isOpen ? "open" : "closed"}>
      {React.Children.map(children, (child) => {
        if (React.isValidElement(child)) {
          const type = (child.type as { displayName?: string }).displayName;
          if (type === "CollapsibleTrigger") {
            return React.cloneElement(child as React.ReactElement<{ onClick?: () => void; "data-state"?: string }>, {
              onClick: handleToggle,
            });
          }
          if (type === "CollapsibleContent") {
            return isOpen ? child : null;
          }
        }
        return child;
      })}
    </div>
  );
}

interface CollapsibleTriggerProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  asChild?: boolean;
}

const CollapsibleTrigger = React.forwardRef<HTMLButtonElement, CollapsibleTriggerProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <button ref={ref} type="button" className={cn("", className)} {...props}>
        {children}
      </button>
    );
  }
);
CollapsibleTrigger.displayName = "CollapsibleTrigger";

interface CollapsibleContentProps extends React.HTMLAttributes<HTMLDivElement> {}

const CollapsibleContent = React.forwardRef<HTMLDivElement, CollapsibleContentProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <div ref={ref} className={cn("", className)} {...props}>
        {children}
      </div>
    );
  }
);
CollapsibleContent.displayName = "CollapsibleContent";

export { Collapsible, CollapsibleTrigger, CollapsibleContent };
