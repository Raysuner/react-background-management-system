export default function formatCurrency(num: number | string) {
  if (!num && num !== 0) {
    return "";
  }
  const val = parseFloat(num.toString());
  return val.toLocaleString("zh-CN", { style: "currency", currency: "CNY" });
}
