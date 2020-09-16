// import Vue from "vue";
// import Vuetify from "vuetify/lib";
//
// Vue.use(Vuetify);
//
// export default new Vuetify({
//   icons: {
//     iconfont: "fa"
//   }
// });

import Vue from "vue";
import Vuetify from "vuetify";
import "vuetify/dist/vuetify.min.css";
import "@fortawesome/fontawesome-free/css/all.css";

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    options: {
      customProperties: true
    },
    themes: {
      light: {
        // primary: "#fe7031",
        // secondary: "#826548",
        // tertiary: "#160200",
        // accent: "#82B1FF",
        // error: "#FF5252",
        // info: "#2196F3",
        // success: "#4CAF50",
        // warning: "#FFC107",
        // background: "#342217",
        // // text: "#cf9548"
        // text: "#BE8130"
      }
    }
  },
  icons: {
    iconfont: "fa"
  }
});
