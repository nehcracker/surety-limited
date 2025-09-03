module.exports = function override(config) {
  // Ignore source map warnings for lucide-react
  config.module.rules.push({
    test: /\.js$/,
    enforce: "pre",
    use: ["source-map-loader"],
    exclude: [/node_modules\/lucide-react/],
  });
  return config;
};
