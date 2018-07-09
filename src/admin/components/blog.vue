<template lang="pug">
  div
    h2 Страница "Блог"
    p Добавить Запись
    input(type="text" placeholder="Название статьи" v-model="newArticle.title")
    br
    input(type="text" placeholder="Дата" v-model="newArticle.date")
    br
    textarea(placeholder="Текст статьи" v-model="newArticle.text")
    br
    button(@click="addArticle") Добавить
</template>

<script>
import { mapActions, mapGetters, mapMutations } from "vuex";
export default {
  data() {
    return {
      newArticle: {
        title: "",
        date: "",
        text: ""
      }
    };
  },
  methods: {
    ...mapActions(["addNewArticle", "removeExistedArticle"]),
    async addArticle() {
      const addedArticle = await this.addNewArticle(this.newArticle);

      this.newArticle.title = "";
      this.newArticle.date = "";
      this.newArticle.text = "";
    },
    removeItem() {
      this.removeExistedArticle(this.article.id);
    }
  }
};
</script>