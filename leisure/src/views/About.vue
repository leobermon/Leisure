
<template>
  <div class="about">

    <Header/>

    <About/>

    <Footer/>

  </div>
</template>

<script>
// @ is an alias to /src

import About from '@/components/About.vue'
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'


export default {
  name: 'home',
  components: {
    Header,
    Footer,
    About

  }
}
</script>
