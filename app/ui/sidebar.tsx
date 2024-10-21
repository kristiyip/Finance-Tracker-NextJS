import Link from "next/link"
import SideBarNavLinks from "./sidebar-nav-links"
// Overview 
// Accounts
// Transactions
// Budget
// Charts

export default function SideBar() {
  return (
    <div className="flex flex-col h-full max-w-80 border-r-2">
      <Link href="/">
        <div>
          Logo goes here
        </div>
      </Link>
      <div className="flex flex-col">
        <SideBarNavLinks />
      </div>
    </div>
  )
}