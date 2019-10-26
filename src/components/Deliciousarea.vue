<template>
<div class="">
  <div class="top-1">
      <center>
        <ul>        
          <li>
            <a class="active" href="#">好吃活动区</a>
          </li>
          <li>
            <a href="#">好吃话题区</a>
          </li>
        </ul>
      </center>
    </div>

 <div class="gamsearch-3">
            <input class="gaminput" type="text" placeholder="搜索活动" name="" id="" value="" />
            <button ><i>搜索</i></button>
            </div>

<!-- 轮播图 -->
 	  <div id="slider">
     <div class="window" @mouseover="stop" @mouseleave="play">
      <ul class="container" :style="containerStyle">
        <li>
          <img :style="{width:imgWidth+'px'}" :src="sliders[sliders.length - 1].img" alt="">
        </li>
        <li  v-for="(item, index) in sliders" :key="index">
          <img :style="{width:imgWidth+'px'}" :src="item.img" alt="">
        </li>
        <li>
          <img :style="{width:imgWidth+'px'}" :src="sliders[0].img" alt="">
        </li>
      </ul>
      <ul class="direction">
        <li class="left" @click="move(600, 1, speed)">
          <svg class="icon" width="30px" height="30.00px" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><path fill="#ffffff" d="M481.233 904c8.189 0 16.379-3.124 22.628-9.372 12.496-12.497 12.496-32.759 0-45.256L166.488 512l337.373-337.373c12.496-12.497 12.496-32.758 0-45.255-12.498-12.497-32.758-12.497-45.256 0l-360 360c-12.496 12.497-12.496 32.758 0 45.255l360 360c6.249 6.249 14.439 9.373 22.628 9.373z"  /></svg>
        </li>
        <li class="right" @click="move(600, -1, speed)">
          <svg class="icon" width="30px" height="30.00px" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><path fill="#ffffff" d="M557.179 904c-8.189 0-16.379-3.124-22.628-9.372-12.496-12.497-12.496-32.759 0-45.256L871.924 512 534.551 174.627c-12.496-12.497-12.496-32.758 0-45.255 12.498-12.497 32.758-12.497 45.256 0l360 360c12.496 12.497 12.496 32.758 0 45.255l-360 360c-6.249 6.249-14.439 9.373-22.628 9.373z"  /></svg>
        </li>
      </ul>
      <ul class="dots">
        <li v-for="(dot, i) in sliders" :key="i"
        :class="{dotted: i === (currentIndex-1)}"
        @click = jump(i+1)
        >
        </li>
      </ul>
    </div>
  </div>
<!-- 美食达人 -->
  <div class="flex-container-2">
  <div class="flex-item-2">
 <a href="">
 <img style="width:450px; height: 300px; display: block;" alt="100%x200" src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1572065597597&di=95126bf9637f8d04480d7b15ec78d3fa&imgtype=jpg&src=http%3A%2F%2Fimg3.imgtn.bdimg.com%2Fit%2Fu%3D2040167898%2C2538321870%26fm%3D214%26gp%3D0.jpg" data-src="holder.js/100%x200" data-holder-rendered="true">
</a>
<div class="caption">
    <h3 style="">美食达人招募计划</h3>
</div>
</div>

  <div class="flex-item-2">
 <a href="">
 <img style="width:450px; height: 300px; display: block;" alt="100%x200" src="http://www.53jianzhi.net/zq/uploads/allimg/170728/1-1FHQJFMY.jpg" data-src="holder.js/100%x200" data-holder-rendered="true">
</a>
<div class="caption center">
    <h3>好吃问卷调查</h3>
</div>
  </div>
  <div class="flex-item-2">
  <a href="">
 <img style="width:450px; height: 300px; display: block;" alt="100%x200" src="http://i2.chuimg.com/f3bc0a0532a6432e831ac714cd452304_1280w_960h.jpg?imageView2/2/w/600/interlace/1/q/90" data-src="holder.js/100%x200" data-holder-rendered="true">
</a>
<div class="caption center">
    <h3>晒晒你的下午茶</h3>
</div>     
      
</div>  
 <div class="flex-item-2">
 <a href="">
 <img style="width:450px; height: 300px; display: block;" alt="100%x200" src="http://img0.imgtn.bdimg.com/it/u=1268474689,156561479&fm=26&gp=0.jpg" data-src="holder.js/100%x200" data-holder-rendered="true">
</a>
<div class="caption center">
    <h3>立志减肥</h3>
</div>     
     
</div> 
</div>

</div>

</template>


<script>
export default {
  name: 'slider',
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
  data () {
    return {
      sliders:[
        {
          img:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1572061849362&di=7bc9d6c6f4e7f5f551bbc26814db6593&imgtype=0&src=http%3A%2F%2Fhbimg.b0.upaiyun.com%2F7f308a822287d2ba682e200c88509d827178fc8b23b514-5DUhoH_fw658'
        },
        {
          img:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1572061894398&di=c716753c1916f7bb18be7d05f953913e&imgtype=0&src=http%3A%2F%2Fimg.pconline.com.cn%2Fimages%2Fupload%2Fupc%2Ftx%2Fphotoblog%2F1406%2F20%2Fc2%2F35489246_1403250875219_mthumb.jpg'
        },
        {
          img:'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2624782965,1558496564&fm=26&gp=0.jpg'
        },
         {
          img:'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2624782965,1558496564&fm=26&gp=0.jpg'
        },
      ],
      imgWidth:600,
      currentIndex:1,
      distance:-600,
      transitionEnd: true,
      speed: this.initialSpeed
    }
  },
  computed:{
    containerStyle() {
      return {
        transform:`translate3d(${this.distance}px, 0, 0)`
      }
    },
    interval() {
      return this.initialInterval * 1000
    }
  },
  mounted() {
    this.init()
  },
  methods:{
    init() {
      this.play()
      window.onblur = function() { this.stop() }.bind(this)
      window.onfocus = function() { this.play() }.bind(this)
    },
    move(offset, direction, speed) {
      console.log(speed)
      if (!this.transitionEnd) return
      this.transitionEnd = false
      direction === -1 ? this.currentIndex += offset/600 : this.currentIndex -= offset/600
      if (this.currentIndex > 5) this.currentIndex = 1
      if (this.currentIndex < 1) this.currentIndex = 5

      const destination = this.distance + offset * direction
      this.animate(destination, direction, speed)
    },
    animate(des, direc, speed) {
      if (this.temp) {
        window.clearInterval(this.temp);
        this.temp = null ;
      }
      this.temp = window.setInterval(() => {
        if ((direc === -1 && des < this.distance) || (direc === 1 && des > this.distance)) {
          this.distance += speed * direc
        } else {
          this.transitionEnd = true
          window.clearInterval(this.temp)
          this.distance = des
          if (des < -3000) this.distance = -600
          if (des > -600) this.distance = -3000
        }
      }, 20)
    },
    jump(index) {
      const direction = index - this.currentIndex >= 0 ? -1 : 1;
      const offset = Math.abs(index - this.currentIndex) * 600;
      const jumpSpeed = Math.abs(index - this.currentIndex) === 0 ? this.speed : Math.abs(index - this.currentIndex) * this.speed ;
      this.move(offset, direction, jumpSpeed)
    },
    play() {
      if (this.timer) {
        window.clearInterval(this.timer)
        this.timer = null
      }
      this.timer = window.setInterval(() => {
        this.move(600, -1, this.speed)
      }, this.interval)
    },
    stop() {
      window.clearInterval(this.timer)
      this.timer = null
    }
  }
}
</script>

<style>

.top-1 {

  margin-top: 1px; /*离顶部的距离为0*/
  margin-bottom: 5px;
  margin: 0%;
  padding: 0%;
  display: flex;
  justify-content: center;
}
.top-1  ul {
  width: auto; /*宽度也改为自动*/
  list-style-type: none;
  overflow: hidden;
  padding: 0;
}
.top-1  li {
  float: left; /* 使li内容横向浮动，即横向排列  */
  margin: 0 100px; /* 两个li之间的距离*/
  width: 150px;
  height: 100px;
}

.top-1  li a {
  /* 设置链接内容显示的格式*/
  display: block; /* 把链接显示为块元素可使整个链接区域可点击 */
  color: black;
  text-align: center;
  padding: 3px;
  text-decoration: none; /* 去除下划线 */
  font-size: 160%;
  /* height: 48px; */
}
.top-1  li a.active{
    background-color: skyblue;
}
.top-1  li a:hover {
  /* 鼠标选中时背景变为黑色 */
  background-color: #0099cc;
  color: white;
}


*{
        box-sizing: border-box;
        margin:0;
        padding:0;
      }
      ol,ul{
        list-style: none;
      }
      #slider{
        text-align: center;
      }
      .window{
        position:relative;
        width:600px;
        height:400px;
        margin:0 auto;
        overflow:hidden;
      }
      .container{
        display:flex;
        position:absolute;
      }
      .left, .right{
        position:absolute;
        top:50%;
        transform:translateY(-50%);
        width:50px;
        height:50px;
        background-color:rgba(0,0,0,.3);
        border-radius:50%;
        cursor:pointer;
      }
      .left{
        left:3%;
        padding-left:12px;
        padding-top:10px;
      }
      .right{
        right:3%;
        padding-right:12px;
        padding-top:10px;
      }
      img{
        user-select: none;
      }
      .dots{
          position:absolute;
          bottom:10px;
          left:50%;
          transform:translateX(-50%);
        }
      .dots li{
        display:inline-block;
        width:15px;
        height:15px;
        margin:0 3px;
        border:1px solid white;
        border-radius:50%;
        background-color:#333;
        cursor:pointer;
      }
      .dots .dotted{
        background-color:orange;
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
    background-color:white;
    width: 300px;
    height: 250px;
    text-align: center;
    margin:150px;
}

.gamsearch-3{
            width: 45%;
          margin:-2px auto;;
            display: flex;
            /*border: 1px solid red;*/
            transform: translateY(-6px);
        }
        .gamsearch-3 .gaminput{
            float: left;
            flex: 4;
            height: 40px;
            outline: none;
            border: 2px solid skyblue;
            box-sizing: border-box;
            padding-left: 10px;
        }
        .gamsearch-3 button{
            float: right;
            flex: 1;
            height: 40px;
            background-color: skyblue;
            color: white;
            border-style: none;
            outline: none;
        }
        .gamsearch-3 button i{
            font-style: normal;
        }
        .gamsearch-3 button:hover{
            font-size: 16px;
        }
</style>