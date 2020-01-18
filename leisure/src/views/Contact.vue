<template>
  <div class="index">
    <Header/>
      <Contact/>
    <Footer/>
  </div>
</template>

<script>
// @ is an alias to /src

import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
import Contact from '@/components/Contact.vue'

export default {
  name: 'index',
  components: {
    Header,
    Footer,
    Contact

  }
}
</script>
