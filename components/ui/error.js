import * as React from "react"
import { AlertCircle } from "lucide-react"
import { cn } from "@/lib/utils"

const Error = React.forwardRef(
  (
    { className, message, variant = "destructive", children, ...props },
    ref
  ) => {
    return (
      <div
        ref={ref}
        role="alert"
        className={cn(
          "flex items-center gap-2 rounded-md border p-4",
          variant === "destructive" &&
            "border-destructive bg-destructive/10 text-destructive",
          variant === "default" &&
            "border-border bg-background text-foreground",
          className
        )}
        {...props}
      >
        <AlertCircle className="h-5 w-5 shrink-0" />
        <div className="flex-1 text-sm font-medium">
          {message || children || "An error occurred"}
        </div>
      </div>
    )
  }
)
Error.displayName = "Error"

export { Error }
