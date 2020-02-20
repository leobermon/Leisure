<template>
  <div class="hello">

    <header class="header menu_fixed" id="headerMain">
		<div id="logo">
			<a href="/">
				<img src="img/ALT-Nombre.png" width="280" height="90" data-retina="true" alt="" class="logo_normal">
				<img src="img/ALT-Nombre.png" width="170" height="60" data-retina="true" alt="" class="logo_sticky">
			</a>
		</div>
		<a href="#menu" class="btn_mobile">
			<div class="hamburger hamburger--spin" id="hamburger">
				<div class="hamburger-box">
					<div class="hamburger-inner"></div>
				</div>
			</div>
		</a>
		<nav id="menu" class="main-menu">
			<ul>

				<li>
					<span><a style="cursor: pointer;" @click="changeRoute('/')" >Home</a></span>
				</li>
				<li>
					<span><a style="cursor: pointer;" @click="changeRoute('/About')" >About</a></span>
				</li>
				<li>
					<span><a style="cursor: pointer;" @click="changeRoute('/Contact')" >Contact us</a></span>
				</li>
				<li>
					<span><a style="cursor: pointer;" @click="changeRoute('/Tours')" >Tours</a></span>
				</li>

			</ul>
		</nav>

	</header>

  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  methods: {
    changeRoute (ruta) {
      this.$router.push(ruta)
    }
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
