import { RouterProvider } from "react-router-dom";
import { ConfigProvider } from "antd";
import router from "./router";

export default function App() {
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: "#ed6c00"
        }
      }}
    >
      <RouterProvider router={router} />
    </ConfigProvider>
  );
}
