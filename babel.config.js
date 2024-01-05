module.exports = {
  presets: [
    "@babel/preset-env",
    "@babel/preset-typescript",
    // 增加runtime: "automatic", 可以不再需要手动引入React
    ["@babel/preset-react", { runtime: "automatic" }],
  ],
};
