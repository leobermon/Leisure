<template>
  <div class="index">
    <Header/>
      <Galery/>
    <Footer/>
  </div>
</template>

<script>
// @ is an alias to /src

import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
import Galery from '@/components/Galery.vue'

export default {
  name: 'index',
  components: {
    Header,
    Footer,
    Galery

  }
}
</script>
