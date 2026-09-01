import * as React from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

interface AccordionContextValue {
  openItems: Set<string>;
  toggle: (value: string) => void;
}

const AccordionContext = React.createContext<AccordionContextValue | null>(null);

function useAccordion() {
  const context = React.useContext(AccordionContext);
  if (!context) {
    throw new Error("Accordion components must be used within an Accordion");
  }
  return context;
}

interface AccordionProps extends React.HTMLAttributes<HTMLDivElement> {
  type?: "single" | "multiple";
  defaultValue?: string | string[];
  value?: string | string[];
  onValueChange?: (value: string | string[]) => void;
}

const Accordion = React.forwardRef<HTMLDivElement, AccordionProps>(
  (
    {
      type = "single",
      defaultValue,
      value,
      onValueChange,
      className,
      children,
      ...props
    },
    ref
  ) => {
    const [internalValue, setInternalValue] = React.useState<string | string[]>(
      defaultValue ?? (type === "multiple" ? [] : "")
    );

    const controlledValue = value !== undefined ? value : internalValue;

    const setValue = (next: string | string[]) => {
      if (value === undefined) {
        setInternalValue(next);
      }
      onValueChange?.(next);
    };

    const toggle = React.useCallback(
      (itemValue: string) => {
        if (type === "multiple") {
          const arr = Array.isArray(controlledValue) ? controlledValue : [];
          const next = arr.includes(itemValue)
            ? arr.filter((v) => v !== itemValue)
            : [...arr, itemValue];
          setValue(next);
        } else {
          const isOpen =
            typeof controlledValue === "string"
              ? controlledValue === itemValue
              : false;
          setValue(isOpen ? "" : itemValue);
        }
      },
      [type, controlledValue, setValue]
    );

    const openItems = new Set(
      Array.isArray(controlledValue) ? controlledValue : controlledValue ? [controlledValue] : []
    );

    return (
      <AccordionContext.Provider value={{ openItems, toggle }}>
        <div ref={ref} className={cn("space-y-1", className)} {...props}>
          {children}
        </div>
      </AccordionContext.Provider>
    );
  }
);
Accordion.displayName = "Accordion";

interface AccordionItemProps extends React.HTMLAttributes<HTMLDivElement> {
  value: string;
}

const AccordionItem = React.forwardRef<HTMLDivElement, AccordionItemProps>(
  ({ value, className, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn("border rounded-xl overflow-hidden bg-white shadow-sm hover:shadow-md transition-shadow duration-200", className)}
        {...props}
      >
        {React.Children.map(children, (child) =>
          React.isValidElement(child)
            ? React.cloneElement(child as React.ReactElement<{ accordionValue: string }>, {
                accordionValue: value,
              })
            : child
        )}
      </div>
    );
  }
);
AccordionItem.displayName = "AccordionItem";

interface AccordionTriggerProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  accordionValue?: string;
}

const AccordionTrigger = React.forwardRef<HTMLButtonElement, AccordionTriggerProps>(
  ({ accordionValue, className, children, ...props }, ref) => {
    const { openItems, toggle } = useAccordion();
    const isOpen = accordionValue ? openItems.has(accordionValue) : false;

    return (
      <button
        ref={ref}
        type="button"
        onClick={() => accordionValue && toggle(accordionValue)}
        className={cn(
          "flex w-full items-center justify-between text-left px-5 py-4 font-semibold hover:bg-slate-50/80 transition-colors cursor-pointer rounded-none",
          className
        )}
        aria-expanded={isOpen}
        {...props}
      >
        {children}
        <ChevronDown
          className={cn(
            "h-5 w-5 flex-shrink-0 transition-transform duration-300 text-blue-600",
            isOpen ? "rotate-180" : ""
          )}
        />
      </button>
    );
  }
);
AccordionTrigger.displayName = "AccordionTrigger";

interface AccordionContentProps extends React.HTMLAttributes<HTMLDivElement> {
  accordionValue?: string;
}

const AccordionContent = React.forwardRef<HTMLDivElement, AccordionContentProps>(
  ({ accordionValue, className, children, ...props }, ref) => {
    const { openItems } = useAccordion();
    const isOpen = accordionValue ? openItems.has(accordionValue) : false;

    if (!isOpen) return null;

    return (
      <div
        ref={ref}
        className={cn("px-5 pb-5 text-slate-600 leading-relaxed border-t border-slate-100", className)}
        {...props}
      >
        {children}
      </div>
    );
  }
);
AccordionContent.displayName = "AccordionContent";

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent };
