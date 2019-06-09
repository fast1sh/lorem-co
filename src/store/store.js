import Vue from 'vue';
import Vuex from 'vuex';
import comments from "../api/comments";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    comments: [],
    selectedComment: ''
  },
  mutations: {
    setComments(state, comments) {
      state.comments = comments;
    },
    setSelectedComment(state, comment) {
      state.selectedComment = comment;
    },
    addComment(state, comment) {
      state.comments.push(comment);
    }
  },
  actions: {
    getAllComments({ commit }) {
      comments.getAllComments((comments) => {
        commit('setComments', comments);
      });
    },
    getComment({ commit }, id) {
      comments.getComment(id, (comment) => {
        commit('setSelectedComment', comment);
      });
    },
    addComment({ commit }, newComment) {
      comments.addComment(newComment, (comment) => {
        commit('addComment', comment);
      })
    }
  }
})