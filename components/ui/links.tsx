import { Home, ShoppingCart, Package, Users, LineChart } from "lucide-react";

export const navLinks = [
  {
    href: "#",
    icon: <Home className="h-5 w-5" />,
    label: "Dashboard",
  },
  {
    href: "#",
    icon: <ShoppingCart className="h-5 w-5" />,
    label: "Orders",
    badge: 6,
  },
  {
    href: "#",
    icon: <Package className="h-5 w-5" />,
    label: "Products",
  },
  {
    href: "#",
    icon: <Users className="h-5 w-5" />,
    label: "Customers",
  },
  {
    href: "#",
    icon: <LineChart className="h-5 w-5" />,
    label: "Analytics",
  },
];
