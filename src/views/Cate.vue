<template>
  <div class="Category">
    <img src="../assets/logo.png" alt="">
    <Category msg="首页"/>
  </div>
</template>

<script>
// @ is an alias to /src
import Category from '@/components/Category.vue'

export default {
  name: 'cate',
  components: {
    Category
  }
}
</script>