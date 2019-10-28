<template>
  <div class>
    <ul class="hotul-1">
      <li class="hotli-1">
        <a class="active" href>好吃活动区</a>
      </li>
      <li class="hotli-1">
        <a href>好吃话题区</a>
      </li>
    </ul>
    <!-- 搜索 -->
    <div class="gamsearch-3">
      <input class="gaminput" type="text" placeholder="搜索活动" name id value />
      <button>
        <i>搜索</i>
      </button>
    </div>

    <!-- 轮播图 -->
    <Swipercom :ItemImgs="sliders"></Swipercom>
    <!-- 美食达人 -->
    <div class="flex-container-2">
      <div class="flex-item-2">
        <a href>
          <img
            style="width:450px; height: 300px; display: block;"
            alt="100%x200"
            src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1572065597597&di=95126bf9637f8d04480d7b15ec78d3fa&imgtype=jpg&src=http%3A%2F%2Fimg3.imgtn.bdimg.com%2Fit%2Fu%3D2040167898%2C2538321870%26fm%3D214%26gp%3D0.jpg"
            data-src="holder.js/100%x200"
            data-holder-rendered="true"
          />
        </a>
        <div class="caption">
          <h3 style>美食达人招募计划</h3>
        </div>
      </div>

      <div class="flex-item-2">
        <a href>
          <img
            style="width:450px; height: 300px; display: block;"
            alt="100%x200"
            src="http://www.53jianzhi.net/zq/uploads/allimg/170728/1-1FHQJFMY.jpg"
            data-src="holder.js/100%x200"
            data-holder-rendered="true"
          />
        </a>
        <div class="caption center">
          <h3>好吃问卷调查</h3>
        </div>
      </div>
      <div class="flex-item-2">
        <a href>
          <img
            style="width:450px; height: 300px; display: block;"
            alt="100%x200"
            src="../../static/CarouselImg/2.png"
            data-src="holder.js/100%x200"
            data-holder-rendered="true"
          />
        </a>
        <div class="caption center">
          <h3>晒晒你的下午茶</h3>
        </div>
      </div>
      <div class="flex-item-2">
        <a href>
          <img
            style="width:450px; height: 300px; display: block;"
            alt="100%x200"
            src="../../static/CarouselImg/1.png"
            data-src="holder.js/100%x200"
            data-holder-rendered="true"
          />
        </a>
        <div class="caption center">
          <h3>立志减肥</h3>
        </div>
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
.hotul-1 {
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
  border: 1px solid #e7e7e7;
  background-color: white;
  text-align: center;
}

.hotli-1 {
  float: left;
}

.hotli-1 a {
  display: block;
  color: #666;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
}

.hotli-1 a:hover:not(.active) {
  background-color: #ddd;
}

.hotli-1 a.active {
  color: white;
  background-color: skyblue;
}
/* 轮播图 */
img {
  user-select: none;
  width: 100%;
}

.flex-container-2 {
  display: -webkit-flex;
  display: flex;
  -webkit-flex-wrap: wrap;
  flex-wrap: wrap;
  text-align: center;
  width: 100%;
  height: 900px;
  background-color: white;
}

.flex-item-2 {
  background-color: white;
  width: 300px;
  height: 250px;
  text-align: center;
  margin: 150px;
}

.gamsearch-3 {
  width: 100%;
  margin: 6px auto;
  display: flex;
  /*border: 1px solid red;*/
  transform: translateY(-6px);
}

.gamsearch-3 .gaminput {
  float: left;
  flex: 4;
  height: 40px;
  outline: none;
  border: 2px solid skyblue;
  box-sizing: border-box;
  padding-left: 10px;
}

.gamsearch-3 button {
  float: right;
  flex: 1;
  height: 40px;
  background-color: skyblue;
  color: white;
  border-style: none;
  outline: none;
}

.gamsearch-3 button i {
  font-style: normal;
}

.gamsearch-3 button:hover {
  font-size: 16px;
}
</style>
