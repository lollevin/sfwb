"use client";

import { usePathname } from "next/navigation";
import { BottomNav } from "@/components/bottom-nav";

export function AppShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isLoginPage = pathname === "/";

  return (
    <>
      <main className={`mx-auto max-w-md min-h-screen bg-background ${isLoginPage ? "" : "pb-20"}`}>
        {children}
      </main>
      {!isLoginPage && <BottomNav />}
    </>
  );
}
