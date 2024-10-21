import SideBar from "../ui/sidebar"

export default function Layout({children}: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen">
      <div className="w-full">
        <SideBar />
      </div>
      <div>{children}</div>
    </div>
  )
}