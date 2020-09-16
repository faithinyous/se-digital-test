<template>
  <v-card max-width="350px" class="ma-2">
    <v-img :src="imageUrl" max-width="350" max-height="250" />
    <v-card-text class="pb-1"> {{ getDate(created) }} </v-card-text>
    <v-card-title class="pt-0 ">
      <div class="one-line-text">
        {{ title }}
      </div>
    </v-card-title>
    <v-card-title class="pt-0">
      <div class="one-line-text">
        <span v-html="description"></span>
      </div>
    </v-card-title>

    <v-card-actions>
      <v-row class="justify-end">
        <v-col class="shrink">
          <v-btn text color="primary" @click="showDetail(id)">
            Continue Reading
            <v-icon class="ml-2"> fas fa-greater-than</v-icon></v-btn
          >
        </v-col>
      </v-row>
    </v-card-actions>
  </v-card>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";
import moment from "moment";
@Component
export default class BlogCard extends Vue {
  @Prop({ type: String, required: true }) readonly id!: string;
  @Prop({ type: String, required: true }) readonly title!: string;
  @Prop({ type: String, required: true }) readonly description!: string;
  @Prop({
    type: String,
    default: "https://www.imagemet.com/wp-content/uploads/2016/12/text-1.png"
  })
  readonly imageUrl!: string;
  @Prop({ type: Number, required: true }) readonly created!: number;
  @Prop({ type: Function, required: true }) showDetail!: Function;

  getDate(date: number) {
    return moment(date).format("ll");
  }
}
</script>

<style scoped>
.one-line-text {
  white-space: nowrap;
  word-break: normal;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>
