import Image from "next/image";
import { asset } from "../lib/asset";

export default function BrandMark({
  className = "h-10 w-10",
}: {
  className?: string;
}) {
  return (
    <Image
      src={asset("/brand/logo-mark.jpeg")}
      alt="LEAKScan-IQ"
      width={80}
      height={80}
      className={`${className} object-contain`}
      priority
    />
  );
}
