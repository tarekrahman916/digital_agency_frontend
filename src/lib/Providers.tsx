import { AntdRegistry } from "@ant-design/nextjs-registry";
import { ConfigProvider } from "antd";
import AosProvider from "./AosProvider";

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
        <AntdRegistry>{children}</AntdRegistry>
      </AosProvider>
    </ConfigProvider>
  );
};

export default Providers;
