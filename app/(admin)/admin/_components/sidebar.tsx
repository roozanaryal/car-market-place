"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { LayoutDashboard, Car, Calendar, Cog, LogOut, LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { SignOutButton } from "@clerk/nextjs";
import { ButtonHTMLAttributes, ReactNode } from 'react';

interface RouteItem {
  label: string;
  icon: LucideIcon;
  href: string;
}

// Navigation items
const routes: RouteItem[] = [
  {
    label: "Dashboard",
    icon: LayoutDashboard,
    href: "/admin",
  },
  {
    label: "Cars",
    icon: Car,
    href: "/admin/cars",
  },
  {
    label: "Test Drives",
    icon: Calendar,
    href: "/admin/test-drives",
  },
  {
    label: "Settings",
    icon: Cog,
    href: "/admin/settings",
  },
];

interface SidebarProps {
  /**
   * Optional class name to apply to the sidebar
   */
  className?: string;
  /**
   * Optional children to render inside the sidebar
   */
  children?: ReactNode;
}

export const Sidebar = ({ className, children }: SidebarProps) => {
  const pathname = usePathname();

  const renderNavItem = (route: RouteItem, isMobile: boolean = false) => {
    const isActive = pathname === route.href;
    const Icon = route.icon;
    
    if (isMobile) {
      return (
        <Link
          key={route.href}
          href={route.href}
          className={cn(
            "flex flex-col items-center justify-center text-xs font-medium transition-all py-1 flex-1",
            isActive ? "text-blue-700" : "text-slate-500"
          )}
          aria-current={isActive ? 'page' : undefined}
        >
          <Icon
            className={cn(
              "h-6 w-6 mb-1",
              isActive ? "text-blue-700" : "text-slate-500"
            )}
            aria-hidden="true"
          />
          {route.label}
        </Link>
      );
    }

    return (
      <Link
        key={route.href}
        href={route.href}
        className={cn(
          "flex items-center gap-x-2 text-slate-500 text-sm font-medium pl-6 transition-all hover:text-slate-600 hover:bg-slate-100/50 h-12",
          isActive && "text-blue-700 bg-blue-100/50 hover:bg-blue-100 hover:text-blue-700"
        )}
        aria-current={isActive ? 'page' : undefined}
      >
        <Icon className="h-5 w-5" aria-hidden="true" />
        {route.label}
      </Link>
    );
  };

  return (
    <>
      {/* Desktop Sidebar */}
      <div className={cn("hidden md:flex h-full flex-col overflow-y-auto bg-white shadow-sm border-r", className)}>
        <div className="p-6">
          <Link href="/admin" className="focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded">
            <h1 className="text-xl font-bold">Vehiql Admin</h1>
          </Link>
        </div>
        <nav className="flex flex-col w-full" aria-label="Main navigation">
          {routes.map((route) => renderNavItem(route))}
        </nav>
        <div className="mt-auto p-6">
          <SignOutButton>
            <button 
              className="flex items-center gap-x-2 text-slate-500 text-sm font-medium transition-all hover:text-slate-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded p-2 -ml-2"
              type="button"
              aria-label="Sign out"
            >
              <LogOut className="h-5 w-5" aria-hidden="true" />
              Log out
            </button>
          </SignOutButton>
        </div>
        {children}
      </div>

      {/* Mobile Bottom Tabs */}
      <nav 
        className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-white border-t flex justify-around items-center h-16"
        aria-label="Mobile navigation"
      >
        {routes.map((route) => renderNavItem(route, true))}
      </nav>
    </>
  );
};
