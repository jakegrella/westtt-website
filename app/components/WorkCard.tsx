import Image from "next/image";
import Link, { LinkProps } from "next/link";
import { cn } from "../utils/cn";

type WorkCardProps = {
  title: string;
  tags: string[];
  imageSource: string;
} & LinkProps &
  React.HTMLAttributes<HTMLAnchorElement>;

const WorkCard: React.FC<WorkCardProps> = ({
  title,
  tags,
  imageSource,
  href,
  className,
}) => (
  <Link
    href={href}
    className={cn(
      "relative w-full aspect-square flex flex-col justify-end p-3 rounded-[20px] overflow-hidden",
      className
    )}
  >
    <Image
      src={imageSource}
      alt={title}
      className="absolute object-cover -z-10 rounded-[20px]"
      sizes="100vw"
      fill
    />
    <div className="relative w-fit">
      <div className="absolute -inset-x-3 -inset-y-1 blur-md rounded-xl -z-10 border border-red-500 bg-black bg-opacity-25" />
      <h2>{title}</h2>
    </div>
    <div className="relative w-fit">
      <div className="absolute -inset-x-3 -inset-y-1 blur-md rounded-xl -z-10 border border-red-500 bg-black bg-opacity-25" />
      <div className="flex flex-wrap gap-3">
        {tags.map((tag) => (
          <div
            key={tag}
            className="bg-black bg-opacity-50 px-3 py-1 rounded-lg"
          >
            <span className="text-sm">{tag}</span>
          </div>
        ))}
      </div>
    </div>
  </Link>
);

export default WorkCard;
