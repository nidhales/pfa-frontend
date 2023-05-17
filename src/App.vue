<template>
  <div>    
    <header-top>
    </header-top>
    <nav-bar>
    </nav-bar>
    <router-view/> 
    <footer-bot class="mt-4">
    </footer-bot> 
  </div>
</template>
<script>
// @ is an alias to /src
import navBar from '@/components/navBar.vue'
import footerBot from '@/components/footerBot.vue'
import headerTop from '@/components/headerTop.vue'
export default {
  name: 'HomeView',
  components: {
    navBar,
    headerTop,
    footerBot
  }
}
</script>
