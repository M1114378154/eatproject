<template>
  <div>
    <div class="gamtop">
      <center>
        <ul>
          <li>
            <a href="#">好吃活动专区</a>
          </li>
          <li>
            <a class="active" href="#">好吃话题区</a>
          </li>
        </ul>
      </center>
      <mt-search v-model="value" cancel-text="取消" placeholder="搜索"></mt-search>
     <mt-cell title="#早餐" to="//baidu.com" is-link value="更多"></mt-cell>
     <div>
         <img class="imglogo" src="../assets/logo.png" alt="">
          <span class="user">用户</span>
     </div>
     
    </div>
  </div>
</template>


<style>
.imglogo{
    margin-right: 100%;
    width: 50px;
    margin-top: 10px;
    float: left;
}
.user{
    margin-right: 90%;
    /* float: right; */
}


.mint-searchbar {
  width: 70.5%;
}
.mint-cell{
    text-align: left;
    width: 70.5%;

}
.mint-search{
    height: 70px;
}

li a.active {
  background-color: skyblue;
  color: black;
}


.gamtop {
  /* 设置宽度高度背景颜色 */
  height: auto; /*高度改为自动高度*/
  /* width: 150%; */
  margin-left: 23%;
  /* background:rgb(189, 181, 181); */
  /*固定在顶部*/
  /* position: fixed;  */
  margin-top: 1px; /*离顶部的距离为0*/
  margin-bottom: 5px;
}
.gamtop ul {
  /* 清除ul标签的默认样式 */
  width: auto; /*宽度也改为自动*/
  list-style-type: none;
  white-space: nowrap;
  overflow: hidden;
  /* margin-left: 5%; */
  /* margin-top: 0;          */
  padding: 0;
}
.gamtop li {
  float: left; /* 使li内容横向浮动，即横向排列  */
  margin-right: 29.5%; /* 两个li之间的距离*/
  position: relative;
  overflow: hidden;
  width: 300px;
  height: 70px;
}

.gamtop li a {
  /* 设置链接内容显示的格式*/
  display: block; /* 把链接显示为块元素可使整个链接区域可点击 */
  color: black;
  text-align: center;
  padding: 15px;
  overflow: hidden;
  text-decoration: none; /* 去除下划线 */
  font-size: 190%;
  height: 48px;
  /* width: 300px; */
  
}
.gamtop li a:hover {
  /* 鼠标选中时背景变为黑色 */
  background-color: #0099cc;
  color: white;
}

body {
  background: #eff3f5;
}
</style>