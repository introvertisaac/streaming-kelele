"use client"

import { usePathname } from "next/navigation"
import { useUser } from "@clerk/nextjs"
import {
  DollarSign,
  Fullscreen,
  KeyRound,
  MessageSquare,
  Settings,
  Users,
} from "lucide-react"

import { NavItem, NavItemSkeleton } from "./items"

export const Navigation = () => {
  const pathname = usePathname()
  const { user } = useUser()

  const routes = [
    {
      label: "Stream",
      href: `/u/${user?.username}`,
      icon: Fullscreen,
    },
    {
      label: "Keys",
      href: `/u/${user?.username}/keys`,
      icon: KeyRound,
    },
    {
      label: "Chat",
      href: `/u/${user?.username}/chat`,
      icon: MessageSquare,
    },
    {
      label: "Jemaw",
      href: `/u/${user?.username}/jemaw`,
      icon: Users,
    },
    {
      label: "Payments & Analytics",
      href: `/u/${user?.username}/payments`,
      icon: DollarSign,
    },
    {
      label: "Setting",
      href: `/u/${user?.username}/setting`,
      icon: Settings,
    },
    {
      label: "1 time Messages",
      href: `/u/${user?.username}/messages`,
      icon: Settings,
    },
  ]

  if (!user?.username) {
    return (
      <ul className="space-y-2">
        {[...Array(5)].map((_, i) => (
          <NavItemSkeleton key={i} />
        ))}
      </ul>
    )
  }

  return (
    <ul className="space-y-2 px-2 pt-4 lg:pt-0">
      {routes.map((route) => (
        <NavItem
          key={route.href}
          label={route.label}
          icon={route.icon}
          href={route.href}
          isActive={pathname === route.href}
        />
      ))}
    </ul>
  )
}
