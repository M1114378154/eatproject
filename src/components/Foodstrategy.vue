<template>
  <div class="Foodstrategy">
    <div class="container">
      <ul class="gyul">
        <li>
          <a class="active" href="#home">寻找每日新菜馆</a>
        </li>
        <li>
          <a href="#news">网红人气菜</a>
        </li>
        <li>
          <a href="#contact">到店觅食</a>
        </li>
      </ul>

      <div class="flex-container">
        <div class="flex-item">
          <a href>
            <img
              style="width: 100%; height: 200px; display: block;"
              alt="100%x200"
              src="http://cos.solepic.com/20180129/b_1448933_201801291950499655.jpg"
              data-src="holder.js/100%x200"
              data-holder-rendered="true"
            />
          </a>
          <div class="caption center">
            <h3>早餐</h3>
          </div>
        </div>
        <div class="flex-item">
          <a href>
            <img
              style="width: 100%; height: 200px; display: block;"
              alt="100%x200"
              src="http://img1.qunarzz.com/travel/d6/1508/f7/93e0cf69d0f11.jpg"
              data-src="holder.js/100%x200"
              data-holder-rendered="true"
            />
          </a>
          <div class="caption center">
            <h3>午餐</h3>
          </div>
        </div>
        <div class="flex-item">
          <a href>
            <img
              style="width: 100%; height: 200px; display: block;"
              alt="100%x200"
              src="http://pic.wehefei.com/0/01/95/27/1952785_752374.jpg"
              data-src="holder.js/100%x200"
              data-holder-rendered="true"
            />
          </a>
          <div class="caption center">
            <h3>晚餐</h3>
          </div>
        </div>
      </div>

      <div class="col-sm-12 col-md-12">
        <br />
        <div class="thumbnail">
          <h3>酥烂脱骨的红烧羊排，吃完唇齿留香</h3>
          <a href="BookInfo.html">
            <img
              style="width: 100%; height: 450px; display: block;"
              alt="100%x200"
              src="http://site.meishij.net/rs/137/187/359387/n359387_142561050766097.jpg"
              data-src="holder.js/100%x200"
              data-holder-rendered="true"
            />
          </a>
          <div class="caption center">
            <p style="align-content: center;">
              <a
                class="btn btn-primary btn-block"
                role="button"
                href=""
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
          <a href="">
            <img
              style="width: 100%; height: 450px; display: block;"
              alt="100%x200"
              src="http://pic75.nipic.com/file/20150818/19521820_105859028000_2.jpg"
              data-src="holder.js/100%x200"
              data-holder-rendered="true"
            />
          </a>
          <div class="caption center">
            <p style="align-content: center;">
              <a
                class="btn btn-primary btn-block"
                role="button"
                href=""
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
.gyul {
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
  border: 1px solid #e7e7e7;
  background-color: white;
  text-align: center;
}

li {
  float: left;
}

li a {
  display: block;
  color: #666;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
}

li a:hover:not(.active) {
  background-color: #ddd;
}

li a.active {
  color: white;
  background-color: skyblue;
}

.flex-container {
  display: -webkit-flex;
  display: flex;
  -webkit-justify-content: center;
  justify-content: center;
  width: 100%;
  height: 270px;
  background-color: whitesmoke;
}

.flex-item {
  background-color: white;
  width: 400px;
  height: 250px;
  margin: 10px;
}
</style>