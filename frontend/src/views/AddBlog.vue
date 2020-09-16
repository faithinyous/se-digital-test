<template>
  <div class="home">
    <v-row>
      <v-col cols="12"> <h2>Add New Blog</h2> </v-col>
    </v-row>

    <v-row>
      <v-col cols="8"> New Post </v-col>
      <v-col cols="4">
        <v-row class="justify-end">
          <v-col class="shrink pr-3">
            <v-btn color="primary" dark small @click="saveBlog">
              <v-icon small class="mr-2"> fas fa-save </v-icon>
              Save
            </v-btn>
          </v-col>
          <v-col class="shrink">
            <v-btn
              dark
              small
              @click="isShowPreview = !isShowPreview"
              color="secondary"
            >
              <v-icon small class="mr-2" v-if="isShowPreview">
                far fa-eye-slash
              </v-icon>
              <v-icon small class="mr-2" v-else> far fa-eye </v-icon>
              Preview
            </v-btn>
          </v-col>
          <!--          <v-col col="auto">-->
          <!--            <v-btn disabled outlined small>-->
          <!--              <v-icon small class="mr-2"> far fa-bell-slash </v-icon>-->
          <!--              Publish-->
          <!--            </v-btn>-->
          <!--          </v-col>-->
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
                class="pr-md-4"
                v-model="title"
              />
            </v-col>
            <v-col cols="12 ">Description</v-col>
            <v-col cols="12 pt-2 ">
              <v-textarea
                outlined
                label="Enter Description"
                solo
                flat
                :rules="[v => !!v || 'Description is required']"
                class=" pr-md-4"
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
              class=""
              v-model="imageUrl"
            />
          </v-col>
        </v-col>
      </v-row>
    </v-form>
    <v-row class="justify-center" v-if="isShowPreview">
      <BlogCard
        :id="'1'"
        :description="description"
        :title="title"
        :image-url="imageUrl"
        :show-detail="showDetail"
        :created="new Date().getTime()"
      />
    </v-row>
    <v-dialog v-model="isDialogShow">
      <BlogDetail
        :id="'1'"
        :description="description"
        :title="title"
        :image-url="imageUrl"
        :created="new Date().getTime()"
      />
    </v-dialog>
    <v-alert type="success" class="alert-fixed" v-if="alertSuccess">
      Successfully created new Blog
    </v-alert>

    <v-alert type="warning" class="alert-fixed " v-if="alertWarning">
      Please check your data
    </v-alert>

    <v-alert type="error" class="alert-fixed" v-if="alertError">
      Something went wrong please try again later
    </v-alert>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import axios from "@/http";
import BlogCard from "@/components/BlogCard.vue";
import BlogDetail from "@/components/BlogDetail.vue";
@Component({
  components: { BlogDetail, BlogCard }
})
export default class Home extends Vue {
  isShowPreview = false;
  isDialogShow = false;
  alertSuccess = false;
  alertWarning = false;
  alertError = false;
  title = "";
  description = "";
  imageUrl = "";
  showDetail() {
    this.isDialogShow = true;
  }
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
          this.alertSuccess = true;
          setTimeout(() => {
            this.alertSuccess = false;
          }, 3000);
          this.title = "";
          this.description = "";
          this.imageUrl = "";
          (this.$refs.form as HTMLFormElement).reset();
        })
        .catch(err => {
          this.alertError = true;
          setTimeout(() => {
            this.alertError = false;
          }, 3000);
          console.log(err);
        });
    } else {
      this.alertWarning = true;
      setTimeout(() => {
        this.alertWarning = false;
      }, 3000);
    }
  }
}
</script>
<style scoped>
.alert-fixed {
  position: fixed;
  top: 0px;
  left: 0px;
  width: 100%;
  z-index: 9999;
  border-radius: 0px;
}
</style>
