import { cn } from "~/lib/utils";

export const Button = ({
  children,
  className,
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement>) => {
  return (
    <button
      className={cn(
        "px-6 h-10 py-3 flex items-center bg-black rounded-lg shadow-md hover:bg-gray-900 hover:scale-105 transition-transform shrink-0",
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};
