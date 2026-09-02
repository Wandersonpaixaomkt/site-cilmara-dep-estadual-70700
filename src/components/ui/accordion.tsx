import * as React from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { Collapsible, CollapsibleTrigger, CollapsibleContent } from "@/components/ui/collapsible";

interface AccordionItemProps {
  value: string;
  trigger: React.ReactNode;
  children: React.ReactNode;
  className?: string;
}

function AccordionItem({ value, trigger, children, className }: AccordionItemProps) {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <Collapsible open={isOpen} onOpenChange={setIsOpen} className={cn("border-b border-slate-200", className)}>
      <CollapsibleTrigger
        asChild
        className="w-full flex items-center justify-between py-4 text-left font-medium text-slate-900 hover:text-blue-brand transition-colors cursor-pointer"
      >
        <button type="button" onClick={() => setIsOpen(!isOpen)} aria-expanded={isOpen}>
          {trigger}
          <ChevronDown
            className={cn("h-4 w-4 flex-shrink-0 transition-transform duration-300", isOpen ? "rotate-180" : "")}
          />
        </button>
      </CollapsibleTrigger>
      <CollapsibleContent className="pb-4 text-sm text-slate-600 leading-relaxed">
        {children}
      </CollapsibleContent>
    </Collapsible>
  );
}

interface AccordionProps {
  type?: "single" | "multiple";
  defaultValue?: string | string[];
  className?: string;
  children: React.ReactNode;
}

function Accordion({ type = "single", defaultValue, className, children }: AccordionProps) {
  return <div className={cn("", className)}>{children}</div>;
}

export { Accordion, AccordionItem };
