<template>
  <div class="Mygroup">
    <div class="container">
      <h2>我的个人中心</h2>

      <div class="card img-fluid">
        <img
          class="card-img-top"
          src="https://static.runoob.com/images/mix/img_avatar.png"
          alt="Card image"
          style="width:20%"
        />
        <h3>用户</h3>
        <div class="CardGlobal">
          <div class="row">
            <span class="left">收藏</span>
            <a href="#" class="right">></a>
          </div>
          <br />
          <div class="row">
            <span class="left">关注</span>
            <a href="#" class="right">></a>
          </div>
          <br />
          <div class="row">
            <span class="left">我的足迹</span>
            <a href="#" class="right">></a>
          </div>
          <br />
          <div class="row">
            <span class="left">设置</span>
            <a href="#" class="right">></a>
          </div>
          <br />
          <div class="row">
            <span class="left">意见反馈</span>
            <a href="#" class="right">></a>
          </div>
          <br />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MyGroup",
  props: {
    msg: String
  }
};
</script>


<style>
.CardGlobal .row{
  border-radius: 5px;
  background-color: #f2f2f2;
  padding: 20px;
}
.card {
  background-color: skyblue;
  margin: auto;
}

.row .left {
  float: left;
}
.row .right {
  float: right;
  text-decoration: none;
}
</style>