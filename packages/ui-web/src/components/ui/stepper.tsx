import { cn } from "@rakazo/ui-web/lib/utils";
import { Check } from "lucide-react";
import type React from "react";

export function Stepper({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return <div className={cn("flex flex-col gap-6", className)}>{children}</div>;
}

export function Step({
  title,
  description,
  isActive,
  isCompleted,
  stepNumber,
}: {
  title: string;
  description?: string;
  isActive?: boolean;
  isCompleted?: boolean;
  stepNumber: number;
}) {
  return (
    <div className={cn("flex gap-3", isActive ? "opacity-100" : "opacity-50")}>
      <div className="flex flex-col items-center">
        <div
          className={cn(
            "flex size-6 shrink-0 items-center justify-center rounded-full text-xs font-medium border",
            isActive
              ? "border-primary bg-primary text-primary-foreground"
              : isCompleted
                ? "border-primary bg-primary text-primary-foreground"
                : "border-border text-muted-foreground",
          )}
        >
          {isCompleted ? <Check size={14} strokeWidth={2.5} /> : stepNumber}
        </div>
      </div>
      <div className="-mt-[2px] flex flex-col gap-0.5">
        <div
          className={cn(
            "text-[15px] font-semibold leading-tight",
            isActive ? "text-foreground" : "text-muted-foreground",
          )}
        >
          {title}
        </div>
        {description && (
          <div className="text-[13px] text-muted-foreground leading-snug">{description}</div>
        )}
      </div>
    </div>
  );
}
