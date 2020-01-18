<template>
  <div class="index">
    <Header/>
      <Faq/>
    <Footer/>
  </div>
</template>

<script>
// @ is an alias to /src

import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
import Faq from '@/components/Faq.vue'

export default {
  name: 'index',
  components: {
    Header,
    Footer,
    Faq

  }
}
</script>
