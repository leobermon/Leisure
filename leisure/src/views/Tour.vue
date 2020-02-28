<template>
  <div class="index">
    <Header/>
      <Tour/>
    <Footer/>
  </div>
</template>

<script>
// @ is an alias to /src

import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
import Tour from '@/components/Tour.vue'

export default {
  name: 'transportation',
  components: {
    Header,
    Footer,
    Tour
  }
}
</script>
