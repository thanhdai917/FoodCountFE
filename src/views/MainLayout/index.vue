<template>
<div id="idmain">
    <header-component></header-component>
    <router-view />
    <Footer />
</div>
</template>

<script>
import HeaderComponent from "../../components/home/HeaderComponent.vue";
import Footer from "../../components/home/FooterComponent.vue";

export default {
 name:"idmain",
    components: {
        HeaderComponent,
        Footer
    },
    data() {
    return {
      myprops : "",
    };
  },
}
</script>
<style>

</style>