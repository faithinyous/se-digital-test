<template>
  <div class="home">
    <v-row>
      <v-col cols="12"> <h2>Add New Blog</h2> </v-col>
    </v-row>

    <v-row>
      <v-col cols="8"> New Post </v-col>
      <v-col cols="4">
        <v-row>
          <v-col class="shrink pr-3">
            <v-btn color="primary" dark small @click="saveBlog">
              <v-icon small class="mr-2"> fas fa-save </v-icon>
              Save
            </v-btn>
          </v-col>
          <v-col col="auto">
            <v-btn disabled outlined small>
              <v-icon small class="mr-2"> far fa-bell-slash </v-icon>
              Publish
            </v-btn>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
    <v-form ref="form">
      <v-row class=" pt-2">
        <v-col cols="12" md="8" class="noSpace">
          <v-row>
            <v-col cols="12 ">Title</v-col>
            <v-col cols="12 pt-2">
              <v-text-field
                outlined
                label="Enter title"
                solo
                flat
                :rules="[v => !!v || 'Title is required']"
                class="pr-4"
                v-model="title"
              />
            </v-col>
            <v-col cols="12 ">Description</v-col>
            <v-col cols="12 pt-2">
              <v-textarea
                outlined
                label="Enter Description"
                solo
                flat
                :rules="[v => !!v || 'Description is required']"
                class="pr-4"
                v-model="description"
              />
            </v-col>
          </v-row>
        </v-col>
        <v-col cols="12" md="4" class="noSpace">
          <v-col cols="12">Image</v-col>
          <v-col cols="12 pt-2">
            <v-text-field
              outlined
              label="Enter Image Url"
              solo
              flat
              persistent-hint
              hint="Image Url"
              class="pr-4"
              v-model="imageUrl"
            />
          </v-col>
        </v-col>
      </v-row>
    </v-form>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import axios from "@/http";
@Component({
  components: {}
})
export default class Home extends Vue {
  title = "";
  description = "";
  imageUrl = "";

  saveBlog() {
    if ((this.$refs.form as HTMLFormElement).validate()) {
      axios
        .post("/blog", {
          title: this.title,
          description: this.description,
          imageUrl:
            this.imageUrl == ""
              ? "https://www.imagemet.com/wp-content/uploads/2016/12/text-1.png"
              : this.imageUrl
        })
        .then(result => {
          console.log(result);
        })
        .catch(err => {
          console.log(err);
        });
    }
  }
}
</script>
<style></style>
