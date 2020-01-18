<template>
  <div class="index">
    <Header/>
      <Index/>
    <Footer/>
  </div>
</template>

<script>
// @ is an alias to /src

import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
import Index from '@/components/Index.vue'

export default {
  name: 'index',
  components: {
    Header,
    Footer,
    Index

  }
}
</script>
