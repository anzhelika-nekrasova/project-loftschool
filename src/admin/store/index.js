import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

import skills from "./modules/skills";
import user from "./modules/user";
import works from "./modules/works";
import article from "./modules/blog";

export default new Vuex.Store({
  modules: {
    skills,
    user,
    works,
    article
  }
});
