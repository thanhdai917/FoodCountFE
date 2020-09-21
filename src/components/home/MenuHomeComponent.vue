<template>
  <div class="section2">
    <div class="boxcenter">
      <div class="boxcenter90">
        <div>
          <div class="sec2-col-left">
            <div v-for="(datas,index) in data" :key="index">
              <div class="box-top-left" v-if="checkMenuChild(index)">
                <div class="sub-col-left">
                  <img :src="getImgUrl(datas.image)" alt style="width: 95%;" />
                  <div class="overlay-1">
                    <a :href="getImgUrl(datas.image)" class="icon" :title="datas.name">
                      <i class="fa fa-search-plus"></i>
                    </a>
                  </div>
                </div>
                <div class="sub-col-right">
                  <p class="sec2-sub-title">
                    <a class="product-name" @click="goTodetail(datas.slug)" target="blank">{{datas.name}}</a>
                  </p>
                  <p class="sec2-describe">{{datas.description}}</p>
                  <p class="sec2-price">$ {{datas.price}}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- END Col-left-50% width -->
        <!-- Col-right-50% width -->
        <div>
          <div class="sec2-col-right">
            <div v-for="(datas,index) in data" :key="index">
              <div class="box-top-right" v-if="!checkMenuChild(index)">
                <div class="sub-col-right">
                  <p class="sec2-sub-title">
                    <a @click="goTodetail(datas.slug)" class="product-name" target="blank">{{datas.name}}</a>
                  </p>
                  <p class="sec2-describe">{{datas.description}}</p>
                  <p class="sec2-price">$ {{datas.price}}</p>
                </div>
                <div class="sub-col-left">
                  <img :src="getImgUrl(datas.image)" alt style="width: 95%;" />
                  <div class="overlay-1">
                    <a :href="getImgUrl(datas.image)" class="icon" :title="datas.name">
                      <i class="fa fa-search-plus"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      data: {},
      data_left: {},
      data_right: {}
    };
  },
  beforeMount() {
    this.getName();
  },
  methods: {
    async getName() {
      const { data } = await axios.get(
        "http://localhost/lab-block1/asm/index.php?ctrl=Home&action=getMenu"
      );
      this.data = data;
    },
    checkMenuChild(menuchild) {
      if (menuchild % 2 == 0) {
        return true;
      } else {
        return false;
      }
      // menuchild.length==0 ? return false : return true ;
    },
    getImgUrl(pet) {
      var images = require.context("../../assets/", false, /\.jpg$/);
      return images("./" + pet + ".jpg");
    },
    goTodetail(event) {
      this.$router.push(`/product/slug=${event}`)
    },
  }
};
</script>

<style>
</style>