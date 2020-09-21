<template>
    <div>
    <div class="mySlides fade" v-for="(datas,index) in data" :key="index">
      <div>
        <div class="header">
          <div class="header-content boxcenter">
            <div class="col-6">
              <div class="col-3 mr top-header-content">
                <i class="fa fa-map-marker"></i>
                <span>Tanta AlGharbia. Egypt</span>
              </div>
              <div class="col-3 top-header-content">
                <i class="fa fa-phone"></i>
                <span>+ 2 0106 5370701</span>
              </div>
            </div>
            <div class="col-6">
              <div class="flr">
                <span>Folow Us</span>

                <a class="facebook" style="width: 180%;" href="#"
                  ><i class="fa fa-facebook"></i
                ></a>
                <a class="twitter" href="#"><i class="fa fa-twitter"></i></a>
                <a class="dribbble" href="#"><i class="fa fa-dribbble"></i></a>
                <a class="linkedin" href="#"><i class="fa fa-linkedin"></i></a>
              </div>
            </div>
          </div>
          <div style="z-index: 500;">
            <img src="../../assets/shape-topbar.png" alt="" />
          </div>
        </div>

        <div class="navigation" id="myHeader">
          <div class="boxcenter">
            <div class="logo">
              <img src="../../assets/logo-light.png" alt="" id="light" />
            </div>
            <div>
                <nav-component></nav-component>
            </div>
            <div class="module-content">
              <div class="module">
                <a href="#" class="reservation">RESERVATION</a>
              </div>
              <div class="module">
                <a href="#"><i class="fa fa-user"></i></a>
              </div>
              <div class="module">
                <a href="#"><i class="fa fa-shopping-cart"></i> </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <img :src="getImgUrl(datas.path)" style="width:100%" class="banner" />
      <div class="overlay"></div>
      <div class="boxcenter">
        <div class="text">
          <h2>{{datas.title}}</h2>
          <h1>
            {{datas.sub_title}}
          </h1>
          <span v-html="datas.content_banner"></span>
          
          <div class="btn">
            <a href="#" class="btn-1">{{datas.btn_1}}</a>
            <a href="#" class="btn-2">{{datas.btn_2}}</a>
          </div>
        </div>
      </div>
    </div>
</div>
</template>

<script>
import NavComponent from "../../components/home/NavComponent.vue";
import axios from "axios";
export default {
    components: {
        NavComponent
    },
    data () {
    return {
      data: {}
    }
  },
  beforeMount(){
    this.getBanner();
  },
  methods: {
    async getBanner(){
      const { data } = await axios.get("http://localhost/lab-block1/asm/index.php?ctrl=Home&action=ShowBanner");
      this.data = data;
      // console.log(data);
    },
    getImgUrl(pet) {
    var images = require.context('../../assets/', false, /\.jpg$/);
    return images('./' + pet + ".jpg");
  }
  },
}   
</script>

<style>

</style>