import Image, { ImageProps } from "next/image";

const Logo = (props: Omit<ImageProps, "src" | "alt">) => (
  <Image
    src="/logo-peach.svg"
    alt="Westtt logo"
    height={props.height ?? 20}
    width={props.width ?? 48}
    {...props} // Spreads any additional props passed to Logo onto the Image component
  />
);

export default Logo;
