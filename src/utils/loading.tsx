import ReactDOM from "react-dom/client";
import Loading from "@/components/Loading";

let requestCount = 0;

export function showLoading() {
  if (requestCount++ === 0) {
    const loading = document.createElement("div");
    loading.setAttribute("id", "loading");
    document.body.appendChild(loading);
    ReactDOM.createRoot(loading).render(<Loading />);
  }
}

export function hideLoading() {
  if (requestCount < 0) return;
  if (--requestCount === 0) {
    const loading = document.querySelector("#loading");
    if (loading) {
      document.body.removeChild(loading);
    }
  }
}
