import Vue from "vue";
import axios from "axios";

const skill = {
    template: "#skill",
    props: {
      skillName: String,
      skillPercents: Number
    },
    methods: {
      drawCircle() {
        const circle = this.$refs["color-circle"];
        const dashOffset = parseInt(
          getComputedStyle(circle).getPropertyValue("stroke-dashoffset")
        );
        const persents = (dashOffset / 100) * (100 - this.skillPercents);
        
        addEventListener("scroll", function() {
          const elementSkills = document.querySelector('.skills');
          var skillsPosition = elementSkills.getBoundingClientRect();

          if (skillsPosition.top < 400) {
            circle.style.strokeDashoffset = persents;
          }
        });
      }
    },
    mounted() {
      console.log(localStorage);
      this.drawCircle();
    }
  };
  
const skillsRow = {
template: "#skills-row",
components: {
    skill
},
props: {
    skill: Object
}
};

new Vue({
el: "#skills-container",
components: {
    skillsRow
},
data: {
    skills: {}
},
created() {
    //const data = require("../../../data/skills.json");
    //this.skills = data;
    //console.log(data);
},
mounted() {
  axios.get(`http://webdev-api.loftschool.com/skills/13`).then(response => {
    //console.log(Array.from(response.data));
    var arr = Array.from(response.data);
    var skillsAdmin = [{}];
    arr.forEach(function(item, i, arr) {
      var skilltitle = item.title;
      skillsAdmin.push({
        'skillsGroup': item.category,
        'skills': {
          'skillName': item.title,
          'skillPercents': item.percents
        }
        
      });

    });
    console.log(skillsAdmin);
    //this.skills = skillsAdmin.slice();
    this.skills = response.data;
    console.log(this.skills);
  });
},
template: "#skills-list"
});
