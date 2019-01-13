var app = new Vue({
  el: "#app",
  data: {
    message: "Hahaha penis"
  }
});

var app2 = new Vue({
  el: "#app-2",
  data: {
    message: "Page loaded on " + new Date().toLocaleString()
  }
});

var app3 = new Vue({
  el: "#app-3",
  data: {
    seen: true
  }
});

var app4 = new Vue({
  el: '#app-4',
  data: {
    todos: [{
        text: 'Learn JavaScript'
      },
      {
        text: 'Learn Vue'
      },
      {
        text: 'Build something awesome'
      }
    ]
  }
});

var app5 = new Vue({
  el: "#app-5",
  data: {
    message: "Oh, hi!",
    clicked: false
  },
  methods: {
    reverseMessage: function() {
      if (!this.clicked) {
        this.message = "8===D";
        this.clicked = true;
      } else {
        this.message = this.message.slice(0, 2) + "=" + this.message.slice(2);
      }
    }
  }
});

var app6 = new Vue({
  el: "#app-6",
  data: {
    message: "This is a default message"
  }
});
