import { ReactNode } from "react";

export default function Layout({children}: { children: ReactNode}) {
  return (
    <div className="relative flex h-screen w-full flex-col items-center justify-center">
      <div className="mt-12">
        {children}
      </div>
    </div>
  )
}