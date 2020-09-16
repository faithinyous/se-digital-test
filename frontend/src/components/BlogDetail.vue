<template>
  <v-card>
    <vue-easy-lightbox
      :imgs="[imageUrl]"
      :index="0"
      escDisabled
      @hide="showImage = false"
      :visible="showImage"
    />
    <v-row>
      <v-img
        style="cursor:pointer"
        :src="imageUrl"
        max-width="350"
        max-height="250"
        @click="showImage = true"
      />
      <v-col>
        <v-card-text class="pb-1"> {{ getDate(created) }} </v-card-text>
        <v-card-title class="pt-0  text-h3">
          <div class="">
            {{ title }}
          </div>
        </v-card-title>
        <v-card-title class="pt-0">
          <div class="">
            <span v-html="description"></span>
          </div>
        </v-card-title>
      </v-col>
    </v-row>
  </v-card>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";
import VueEasyLightbox from "vue-easy-lightbox";
import moment from "moment";
@Component({ components: { VueEasyLightbox } })
export default class BlogDetail extends Vue {
  @Prop({ type: String, required: true }) readonly id!: string;
  @Prop({ type: String, required: true }) readonly title!: string;
  @Prop({ type: String, required: true }) readonly description!: string;
  @Prop({
    type: String,
    default: "https://www.imagemet.com/wp-content/uploads/2016/12/text-1.png"
  })
  readonly imageUrl!: string;
  @Prop({ type: Number, required: true }) readonly created!: number;
  showImage = false;
  getDate(date: number) {
    return moment(date).format("ll");
  }
}
</script>

<style scoped></style>
