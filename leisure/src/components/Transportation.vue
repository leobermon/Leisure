
<template>
  <div class="hello">
    <main>
      <section class="hero_in restaurants_detail">
        <div class="wrapper">
          <div class="container">
            <h1 class="fadeInUp"><span></span>Restaurant detail page</h1>
          </div>
          <span class="magnific-gallery">
            <a href="img/gallery/restaurant_list_1.jpg" class="btn_photos" title="Photo title" data-effect="mfp-zoom-in">View photos</a>
            <a href="img/gallery/restaurant_list_2.jpg" title="Photo title" data-effect="mfp-zoom-in"></a>
            <a href="img/gallery/restaurant_list_3.jpg" title="Photo title" data-effect="mfp-zoom-in"></a>
          </span>
        </div>
      </section>
      <!--/hero_in-->

      <div class="bg_color_1">
        <nav class="secondary_nav sticky_horizontal">
          <div class="container">
            <ul class="clearfix">
              <li><a href="#description" class="active">Description</a></li>
              <li><a href="#reviews">Reviews</a></li>
              <li><a href="#sidebar">Booking</a></li>
            </ul>
          </div>
        </nav>
        <div class="container margin_60_35">
          <div class="row">
            <div class="col-lg-8">
              <section id="description">
                <h2>Description</h2>
                <p>Per consequat adolescens ex, cu nibh commune <strong>temporibus vim</strong>, ad sumo viris eloquentiam sed. Mea appareat omittantur eloquentiam ad, nam ei quas oportere democritum. Prima causae admodum id est, ei timeam inimicus sed. Sit an meis aliquam, cetero inermis vel ut. An sit illum euismod facilisis, tamquam vulputate pertinacia eum at.</p>
                <p>Cum et probo menandri. Officiis consulatu pro et, ne sea sale invidunt, sed ut sint <strong>blandit</strong> efficiendi. Atomorum explicari eu qui, est enim quaerendum te. Quo harum viris id. Per ne quando dolore evertitur, pro ad cibo commune.</p>
                <div class="row">
                  <div class="col-lg-6">
                    <ul class="bullets">
                      <li>Dolorem mediocritatem</li>
                      <li>Mea appareat</li>
                      <li>Prima causae</li>
                      <li>Singulis indoctum</li>
                    </ul>
                  </div>
                  <div class="col-lg-6">
                    <ul class="bullets">
                      <li>Timeam inimicus</li>
                      <li>Oportere democritum</li>
                      <li>Cetero inermis</li>
                      <li>Pertinacia eum</li>
                    </ul>
                  </div>
                </div>
                <!-- /row -->
                <hr>
                <h3>Instagram photos feed</h3>
                <div id="instagram-feed-restaurant" class="clearfix"></div>
                <hr>
                <h3>Location</h3>
                <div id="map" class="map map_single add_bottom_30"></div>
                <!-- End Map -->
              </section>
              <!-- /section -->


            </div>
            <!-- /col -->

            <aside class="col-lg-4" id="sidebar">
              <div class="box_detail booking">
                <div class="price">
                  <span>45$ <small>person</small></span>
                  <div class="score"><span>Good<em>350 Reviews</em></span><strong>7.0</strong></div>
                </div>

                <div class="form-group" id="input_date">
                  <input class="form-control" type="text" name="dates" placeholder="When..">
                  <i class="icon_calendar"></i>
                </div>

                <div class="panel-dropdown">
                  <a >Guests <span class="qtyTotal">1</span></a>
                  <div class="panel-dropdown-content right">
                    <div class="qtyButtons">
                      <label>Adults</label>
                      <input type="text" name="qtyInput" value="1">
                    </div>
                    <div class="qtyButtons">
                      <label>Childrens</label>
                      <input type="text" name="qtyInput" value="0">
                    </div>
                  </div>
                </div>

                <div class="form-group clearfix">
                  <div class="custom-select-form">
                  <select class="wide">
                    <option>Time</option>
                    <option>Lunch</option>
                    <option>Dinner</option>
                  </select>
                  </div>
                </div>

                <a href="cart-1.html" class=" add_top_30 btn_1 full-width purchase">Book now</a>
                <a href="wishlist.html" class="btn_1 full-width outline wishlist"><i class="icon_heart"></i> Add to wishlist</a>
                <div class="text-center"><small>No money charged in this step</small></div>
              </div>
              <ul class="share-buttons">
              <li><a class="fb-share" href="#0"><i class="social_facebook"></i> Share</a></li>
              <li><a class="twitter-share" href="#0"><i class="social_twitter"></i> Tweet</a></li>
              <li><a class="gplus-share" href="#0"><i class="social_googleplus"></i> Share</a></li>
            </ul>
            </aside>
          </div>
          <!-- /row -->
        </div>
        <!-- /container -->
      </div>
      <!-- /bg_color_1 -->
    </main>
  </div>
</template>


<script>

export default {
  name: 'tour',
  components: {
  },
  props: {
    id: Number
  },
  data () {
    return {
      item: '',
      msg: 'hola '
    }
  },
  mounted() {

    let recaptchaScript = document.createElement('script')
    recaptchaScript.setAttribute('src', '@/assets/js/common_scripts.js')
    document.head.appendChild(recaptchaScript)
  },
  methods: {

  }

}
</script>

<style scoped>

</style>
