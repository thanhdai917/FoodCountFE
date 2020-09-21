<template>
  <div>
    <!-- end header-banner -->
    <!-- section-1 -->
    <div class="boxcenter" style="margin-top: 20px">
      <div class="about">
        <h3 class="sub-title">Taste the best</h3>
        <h2 class="title-headline">Fresh Ingredient, Tasty Meal</h2>
        <img src="../../assets/shape-4.png" alt style="display: inline-block;text-align:center"/>
        <p>
          Everyone has taste, even if they don't realize it. Even if you're not a great chef, there's nothing to
          stop you understanding the difference between what tastes good and what doesn't.
        </p>
      </div>
    </div>
    <!-- menu -->
    <div v-for="(dataes,index) in data" :key="index">
      <div v-for="(datas, index) in dataes" :key="index">
        <div class="discorver-menu" style="margin: 30px 0">
          <img :src="getImgUrl(datas.path)" alt class="hinh" />
          <div class="arrow">
            <img src="../../assets/arrow-up.png" alt style="display: inline-block;text-align:center"/>
            <div class="text-content">
              <p>{{datas.title}}</p>
              <h2>{{datas.sub_title}}</h2>
            </div>
          </div>
          <div class="shape-down">
            <img src="../../assets/shape-3down.png" alt style="display: inline-block;text-align:center"/>
          </div>
          <div class="overlay"></div>
        </div>
        <!-- menu-product -->
        <div class="boxcenter">
          <div class="clr"></div>
          <div
            class="col-4 dish-panel"
            style="margin-right: 1.25%;"
            v-for="(product,index) in datas.child_menu"
            :key="index"
          >
            <div class="dish-img">
              <img :src="getImgUrl(product.images)" alt />
              <div class="overlay-1">
                <a :href="getImgUrl(product.images)" class="icon" :title="product.name">
                  <i class="fa fa-search-plus"></i>
                </a>
              </div>
            </div>
            <div class="dish-content">
              <h3>{{product.name}}</h3>
              <span>$ {{product.price}}</span>
              <p>{{product.description}}</p>
            </div>
          </div>
        </div>
        <div class="clr"></div>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
export default {
  data() {
    return {
      data: {}
    };
  },
  created(){
      this.getContentMenu();
  },
  methods: {
    async getContentMenu() {
      var post;
      if (this.$route.query.slug == undefined) {
        post = "";
      } else {
        post = this.$route.query.slug;
      }
      const { data } = await axios.get("http://localhost/lab-block1/asm/index.php?folder=User&ctrl=MenuController&action=index&param=" +post);
      this.data = data;
    },
    getImgUrl(pet) {
      var images = require.context("../../assets/", false, /\.jpg$/);
      return images("./" + pet + ".jpg");
    }
  },
  watch: {
    $route: "getContentMenu"
  }
};
</script>

<style>
</style>