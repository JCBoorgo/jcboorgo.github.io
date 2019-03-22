var app = new Vue({
  el: "#app",
  data: {
    mines: [],
    clicked: [],
    score: 0,
    lost: false,
    ngPlus: 0,
    ngPlusButton: false
  },
  methods: {
    generate: function() {
      var number = Math.floor(Math.random() * 9);
      for (var i = 0; i < 3; i++) {
        Vue.set(this.mines, i, [1, 1, 1]);
        Vue.set(this.clicked, i, [0, 0, 0]);
      }
      Vue.set(this.mines[Math.floor(number / 3)], number % 3, -1);
      this.ngPlusButton = false;
      //Prevents softlocking
      this.lost = false;
    },
    reset: function() {
      this.generate();
      this.score = 0;
      this.lost = false;
      this.ngPlus = 0;
    },
    getPic: function(index1, index2) {
      if (this.clicked[index1][index2] === 0) {
        return "button.png";
      } else {
        if (this.mines[index1][index2] === 1) {
          return "shard.png";
        } else {
          return "quarble.png";
        }
      }
    },
    trigger: function(index1, index2) {
      if (!this.lost) {
        if (this.mines[index1][index2] === 1 && this.clicked[index1][index2] === 0) {
          this.score++;
          if (this.score % 8 === 0) {
            this.ngPlus++;
            this.ngPlusButton = true;
          }
        } else if (this.mines[index1][index2] === -1) {
          this.lost = true;
        }
        Vue.set(this.clicked[index1], index2, 1);
      }
    }
  }
});
