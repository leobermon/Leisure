<template>
  <div class="hello">
  <main>
  <div id="error_page">
      <div class="container">
        <div class="row justify-content-center text-center">
          <div class="col-xl-7 col-lg-9">
            <h2>404 <i class="icon_error-triangle_alt"></i></h2>
            <p>We're sorry, but the page you were looking for doesn't exist.</p>

          </div>
        </div>
        <!-- /row -->
      </div>
      <!-- /container -->
    </div>
    <!-- /error_page -->
  </main>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
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
