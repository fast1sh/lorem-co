import Vue from "vue";
import VueRouter from "vue-router";
import HomePage from "../pages/HomePage";
import AllCommentsPage from "../pages/AllCommentsPage";
import OneCommentPage from "../pages/OneCommentPage";

Vue.use(VueRouter);

export default new VueRouter({
  mode: 'history',
  scrollBehavior: function (to) {
    if (to.hash) {
      return { selector: to.hash }
    } else {
      return { x: 0, y: 0 }
    }
  },
  routes: [
    { path: '/', component: HomePage },
    { path: '/comments', component: AllCommentsPage },
    { path: '/onecomment/:id', component: OneCommentPage }
  ]
})