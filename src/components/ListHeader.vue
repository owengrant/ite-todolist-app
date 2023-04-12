<template>
  <v-row>
    <v-col cols="11">
      {{ title }}
    </v-col>
    <v-col>
      <v-btn icon color="primary" @click="changeView(true)">
        <v-icon> mdi-view-list </v-icon>
      </v-btn>
      <v-btn icon color="primary" @click="changeView(false)">
        <v-icon> mdi-grid </v-icon>
      </v-btn>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: "ListHeader.vue",
  props: ["title"],
  methods: {
    changeView(show) {
      this.$emit("showList", show);
    }
  }
};
</script>
