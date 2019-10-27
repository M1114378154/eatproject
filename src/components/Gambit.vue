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
            <input class="gaminput" type="text" placeholder="请输入..." name="" id="" value="" />
            <button ><i>搜索</i></button>
           
        </div>
        <div>
            <mt-cell title="#早餐" to="//baidu.com" is-link value="更多"></mt-cell>
        </div>
       <div class='gamcell'>
                <div class='gamimg'><img class="gambitimg" src="../assets/logo.png" alt=""></div>
                <div class='gamtext'>
                    <p class='gamtitle'>用户1</p>
                   <p class='gampcontent'>1小时前</p>
                    <h4 class="gamh4">#早餐
                      今日份早餐：烤面包
                    </h4>
                </div>
          <div class="flex-gam">
        <div class="flex-gamitem">
          <a href>
            <img
              style="width: 100%; height: 180px; display: block;"
              alt="100%x200"
              src="http://photocdn.sohu.com/20070209/Img248153407.jpg"
              data-src="holder.js/100%x200"
              data-holder-rendered="true"
            />
          </a>
          <div class="caption center">
           
          </div>
        </div>
        <div class="flex-gamitem">
          <a href>
            <img
              style="width: 100%; height: 180px; display: block;"
              alt="100%x200"
              src="http://img.zcool.cn/community/012f60578ddd1a0000012e7e06cbbb.JPG"
              data-src="holder.js/100%x200"
              data-holder-rendered="true"
            />
          </a>
          <div class="caption center">
            <!-- <h3>中西餐菜式</h3> -->
          </div>
        </div>
          </div>         
           </div>  
           <div class="gamhp">
            <mt-cell title="#烘培" to="//baidu.com" is-link value="更多"></mt-cell>
        </div>
         <div class='gamcell'>
                <div class='gamimg'><img class="gambitimg" src="../assets/logo.png" alt=""></div>
                <div class='gamtext'>
                    <p class='gamtitle'>用户2</p>
                   <p class='gampcontent'>1小时前</p>
                    <h4 class="gamh4">#烘培
                      今日份早餐：烤面包
                    </h4>
                </div>
          <div class="flex-gam">
        <div class="flex-gamitem">
          <a href>
            <img
              style="width: 100%; height: 180px; display: block;"
              alt="100%x200"
              src="http://photocdn.sohu.com/20070209/Img248153407.jpg"
              data-src="holder.js/100%x200"
              data-holder-rendered="true"
            />
          </a>
          <div class="caption center">
           
          </div>
        </div>
        <div class="flex-gamitem">
          <a href>
            <img
              style="width: 100%; height: 180px; display: block;"
              alt="100%x200"
              src="http://img.zcool.cn/community/012f60578ddd1a0000012e7e06cbbb.JPG"
              data-src="holder.js/100%x200"
              data-holder-rendered="true"
            />
          </a>
          <div class="caption center">
            <!-- <h3>中西餐菜式</h3> -->
          </div>
        </div>
          </div>         
           </div>  
            <div class="gamhp">
            <mt-cell title="#完餐" to="//baidu.com" is-link value="更多"></mt-cell>
        </div>
  </div>
</template>


<style>
.gamhp{
  margin-top: 16%
}
.gamh4{
  margin-left: 25%
}
.flex-gam {
  display: -webkit-flex;
  display: flex;
  /* -webkit-justify-content: center; */
  /* justify-content: center; */
  width: 30%;
  height: 240px;
  /* background-color: whitesmoke; */
  transform: translateY(-50px);
   margin-left: -17%
}

.flex-gamitem {
  background-color: white;
  width: 300px;
  height: 230px;
  margin: 30px;
}


 .mint-cell {
  background-color: #f2f2f2;
    text-align: left;
  width: 60%;
  transform: translateY(-210px);
  margin-left: 20%;
}
.gamcell{
            width:100%;
            height:100px;
            margin-bottom: 10px;
            display: flex;
        }
        .gamimg{
            flex:0 0 15%;
        }
        .gambitimg{
           width: 80px;
           transform: translateY(-180px);
           margin-left: 135%;
        }
        .gamtext{
            flex: 0 0 27%;
         transform: translateY(-180px);
        }
        .gamtitle{
            font-size:20px;
            font-weight: 700;

        }
        .gampcontent{
            font-size: 10px;
            font-weight: 400;
            transform: translateY(-15px);            
        }
   


.gamsearch{
            width: 60%;            
            margin: 100px auto;
            display: flex;
            /*border: 1px solid red;*/
            transform: translateY(-125px);
        }
        .gamsearch .gaminput{
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