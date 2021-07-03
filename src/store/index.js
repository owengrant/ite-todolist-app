import Vue from "vue";
import Vuex from "vuex";
import axios from 'axios'

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    listItems: [],
    listItemContent: []
  },
  getters: {
    findListById: (state) => (id) => {
      return state.listItems.find(item => item.id === id)
    },
    findContentByListId: (state) => (id) => {
      return state.listItemContent.filter(item => item.listId === id)
    }
  },
  mutations: {
    clearList(state) {
      state.listItems = []
    },
    addListItem(state, listItem) {
      state.listItems.push(listItem);
    },
    deleteListItem(state, itemId) {
      state.listItems = state.listItems.filter(item => item.id != itemId.id);
    },
    addListItemContent(state, content) {
      state.listItemContent.push(content);
    },
    deleteListItemContent(state, itemId) {
      state.listItemContent = state.listItemContent.filter(item => item.id != itemId.id);
    },
  },
  actions: {
    async loadLists(context) {
      context.commit("clearList")
      const response = await axios.get("/lists")
      const items  = response.data
      items.forEach(element => {
         context.commit("addListItem", element) 
      });
    },
    async deleteList(context, item) {
      const response = await axios.delete("/lists/"+item.id)
      const data = response.data
      const isDeleted = data.deleted
      if(isDeleted) context.commit("deleteListItem", item)
    }
  },
  modules: {}
});
