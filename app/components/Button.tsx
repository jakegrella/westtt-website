import { cn } from "../utils/cn";

const Button: React.FC<React.HTMLProps<HTMLButtonElement>> = ({
  children,
  className,
  id,
  href,
}) => (
  <a
    href={href}
    id={id}
    className={cn(
      "bg-primary px-3 py-1 rounded-lg w-fit inline-block",
      className
    )}
  >
    {children}
  </a>
);

export default Button;
