import { Button, Result } from "antd";
import { useNavigate } from "react-router-dom";

export default function Forbidden403() {
  const navigate = useNavigate();
  return (
    <Result
      status={403}
      title="403"
      subTitle="抱歉，禁止访问此页面"
      extra={
        <Button
          onClick={() => {
            navigate("/");
          }}
        >
          回首页
        </Button>
      }
    />
  );
}
