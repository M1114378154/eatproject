<template>
  <div class="container">
    <div class="Hotfood">
      <!-- <div class="Hottop">
      <center>
        <ul class="Hcateul">
          <li class="Hcateli">
            <a class="active" href="#">推荐</a>
          </li>
          <li class="Hcateli">
            <a  href="#">分类</a>
          </li>
          <li class="Hcateli">
            <a href="#">视频</a>
          </li>
        </ul>
      </center>
    </div> -->
      
      <div class="gamsearch-1">
        <input class="gaminput" type="text" placeholder="搜索好吃食谱" name id value />
        <button>
          <i>搜索</i>
        </button>
      </div>
      <!-- 轮播图 -->
      <Swipercom :ItemImgs="sliders"></Swipercom>       
      <div class="row">
        <p style="color: green;" align="left">热门食谱</p>
        <p align="right">
          <a href="#" style=" text-decoration: none;">发现更多></a>
        </p>
      </div>
      <!-- <div class="hot">
      <mt-cell title="热门食谱" align="left" to="//baidu.com" is-link value="更多"></mt-cell>
    </div> -->
      <!-- <div class="row">
      <p  align="left">特色</p>
      <p  align="right">更多></p>
      </div> -->
      
      <div class="flex-container-1">
        <div class="flex-item-1">
          <a href>
            <img
              style="width:100%; height: 250px; display: block;"
              alt="100%x200"
              src="https://goss.cfp.cn/creative/vcg/800/version23/VCG41481148194.jpg"
            />
          </a>
          <!-- <div class="caption center">
            <h3>披萨</h3>
            <p>
              <span>价格:</span>
              <span>100.00</span>
            </p>
          </div> -->
        </div>
        <div class="flex-item-1">
          <a href>
            <img
              style="width: 100%; height: 250px; display: block;"
              alt="100%x200"
              src="https://goss.cfp.cn/creative/vcg/800/version23/VCG41481148194.jpg"
            />
          </a>
          <!-- <div class="caption center">
            <h3>披萨</h3>
            <p>
              <span>价格:</span>
              <span>100.00</span>
            </p>
          </div> -->
        </div>
        <div class="flex-item-1">
          <a href>
            <img
              style="width: 100%; height: 250px; display: block;"
              alt="100%x200"
              src="https://goss.cfp.cn/creative/vcg/800/version23/VCG41481148194.jpg"
            />
          </a>
          <!-- <div class="caption center">
            <h3>披萨</h3>
            <p>
              <span>价格:</span>
              <span>100.00</span>
            </p>
          </div> -->
        </div>
      </div>
        <div class="row">
      <p  align="left" style="color:lavender;">菜单</p>
      </div>

      <div class="row">
        <p style="color: green;" align="left">热门美食到店</p>
        <p align="right">
          <a href="#" style=" text-decoration: none;">发现更多></a>
        </p>
      </div>
        <!-- <div class="hot">
      <mt-cell title="热门美食到店" align="left" to="//baidu.com" is-link value="更多"></mt-cell>
    </div> -->
      <div class="flex-container-1">
        <div class="flex-item-1">
          <a href>
            <img
              style="width: 100%; height: 250px; display: block;"
              alt="100%x200"
              src="http://pic1.win4000.com/wallpaper/b/5438c7252ad24.jpg"
            />
          </a>
          <!-- <div class="caption center">
            <h3>Queen女王店</h3>
          </div> -->
        </div>
        <div class="flex-item-1">
          <a href>
            <img
              style="width: 100%; height: 250px; display: block;"
              alt="100%x200"
              src="http://pic1.win4000.com/wallpaper/b/5438c7252ad24.jpg"
            />
          </a>
          <!-- <div class="caption center">
            <h3>Queen女王店</h3>
          </div> -->
        </div>
        <div class="flex-item-1">
          <a href>
            <img
              style="width: 100%; height: 250px; display: block;"
              alt="100%x200"
              src="http://pic1.win4000.com/wallpaper/b/5438c7252ad24.jpg"
            />
          </a>
          <!-- <div class="caption center">
            <h3>Queen女王店</h3>
          </div> -->
        </div>
     
      </div>
      <div class="row">
      <p  align="left" style="color:lavender;">专题</p>
      </div>
    </div>
  </div>
</template>


<script>
import Swipercom from "./Swipercom";
export default {
  name: "slider",
  props: {
    initialSpeed: {
      type: Number,
      default: 30
    },
    initialInterval: {
      type: Number,
      default: 3
    }
  },
  components: {
    Swipercom
  },
  data() {
    return {
      sliders: [
        {
          img: "../../static/CarouselImg/mthumb.jpg"
        },
        {
          img: "../../static/CarouselImg/timg.jpg"
        },
        {
          img: "../../static/CarouselImg/ufmgp.jpg"
        },
        {
          img: "../../static/CarouselImg/ufmgp.jpg"
        }
      ]
    };
  }
};
</script>


 <style>
/* .hotul {
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
  border: 1px solid #e7e7e7;
  background-color: white;
  text-align: center;
}

.hotli {
  float: left;
}

.hotli a {
  display: block;
  color: #666;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
}

.hotli a:hover:not(.active) {
  background-color: #ddd;
}

.hotli a.active {
  color: white;
  background-color: skyblue;
} */

.Hottop {

  margin-top: 1px; /*离顶部的距离为0*/
  margin-bottom: 5px;
  margin: 0%;
  padding: 0%;
  display: flex;
  justify-content: center;
}
.Hottop .Hcateul {
  width: auto; /*宽度也改为自动*/
  list-style-type: none;
  overflow: hidden;
  padding: 0;
}
.Hottop .Hcateli {
  float: left; /* 使li内容横向浮动，即横向排列  */
  margin: 0 80px; /* 两个li之间的距离*/
  width: 150px;
  height: 80px;
}

.Hottop .Hcateli a {
  /* 设置链接内容显示的格式*/
  display: block; /* 把链接显示为块元素可使整个链接区域可点击 */
  color: black;
  text-align: center;
  padding: 3px;
  text-decoration: none; /* 去除下划线 */
  font-size: 190%;
  /* height: 48px; */
}
.Hottop .Hcateli a.active{
    background-color: skyblue;
}
.Hottop .Hcateli a:hover {
  /* 鼠标选中时背景变为黑色 */
  background-color: #0099cc;
  color: white;
}

.flex-container-1 {
  display: -webkit-flex;
  display: flex;
  -webkit-justify-content: center;
  justify-content: center;
  width: 100%;
  /* height: 280px; */
  background-color:lavender;
}

.flex-item-1 {
  /* background-color:white; */
  width: 400px;
  height: 250px;
  margin: 20px;
}

.gamsearch-1 {
  width: 850px;      
  margin:1px auto;
  display: flex;
  /*border: 1px solid red;*/
  transform: translateY(-10px);
}
.gamsearch-1 .gaminput {
  float: left;
  flex: 4;
  height: 40px;
  outline: none;
  border: 2px solid skyblue;
  box-sizing: border-box;
  padding-left: 10px;
}
.gamsearch-1 button {
  float: right;
  flex: 1;
  height: 40px;
  background-color: skyblue;
  color: white;
  border-style: none;
  outline: none;
}
.gamsearch-1 button i {
  font-style: normal;
}
.gamsearch-1 button:hover {
  font-size: 16px;
}
img {
  user-select: none;
  width: 100%;
}
.row
{
  margin:1px auto;
}

</style>