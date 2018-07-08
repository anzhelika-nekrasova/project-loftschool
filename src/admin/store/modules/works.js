const works = {
  state: {
    data: []
  },
  mutations: {
    fillUpWorks(state, works) {
      state.data = skills;
    }
  },
  actions: {
    addWork(store, work) {
      this.$axios.post("/works", work).then(response => {});
    },
    fetchWorks({ commit, getters }) {
      return this.$axios.get(`/works/13`).then(response => {
        commit("fillUpWorks", response.data);
      });
    }
  }
};

export default works;
