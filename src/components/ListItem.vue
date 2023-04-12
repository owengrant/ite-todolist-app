<template>
  <v-card dense>
    <v-card-title class="pl-1 pt-0 pr-0 pb-0">
      <v-row>
        <v-col class="pt-0 pb-0 text-align-center" cols="11">
          <p>{{ title }}</p>
        </v-col>
        <v-col class="pt-0 pb-0">
          <v-btn v-if="showView" icon color="primary" @click="view">
            <v-icon>mdi-eye</v-icon>
          </v-btn>
          <v-btn v-if="showDelete" icon color="error" @click="deleteItem">
            <v-icon>mdi-delete</v-icon>
          </v-btn>
        </v-col>
      </v-row>
    </v-card-title>
    <v-card-text class="pl-1 pt-0 pr-0 pb-0"> {{ description }} </v-card-text>
  </v-card>
</template>

<script>
export default {
  name: "ListItem",
  props: ["id", "title", "description", "showView", "showDelete"],
  methods: {
    view() {
      this.$emit("view", { id: this.id })
    },
    deleteItem() {
      this.$emit("delete", { id: this.id });
    }
  }
};
</script>

<style></style>
