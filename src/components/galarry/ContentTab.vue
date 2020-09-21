<template>
  <div class="tab-content">
    <div  v-for="(datas,index) in data" :key="index">
      <div v-if="activetab === index" class="tabcontent">
        <div class="grid-content">
          <img v-for="(row,index) in datas" :key="index" :src="getImgUrl(datas[index].image)" alt />
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
      const { data } = await axios.get("http://localhost/lab-block1/asm/index.php?folder=User&ctrl=GallayController&action=index");
      this.data = data;
    },
    getImgUrl(pet) {
      var images = require.context("../../assets/", false, /\.jpg$/);
      return images("./" + pet + ".jpg");
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
.grid-content{
     display: flex;
  flex-wrap: wrap;
  padding: 0 4px;
}
.grid-content img {
  flex: 25%;
  max-width: 25%;
  padding: 0 4px;
  margin-top: 8px;
  vertical-align: middle;
  width: 100%;
}
</style>