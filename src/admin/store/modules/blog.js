const articles = {
    state: {
      data: []
    },
    mutations: {
      addArticle(state, articles) {
        state.data.push(articles);
      },
      removeArticle(state, articleId) {
        state.data = state.data.filter(item => item.id !== articleId);
      }
    },
    actions: {
      addNewArticle({ commit }, article) {
        this.$axios.post("/posts", article).then(response => {
          commit("addArticle", response.data);
        });
      },
      removeExistedArticle({ commit }, articleId) {
        this.$axios.delete(`/posts/${articleId}`).then(response => {
          commit("removeArticle", articleId);
        });
      },
      fetchArticles({ commit, getters }) {
        return this.$axios.get(`/posts/13`).then(response => {
          commit("fillUpArticle", response.data);
        });
      }
    }
  };
  
  export default articles;