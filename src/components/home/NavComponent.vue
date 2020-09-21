<template>
  <div>
    <ul>
        <li v-for="(datas,index) in data" :key="index" style="margin-left: 30px">
            <router-link active-class="active" exact class="nav-link" :to="{path: '/'+datas.slug+''}">{{datas.name}}</router-link>
            <ul v-if="checkMenuChild(datas.child_menu)" class="sub-menu">
                <li v-for="(data_child,index_child) in datas.child_menu" :key="index_child">
                    <router-link active-class="active" exact class="nav-link" :to="{path: '/'+datas.slug, query:{slug:data_child.slug}}">{{data_child.name}}</router-link>  
                </li>
            </ul>
        </li>
        </ul>
    </div>
</template>

<script>
import axios from "axios";
export default {
    data () {
    return {
      data: {}
    }
  },
  beforeMount(){
    this.getName();
  },
  methods: {
    async getName(){
      const { data } = await axios.get("http://localhost/lab-block1/asm/index.php");
      this.data = data;
    },
    checkMenuChild(menuchild){
        if(menuchild.length==0)
        {
            return false;
        }else{
            return true;
        }
        // menuchild.length==0 ? return false : return true ;
    }
  }
}   
</script>

<style>

</style>