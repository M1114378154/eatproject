<template>
  <div class="Mygroup">
    
    <LogIn msg=" 我的"/>
  </div>
</template>

<script>
// @ is an alias to /src
import LogIn from '@/components/MyGroup.vue'

export default {
  name: 'my',
  components: {
    MyGroup
  }
}
</script>