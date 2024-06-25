import { Package2 } from "lucide-react";
import Link from "next/link";

const companyName = "Acme Inc";

export default function Logo() {
  return (
    <Link href="/" className="flex items-center gap-2 font-semibold">
      <Package2 className="h-6 w-6" />
      <span className="sr-only">{companyName}</span>
      <span className="hidden md:block">{companyName}</span>
    </Link>
  );
}
