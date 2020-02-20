<template>
  <div class="hello">
    <main>

      <div style="height:300px; background-color:red; overflow:hidden;">
        <iframe src="http://localhost:8080/index2.html" style=" top:0; left:0; bottom:0; right:0; width:100%; height:100%; border:none; margin:0; padding:0; overflow:hidden;">
            Your browser doesn't support iframes
        </iframe>
      </div>




    <div class="bg_color_1">
			<div class="container margin_60_35">
				<div class="row">
					<div class="col-md-4">
						<a href="#0" class="boxed_list">
							<i class="pe-7s-help2"></i>
							<h4>Need Help? Contact us</h4>
							<p>Cum appareat maiestatis interpretaris et, et sit.</p>
						</a>
					</div>
					<div class="col-md-4">
						<a href="#0" class="boxed_list">
							<i class="pe-7s-wallet"></i>
							<h4>Payments and Refunds</h4>
							<p>Qui ea nemore eruditi, magna prima possit eu mei.</p>
						</a>
					</div>
					<div class="col-md-4">
						<a href="#0" class="boxed_list">
							<i class="pe-7s-note2"></i>
							<h4>Quality Standards</h4>
							<p>Hinc vituperata sed ut, pro laudem nonumes ex.</p>
						</a>
					</div>
				</div>
				<!-- /row -->
			</div>
			<!-- /container -->
		</div>

		<div class="container-fluid pl-lg-5 pr-lg-5">
      <section>
        <div class="main_title_2">
          <span><em></em></span>
          <h2>Popular Transportation </h2>
          <p>Cum doctus civibus efficiantur in imperdiet deterruisset.</p>
        </div>


        <div class="container margin_60_35">

          <div class="wrapper-grid">
            <div class="row">
              <div v-for="(place, key) in popularDestination" :key="key" class="col-xl-4 col-lg-6 col-md-6">
                <div class="box_grid">
                  <figure>
                    <a @click="changeRoute('/HotelDetail', place.Id )"><img src="@/assets/img/tour_1.jpg" class="img-fluid" alt="" width="800" height="533"><div class="read_more"><span>Read more</span></div></a>
                    <small>Historic</small>
                  </figure>
                  <div class="wrapper">
                    <h3><a  @click="changeRoute('/HotelDetail', place.Id )" > {{place.Nombre }}</a></h3>
                    <p>{{place.Descripcion}}</p>
                    <span class="price">From <strong>${{place.Price}}</strong> /per person</span>
                  </div>
                </div>
              </div>
            </div>
            <!-- /row -->
          </div>
          <!-- /wrapper-grid -->

          <p class="text-center"><a @click="changeRoute('/HotelList', '')" class="btn_1 rounded add_top_30">Load more</a></p>

        </div>
        <!-- /container -->
      </section>


    </div>


		<div class="container-fluid margin_30_95 pl-lg-5 pr-lg-5">
			<section>
        <div class="main_title_2">
          <span><em></em></span>
          <h2>Popular Transportation </h2>
          <p>Cum doctus civibus efficiantur in imperdiet deterruisset.</p>
        </div>
				<div class="row">
					<div v-for="(place,key) in popularTours" :key="key" class="col-xl-3 col-lg-6 col-md-6">
						<a href="restaurant-detail.html" class="grid_item">
							<figure>
								<img src="img/restaurant_1.jpg" class="img-fluid" alt="">
								<div class="info">
									<h3>{{place.Nombre}}</h3>
								</div>
							</figure>

						</a>
					</div>
				</div>
				<!-- /row -->
				<a href="restaurants-grid-isotope.html"><strong>View more Tours  <i class="arrow_carrot-right"></i></strong></a>
			</section>
			<!-- /section -->
    </div>


    <div class="container-fluid margin_30_95 pl-lg-5 pr-lg-5">


      <div class="call_section">
        <div class="container clearfix">
          <div class="row">
            <div class="col-lg-8 col-md-8 float-right wow" data-wow-offset="250">
              <div class="block-reveal">
              <div class="block-vertical"></div>
              <div class="box_1">
              <h3>Enjoy a GREAT travel with us</h3>
              <p> Travel with us, is really confortable </p>

              <figure class="block-reveal">
              <div class="block-horizzontal"></div>
              <img src="img/about_1.jpg" class="img-fluid" alt="">
              </figure>

              <a href="pricing-tables.html" class="btn_1 rounded">Read more</a>
              </div>
              </div>
            </div>
            <div class="col-lg-4 col-md-4 float-right wow" data-wow-offset="250">
              <div class="block-reveal">

              </div>
            </div>
          </div>



        </div>
      </div>
      <!--/call_section-->
    </div>

	</main>

  </div>
</template>

<script src="js/input_qty.js"></script>


<script>
import 'vue-search-select/dist/VueSearchSelect.css'
import { ModelSelect } from 'vue-search-select'
import Datepicker from 'vuejs-datepicker';
import VueNumberInput from '@chenfengyuan/vue-number-input';


export default {
  name: 'HelloWorld',
  components: {
    ModelSelect,
    Datepicker
  },
  props: {
    msg: String
  },
  data () {
    return {
      item: '',
      options: [
        { value: '1', text: 'Grand Oasis - Cancun' },
        { value: '2', text: 'Riu Palace - Cancun' },
        { value: '3', text: 'The Ritz Carlton - Cancun' },
        { value: '4', text: 'Krystal - Cancun' },
        { value: '5', text: 'Temptation - Cancun' }
      ],
      popularDestination: [{
        Id: 1,
        Nombre:'Aeropuerto',
        Descripcion: 'Aeropuerto internacional de cancun',
        Img: '001',
        Price: 35,
        Link: 'Hotel'
      },
      {
        Id: 2,
        Nombre: 'Playa del carmen',
        Descripcion: 'Playa del carmen descripcion',
        Img: '002',
        Price: 30,
        Link: 'Hotel'
      },
      {
        Id: 3,
        Nombre: 'Tulum',
        Descripcion: 'la ciudad de tuluum que esta bien bonita',
        Img: '003',
        Price: 80,
        Link: 'City'
      }],
      popularTours: [{
        Id: 1,
        Nombre: 'Tulum',
        Img: '001'
      },{
        Id: 2,
        Nombre: 'Chichen Itza',
        Img: '002'
      },{
        Id: 3,
        Nombre: 'Coba',
        Img: '003'
      },{
        Id: 4,
        Nombre: 'Xplor',
        Img: '004'
      }]
    }
  },
  methods:{
    changeRoute (ruta, id) {
      // this.$router.push(ruta)

      this.$router.push({
          path: ruta,
          params: { Id: id }
      });

    }
  },
  mounted() {

    $('#sliderPrincipal').show();
    $('#headerDesdeIndex').show();


    let recaptchaScript = document.createElement('script')
    recaptchaScript.setAttribute('src', '@/assets/js/common_scripts.js')
    document.head.appendChild(recaptchaScript)
  }

}
</script>

<style scoped>
  .custom-search-input-2 input {
    width: 100% !important;
  }

  .ui fluid search selection dropdown form-control {
    height: 100% !important;
  }

  .ui.selection.dropdown {
    height: 100% !important;
  }

  .vdp-datepicker__calendar {
    color:black;
  }
</style>
