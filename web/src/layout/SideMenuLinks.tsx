import {
  HomeIcon,
  Square2StackIcon,
  Cog6ToothIcon,
  UserGroupIcon,
  KeyIcon,
} from "@heroicons/react/24/solid";
import {
  SidebarSection,
  SidebarItem,
  SidebarLabel,
} from "../components/sidebar";

export function SideMenuLinks({ pathname }: { pathname: string }) {
  const Links = [
    {
      href: "/",
      icon: <HomeIcon />,
      label: "Home",
    },
    {
      href: "/bats",
      icon: <Square2StackIcon />,
      label: "Bats",
    },
    {
      href: "/users",
      icon: <UserGroupIcon />,
      label: "Users",
    },
    {
      href: "/auth",
      icon: <KeyIcon />,
      label: "Auth",
    },
    {
      href: "/settings",
      icon: <Cog6ToothIcon />,
      label: "Settings",
    },
  ];

  return (
    <SidebarSection>
      {Links.map((link) => (
        <SidebarItem key={link.href} href={link.href} current={pathname === link.href}>
          {link.icon}
          <SidebarLabel>{link.label}</SidebarLabel>
        </SidebarItem>
      ))}
    </SidebarSection>
  );
}
