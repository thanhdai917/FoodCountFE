<template>
  <div class="content">
    <div v-for="(datas,index) in data" :key="index">
      <div v-if="activetab === index" class="tabcontent">
        <div class="product col-3-sm" v-for="(row,index) in datas" :key="index">
          <div v-if="getIndex(index)">
            <div class="content-product">
              <p class="price">$ {{datas[index].price}}</p>
              <p class="product-name" @click="goTodetail(datas[index].slug)">{{datas[index].name}}</p>
              <img src="../../assets/shape-13.png" alt style="display: inline-block;text-align:center"/>
              <p class="product-ingredients">
                Pork fillet, ginger, garlic, honey, pepper & canola oil.creamy
                chesapeake crab dip with artichoke, baked and topped with chedas
                cheese, with crusty bread.
              </p>
            </div>
            <div class="product-1">
              <img :src="getImgUrl(datas[index].image)" />
              <div class="overlay-1">
                <a :href="getImgUrl(datas[index].image)" class="icon" :title="datas[index].name">
                  <i class="fa fa-search-plus"></i>
                </a>
              </div>
            </div>
          </div>
          <div v-else>
            <div class="product-1">
              <img :src="getImgUrl(datas[index].image)" />
              <div class="overlay-1">
                <a :href="getImgUrl(datas[index].image)" class="icon" :title="datas[index].name">
                  <i class="fa fa-search-plus"></i>
                </a>
              </div>
            </div>
            <div class="content-product">
              <p class="price">$ {{datas[index].price}}</p>
              <p class="product-name" @click="goTodetail(datas[index].slug)">{{datas[index].name}}</p>
              <img src="../../assets/shape-13.png" alt style="display: inline-block;text-align:center"/>
              <p class="product-ingredients">
                Pork fillet, ginger, garlic, honey, pepper & canola oil.creamy
                chesapeake crab dip with artichoke, baked and topped with chedas
                cheese, with crusty bread.
              </p>
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
  props: {
    activetab: Number
  },
  data() {
    return {
      data: {}
    };
  },
  beforeMount() {
    this.getContentTab();
  },
  methods: {
    async getContentTab() {
      const { data } = await axios.get("http://localhost/lab-block1/asm/index.php?ctrl=Home&action=getProducted");
      this.data = data;
    },
    getImgUrl(pet) {
      var images = require.context("../../assets/", false, /\.jpg$/);
      return images("./" + pet + ".jpg");
    },
    goTodetail(event) {
      this.$router.push(`/product/slug=${event}`)
    },
    getIndex(index) {
      if (index % 2 == 0) {
        return true;
      } else {
        return false;
      }
    }
  }
};
</script>

<style>
.product-name {
  cursor: pointer;
}
</style>