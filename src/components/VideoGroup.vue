<!--  -->
<template>
  <div class="container">
    <div>
      <div class="top">
        <center>
          <ul>
            <li>
              <a href="#">推荐</a>
            </li>
            <li>
              <a href="#">分类</a>
            </li>
            <li>
              <a class="active" href="#">视频</a>
            </li>
          </ul>
        </center>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "VideoGroup",
  props: {
    msg: String
  }
};
</script>
<style>
/* @import url(); 引入css类 */
.top {

  margin-top: 1px; /*离顶部的距离为0*/
  margin-bottom: 5px;
  margin: 0%;
  padding: 0%;
  display: flex;
  justify-content: center;
}
.top ul {
  width: auto; /*宽度也改为自动*/
  list-style-type: none;
  overflow: hidden;
  padding: 0;
}
.top li {
  float: left; /* 使li内容横向浮动，即横向排列  */
  margin: 0 80px; /* 两个li之间的距离*/
  width: 150px;
  height: 80px;
}

.top li a {
  /* 设置链接内容显示的格式*/
  display: block; /* 把链接显示为块元素可使整个链接区域可点击 */
  color: black;
  text-align: center;
  padding: 3px;
  text-decoration: none; /* 去除下划线 */
  font-size: 190%;
  /* height: 48px; */
}
.top li a.active{
    background-color: skyblue;
}
.top li a:hover {
  /* 鼠标选中时背景变为黑色 */
  background-color: #0099cc;
  color: white;
}

/* .navtop {
  list-style-type: none;
  margin: 0%;
  padding: 0%;
  display: flex;
  justify-content: center;
}
.navtop .nav-item {
  margin: 0 10%;
}
.navtop .nav-item a {
  display: block; 
  color: black;
  text-align: center;
  padding: 3px;
  overflow: hidden;
  text-decoration: none;
  color: black;
  font-size: 20px;
  width: 150px;
}
.navtop .nav-item a.active{
    background-color: skyblue;
}
.navtop .nav-item a:hover {
  background-color: #0099cc;
  color: white;
} */
</style>