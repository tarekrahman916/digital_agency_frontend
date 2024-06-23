"use client";
import { Divider, Layout, Menu } from "antd";
import {
  Boxes,
  ExternalLink,
  Layers,
  Layers2,
  LayoutGrid,
  Plus,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const { Header, Content, Footer, Sider } = Layout;
export default function Sidebar({
  showSidebar,
  setShowSidebar,
}: {
  showSidebar: boolean;
  setShowSidebar: any;
}) {
  const pathname = usePathname();
  const items = [
    {
      key: "1",
      icon: <LayoutGrid className="w-4 h-4" />,
      label: "Dashboard",
      href: "/dashboard",
    },
    {
      key: "2",
      icon: <Layers2 className="w-4 h-4" />,
      label: "Categories",
      href: "/dashboard/categories",
    },
    {
      key: "3",
      icon: <Boxes className="w-4 h-4" />,
      label: "Services",
      href: "/dashboard/services",
    },

    {
      key: "4",
      icon: <Layers className="w-4 h-4" />,
      label: "Projects",
      href: "/dashboard/projects",
    },
    {
      key: "5",
      label: "Sites",
      icon: <ExternalLink />,
      href: "/",
    },
  ];
  return (
    <div>
      <Layout
        style={{ backgroundColor: "transparent" }}
        className={
          showSidebar
            ? "sm:block mt-20 sm:mt-0 bg-slate-900  px-4 w-64  h-screen fixed top-0 left-0 z-30 text-slate-300 shadow-md "
            : "hidden mt-20 sm:mt-0 bg-slate-900  px-4 w-64  h-screen fixed top-0 left-0 z-30 text-slate-300 shadow-md "
        }
      >
        <Sider style={{ backgroundColor: "transparent" }} className="w-64">
          <Menu
            theme="dark"
            defaultSelectedKeys={[pathname]}
            mode="vertical"
            className="bg-transparent  border-0 lg:mt-28 mt-8"
          >
            {items?.map((item) => (
              <Menu.Item key={item.href}>
                <Link
                  href={item.href}
                  className="flex items-center space-x-2  text-[16px]  tracking-wider no-underline text-slate-100"
                >
                  {item.icon}
                  <span>{item.label}</span>
                </Link>
              </Menu.Item>
            ))}
          </Menu>
        </Sider>
      </Layout>
    </div>
  );
}
