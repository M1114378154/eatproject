<template>
  <div class="container">
    <div class="Hotfood">
    

  <ul class="hotul">
  <li class="hotli"><a class="active" href="#home">推荐</a></li>
  <li class="hotli"><a href="#news">分类</a></li>
  <li class="hotli"><a href="#contact">视频</a></li>
</ul>


      <div class="flex-container">
        <div class="flex-item">
          <a href>
            <img
              style="width: 100%; height: 200px; display: block;"
              alt="100%x200"
              src="https://goss.cfp.cn/creative/vcg/800/version23/VCG41481148194.jpg"
            />
          </a>
          <div class="caption center">
            <h3>披萨</h3>
            <p>
              <span>价格:</span>
              <span>100.00</span>
            </p>
          </div>
        </div>
        <div class="flex-item">
          <a href>
            <img
              style="width: 100%; height: 200px; display: block;"
              alt="100%x200"
              src="https://goss.cfp.cn/creative/vcg/800/version23/VCG41481148194.jpg"
            />
          </a>
          <div class="caption center">
            <h3>披萨</h3>
            <p>
              <span>价格:</span>
              <span>100.00</span>
            </p>
          </div>
        </div>
        <div class="flex-item">
          <a href>
            <img
              style="width: 100%; height: 200px; display: block;"
              alt="100%x200"
              src="https://goss.cfp.cn/creative/vcg/800/version23/VCG41481148194.jpg"
            />
          </a>
          <div class="caption center">
            <h3>披萨</h3>
            <p>
              <span>价格:</span>
              <span>100.00</span>
            </p>
          </div>
        </div>
        <div class="flex-item">
          <a href>
            <img
              style="width: 100%; height: 200px; display: block;"
              alt="100%x200"
              src="https://goss.cfp.cn/creative/vcg/800/version23/VCG41481148194.jpg"
            />
          </a>
          <div class="caption center">
            <h3>披萨</h3>
            <p>
              <span>价格:</span>
              <span>100.00</span>
            </p>
          </div>
        </div>
      </div>

      <div class="row">
        <p style="color: green;" align="left">热门美食到店</p>
        <p align="right">
          <a href="#" style=" text-decoration: none;">发现更多></a>
        </p>
      </div>
      <div class="flex-container">
        <div class="flex-item">
          <a href>
            <img
              style="width: 100%; height: 200px; display: block;"
              alt="100%x200"
              src="http://pic1.win4000.com/wallpaper/b/5438c7252ad24.jpg"
            />
          </a>
          <div class="caption center">
            <h3>Queen女王店</h3>
          </div>
        </div>
        <div class="flex-item">
          <a href>
            <img
              style="width: 100%; height: 200px; display: block;"
              alt="100%x200"
              src="http://pic1.win4000.com/wallpaper/b/5438c7252ad24.jpg"
            />
          </a>
          <div class="caption center">
            <h3>Queen女王店</h3>
          </div>
        </div>
        <div class="flex-item">
          <a href>
            <img
              style="width: 100%; height: 200px; display: block;"
              alt="100%x200"
              src="http://pic1.win4000.com/wallpaper/b/5438c7252ad24.jpg"
            />
          </a>
          <div class="caption center">
            <h3>Queen女王店</h3>
          </div>
        </div>
        <div class="flex-item">
          <a href>
            <img
              style="width: 100%; height: 200px; display: block;"
              alt="100%x200"
              src="http://pic1.win4000.com/wallpaper/b/5438c7252ad24.jpg"
            />
          </a>
          <div class="caption center">
            <h3>Queen女王店</h3>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  name: "Hotfood",
  props: {
    msg: String
  }
};
</script>

 <style>

.hotul {
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

}

.flex-container {
  display: -webkit-flex;
  display: flex;
  align-content: center;
  width: 100%;
  height: 300px;
  background-color: lavender;
}

.flex-item {
  background-color: skyblue;
  width: 400px;
  height: 250px;
  margin: 10px;
}
</style>