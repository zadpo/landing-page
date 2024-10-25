import React, { InputHTMLAttributes, forwardRef } from "react";
import { cn } from "@/lib/utils";

export interface TextboxProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  errorMessage?: string;
  variant?: "small" | "medium"; // Define variant prop
}

const Textbox = forwardRef<HTMLInputElement, TextboxProps>(
  ({ className, label, errorMessage, variant = "medium", ...props }, ref) => {
    return (
      <div className="flex flex-col w-full gap-2">
        {label && (
          <label className="flex font-medium text-baseblack-900" htmlFor={props.id || props.name}>
            {label}
          </label>
        )}
        <input
          type="text"
          className={cn(
            `flex w-full rounded-md border border-input bg-background
             px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground
             focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring
             focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50`,
            {
              // Conditional classes based on variant
              "text-xs py-1": variant === "small",
              "text-sm py-2": variant === "medium",
            },
            className
          )}
          ref={ref}
          {...props}
        />
        {errorMessage && (
          <p className="flex text-red-500">
            {errorMessage}
          </p>
        )}
      </div>
    );
  }
);

Textbox.displayName = "Textbox";

export { Textbox };
