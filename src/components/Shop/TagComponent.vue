<template>
  <div class="tag-link-for" style="margin-top:20px">
    <a class="tag-name" v-for="(data,index) in datas" :key="index" @click="$router.push(`/tags/slug=${data.slug}`)">{{data.name}}</a>
  </div>
</template>

<script>
import axios from "axios";
export default {
    data() {
    return {
      datas: {}
    };
  },
  beforeMount(){
      this.getTagContent();
  },
  methods: {
    async getTagContent() {
      const { data } = await axios.get("http://localhost/lab-block1/asm/index.php?folder=User&ctrl=ProductController&action=getTagProduct");
      this.datas = data;
      console.log(data);
    },
  },
};
</script>

<style>
.tag-name{
  cursor: pointer;
}
</style>