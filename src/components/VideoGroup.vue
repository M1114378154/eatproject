<!--  -->
<template>
  <div class="container">
    <div class="VideoGroup">
      <center>
        <ul class="Videoul">
          <li class="Videoli">
            <a href="#">推荐</a>
          </li>
          <li class="Videoli">
            <a href="#">分类</a>
          </li>
          <li class="Videoli">
            <a class="active" href="#">视频</a>
          </li>
        </ul>
      </center>
    </div>
    <center>
      <div class="test_two_box">
        <video id="myVideo" class="video-js vjs-default-skin vjs-big-play-centered" preload="auto">
          <source src="../assets/video/螺蛳粉做法.mp4" type="video/mp4" />
        </video>
        <span class="Videospan">鲫鱼豆腐汤</span>

      </div>
    </center>

    
  </div>
</template>

<script>
export default {
  name: "VideoGroup",
  props: {
    msg: String
  },

  data() {
    return {};
  },
  mounted() {
    this.initVideo();
  },
  methods: {
    initVideo() {
      //初始化视频方法
      let myPlayer = this.$video(myVideo, {
        //确定播放器是否具有用户可以与之交互的控件。没有控件，启动视频播放的唯一方法是使用autoplay属性或通过Player API。
        controls: true,
        //自动播放属性,muted:静音播放
        autoplay: "muted",
        //建议浏览器是否应在<video>加载元素后立即开始下载视频数据。
        preload: "auto",
        //设置视频播放器的显示宽度（以像素为单位）
        width: "800px",
        //设置视频播放器的显示高度（以像素为单位）
        height: "400px"
      });
      
    }
  }
};
</script>
<style>
/* @import url(); 引入css类 */
/* 头部导航栏 */
.VideoGroup {
  margin-top: 1px; /*离顶部的距离为0*/
  margin-bottom: 5px;
  margin: 0%;
  padding: 0%;
  display: flex;
  justify-content: center;
}
.VideoGroup .Videoul {
  width: auto; /*宽度也改为自动*/
  list-style-type: none;
  overflow: hidden;
  padding: 0;
}
.VideoGroup .Videoli {
  float: left; /* 使li内容横向浮动，即横向排列  */
  margin: 0 80px; /* 两个li之间的距离*/
  width: 150px;
  height: 80px;
}

.VideoGroup .Videoli a {
  /* 设置链接内容显示的格式*/
  display: block; /* 把链接显示为块元素可使整个链接区域可点击 */
  color: black;
  text-align: center;
  padding: 3px;
  text-decoration: none; /* 去除下划线 */
  font-size: 190%;
}
.VideoGroup .Videoli a.active {
  background-color: skyblue;
}
.VideoGroup .Videoli a:hover {
  /* 鼠标选中时背景变为黑色 */
  background-color: #0099cc;
  color: white;
}
/* 头部导航栏 */
/* 视频 */
.test_two_box {
  background-color: whitesmoke;
  width: 50%;
}
.test_two_box .Videospan {
  float: left;
  /* padding-left: 25%; */
  margin-top: 20px;
}

/* 视频 */

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