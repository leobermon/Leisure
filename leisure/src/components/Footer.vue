<template>
  <div class="hello">

  <footer>
    <div class="container margin_60_35">
      <div class="row">
        <div class="col-lg-4 col-md-12 p-r-4">
          <br>
          <p><img src="@/assets/img/ALT1-02.png" width="300" height="110" data-retina="true" alt=""></p>


        </div>
        <div class="col-lg-3 col-md-6 ml-lg-auto">
          <h5>Useful links</h5>
          <ul >
            <li><a style="cursor:pointer;" @click="changeRoute('Galery')" >Galery</a></li>
            <li><a style="cursor:pointer;" @click="changeRoute('Faq')" >FAQ</a></li>
          </ul>
        </div>
        <div class="col-lg-3 col-md-6">
          <h5>Contact with Us</h5>
          <ul class="contacts">
            <li><a href="tel://61280932400"><i class="ti-mobile"></i> + 61 23 8093 3400</a></li>
            <li><a href="mailto:info@leisuretransfers.com"><i class="ti-email"></i> info@leisuretransfers.com</a></li>
          </ul>
        </div>
        <div class="col-lg-2 col-md-6">

              <div class="follow_us">
                <ul>
                  <li>Follow us</li> <br>
                  <li><a href="#0"><i class="ti-facebook"></i></a></li>
                  <li><a href="#0"><i class="ti-twitter-alt"></i></a></li>
                  <li><a href="#0"><i class="ti-instagram"></i></a></li>
                </ul>
              </div>

        </div>
      </div>
      <!--/row-->
      <hr>
      <div class="row">
        <div class="col-lg-6">
          <ul id="footer-selector">
            <li>
              <div class="styled-select" id="lang-selector">
                <select>
                  <option value="English" selected>English</option>
              <!-- 		<option value="French">French</option>
                  <option value="Spanish">Spanish</option>
                  <option value="Russian">Russian</option> -->
                </select>
              </div>
            </li>
            <li>
              <div class="styled-select" id="currency-selector">
                <select>
                  <option value="US Dollars" selected>US Dollars</option>
                  <!-- <option value="Euro">Euro</option> -->
                </select>
              </div>
            </li>
            <li><img src="@/assets/img/cards_all.svg" alt=""></li>
          </ul>
        </div>
        <div class="col-lg-6">
          <ul id="additional_links">
            <li><a style="cursor:pointer;" @click="changeRoute('Faq')">Terms and conditions</a></li>
            <li><a style="cursor:pointer;" @click="changeRoute('Faq')">Privacy</a></li>
            <!-- <li><span>© 2018 Panagea</span></li> -->
          </ul>
        </div>
      </div>
    </div>
  </footer>

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

.margin_60_35 {
    padding-top: 5px !important;
    padding-bottom: 5px !important;
}

ul, ol {
  list-style: none !important;
  margin: 0 0 0px 0 !important;
  padding: 0  !important;
}

hr {
    margin: 10px 0 10px 0 !important;
    border-color: #ededed !important;
}

</style>
