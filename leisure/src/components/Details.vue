
<template>
    <div class="hello">
        <main>
            <section style="height: 150px;" class="hero_in restaurants_detail">
                <div class="wrapper">
                    <div class="container">
                        <h1 class="fadeInUp"><span></span> Book Service </h1>
                    </div>
                </div>
            </section>
            <!--/hero_in-->

            <div class="bg_color_1">
                <div class="container margin_60_35">

                    <div class="row">
                        <div class="col-lg-8" >
                            <div class="row">
                                <div class="col-md-9">
                                    <h3>Service Information - {{ serviceType }} </h3>
                                </div>
                                <div class="col-md-3">
                                    <input type="checkbox" id="checkbox" v-model="roundTrip">
                                    <label for="checkbox"> Round Trip </label>
                                </div>
                            </div>
                            <div id="login">
                                <section>
                                    <form method="post" action="assets/contact.php" id="contactform" autocomplete="off">
                                        <div class="row">
                                            <div class="col-md-6">
                                                <div class="form-group">
                                                    <label>Pickup Place</label>
                                                    <model-select class="form-control" :options="placersList"
                                                                  v-model="serviceDetails.origin"
                                                                  placeholder="Select pickup place">
                                                    </model-select>
                                                </div>
                                            </div>
                                            <div class="col-md-6">
                                                <div class="form-group">
                                                    <label>Drop Off place</label>
                                                    <model-select class="form-control" :options="placersList"
                                                                  v-model="serviceDetails.destination"
                                                                  placeholder="Select dropoff place">
                                                    </model-select>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="row">
                                            <div class="col-md-4">
                                                <div class="form-group">
                                                    <label>Date</label> <br>
                                                    <date-picker :disabled-date="notBeforeToday" placeholder="Date" v-model="serviceDetails.date" valueType="format"></date-picker>
                                                </div>
                                            </div>
                                            <div class="col-md-4">
                                                <div class="form-group">
                                                    <label>Time</label> <br>
                                                    <date-picker
                                                            v-model="serviceDetails.time"
                                                            value-type="format"
                                                            type="time"
                                                            format="HH:mm"
                                                            placeholder="Select time"
                                                    ></date-picker>
                                                </div>
                                            </div>
                                            <div class="col-md-4">
                                                <div class="form-group">
                                                    <label>Passanger</label>
                                                    <number-input v-model="serviceDetails.people" :min="1" :max="50" placeholder="People" controls></number-input>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="row">
                                            <div class="col-md-4">
                                                <div class="form-group">
                                                    <label>Airline</label><br>
                                                    <model-select class="form-control" :options="ArilineList"
                                                                  v-model="serviceDetails.airline"
                                                                  placeholder="Select pickup place">
                                                    </model-select>
                                                </div>
                                            </div>
                                            <div class="col-md-4">
                                                <div class="form-group">
                                                    <label>Flight Number</label><br>
                                                    <number-input v-model="serviceDetails.flightNumber" :min="1" :max="50" placeholder="People" controls></number-input>
                                                </div>
                                            </div>
                                            <div class="col-md-4">
                                                <div class="form-group">
                                                    <label>Fligh Arrival Time</label><br>
                                                    <date-picker :disabled-date="notBeforeToday" placeholder="Date" v-model="serviceDetails.flightTime" valueType="format"></date-picker>
                                                </div>
                                            </div>

                                        </div>

                                    </form>

                                </section>
                            </div>

                            <!-- Formulario para el regreso del servicio -->
                            <template v-if="roundTrip">
                                <hr>
                                <div  class="row" >
                                    <div class="col-md-12">
                                        <h3>Return Service Information - {{ serviceType }} </h3>
                                    </div>
                                </div>
                                <div id="login" style="background-color: #f2f2f2;">
                                    <section>
                                        <form method="post" action="assets/contact.php" id="contactform" autocomplete="off">
                                            <div class="row">
                                                <div class="col-md-6">
                                                    <div class="form-group">
                                                        <label>Return Pickup Place</label>
                                                        <model-select class="form-control" :options="placersList"
                                                                      v-model="serviceDetails.origin"
                                                                      placeholder="Select pickup place">
                                                        </model-select>
                                                    </div>
                                                </div>
                                                <div class="col-md-6">
                                                    <div class="form-group">
                                                        <label>Return Drop Off place</label>
                                                        <model-select class="form-control" :options="placersList"
                                                                      v-model="serviceDetails.destination"
                                                                      placeholder="Select dropoff place">
                                                        </model-select>
                                                    </div>
                                                </div>
                                            </div>

                                            <div class="row">
                                                <div class="col-md-4">
                                                    <div class="form-group">
                                                        <label>Return Date</label> <br>
                                                        <date-picker :disabled-date="notBeforeToday" placeholder="Date" v-model="serviceDetails.date" valueType="format"></date-picker>
                                                    </div>
                                                </div>
                                                <div class="col-md-4">
                                                    <div class="form-group">
                                                        <label>Return Time</label><br>
                                                        <date-picker
                                                                v-model="serviceDetails.time"
                                                                value-type="format"
                                                                type="time"
                                                                format="HH:mm"
                                                                placeholder="Select time"
                                                        ></date-picker>
                                                    </div>
                                                </div>
                                                <div class="col-md-4">
                                                    <div class="form-group">
                                                        <label>Return Passanger</label><br>
                                                        <number-input v-model="serviceDetails.people" :min="1" :max="50" placeholder="People" controls></number-input>
                                                    </div>
                                                </div>
                                            </div>

                                            <div class="row">
                                                <div class="col-md-4">
                                                    <div class="form-group">
                                                        <label>Return Airline</label><br>
                                                        <model-select class="form-control" :options="ArilineList"
                                                                      v-model="serviceDetails.airline"
                                                                      placeholder="Select pickup place">
                                                        </model-select>
                                                    </div>
                                                </div>
                                                <div class="col-md-4">
                                                    <div class="form-group">
                                                        <label>Return Flight Number</label><br>
                                                        <number-input v-model="serviceDetails.flightNumber" :min="1" :max="50" placeholder="People" controls></number-input>
                                                    </div>
                                                </div>
                                                <div class="col-md-4">
                                                    <div class="form-group">
                                                        <label>Return Fligh Arrival Time</label><br>
                                                        <date-picker :disabled-date="notBeforeToday" placeholder="Date" v-model="serviceDetails.flightTime" valueType="format"></date-picker>
                                                    </div>
                                                </div>

                                            </div>

                                        </form>

                                    </section>
                                </div>
                            </template>


                            <hr>
                            <h3>Personal Information</h3>

                            <div id="login">

                                <section>
                                    <form method="post" action="assets/contact.php" id="contactform" autocomplete="off">
                                        <div class="row">
                                            <div class="col-md-6">
                                                <div class="form-group">
                                                    <label>Name</label>
                                                    <input v-model="personalInformation.name" class="form-control" type="text" id="name_contact" name="name_contact">
                                                </div>
                                            </div>
                                            <div class="col-md-6">
                                                <div class="form-group">
                                                    <label>Last name</label>
                                                    <input v-model="personalInformation.lastname" class="form-control" type="text" id="lastname_contact" name="lastname_contact">
                                                </div>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-md-6">
                                                <div class="form-group">
                                                    <label>Mail</label>
                                                    <input v-model="personalInformation.email" class="form-control" type="text" id="name_contact" name="name_contact">
                                                </div>
                                            </div>
                                            <div class="col-md-6">
                                                <div class="form-group">
                                                    <label>Confirm Email</label>
                                                    <input v-model="personalInformation.reemail" class="form-control" type="text" id="lastname_contact" name="lastname_contact">
                                                </div>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-md-4">
                                                <div class="form-group">
                                                    <label>Country Code</label>
                                                    <input v-model="personalInformation.countrycode" class="form-control" type="text" id="lastname_contact" name="lastname_contact">
                                                </div>
                                            </div>
                                            <div class="col-md-8">
                                                <div class="form-group">
                                                    <label>Phone number</label>
                                                    <input v-model="personalInformation.phone" class="form-control" type="text" id="name_contact" name="name_contact">
                                                </div>
                                            </div>

                                        </div>
                                    </form>

                                </section>
                            </div>
                            <!-- /section -->


                        </div>
                        <!-- /col -->

                        <aside class="col-lg-4" id="sidebar">
                            <div class="box_detail booking">
                                <div class="price">
                                    <span>45$ <small>p/Van</small></span>

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
    import 'vue-search-select/dist/VueSearchSelect.css'
    import {ModelSelect} from 'vue-search-select'

    import DatePicker from '../modulos/vue2-datepicker';
    import '../modulos/vue2-datepicker/index.css';

    import VueNumberInput from '@chenfengyuan/vue-number-input';

    import moment from 'moment'


    const today = new Date();
    var d = new Date();
    var todayMenosOneDay = new Date(d.getFullYear() , d.getMonth(), d.getDate() - 1 );
    var todayOneYear = new Date(d.getFullYear() + 1, d.getMonth(), d.getDate());

    export default {
        name: 'tour',
        components: {
            ModelSelect,
            DatePicker,
            'number-input':  VueNumberInput
        },
        props: ['idOrigin','idDestination','nPeople','nDate'],
        data () {
            return {
                availableDates: this.getDates(todayMenosOneDay, todayOneYear),
                serviceType: 'Arrival',
                roundTrip: true,
                personalInformation:{
                    name: '',
                    lastname: '',
                    email: '',
                    reemail: '',
                    countrycode: '',
                    phone: ''
                },
                serviceDetails:{
                  origin: this.idOrigin,
                  destination: this.idDestination,
                  date: this.nDate,
                  time: '',
                  people: this.nPeople,
                  airline: '',
                  flightTime: '',
                  flightNumber: ''
                },
                RoundserviceDetails:{
                    origin: this.idOrigin,
                    destination: this.idDestination,
                    date: '',
                    time: '',
                    people: this.nPeople,
                    airline: '',
                    flight: '',
                    flightNumber: ''
                },
                placersList: [
                    {value: '1', text: 'Grand Oasis - Cancun'},
                    {value: '2', text: 'Riu Palace - Cancun'},
                    {value: '3', text: 'The Ritz Carlton - Cancun'},
                    {value: '4', text: 'Krystal - Cancun'},
                    {value: '5', text: 'Temptation - Cancun'},
                    {value: '6', text: 'Cancun Airport - Cancun'}
                ],
                ArilineList: [
                    {value: '1', text: 'Delta Airlines'},
                    {value: '2', text: 'Aeromexico Airlines'},
                    {value: '3', text: 'Volaris Airlines'},
                    {value: '4', text: 'Interjet Airlines'},
                    {value: '5', text: 'Air Canada Airlines'},
                    {value: '6', text: 'Air Transit Airlines'}
                ]
            }
        },
        mounted() {

            let recaptchaScript = document.createElement('script')
            recaptchaScript.setAttribute('src', '@/assets/js/common_scripts.js')
            document.head.appendChild(recaptchaScript)
        },
        methods: {
            getDates(startDate, endDate){
                var dates = [],
                    currentDate = startDate,
                    addDays = function(days) {
                        var date = new Date(this.valueOf());
                        date.setDate(date.getDate() + days);
                        return date;
                    };
                while (currentDate <= endDate) {
                    dates.push(moment(currentDate).format('DD-MM-YYYY')  );
                    currentDate = addDays.call(currentDate, 1);
                }
                return dates;
            },
            notBeforeToday(date) {

                return ( date < todayMenosOneDay || !(this.availableDates.includes(moment( date).format('DD-MM-YYYY'))) )

            },

        }

    }
</script>

<style scoped>

</style>

