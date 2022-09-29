module.exports = function (api) {
  api.cache(true);
  const presets = [
    {
      presets: [
        [
          "@babel/preset-env",
          {
            targets: {
              "node": "14"
            }
          },
        ],
        ["@babel/preset-typescript"],
      ],
    },
  ];

  return {
    presets,
  };
};