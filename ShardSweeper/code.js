var app = new Vue({
  el: "#app",
  data: {
    mines: [],
    clicked: [],
    score: 0,
    lost: false
  },
  methods: {
    generate: function() {
      var number = Math.floor(Math.random() * 9);
      for (var i = 0; i < 3; i++) {
        Vue.set(this.mines, i, [1, 1, 1]);
        Vue.set(this.clicked, i, [0, 0, 0]);
      }
      Vue.set(this.mines[Math.floor(number / 3)], number % 3, -1);
      this.score = 0;
      this.lost = false;
    },
    getPic: function(index1, index2) {
      if(this.clicked[index1][index2] === 0){
        return "button.png";
      } else {
        if(this.mines[index1][index2] === 1){
          return "shard.png";
        } else {
          return "quarble.png";
        }
      }
    },
    trigger: function(index1, index2) {
      if (!this.lost) {
        if(this.mines[index1][index2] === 1 && this.clicked[index1][index2] === 0) {
          this.score++;
        } else if(this.mines[index1][index2] === -1) {
          this.lost = true;
        }
        Vue.set(this.clicked[index1], index2, 1);
      }
    }
  }
});
