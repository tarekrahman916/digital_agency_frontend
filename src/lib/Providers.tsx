import { AntdRegistry } from "@ant-design/nextjs-registry";
import { ConfigProvider } from "antd";
import AosProvider from "./AosProvider";
import { Toaster } from "react-hot-toast";
import { NextSSRPlugin } from "@uploadthing/react/next-ssr-plugin";
import { extractRouterConfig } from "uploadthing/server";

import { ourFileRouter } from "../app/api/uploadthing/core";

const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: "#1AA150",
          borderRadius: 2,
        },
      }}
    >
      <AosProvider>
        <AntdRegistry>
          <NextSSRPlugin routerConfig={extractRouterConfig(ourFileRouter)} />
          {children}
          <Toaster position="top-center" reverseOrder={false} />
        </AntdRegistry>
      </AosProvider>
    </ConfigProvider>
  );
};

export default Providers;
