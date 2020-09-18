const fs = require("fs");
module.exports = {
  devServer: {
    // disableHostCheck: true,
    proxy: {
      "/api": {
        target: "https://us-central1-erx-frontend-test.cloudfunctions.net",
        pathRewrite: { "^/api": "" },
        changeOrigin: true,
        secure: false
      }
    }
  },
  chainWebpack: config => {
    //Vuetify:
    [("vue-modules", "vue", "normal-modules", "normal")].forEach(match => {
      config.module
        .rule("scss")
        .oneOf(match)
        .use("sass-loader")
        .tap(opt =>
          Object.assign(opt, { data: `@import '~@/sass/variables.sass';` })
        );
    });
    // const svgRule = config.module.rule("svg");
    // svgRule.uses.clear();
    // svgRule.use("vue-svg-loader").loader("vue-svg-loader");
  },
  pluginOptions: {
    i18n: {
      locale: "th",
      fallbackLocale: "en",
      localeDir: "locales",
      enableInSFC: true
    }
  }
  // css: {
  //   loaderOptions: {
  //     sass: {
  //       data: `@import "~@/sass/variables.sass"`
  //     }
  //   }
  // }
};
