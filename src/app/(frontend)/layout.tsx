import Providers from "@/lib/Providers";
import React from "react";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Providers>
      <div>
        <main className="bg-slate-100  min-h-screen text-slate-900">
          {children}
        </main>
      </div>
    </Providers>
  );
}
