import Link from "next/link";
import { Badge } from "./badge";
import { cn } from "@/lib/utils";

type NavLinkProps = {
  href: string;
  icon: React.ReactNode;
  label: string;
  badge?: number;
  navType: "mobile" | "desktop";
};

const navStyle: Record<NavLinkProps["navType"], string> = {
  mobile: cn(
    "mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground"
  ),
  desktop:
    "text-muted-foreground hover:text-primary flex items-center gap-3 rounded-lg px-3 py-2 transition-all",
};

export default function NavLink({
  href,
  icon,
  label,
  badge,
  navType,
}: NavLinkProps) {
  return (
    <Link href={href} className={navStyle[navType]}>
      {icon}
      <span>{label}</span>
      {badge && (
        <Badge className="ml-auto flex h-6 w-6 shrink-0 items-center justify-center rounded-full">
          {badge}
        </Badge>
      )}
    </Link>
  );
}
