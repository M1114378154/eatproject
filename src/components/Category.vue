<template>
  <div>
    <div class="top">
      <center>
        <ul>
          <li>
            <a href="#">推荐</a>
          </li>
          <li>
            <a class="active" href="#">分类</a>
          </li>
          <li>
            <a href="#">视频</a>
          </li>
        </ul>
      </center>
    </div>

    <div class="left">
      <ul class="food">
        <li>
          <a class="active" href="#home">菜式</a>
        </li>
        <li>
          <a href="#news">食材</a>
        </li>
        <li>
          <a href="#contact">烘培</a>
        </li>
        <li>
          <a href="#about">甜品饮品</a>
        </li>
        <li>
          <a href="#about">外国美食</a>
        </li>
        <li>
          <a href="#about">口味</a>
        </li>
        <li>
          <a href="#about">家常菜</a>
        </li>
        <li>
          <a href="#about">主食小吃</a>
        </li>
      </ul>
    </div>



  </div>

</template>

<script>
export default {
  name: "Category",
  props: {
    msg: String
  }
};
</script>

<style>
.food {
  list-style-type: none;
  margin: 0;
  padding: 0;
  width: 200px;
  background-color: #f1f1f1;
}

li a {
  display: block;
  color: #000;
  padding: 8px 16px;
  text-decoration: none;
  font-size: 20px;
}

li a.active {
  background-color: #33b5e5;
  color: black;
}

li a:hover:not(.active) {
  background-color: #0099cc;
  color: white;
}

.top {
  /* 设置宽度高度背景颜色 */
  height: auto; /*高度改为自动高度*/
  width: 150%;
  margin-left: 23%;
  /* background:rgb(189, 181, 181); */
  /*固定在顶部*/
  /* position: fixed;  */
  margin-top: 1px; /*离顶部的距离为0*/
  margin-bottom: 5px;
}
.top ul {
  /* 清除ul标签的默认样式 */
  width: auto; /*宽度也改为自动*/
  list-style-type: none;
  white-space: nowrap;
  overflow: hidden;
  /* margin-left: 5%; */
  /* margin-top: 0;          */
  padding: 0;
}
.top li {
  float: left; /* 使li内容横向浮动，即横向排列  */
  margin-right: 10%; /* 两个li之间的距离*/
  position: relative;
  overflow: hidden;
  width: 150px;
  height: 80px;
}

.top li a {
  /* 设置链接内容显示的格式*/
  display: block; /* 把链接显示为块元素可使整个链接区域可点击 */
  color: black;
  text-align: center;
  padding: 3px;
  overflow: hidden;
  text-decoration: none; /* 去除下划线 */
  font-size: 190%;
  height: 48px;
}
.top li a:hover {
  /* 鼠标选中时背景变为黑色 */
  background-color: #0099cc;
  color: white;
}

body {
  background: #eff3f5;
}

</style>