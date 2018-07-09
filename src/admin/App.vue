<template lang="pug">
  #root
    .header
      router-view(name="header")
    .tabs
      router-view(name="tabs")
    .content
      router-view
</template>

<script>
import header from "./components/header";
import tabs from "./components/tabs";
import skills from "./components/skills";

const data = [
  { id: 1, title: "Html", percent: 20, category: 0 },
  { id: 2, title: "PHP", percent: 20, category: 1 },
  { id: 3, title: "CSS", percent: 20, category: 0 },
  { id: 4, title: "Node.js", percent: 20, category: 1 },
  { id: 5, title: "Mongo", percent: 20, category: 1 },
  { id: 6, title: "Git", percent: 20, category: 2 },
  { id: 7, title: "Gulp", percent: 20, category: 2 }
];

import { mapActions, mapState, mapGetters } from "vuex";

export default {
  components: {
    appHeader: header,
    tabs,
    skills
  },
  created() {
    // this.getUserInfo();
  },
  methods: {
    ...mapActions(["getUserInfo"])
  }
};
</script>
<style lang="scss">
body,
html {
  margin: 0;
  height: 100%;
}

.wrapper {
  height: 100%;
  background: #e5eaee;
}

#root {
  height: 100%;
  display: flex;
  flex-flow: column;
}

.header {
  height: 80px;
}

ul {
  padding: 0;
  margin: 0;

  li {
    list-style: none;
  }
}

* {
  box-sizing: border-box;
  color: #455a64;
}

.tabs {
  height: 60px;
}

.content {
  flex: 1;
  padding: 20px;
}

p {
  font-size: 16px;
}

h2 {
  font-size: 21px;
}

input[type="text"],
input[type="file"]{
    width: 100%;
    height: 45px;
    margin-bottom: 20px;
    font-family: 'Roboto';
    color: #373e42;
    line-height: 45px;
    padding: 0 20px;
    border: none;
    outline: none;
    border-radius: 4px;
    font-size: 16px;
    &::placeholder {
        opacity: .5;
    }
}

textarea {
    width: 100%;
    min-height: 140px;
    resize: none;
    font-family: 'Roboto';
    color: #373e42;
    padding: 15px 20px;
    border: none;
    outline: none;
    border-radius: 4px;
    margin-bottom: 20px;
    font-size: 16px;
    &::placeholder {
        opacity: .5;
    }
}

input[type="text"].percents {
  width: 70px;
  margin-bottom: 0;
}

input[type="text"].skill {
  margin-bottom: 0;
}

button {
    width: 180px;
    height: 45px;
    text-decoration: none;
    display: block;
    line-height: 43px;
    border: none;
    border-radius: 4px;
    color: #fff;
    font-weight: 500;
    text-align: center;
    background: $green;
    cursor: pointer;
    font-size: 16px;
    &:hover {
        background: #009688;
        color: #fff;
    }
}

.skills-title{
  font-weight: 600;
}

.skills-list {
  margin: 0 30px;
}
</style>
