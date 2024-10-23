import Link from "next/link"
import SideBarNavLinks from "./sidebar-nav-links"
// Overview 
// Accounts
// Transactions
// Budget
// Charts

export default function SideBar() {
  return (
    <div className="flex flex-col h-full max-w-72 border-r-2 px-4 py-6">
      <Link href="/">
        <div>
          Logo goes here
        </div>
      </Link>
      <div className="flex flex-col gap-4">
        <SideBarNavLinks />
      </div>
    </div>
  )
}