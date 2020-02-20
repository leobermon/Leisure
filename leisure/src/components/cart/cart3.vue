<template>
  <div class="hello" id="page">

    <Header/>

    <main>
      <div class="hero_in cart_section last">
        <div class="wrapper">
          <div class="container">
            <div class="bs-wizard clearfix">
              <div class="bs-wizard-step">
                <div class="text-center bs-wizard-stepnum">Your cart</div>
                <div class="progress">
                  <div class="progress-bar"></div>
                </div>
                <a href="cart-1.html" class="bs-wizard-dot"></a>
              </div>

              <div class="bs-wizard-step">
                <div class="text-center bs-wizard-stepnum">Payment</div>
                <div class="progress">
                  <div class="progress-bar"></div>
                </div>
                <a href="cart-2.html" class="bs-wizard-dot"></a>
              </div>

              <div class="bs-wizard-step active">
                <div class="text-center bs-wizard-stepnum">Finish!</div>
                <div class="progress">
                  <div class="progress-bar"></div>
                </div>
                <a href="#0" class="bs-wizard-dot"></a>
              </div>
            </div>
            <!-- End bs-wizard -->
            <div id="confirm">
              <h4>Order completed!</h4>
              <p>You'll receive a confirmation email at mail@example.com</p>
            </div>
          </div>
        </div>
      </div>
      <!--/hero_in-->
	  </main>
  </div>
</template>

<script>
import $ from 'jquery'
import Header from './Header.vue'

export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  components: {
    Header
  },
  mounted(){
    $('#sliderPrincipal').hide();
    $('#headerDesdeIndex').hide();
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
