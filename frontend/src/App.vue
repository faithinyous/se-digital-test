<template>
  <v-app>
    <v-app-bar app class="nav-color noSpace " flat dense>
      <div class=" align-center noSpace">
        <b> Blogs App</b>
      </div>
      <v-spacer></v-spacer>

      <v-btn
        class="menu"
        :class="data.name == $route.name ? 'selected' : ''"
        v-for="(data, i) in $router.options.routes"
        :key="i"
        @click="$router.push(data.path)"
        text
      >
        {{ data.name }}
      </v-btn>
    </v-app-bar>

    <v-main>
      <div class="ma-4 row justify-center">
        <router-view class="page col-12" />
      </div>
    </v-main>
  </v-app>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
@Component({
  components: {}
})
export default class App extends Vue {
  mounted() {
    // console.log(this.$route);
  }
}
</script>
<style scoped>
.menu {
  border-radius: 0 !important;
}
.menu:hover {
  border-bottom: 2px solid #2d7af7;
  color: #2d7af7 !important;
}
.selected {
  border-bottom: 2px solid #2d7af7;
  color: #2d7af7 !important;
}
.nav-color {
  border-bottom: 2px solid #2d7af7 !important;
}
.page {
  max-width: 1300px;
}
</style>
