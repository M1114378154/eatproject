<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>Essential Links</h2>
    <ul class="helloul">
      <li class="helloli">
        <a
          href="https://vuejs.org"
          target="_blank"
        >
          hello,queen
          <mt-button>11</mt-button>
        </a>
      </li>
      <li class="helloli">
        <a
          href="https://forum.vuejs.org"
          target="_blank"
        >
         queen
        </a>
      </li>
      <li class="helloli">
        <a
          href="https://chat.vuejs.org"
          target="_blank"
        >
         team
        </a>
      </li>
      <li class="helloli">
        <a
          href="https://twitter.com/vuejs"
          target="_blank"
        >
         we are 
        </a>
      </li>
      <br>
      <li class="helloli">
        <a
          href="http://vuejs-templates.github.io/webpack/"
          target="_blank"
        >
          queen team
        </a>
      </li>
    </ul>
    <h2>Ecosystem</h2>
    <ul class="helloul">
      <li class="helloli">
        <a
          href="http://router.vuejs.org/"
          target="_blank"
        >
          vue-router
        </a>
      </li>
      <li class="helloli">
        <a
          href="http://vuex.vuejs.org/"
          target="_blank"
        >
          vuex
        </a>
      </li>
      <li class="helloli">
        <a
          href="http://vue-loader.vuejs.org/"
          target="_blank"
        >
          vue-loader
        </a>
      </li>
      <li class="helloli">
        <a
          href="https://github.com/vuejs/awesome-vue"
          target="_blank"
        >
          awesome-vue
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
.helloul {
  list-style-type: none;
  padding: 0;
}
.helloli {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
