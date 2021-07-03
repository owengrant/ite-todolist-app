<template>
  <v-container>
    <v-card>
      <v-card-title>
        <list-header :title="listTitle" @showList="toggleItemView"/>
        <v-dialog v-model="showCreate" persistent max-width="600">
          <template v-slot:activator="{ on }">
            <v-btn v-on="on" color="primary" bottom right fab>
              <v-icon>mdi-plus</v-icon>
            </v-btn>
          </template>
          <create-list-item @create="createListItem"/>
        </v-dialog>
      </v-card-title>
      <list-item-view 
        :showList="showList"
        :listItems="listItemContent"
        :showDelete="true"
        @deleteItem="deleteListContent"
       />
    </v-card>
  </v-container>
</template>

<script>
import ListHeader from "../components/ListHeader.vue";
import ListItemView from "../components/ListItemView.vue";
import CreateListItem from "../components/CreateListItem.vue"


export default {
  name: "ListContent",
  components: {
    ListHeader,
    ListItemView,
    CreateListItem
  },
  mounted() {
    this.listItemId = Number(this.$route.params.id)
    const listItem = this.$store.getters.findListById(this.listItemId)
    if(listItem == undefined) this.$router.push("/")
    else this.listTitle = listItem.title
  },
  data: () => ({
    showCreate: false,
    listTitle: "",
    listItemId: -1,
    showList: true
  }),
  computed: {
    listItemContent() {
      return this.$store.getters.findContentByListId(this.listItemId)
    }
  },
  methods: {
    createListItem(item) {
      const listItemContent = { ...item, listId: this.listItemId}
      this.$store.commit("addListItemContent", listItemContent)
      this.showCreate = false
    },
    toggleItemView(show) {
      this.showList = show;
    },
    deleteListContent(content) {
      this.$store.commit("deleteListItemContent", content)
    }
  }
};
</script>
