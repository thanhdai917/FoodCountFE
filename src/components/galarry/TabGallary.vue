<template>
  <div>
    <!-- section-1 -->
    <div class="boxcenter" style="margin-top: 20px">
      <div class="about">
        <h3 class="sub-title">Hello Dear</h3>
        <h2 class="title-headline">Welcom To Granny</h2>
        <img src="../../assets/shape-4.png" alt="" style="display: inline-block;text-align:center"/>
        <p>
          Granny was the first retaurant to open in Egypt, the resturant was
          designed with the history in mind we have create a soft industrial
          dining room, combined with an open kitchen, coffee take out bar and on
          site coffee roastery.
        </p>
        <img class="sign" src="../../assets/signiture.png" style="display: inline-block;text-align:center"/>
      </div>
    </div>
    <!-- menu -->
    <div class="discorver-menu">
      <img src="../../assets/discorver-menu.jpg" alt="" class="hinh" />
      <div class="arrow">
        <img src="../../assets/arrow-up.png" alt="" style="display: inline-block;text-align:center"/>
        <div class="text-content">
          <p>Taste the best</p>
          <h2>Discover Our Gallary</h2>
        </div>
      </div>
      <div class="overlay"></div>
    </div>
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
import ContentTabComponent from "./ContentTab.vue";
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
