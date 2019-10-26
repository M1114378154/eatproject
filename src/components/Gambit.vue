<template>
  <div>
    <div class="gamtop">
      <center>
        <ul class="gamul">
          <li class="gamli">
            <a href="#">好吃活动专区</a>
          </li>
          <li class="gamli">
            <a class="active" href="#">好吃话题区</a>
          </li>
        </ul>
      </center>
    </div>
   <div class="gamsearch">
            <input type="text" placeholder="请输入..." name="" id="" value="" />
            <button><i>搜索</i></button>
           
        </div>
        <div>
            <mt-cell title="#早餐" to="//baidu.com" is-link value="更多"></mt-cell>
        </div>
       
  </div>
</template>


<style>
 .mint-cell {
  background-color: #f2f2f2;
    text-align: left;
  width: 60%;
  transform: translateY(-210px);
  margin-left: 20%;
}

.gamsearch{
            width: 60%;            
            margin: 100px auto;
            display: flex;
            /*border: 1px solid red;*/
            transform: translateY(-125px);
        }
        .gamsearch input{
            float: left;
            flex: 4;
            height: 40px;
            outline: none;
            border: 2px solid skyblue;
            box-sizing: border-box;
            padding-left: 10px;
        }
        .gamsearch button{
            float: right;
            flex: 1;
            height: 40px;
            background-color: skyblue;
            color: white;
            border-style: none;
            outline: none;
        }
        .gamsearch button i{
            font-style: normal;
        }
        .gamsearch button:hover{
            font-size: 16px;
        }


.gamtop {
  margin-top: 1px; /*离顶部的距离为0*/
  margin-bottom: 5px;
  margin: 0%;
  padding: 0%;
  display: flex;
  justify-content: center;
}
.gamtop .gamul {
  width: auto; /*宽度也改为自动*/
  list-style-type: none;
  overflow: hidden;
  padding: 0;
}
.gamtop .gamli {
  float: left; /* 使li内容横向浮动，即横向排列  */
  margin: 0 80px; /* 两个li之间的距离*/
  width: 200px;
  height: 80px;
}

.gamtop .gamli a {
  /* 设置链接内容显示的格式*/
  display: block; /* 把链接显示为块元素可使整个链接区域可点击 */
  color: black;
  text-align: center;
  padding: 3px;
  text-decoration: none; /* 去除下划线 */
  font-size: 190%;
}
.gamli a.active {
  background-color: skyblue;
  color: black;
}
.gamtop .gamli a:hover {
  /* 鼠标选中时背景变为黑色 */
  background-color: #0099cc;
  color: white;
}

/* body {
  background: #eff3f5;
} */
</style>