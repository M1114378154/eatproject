<template>
  <div class="swiper-container">
    <div class="swiper-wrapper">
      <div class="swiper-slide" v-for="item in ItemImgs">
        <img :src="item.img" alt="">
      </div>

    </div>
    <!-- 如果需要分页器 -->
    <div class="swiper-pagination"></div>

    <!-- 如果需要导航按钮 -->
    <!-- <div class="swiper-button-prev"></div>
    <div class="swiper-button-next"></div> -->

  </div>
</template>

<script>
  import Swiper from 'swiper';
  import 'swiper/css/swiper.min.css';
  export default {
    name: 'Swipercom',
    props: {
      ItemImgs: {
        type: Array,
        default: []
      }
    },
    data() {
      return {

      }
    },
    mounted() {
      var mySwiper = new Swiper('.swiper-container', {
        // direction: 'vertical', // 垂直切换选项
        loop: true, // 循环模式选项
        autoplay: true,
        width: window.innerWidth,
        pagination: {
          el: '.swiper-pagination',
        },

        // 如果需要前进后退按钮
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },

        // 如果需要滚动条
        scrollbar: {
          el: '.swiper-scrollbar',
        },
        on: {
          resize: function () {
            this.params.width = window.innerWidth;
            this.update();
          },
        },
      })
    }
  }

</script>

<style>
  .swiper-container {
    height: 500px;
  }

  .swiper-slide {
    width: 60%;

  }

  .swiper-slide img {
    height: 500px;
  }

</style>
