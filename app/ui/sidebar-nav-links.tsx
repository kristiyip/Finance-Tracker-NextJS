"use client";

import Link from "next/link"
import { usePathname } from "next/navigation"

const links = [
  { name: "Overview", href: "/dashboard"},
  { name: "Accounts", href: "/dashboard/accounts"},
  { name: "Transactions", href: "/dashboard/transactions"},
  { name: "Budget", href: "/dashboard/budget"},
  { name: "Charts", href: "/dashboard/charts"}
]

export default function SideBarNavLinks() {
  const pathname = usePathname()

  return (
    <>
      {links.map((link, i) => (
        <Link
          key={link.name}
          href={link.href}
        >
          <span>{link.name}</span>
        </Link>
      ))}
    </>
  )
}