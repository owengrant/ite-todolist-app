<template>
  <v-card-text v-if="showList">
    <v-row v-for="item in listItems" v-bind:key="item.id">
      <v-col>
        <list-item
          :title="item.title"
          :description="item.description"
          :id="item.id"
          :showView="showView"
          :showDelete="showDelete"
          @view="showListItem"
          @delete="deleteListItem"
        />
      </v-col>
    </v-row>
  </v-card-text>
  <v-card-text v-else>
    <list-item-table :listItems="listItems" />
  </v-card-text>
</template>

<script>
import ListItemTable from "./ListItemTable.vue";
import ListItem from "./ListItem.vue";

export default {
  name: "ListItemView",
  props: ["showList", "listItems", "showView", "showDelete"],
  components: {
    ListItem,
    ListItemTable
  },
  methods: {
    showListItem(item) {
      this.$emit("viewItem", item)
    },
    deleteListItem(item) {
      this.$emit("deleteItem", item);
    }
  }
};
</script>
;
