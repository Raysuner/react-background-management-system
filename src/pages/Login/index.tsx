import "./index.scss";
import LoginBgImage from "public/login_bg.jpeg";

export default function Login() {
  return (
    <div
      className="login-page-container"
      style={{ backgroundImage: `url(${LoginBgImage})` }}
    ></div>
  );
}
