const production = !process.env.ROLLUP_WATCH;

module.exports = {
  theme: {
    extend: {
      colors: {
        primary: "#EF4444",
      },
      height: {
        100: "550px",
        99: "545px",
        110: "650px",
      },
      margin: {
        13: "3.25rem",
      },
    },
    future: {
      removeDeprecatedGapUtilities: true,
      purgeLayersByDefault: true,
    },
    plugins: [],
    purge: {
      content: ["./src/**/*.svelte"],
      enabled: production,
    },
  },
};
