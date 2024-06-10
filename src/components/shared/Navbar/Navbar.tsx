"use client";
import { useState } from "react";
import { Button, Drawer, Dropdown, Layout, Menu, Typography } from "antd";
import { AlignJustify, ArrowBigDown } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import logo from "@/assets/main-logo.png";
import style from "./Navbar.module.css";

const { Header, Content } = Layout;
const { Title } = Typography;

const items = [
  { key: "1", label: "Home", href: "/" },
  { key: "2", label: "Services", href: "/services" },
  { key: "3", label: "Portfolio", href: "/portfolio" },
  { key: "4", label: "About Us", href: "/about-us" },
  { key: "5", label: "Contact Us", href: "/contact-us" },
  // { key: "2", label: "Dashboard", href: "/dashboard" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };
  return (
    <div>
      <Layout className="layout shadow-lg w-full z-50 fixed top-0  ">
        <Header className={`flex items-center py-12 ${style.header}`}>
          <Content>
            <Link href="/">
              <Title className="m-0 text-2xl flex items-center">
                <Image
                  src={logo}
                  alt="logo"
                  width={160}
                  height={70}
                  className="w-auto h-auto"
                />
              </Title>
            </Link>
          </Content>
          <Menu
            className="lg:block hidden bg-transparent  border-0 "
            disabledOverflow
            mode="horizontal"
            selectedKeys={[pathname]}
          >
            {items?.map((item) => (
              <Menu.Item key={item.href}>
                <Link
                  href={item.href}
                  className="text-[17px] font-medium tracking-wider no-underline text-slate-300"
                >
                  {item.label}
                </Link>
              </Menu.Item>
            ))}
          </Menu>

          <Button
            onClick={showDrawer}
            className="lg:hidden block bg-transparent border-none outline-none text-white hover:text-[#1AA150]"
          >
            <AlignJustify />
          </Button>
          <Drawer title="Menu" onClose={onClose} open={open}>
            <Menu
              className="lg:hidden block bg-transparent"
              disabledOverflow
              mode="vertical"
              selectedKeys={[pathname]}
            >
              {items?.map((item) => (
                <Menu.Item key={item.href}>
                  <Link
                    onClick={() => setOpen(false)}
                    href={item.href}
                    className="text-xl"
                  >
                    {item.label}
                  </Link>
                </Menu.Item>
              ))}
            </Menu>
          </Drawer>
        </Header>
      </Layout>
    </div>
  );
};

export default Navbar;
