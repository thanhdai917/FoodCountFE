<template>
  <div>
    <div class="tabs">
      <span
        v-for="(datas, index) in data" :key="index"
        v-on:click="activetab=index"
        v-bind:class="[activetab === index ? 'active' : '']"
        >{{datas.name}}</span
      >
    </div>
    <content-tab-component :activetab = activetab></content-tab-component>
  </div>
</template>
<script>
import axios from "axios";
import ContentTabComponent from "../../components/home/ContentTabComponent.vue";
export default {
  components: {
    ContentTabComponent
  },
  data() {
    return {
      activetab: 0,
      data: {}
    };
  },
    beforeMount(){
    this.getCategory();
  },
  methods: {
    async getCategory(){
      const { data } = await axios.get("http://localhost/lab-block1/asm/index.php?ctrl=Home&action=getCategories");
      this.data = data;
    }
},
}
</script>

<style>
/* Styling for active tab */
.tabs {
  text-align: center;
  margin: 5px;
}
.tabs span {
  margin-right: 50px;
  font-family: "Kaushan Script", cursive;
  font-size: 24px;
  font-weight: 400;
  color: #282828;
  cursor: pointer;
}
.tabs span.active {
  background-color: #fff;
  color: #c59d5f;
  border-bottom: 2px solid #fff;
  cursor: default;
}
</style>
