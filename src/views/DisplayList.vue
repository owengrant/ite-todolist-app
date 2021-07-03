<template>
  <v-container>
    <v-card>
      <v-card-title>
        <list-header title="Todo List" @showList="toggleItemView" />
        <v-btn color="primary" bottom right fab to="/lists/create">
          <v-icon>mdi-plus</v-icon>
        </v-btn>
      </v-card-title>
      <list-item-view 
       :showList="showList" 
       :listItems="listItems"
       :showView="true"
       :showDelete="true"
       @viewItem="showListItem"
       @deleteItem="deleteListItem"
       />
    </v-card>
  </v-container>
</template>

<script>
import ListHeader from "../components/ListHeader.vue";
import ListItemView from "../components/ListItemView.vue";


export default {
  name: "DisplayList",
  components: {
    ListHeader,
    ListItemView
  },
  async mounted() {
    this.$store.dispatch("loadLists")
  },
  data: () => ({
    showList: true,
  }),
  computed: {
    listItems() {
      return this.$store.state.listItems;
    }
  },
  methods: {
    deleteListItem(itemId) {
      this.$store.dispatch("deleteList", itemId);
    },
    toggleItemView(show) {
      this.showList = show;
    },
    showListItem(item) {
      console.log(JSON.stringify(item))
      this.$router.push(`/lists/${item.id}`)
    }
  }
};
</script>
