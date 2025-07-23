import { Home, Wallet, SendIcon, CreditCard } from "lucide-react"

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"

// Menu items.
const items = [
  {
    title: "Home",
    url: "/dashboard",
    icon: Home,
  },
  {
    title: "Wallet",
    url: "/transfer",
    icon: Wallet,
  },
  {
    title: "Transactions",
    url: "/transactions",
    icon: CreditCard,
  },
  {
    title: "P2p Transfer",
    url: "/p2p",
    icon: SendIcon,
  },

]

export function AppSidebar() {
  return (
    <Sidebar className="bg-white py-25  text-black dark:bg-neutral-900 dark:text-white">
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel className="text-lg">Services</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu className="space-y-2 text-md">
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  )
}