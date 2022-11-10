const { defineConfig } = require("cypress")

module.exports = defineConfig({
  e2e: {
    baseUrl: "http://localhost:3000",
  },

  component: {
    devServer: {
      framework: "next",
      bundler: "webpack",
    },
    // devServer(cypressConfig) {
    //   // return devServer instance or a promise that resolves to
    //   // a dev server here
    //   return {
    //     port: 3000,
    //     close: () => {},
    //   }
    // },
  },
})
