
<template>
  <div class="about">

    <Header/>

    <notFound/>

    <Footer/>

  </div>
</template>

<script>
// @ is an alias to /src

import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
import notFound from '@/components/404.vue'


export default {
  name: 'home',
  components: {
    Header,
    Footer,
    notFound

  }
}
</script>
