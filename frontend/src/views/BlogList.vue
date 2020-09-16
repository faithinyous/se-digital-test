<template>
  <div class="about">
    <v-row>
      <v-col cols="auto" v-for="(data, i) in blogList" :key="i">
        <BlogCard v-bind="data" />
      </v-col>
    </v-row>
  </div>
</template>
<script>
import BlogCard from "@/components/BlogCard";
import { Component, Vue } from "vue-property-decorator";

import axios from "@/http";
@Component({
  components: { BlogCard }
})
export default class BlogList extends Vue {
  blogList = [
    // {
    //   id: "asdasd ",
    //   title:
    //     "asdasd asdasd asdasdasdasd asdasd asdasdasdasd asdasd asdasdasdasd asdasd asdasdasdasd asdasd asdasdasdasd asdasd asdasd",
    //   description: "test",
    //   imageUrl:
    //     "https://www.imagemet.com/wp-content/uploads/2016/12/text-1.png",
    //   created: 123141234
    // },
    // {
    //   id: "asdasd",
    //   title: "test",
    //   description: "test",
    //   imageUrl:
    //     "https://www.imagemet.com/wp-content/uploads/2016/12/text-1.png",
    //   created: 123141234
    // },
    // {
    //   id: "asdasd",
    //   title: "test",
    //   description: "test",
    //   imageUrl:
    //     "https://www.imagemet.com/wp-content/uploads/2016/12/text-1.png",
    //   created: 123141234
    // }
  ];
  mounted() {
    axios
      .get("/blog")
      .then(res => {
        this.blogList = res;
      })
      .catch(err => {
        console.log(err);
      });
  }
}
</script>
