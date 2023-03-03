// svgo.config.js
module.exports = {
  multipass: true, // boolean. false by default
  js2svg: {
    indent: 2, // string with spaces or number of spaces. 4 by default
    pretty: true, // boolean, false by default
  },
  plugins: [
    {
      name: "preset-default",
      params: {
        overrides: {
          removeViewBox: false,
        },
      },
    },
    "convertStyleToAttrs",
    {
      name: "sortAttrs",
      params: {
        xmlnsOrder: "alphabetical",
      },
    },
    {
      name: "convertColors",
      params: {
        currentColor: true,
      },
    },
    {
      name: "removeAttrs",
      params: {
        attrs: "(fill|color)",
      },
    },
  ],
};
