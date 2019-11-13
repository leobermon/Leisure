<template>
  <div class="hello">

  <footer>
    <div class="container margin_60_35">
      <div class="row">
        <div class="col-lg-5 col-md-12 p-r-5">
          <br>
          <p><img src="img/ALT1-02.png" width="350" height="130" data-retina="true" alt=""></p>


        </div>
        <div class="col-lg-3 col-md-6 ml-lg-auto">
          <h5>Useful links</h5>
          <ul class="links">
            <li><a href="about.html">About</a></li>
            <!-- <li><a href="blog.html">News &amp; Events</a></li> -->
            <li><a href="media-gallery.html">Galery</a></li>
            <li><a href="contacts.html">Contacts</a></li>
            <li><a href="faq.html">FAQ</a></li>
          </ul>
        </div>
        <div class="col-lg-3 col-md-6">
          <h5>Contact with Us</h5>
          <ul class="contacts">
            <li><a href="tel://61280932400"><i class="ti-mobile"></i> + 61 23 8093 3400</a></li>
            <li><a href="mailto:info@Panagea.com"><i class="ti-email"></i> info@Panagea.com</a></li>
            <li>
              <div class="follow_us">
                <ul>
                  <li>Follow us</li>
                  <li><a href="#0"><i class="ti-facebook"></i></a></li>
                  <li><a href="#0"><i class="ti-twitter-alt"></i></a></li>
                  <li><a href="#0"><i class="ti-instagram"></i></a></li>
                </ul>
              </div>
            </li>
          </ul>
        <!-- 	<div id="newsletter">
          <h6>Newsletter</h6>
          <div id="message-newsletter"></div>
          <form method="post" action="assets/newsletter.php" name="newsletter_form" id="newsletter_form">
            <div class="form-group">
              <input type="email" name="email_newsletter" id="email_newsletter" class="form-control" placeholder="Your email">
              <input type="submit" value="Submit" id="submit-newsletter">
            </div>
          </form>
          </div> -->
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
            <li><img src="img/cards_all.svg" alt=""></li>
          </ul>
        </div>
        <div class="col-lg-6">
          <ul id="additional_links">
            <li><a href="#0">Terms and conditions</a></li>
            <li><a href="#0">Privacy</a></li>
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
