<template>
  <div class="index">
    <Header/>
      <About/>
    <Footer/>
  </div>
</template>

<script>
// @ is an alias to /src

import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
import About from '@/components/About.vue'

export default {
  name: 'index',
  components: {
    Header,
    Footer,
    About

  }
}
</script>
