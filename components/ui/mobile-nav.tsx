import Link from "next/link";
import { Menu, Package2 } from "lucide-react";
import { Button } from "./button";
import { Sheet, SheetTrigger, SheetContent } from "./sheet";
import NavLink from "./nav-link";
import { navLinks } from "./links";
import Logo from "./logo";

export default function MobileNav() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline" size="icon" className="shrink-0 md:hidden">
          <Menu className="h-5 w-5" />
          <span className="sr-only">Toggle navigation menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="flex flex-col">
        <nav className="grid gap-2 text-lg font-medium">
          <Logo />
          {navLinks.map((navLink) => (
            <NavLink key={navLink.href} {...navLink} navType="mobile" />
          ))}
        </nav>
      </SheetContent>
    </Sheet>
  );
}
