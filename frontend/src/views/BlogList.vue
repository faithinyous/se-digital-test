<template>
  <div class="about">
    <v-row class="justify-center">
      <v-col cols="auto" v-for="(data, i) in blogList" :key="i">
        <BlogCard v-bind="data" :showDetail="showDetail" />
      </v-col>
    </v-row>
    <v-dialog v-model="isDialogShow">
      <BlogDetail v-bind="blogSelected" />
    </v-dialog>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import axios from "@/http";
import BlogCard from "@/components/BlogCard";
import _ from "lodash";
import BlogDetail from "@/components/BlogDetail.vue";
interface BlogDataInterface {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  created: number;
}
@Component({
  components: { BlogDetail, BlogCard }
})
export default class BlogList extends Vue {
  isDialogShow = false;
  blogSelected = {
    id: "",
    title: "",
    description: "",
    imageUrl: "",
    created: 0
  } as BlogDataInterface;
  showDetail(id: string) {
    this.blogSelected = _.filter(this.blogList, { id: id })[0];
    this.isDialogShow = true;
  }
  blogList = [
    // {
    //   id: "mROCcH2mKuPdyR57kbrG",
    //   created: 1600251629986,
    //   title: "Lorem ipsum is placeholder text",
    //   imageUrl:
    //     "https://i.picsum.photos/id/20/640/360.jpg?hmac=hBfB4FaXdVe7dY4Lz_Kdc5poly17AruXGhRXFIXwRck",
    //   description:
    //     "Built as a foil to placekitten, PlaceBeard.it offers something more earthy, more manly. Choose color or grayscale placeholder beards in <b><i>every</i></b> proportion for your next project"
    // },
    // {
    //   id: "hye43FqKDqkHMh9T2PMn",
    //   title:
    //     "Generate Lorem Ipsum in the text editor, word processor or CMS of your choice. Check out our excellent list of plugins below",
    //   description:
    //     "<p>Featuring categories like “animals,” “architecture,” and “tech,” you'll be hard-pressed to find a nicer on-demand selection.</p> And as a bonus PlaceIMG lets you choose color, grayscale or sepia",
    //   created: 1600251629986,
    //   imageUrl:
    //     "https://i.picsum.photos/id/825/640/360.jpg?hmac=Cl5FR4vlKv7KjWyYXEXZceC5vDd3LBPusgvBWPLG2m8"
    // },
    // {
    //   id: "XBU0h3CXGXMUlKIKriaq",
    //   created: 1600251629986,
    //   description:
    //     "One of the originals, lorempixel (formerly lorempixum) is a no nonsense placeholder image generator, with a simple interface featuring size, categories and color options",
    //   title:
    //     "From its medieval origins to the digital era, learn everything there is to know about the ubiquitous lorem ipsum passage",
    //   imageUrl:
    //     "https://i.picsum.photos/id/410/640/360.jpg?hmac=t-kRimBGV420ia2gIMbTWYq0CR_YRQp1sdPoUFtwdPw"
    // },
    // {
    //   id: "76KNtbOLLYLQF8lMdolv",
    //   description:
    //     "<a href='http://www.google.com'>Featuring options</a> such as “Calm,” and “CRAZY,” you know this is the real deal. Make every web design feel like a Nicholas Cage movie. How could that not be a good thing?",
    //   created: 1600251629986,
    //   imageUrl:
    //     "https://i.picsum.photos/id/182/640/360.jpg?hmac=qmNgY93Wk3fAJDX9-icK3Y-S5lCJkxRY-r4_7Sp3qCY",
    //   title: "Think classic lorem ipsum"
    // },
    // {
    //   id: "tmydkyleYXLvH2dz9CIU",
    //   created: 1600251629984,
    //   imageUrl:
    //     "https://i.picsum.photos/id/190/640/360.jpg?hmac=2WVM0GTxfugikFxJ9eCfi9EhTP4HAHDW5GCoehrYnfs",
    //   title:
    //     "A picture's worth a thousand words, so here's 21K worth of placeholder image generators to use in your mockups and designs",
    //   description:
    //     "Boasting 12 different <b>categories</b>, various ratios, orientations, and the ability to show mixed sizes, Dummy Image Generator is a great find. Only caveat? You'll need to download the images, no hotlinking"
    // }
  ] as BlogDataInterface[];
  mounted() {
    axios
      .get("/blog")
      .then(res => {
        this.blogList = res.data;
      })
      .catch(err => {
        console.log(err);
      });
  }
}
</script>
