<template>
  <div class="Foodstrategy">
    <div class="container1">
      <!-- <ul class="gyul">
        <li class="gyli">
          <a class="active" href="#home">寻找每日新菜馆</a>
        </li>
        <li class="gyli">
          <a href="#news">网红人气菜</a>
        </li>
        <li class="gyli">
          <a href="#contact">到店觅食</a>
        </li>
      </ul> -->
      <div class="Foodtop">
      <center>
        <ul class="Fcateul">
          <li class="Fcateli">
            <a class="active" href="#">寻找每日新菜馆</a>
          </li>
          <li class="Fcateli">
            <a  href="#">网红人气菜</a>
          </li>
          <li class="Fcateli">
            <a href="#">到店觅食</a>
          </li>
        </ul>
      </center>
    </div>
      <div class="gamsearch-2">
        <input class="gaminput" type="text" placeholder="搜索新菜馆" name id value />
        <button>
          <i>搜索</i>
        </button>
      </div>

      <div class="flex-container-3">
        <div class="flex-item-3">
          <a href>
            <img
              style="width: 100%; height: 200px; display: block;"
              alt="100%x200"
              src="http://cos.solepic.com/20180129/b_1448933_201801291950499655.jpg"
              data-src="holder.js/100%x200"
              data-holder-rendered="true"
            />
          </a>
          <div class="caption center-3">
            <h3>早餐</h3>
          </div>
        </div>
        <div class="flex-item-3">
          <a href>
            <img
              style="width: 100%; height: 200px; display: block;"
              alt="100%x200"
              src="http://img1.qunarzz.com/travel/d6/1508/f7/93e0cf69d0f11.jpg"
              data-src="holder.js/100%x200"
              data-holder-rendered="true"
            />
          </a>
          <div class="caption center-3">
            <h3>午餐</h3>
          </div>
        </div>
        <div class="flex-item-3">
          <a href>
            <img
              style="width: 100%; height: 200px; display: block;"
              alt="100%x200"
              src="http://pic.wehefei.com/0/01/95/27/1952785_752374.jpg"
              data-src="holder.js/100%x200"
              data-holder-rendered="true"
            />
          </a>
          <div class="caption center-3">
            <h3>晚餐</h3>
          </div>
        </div>
      </div>

      <div class="col-sm-12 col-md-12">
        <br />
        <div class="thumbnail">
          <h3>酥烂脱骨的红烧羊排，吃完唇齿留香</h3>
          <a href>
            <img
              style="width: 100%; height: 450px; display: block;"
              alt="100%x200"
              src="http://site.meishij.net/rs/137/187/359387/n359387_142561050766097.jpg"
              data-src="holder.js/100%x200"
              data-holder-rendered="true"
            />
          </a>
          <div class="caption center-2">
            <p style="align-content: center;">
              <a
                class="btn btn-primary btn-block"
                role="button"
                href
                style="width: 200px; text-decoration: none; color: skyblue;"
              >查看详情</a>
            </p>
          </div>
        </div>
      </div>

      <div class="col-sm-12 col-md-12">
        <br />
        <div class="thumbnail">
          <h3>秋季滋补好帮手，当然少不了喝汤啦</h3>
          <a href>
            <img
              style="width: 100%; height: 450px; display: block;"
              alt="100%x200"
              src="http://pic75.nipic.com/file/20150818/19521820_105859028000_2.jpg"
              data-src="holder.js/100%x200"
              data-holder-rendered="true"
            />
          </a>
          <div class="caption center-2">
            <p style="align-content: center;">
              <a
                class="btn btn-primary btn-block"
                role="button"
                href
                style="width: 200px; text-decoration: none; color: skyblue;"
              >查看详情</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  name: "Foodstrategy",
  props: {
    msg: String
  }
};
</script>


<style >
/* .gyul {
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
  border: 1px solid #e7e7e7;
  background-color: white;
  text-align: center;
}

.gyli {
  float: left;
}

.gyli a {
  display: block;
  color: #666;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
}

.gyli a:hover:not(.active) {
  background-color: #ddd;
}

.gyli a.active {
  color: white;
  background-color: skyblue;
} */
.Foodtop {

  margin-top: 1px; /*离顶部的距离为0*/
  margin-bottom: 5px;
  margin: 0%;
  padding: 0%;
  display: flex;
  justify-content: center;
}
.Foodtop .Fcateul {
  width: auto; /*宽度也改为自动*/
  list-style-type: none;
  overflow: hidden;
  padding: 0;
}
.Foodtop .Fcateli {
  float: left; /* 使li内容横向浮动，即横向排列  */
  margin: 0 80px; /* 两个li之间的距离*/
  width: 230px;
  height: 80px;
}

.Foodtop .Fcateli a {
  /* 设置链接内容显示的格式*/
  display: block; /* 把链接显示为块元素可使整个链接区域可点击 */
  color: black;
  text-align: center;
  padding: 3px;
  text-decoration: none; /* 去除下划线 */
  font-size: 190%;
  /* height: 48px; */
}
.Foodtop .Fcateli a.active{
    background-color: skyblue;
}
.Foodtop .Fcateli a:hover {
  /* 鼠标选中时背景变为黑色 */
  background-color: #0099cc;
  color: white;
}

.flex-container-3 {
  display: -webkit-flex;
  display: flex;
  -webkit-justify-content: center;
  justify-content: center;
  width: 100%;
  height: 270px;
  background-color: whitesmoke;
}

.flex-item-3 {
  background-color: white;
  width: 400px;
  height: 250px;
  margin: 10px;
}

.gamsearch-2 {
  width: 80%;      
  margin:1px auto;
  display: flex;
  /*border: 1px solid red;*/
  transform: translateY(-6px);
}
.gamsearch-2 .gaminput {
  float: left;
  flex: 4;
  height: 40px;
  outline: none;
  border: 2px solid skyblue;
  box-sizing: border-box;
  padding-left: 10px;
}
.gamsearch-2 button {
  float: right;
  flex: 1;
  height: 40px;
  background-color: skyblue;
  color: white;
  border-style: none;
  outline: none;
}
.gamsearch-2 button i {
  font-style: normal;
}
.gamsearch-2 button:hover {
  font-size: 16px;
}
</style>