"use client";
import DashboardHeader from "@/components/backend/DashboardHeader";
import Sidebar from "@/components/backend/Sidebar";
import Providers from "@/lib/Providers";
import React, { useState } from "react";

export default function Layout({ children }: { children: React.ReactNode }) {
  const [showSidebar, setShowSidebar] = useState(true);
  return (
    <Providers>
      <div className="flex">
        <DashboardHeader
          showSidebar={showSidebar}
          setShowSidebar={setShowSidebar}
        />

        <div
          className={
            showSidebar
              ? "lg:ml-64 ml-0 flex-grow bg-slate-100 min-h-screen"
              : " ml-0 flex-grow bg-slate-100 min-h-screen"
          }
        >
          {/* Header */}
          <Sidebar showSidebar={showSidebar} setShowSidebar={setShowSidebar} />
          {/* Main */}
          <main className="bg-slate-100 dark:bg-slate-900 p-8 min-h-screen text-slate-900   mt-16 min-w-full">
            {children}
          </main>
        </div>
      </div>
    </Providers>
  );
}
