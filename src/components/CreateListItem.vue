<template>
  <v-card>
    <v-card-title>
      Create List Item
    </v-card-title>
    <v-card-text>
      <v-form>
        <v-text-field v-model="title" label="Title" required />
        <v-textarea v-model="description" label="Description" required />
        <v-btn color="error" class="ma-1" @click="clear">Clear</v-btn>
        <v-btn color="primary" class="ma-1" @click="create">Create</v-btn>
      </v-form>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  name: "CreateListItem",
  data: () => ({
    title: "",
    description: ""
  }),
  methods: {
    create() {
      const item = {
        title: this.title,
        description: this.description,
        id: parseInt(Math.random() * 1000000)
      };
      this.$emit("create", item);
    },
    clear() {
      this.title = "";
      this.description = "";
    }
  }
};
</script>
