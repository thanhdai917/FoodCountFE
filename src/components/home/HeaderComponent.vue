<template>
  <!-- header-banner -->
  <div class="slideshow-container boxfull" id="myslide">
    <div>
      <div class="display-fixed" id="myHeader-fixed">
        <div class="boxcenter">
          <div class="logo">
            <img
              id="dark"
              src="../../assets/logo-dark.png"
              alt=""
              style="display: none;"
            />
          </div>
          <div>
            <nav-component></nav-component>
          </div>
          <div class="module-content">
            <div class="module">
              <a href="#" class="reservation">RESERVATION</a>
            </div>
            <div class="module">
              <a href="/test-MVC/login"><i class="fa fa-user"></i></a>
            </div>
            <div class="module">
              <a href="#"><i class="fa fa-shopping-cart"></i> </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <banner-component></banner-component>
    <a class="prev" style="left:0px;" v-on:click="plusSlides(-1)">&#10094;</a>
    <a class="next" v-on:click="plusSlides(1)">&#10095;</a>
  </div>

  <!-- end header-banner -->
  <!-- section-1 -->
</template>

<script>
import BannerComponent from "../../components/home/BannerComponent.vue";
import NavComponent from "../../components/home/NavComponent.vue";
export default {
  name: "HeaderComponent",
  components: {
    NavComponent,
    BannerComponent
  },
  data() {
    return {
      slideIndex: 1,
      timer: ""
    };
  },
  created() {
    window.addEventListener("load", function() {
      this.slideShow(this.slideIndex);
      this.timer = setInterval(function() {
        this.plusSlides(1);
      }, 5000);
    });
  },
  props: {
    msg: String
  },
  methods: {
    plusSlides: function(e) {
      clearInterval(this.timer);
      if (e < 0) {
        this.slideShow((this.slideIndex -= 1));
      } else {
        this.slideShow((this.slideIndex += 1));
      }
      if (e === -1) {
        this.timer = setInterval(function() {
          this.plusSlides(e + 2);
        }, 5000);
      } else {
        this.timer = setInterval(function() {
          this.plusSlides(e + 1);
        }, 5000);
      }
    },
    slideShow: function(anh) {
      var i;
      var slide = document.getElementsByClassName("mySlides");
      if (anh > slide.length) {
        this.slideIndex = 1;
      }
      if (anh < 1) {
        this.slideIndex = slide.length;
      }
      if (anh === undefined) {
        anh = ++this.slideIndex;
      }
      for (i = 0; i < slide.length; i++) {
        slide[i].style.display = "none";
      }
      slide[this.slideIndex - 1].style.display = "block";
    }
  }
};
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
