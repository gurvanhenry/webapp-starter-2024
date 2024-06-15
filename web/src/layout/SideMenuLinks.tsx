import {
  HomeIcon,
  Square2StackIcon,
  Cog6ToothIcon,
  UserGroupIcon,
} from "@heroicons/react/24/solid";
import {
  SidebarSection,
  SidebarItem,
  SidebarLabel,
} from "../components/sidebar";

export function SideMenuLinks({ pathname }: { pathname: string }) {
  return (
    <SidebarSection>
      <SidebarItem href="/" current={pathname === "/"}>
        <HomeIcon />
        <SidebarLabel>Home</SidebarLabel>
      </SidebarItem>
      <SidebarItem href="/bats" current={pathname.startsWith("/bats")}>
        <Square2StackIcon />
        <SidebarLabel>Bats</SidebarLabel>
      </SidebarItem>
      <SidebarItem href="/users" current={pathname.startsWith("/users")}>
        <UserGroupIcon/>
        <SidebarLabel>Users</SidebarLabel>
      </SidebarItem>
      <SidebarItem href="/settings" current={pathname.startsWith("/settings")}>
        <Cog6ToothIcon />
        <SidebarLabel>Settings</SidebarLabel>
      </SidebarItem>
    </SidebarSection>
  );
}
