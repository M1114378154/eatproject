<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <!-- <router-link to="/">Home</router-link>|
    <router-link to="/log">登录</router-link>|
    <router-link to="/register">注册</router-link>
    <router-link to="/Mygroup">我的</router-link>
    <router-link to="/category">首页分类</router-link>
    <router-link to="/Gambit">好吃话题区</router-link>
    <router-link to="/VideoGroup">视频专区</router-link>
    <router-link to="/Hotfood">热门好吃推荐</router-link>
    <router-link to="/Foodstrategy">美食攻略</router-link>
    <router-link to="/Deliciousarea">好吃活动区</router-link>
    <router-view /> -->

    <nav class="hl_nav">
      <ul class="nav_list">
        <li class="active">
          <router-link class="approu" to="/Hotfood">首页</router-link>
          <ul class="offset_left">
            <li>
              <router-link class="approu1" to="/category">分类区</router-link>
            </li>
            <li>
              <router-link class="approu1" to="/VideoGroup">视频专区</router-link>
            </li>
          </ul>
        </li>
        <li class="">
           <router-link class="approu" to="/Deliciousarea">好吃区</router-link>
          <ul class="offset_left">
            <li>
           <router-link class="approu1" to="/Gambit">好吃话题区</router-link>
            </li>
          </ul>
           <div class="shade"></div>
        </li>
        <li class="">
          <router-link class="approu" to="/Foodstrategy">美食攻略</router-link>  
        </li>
        <li class="">
          <router-link class="approu" to="/Mygroup">我的</router-link>  
        </li>
      </ul>
     
    </nav>
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
  background: #eff3f5;
}
  .hl_nav{
    background-color: skyblue;
    position: relative;
    color: #ffffff;
    min-width: 1200px;
    height: 50px;
    transform: translateY(-60px);
}
.hl_nav .approu{
    display: block;
    text-decoration: none;
    font-size: 150%;
   margin-top: 6%;
   color:black;
}
.hl_nav .approu:hover{
    display: block;
    text-decoration: none;
    font-size: 150%;
   margin-top: 6%;
   color:aliceblue;
}
.hl_nav .approu1{
    display: block;
    text-decoration: none;
    font-size: 120%;

   /* margin-top: 6% */
}
.hl_nav .shade{
    position: absolute;
    width: 100%;
    height: 40px;
    top: 50px;
    left: 0;
    z-index: 1;
    background-color: #EEEEEE;
    opacity: 0.9;
    filter: alpha(opacity=90);
    box-shadow: 0 5px 15px #CCCCCC;
    display: none;
    border-bottom: #ffffff solid 1px;
    border-bottom: rgba(255,255,255,0.3) solid 1px;
}
.hl_nav .nav_list{
    position: absolute;
    top: 0;
    left: 50%;
    margin: 0 0 0 -250px;
    z-index: 2;
    padding: 0;
    list-style: none;
    width: 1200px;
    overflow: hidden;
    height: 50px;
}
.hl_nav .nav_list>li{
    padding: 0;
    float: left;
    margin: 0;
    width: 10%;
    text-align: center;
    height: 50px;
}
.hl_nav .nav_head{
    height: 50px;
    line-height: 50px;
    color: #ffffff;
    font-size: 16px;
    position: relative;
}

.hl_nav .nav_list>li>ul{
    position: absolute;
    width: auto;
    height: 40px;
    top: 50px;
    z-index: 2;
    padding: 0;
    margin: 0;
    line-height: 40px;
    list-style: none;
    overflow: hidden;
    display: none;
}
.hl_nav .nav_list>li.active {
    background-color: #0099cc;
  
}
.hl_nav .nav_list>li:hover{

    background-color: #0099cc;

}
.hl_nav .nav_list>li:hover>ul{
    display: block;
    color: white;

}

.hl_nav .nav_list>li>ul.offset_left{
    left: 0;
}
.hl_nav .nav_list>li>ul.offset_left.offset_1{
    left: 10%;
}
.hl_nav .nav_list>li>ul.offset_left.offset_2{
    left: 20%;
}
.hl_nav .nav_list>li>ul.offset_left.offset_3{
    left: 30%;
}
.hl_nav .nav_list>li>ul.offset_left.offset_4{
    left: 40%;
}
.hl_nav .nav_list>li>ul.offset_left.offset_5{
    left: 50%;
}
.hl_nav .nav_list>li>ul.offset_left.offset_6{
    left: 60%;
}
.hl_nav .nav_list>li>ul.offset_left.offset_7{
    left: 70%;
}
.hl_nav .nav_list>li>ul.offset_left.offset_8{
    left: 80%;
}
.hl_nav .nav_list>li>ul.offset_right{
    right: 0;
}
.hl_nav .nav_list>li>ul.offset_right.offset_1{
    right: 10%;
}
.hl_nav .nav_list>li>ul.offset_right.offset_2{
    right: 20%;
}


.hl_nav .nav_list>li>ul>li{
    float: left;
}
.hl_nav .nav_list>li>ul>li>a{
    text-decoration: none;
    display: block;
    color: #666666;
    padding: 0 20px;
    height: 40px;
}
.hl_nav .nav_list>li>ul>li>a:hover{
    background-color: #ffffff;
    color: #999999;
}
.hl_nav .nav_list:hover{
    height: 90px;
}

.hl_nav .nav_list:hover + .shade{
    display: block;
}
</style>
