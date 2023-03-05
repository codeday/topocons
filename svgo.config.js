module.exports = {
  multipass: true,
  plugins: [
    "convertStyleToAttrs",
    {
      name: "preset-default",
      params: {
        overrides: {
          removeViewBox: false,
        },
      },
    },
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
      name: "addCurrentColor",
      type: "perItem",
      fn: () => {
        return {
          element: {
            enter: (node, _parentNode) => {
              if (['path', 'circle', 'ellipse', 'rect', 'text', 'textPath', 'polygon', 'tref', 'tspan', 'altGlyph'].includes(node.name) && node.attributes.fill != 'currentColor') {
                node.attributes.fill = 'currentColor'
              }
            }
          }
        }
      }
    },
  ],
};
