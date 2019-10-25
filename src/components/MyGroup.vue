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
          <div class="Myrow">
            <span class="Myleft">收藏</span>
            <a href="#" class="Myright">></a>
          </div>
          <br />
          <div class="Myrow">
            <span class="Myleft">关注</span>
            <a href="#" class="Myright">></a>
          </div>
          <br />
          <div class="Myrow">
            <span class="Myleft">我的足迹</span>
            <a href="#" class="Myright">></a>
          </div>
          <br />
          <div class="Myrow">
            <span class="Myleft">设置</span>
            <a href="#" class="Myright">></a>
          </div>
          <br />
          <div class="Myrow">
            <span class="Myleft">意见反馈</span>
            <a href="#" class="Myright">></a>
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
.CardGlobal .Myrow{
  border-radius: 5px;
  background-color: #f2f2f2;
  padding: 20px;
  margin:0 30px;
  line-height:5px;
}
.card {
  background-color: skyblue;
  margin: auto;
}

.Myrow .Myleft{
  float: left;
  margin:0 10px;
  
}
.Myrow .Myright {
  float: right;
  text-decoration: none;
}
</style>