"use client";

import {
  Book,
  GalleryVerticalEnd,
  Home,
  MessageCircle,
  SquareTerminal,
  User,
  Video,
  WholeWord,
} from "lucide-react";
import * as React from "react";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar";

import {
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { useSession } from "next-auth/react";
import { NavMain } from "./nav-main";
import { NavUser } from "./nav-user";
import Link from "next/link";

// This is sample data.
const data = {
  navMain: [
    {
      title: "Dashboard",
      url: "/dashboard",
      icon: SquareTerminal,
    },
    {
      title: "Profile",
      url: "/dashboard/profile",
      icon: User,
    },
    {
      title: "Lesson",
      url: "",
      icon: Book,
      items: [
        {
          title: "Add Lesson",
          url: "/dashboard/add-lesson",
        },
        {
          title: "Manage Lessons",
          url: "/dashboard/manage-lessons",
        },
      ],
    },
    {
      title: "Vocabulary",
      url: "",
      icon: WholeWord,
      items: [
        {
          title: "Add Vocabulary",
          url: "/dashboard/add-vocabulary",
        },
        {
          title: "Manage Vocabulary",
          url: "/dashboard/manage-Vocabulary",
        },
      ],
    },
    {
      title: "Tutorial",
      url: "",
      icon: Video,
      items: [
        {
          title: "Add Tutorial",
          url: "/dashboard/add-tutorial",
        },
        {
          title: "Manage Tutorials",
          url: "/dashboard/manage-tutorial",
        },
      ],
    },
    {
      title: "Manage Contact",
      url: "/dashboard/manage-contact",
      icon: MessageCircle,
    },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const { data: session } = useSession();

  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem className="py-2">
            <SidebarMenuButton size="lg">
              <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground">
                <GalleryVerticalEnd className="size-4" />
              </div>
              <h1 className="text-2xl font-bold">Dashboard</h1>
              <Link href="/" className="ml-8">
                <Home className="text-blue-600" />
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={session} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
