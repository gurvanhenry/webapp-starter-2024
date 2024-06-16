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
  SidebarHeading,
} from "../components/sidebar";
import { useAuth } from "../auth/auth-context";

export function SideMenuLinks({ pathname }: { pathname: string }) {
  const { isAuthenticated } = useAuth();

  const linkPublic = [
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
      href: "/signin",
      icon: <KeyIcon />,
      label: "Sign In",
    },
  ];
  const linkProtected = [
    {
      href: "/users",
      icon: <UserGroupIcon />,
      label: "Users",
    },
    {
      href: "/settings",
      icon: <Cog6ToothIcon />,
      label: "Settings",
    },
  ];

  return (
    <>
      <SidebarSection>
        <SidebarHeading>Public</SidebarHeading>
        {linkPublic.map((link) => (
          <SidebarItem
            key={link.href}
            href={link.href}
            current={pathname === link.href}
          >
            {link.icon}
            <SidebarLabel>{link.label}</SidebarLabel>
          </SidebarItem>
        ))}
        {isAuthenticated && (
          <>
            <SidebarHeading>Protected</SidebarHeading>
            {linkProtected.map((link) => (
              <SidebarItem
                key={link.href}
                href={link.href}
                current={pathname === link.href}
              >
                {link.icon}
                <SidebarLabel>{link.label}</SidebarLabel>
              </SidebarItem>
            ))}
          </>
        )}
      </SidebarSection>
    </>
  );
}
