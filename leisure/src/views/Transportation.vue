<template>
  <div class="index">
    <Header/>
      <Transportation/>
    <Footer/>
  </div>
</template>

<script>
// @ is an alias to /src

import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
import Transportation from '@/components/Transportation.vue'

export default {
  name: 'transportation',
  components: {
    Header,
    Footer,
    Transportation
  }
}
</script>
