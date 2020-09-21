<template>
  <div class="widget-product">
          <div class="widget-title">
            <h5>Best Seller</h5>
            <div
             class="product-seller" style="margin-top:20px" v-for="(data,index) in datas" :key="index">
              <img :src="getImgUrl(data.image)" alt  style="width: 30%"/>
              <div class="seller-content">
                <div class="seller-price" style="text-align:left">$ {{data.price}}</div>
                <div class="seller-name"  style="text-align:left">
                  <a href="#" @click="goTodetail(data.slug)">{{data.name}}</a>
                </div>
              </div>
            </div>
            <div class="clr"></div>
          </div>
          <div class="clr"></div>
          <div class="tag-link">
            <h5>Tag Clouds</h5>
            <TagComponent />
          </div>
        </div>
</template>

<script>
import axios from "axios";
import TagComponent from "./TagComponent";
export default {
  components: {
    TagComponent,
  },
  data() {
    return {
      datas: {}
    };
  },
  beforeMount(){
      this.getContentMenu();
  },
  methods: {
    async getContentMenu() {
      const { data } = await axios.get("http://localhost/lab-block1/asm/index.php?folder=User&ctrl=ProductController&action=getProductHot");
      this.datas = data;
      console.log(this.datas);
    },
    getImgUrl(pet) {
      var images = require.context("../../assets/", false, /\.jpg$/);
      return images("./" + pet + ".jpg");
    },
    goTodetail(event) {
      this.$router.push(`/product/slug=${event}`)
    },
  },
};
</script>


<style>

</style>