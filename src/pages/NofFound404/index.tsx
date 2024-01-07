import { Button, Result } from "antd";
import { useNavigate } from "react-router-dom";

export default function NotFound404() {
  const navigate = useNavigate();
  return (
    <Result
      status={404}
      title="404"
      subTitle="抱歉，此页面不存在"
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
