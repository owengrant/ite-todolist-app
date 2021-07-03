<template>
  <v-container>
    <v-row>
      <v-col>
        <create-list-item @create="addListItem" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import CreateListItem from "../components/CreateListItem.vue";
import router from "../router/index";
import store from "../store/index.js";
import axios from "axios"

export default {
  name: "CreateList",
  components: {
    CreateListItem
  },
  methods: {
    addListItem(listItem) {
      axios.post("/lists", listItem).then(response => {
        console.log(response.data)
      })
      store.commit("addListItem", listItem);
      router.push({ name: "DisplayList" });
    }
  }
};
</script>
