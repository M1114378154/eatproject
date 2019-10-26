<template>
  <div>
    <div class="gamtop">
      <center>
        <ul class="gamul">
          <li class="gamli">
            <a href="#">好吃活动专区</a>
          </li>
          <li class="gamli">
            <a class="active" href="#">好吃话题区</a>
          </li>
        </ul>
      </center>
    </div>
    <!-- <center>
      <mt-search v-model="value" cancel-text="取消" placeholder="搜索"></mt-search>
      <mt-cell title="#早餐" to="//baidu.com" is-link value="更多"></mt-cell>
      <div>
        <img class="imglogo" src="../assets/logo.png" alt="" />
        <span class="user">用户</span>
      </div>
    </center> -->
  </div>
</template>


<style>
/* .mint-cell {
  background-color: #f2f2f2;
}
.imglogo {
  margin-right: 100%;
  width: 50px;
  margin-top: 10px;
  float: left;
}
.user {
  margin-right: 90%;
}

.mint-searchbar {
  width: 70.5%;
}
.mint-cell {
  text-align: left;
  width: 70.5%;
}
.mint-search {
  height: 70px;
} */

.gamtop {
  margin-top: 1px; /*离顶部的距离为0*/
  margin-bottom: 5px;
  margin: 0%;
  padding: 0%;
  display: flex;
  justify-content: center;
}
.gamtop .gamul {
  width: auto; /*宽度也改为自动*/
  list-style-type: none;
  overflow: hidden;
  padding: 0;
}
.gamtop .gamli {
  float: left; /* 使li内容横向浮动，即横向排列  */
  margin: 0 80px; /* 两个li之间的距离*/
  width: 200px;
  height: 80px;
}

.gamtop .gamli a {
  /* 设置链接内容显示的格式*/
  display: block; /* 把链接显示为块元素可使整个链接区域可点击 */
  color: black;
  text-align: center;
  padding: 3px;
  text-decoration: none; /* 去除下划线 */
  font-size: 190%;
}
.gamli a.active {
  background-color: skyblue;
  color: black;
}
.gamtop .gamli a:hover {
  /* 鼠标选中时背景变为黑色 */
  background-color: #0099cc;
  color: white;
}

/* body {
  background: #eff3f5;
} */
</style>