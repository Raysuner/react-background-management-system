import "./index.scss";
import LoginBgImage from "public/login_bg.jpeg";
import { Input, Form, Button } from "antd";

export default function Login() {
  const [form] = Form.useForm();
  return (
    <div
      className="login-page-container"
      style={{ backgroundImage: `url(${LoginBgImage})` }}
    >
      <div className="login-container">
        <div className="title">请登录</div>
        <Form
          className="login-info"
          form={form}
          onFinish={(values) => {
            console.log("values", values);
          }}
        >
          <Form.Item name="username">
            <Input placeholder="请输入账号" />
          </Form.Item>
          <Form.Item name="password">
            <Input placeholder="请输入密码" />
          </Form.Item>
          <Button type="primary" htmlType="submit" block>
            登录
          </Button>
        </Form>
      </div>
    </div>
  );
}
