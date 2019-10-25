<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->

    <router-link to="/">Home</router-link>|
    <router-link to="/log">登录</router-link>|
    <router-link to="/register">注册</router-link>
    <router-link to="/Mygroup">我的</router-link>
    <router-link to="/category">首页分类</router-link>
    <router-link to="/gambit">好吃话题区</router-link>
    <router-link to="/VideoGroup">视频专区</router-link>
    <router-link to="/Hotfood">热门好吃推荐</router-link>
    <router-link to="/Foodstrategy">美食攻略</router-link>

    <router-view />
  </div>
</template>

<script>
export default {
  name: "App"
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
