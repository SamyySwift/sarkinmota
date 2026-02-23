"use client";

import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  return (
    <div className="fixed inset-0 pointer-events-none z-[100]">
      <TopBar currentPath={pathname} />
    </div>
  );
}

function TopBar({ currentPath }: { currentPath: string }) {
  const tabs = [
    { name: "Home", href: "/" },
    { name: "Shop", href: "/shop" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" }
  ];

  return (
    <div className="absolute top-0 left-0 w-full p-8 flex justify-between items-center pointer-events-auto">
      {/* Left side: Brand / Logo */}
      <div className="flex flex-1 justify-start">
        <Link href="/" className="w-12 h-12 bg-white/5 backdrop-blur-md rounded-xl border border-white/10 flex items-center justify-center shadow-xl overflow-hidden p-2 hover:bg-white/10 transition-colors">
          <img src="/logo.jpg" alt="SarkinMota Logo" className="w-full h-full object-contain mix-blend-screen" />
        </Link>
      </div>

      {/* Middle side: Navigation Tabs */}
      <div className="flex justify-center flex-shrink-0">
        <div className="flex items-center gap-2 p-1.5 bg-black/40 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl">
          {tabs.map((tab) => {
            const isActive = currentPath === tab.href || (tab.href !== "/" && currentPath.startsWith(tab.href));
            
            return (
              <Link
                key={tab.name}
                href={tab.href}
                className={cn(
                  "px-6 py-2 rounded-xl text-sm font-medium transition-all duration-300 relative",
                  isActive 
                    ? "text-accent" 
                    : "text-subtle hover:text-white hover:bg-white/5"
                )}
              >
                {tab.name}
                {isActive && (
                  <motion.div 
                    layoutId="activeTab"
                    className="absolute inset-0 bg-accent/10 border border-accent/30 rounded-xl -z-10 shadow-[0_0_15px_rgba(199,164,61,0.1)]"
                  />
                )}
              </Link>
            );
          })}
        </div>
      </div>

      {/* Right side: User Profile */}
      <div className="flex flex-1 justify-end">
        <div className="px-5 py-2.5 bg-black/40 backdrop-blur-xl border border-white/10 rounded-2xl flex items-center gap-4 shadow-2xl">
          <div className="text-right hidden sm:block">
            <p className="text-[10px] uppercase tracking-widest text-subtle font-bold">Motorist</p>
            <p className="text-sm font-medium text-white">George Smith</p>
          </div>
          <div className="w-10 h-10 rounded-lg overflow-hidden border border-white/20">
            <img 
              src="https://api.dicebear.com/7.x/avataaars/svg?seed=George" 
              alt="User" 
              className="w-full h-full object-cover grayscale opacity-80"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
