<template>
  <div>
    <!-- section-1 -->
    <div class="boxcenter">
      <div class="about">
        <h3 class="sub-title">Hello Dear</h3>
        <h2 class="title-headline">Welcom To Granny</h2>
        <img src="../../assets/shape-4.png" alt style="display: inline-block;text-align:center"/>
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
      <img src="../../assets/discorver-menu.jpg" alt class="hinh" style="display: inline-block;text-align:center"/>
      <div class="arrow">
        <img src="../../assets/arrow-up.png" alt style="display: inline-block;text-align:center" />
        <div class="text-content">
          <p>Taste the best</p>
          <h2>DETAIL PRODUCT</h2>
        </div>
      </div>
      <div class="overlay"></div>
    </div>
    <div class="clr"></div>
    <div class="text-center text-3xl font-bold text-black">
      <!-- <h1>DETAIL PRODUCT</h1> -->
    </div>
    <main class="container-detail" v-for="(datas,index) in data" :key="index">
      <!-- Left Column / Headphones Image -->
      <div class="left-column-detail">
        <img data-image="red" class="active" id="images" :src="getImgUrl(datas.images)" alt />
      </div>
      <!-- Right Column -->
      <div class="right-column-detail">
        <!-- Product Description -->
        <div class="product-description">
          <h2 class="nameDetail">{{datas.name}}</h2>
          <p id="description">{{datas.description}}</p>
        </div>
        <!-- Product Configuration -->
        <div class="product-configuration">
          <!-- Product Color -->
          <div class="product-color">
            <span>Product Of Tags</span>
            <div class="cable-choose flex justify-center">
              <div class="flex-initial mr-3" v-for="(dataxs,index) in datas.tag" :key="index">
                <button @click="$router.push(`/tags/slug=${dataxs.slug}`)">{{dataxs.name}}</button>
              </div>
            </div>
          </div>
          <!-- Cable Configuration -->
          <div class="cable-config">
            <span>Taste</span>
            <div class="cable-choose flex justify-center">
              <button class="mr-1">salty</button>
              <button class="mr-1">Sweet</button>
              <button class="mr-1">Sour</button>
              <button class="mr-1">Piquant</button>
            </div>

            <a href="#">How to configurate your food</a>
          </div>
          <div class="cable-config">
            <span>How To Cook</span>
            <div class="cable-choose flex justify-center">
              <button class="mr-2">Rare</button>
              <button class="mr-2">Medium Rare</button>
              <button class="mr-2">Well done</button>
            </div>
            <a href="#">How to configurate your food</a>
          </div>
        </div>
        <!-- Product Pricing -->
        <div class="price-detail">
          <span id="price"></span>
          <a href="#" class="cart-btn-detail">Add to cart</a>
        </div>
      </div>
    </main>
    <div class="discorver-menu">
      <img src="../../assets/discorver-menu.jpg" alt class="hinh" />
      <div class="arrow">
        <img src="../../assets/arrow-up.png" alt style="display: inline-block;text-align:center"/>
        <div class="text-content">
          <p>Taste the best</p>
          <h2>Similar Product</h2>
        </div>
      </div>
      <div class="overlay"></div>
    </div>
    <div>
      <div>
        <!-- menu-product -->
        <div class="boxcenter" style="margin-top:20px">
          <div class="clr"></div>
          <div>
            <div class="col-4 dish-panel" style="margin-right: 1.25%;" v-for="(dataes,index) in similar" :key="index">
              <div class="dish-img">
                <img :src="getImgUrl(dataes.image)" alt />
                <div class="overlay-1">
                  <a :href="getImgUrl(dataes.image)" class="icon" :title="dataes.name">
                    <i class="fa fa-search-plus"></i>
                  </a>
                </div>
              </div>
              <div class="dish-content">
                <h3 @click="goTodetail(dataes.slug)">{{dataes.name}}</h3>
                <span>$ {{dataes.price}}</span>
                <p>{{dataes.description}}</p>
              </div>
            </div>
          </div>
        </div>
        <div class="clr"></div>
      </div>
    </div>
    <div class="clr"></div>
                <!-- comment -->
                    <!-- Chat content -->
    <div class="flex-1 flex flex-col bg-white overflow-hidden boxcenter">
        <!-- Top bar -->
        <div class="border-b flex px-6 py-2 items-center flex-none">
            <div class="flex flex-col">
                <h1 class="title">review</h1>
            </div>  
        </div>
        <!-- Chat messages -->
        <div class="px-6 py-4 flex-1 overflow-y-scroll">
            <!-- A message -->
            <div class="flex items-start mb-4 text-sm">
                <img src="https://pbs.twimg.com/profile_images/875010472105222144/Pkt9zqPY_400x400.jpg" class="w-10 h-10 rounded mr-3">
                <div class="flex-1 overflow-hidden">
                    <div>
                        <span class="font-bold">Steve Schoger</span>
                        <span class="text-grey text-xs">11:46</span>
                    </div>
                    <p class="text-black leading-normal">The slack from the other side.</p>
                </div>
            </div>
            <!-- A message -->
            <div class="flex items-start mb-4 text-sm">
                <img src="https://pbs.twimg.com/profile_images/887661330832003072/Zp6rA_e2_400x400.jpg" class="w-10 h-10 rounded mr-3" />
                <div class="flex-1 overflow-hidden">
                    <div>
                        <span class="font-bold">Adam Wathan</span>
                        <span class="text-grey text-xs">12:45</span>
                    </div>
                    <p class="text-black leading-normal">How are we supposed to control the marquee space without an utility for it? I propose this:</p>
                </div>
            </div>
            <!-- A message -->
            <div class="flex items-start mb-4 text-sm">
                <img src="https://pbs.twimg.com/profile_images/929910740156215296/yDEC9GW9_400x400.jpg" class="w-10 h-10 rounded mr-3" />
                <div class="flex-1 overflow-hidden">
                    <div>
                        <span class="font-bold">David Hemphill</span>
                        <span class="text-grey text-xs">12:46</span>
                    </div>
                    <p class="text-black leading-normal"><a href="#" class="inline-block bg-blue-lightest text-blue no-underline">@Adam Wathan</a> the size of the generated CSS is creating a singularity in space/time, we must stop adding more utilities before it's too late!</p>
                </div>
            </div>
            <!-- A message -->
            <div class="flex items-start mb-4 text-sm">
                <img src="https://pbs.twimg.com/profile_images/875010472105222144/Pkt9zqPY_400x400.jpg" class="w-10 h-10 rounded mr-3">
                <div class="flex-1 overflow-hidden">
                    <div>
                        <span class="font-bold">Steve Schoger</span>
                        <span class="text-grey text-xs">11:46</span>
                    </div>
                    <p class="text-black leading-normal">The slack from the other side.</p>
                </div>
            </div>
            <!-- A message -->
            <div class="flex items-start mb-4 text-sm">
                <img src="https://pbs.twimg.com/profile_images/887661330832003072/Zp6rA_e2_400x400.jpg" class="w-10 h-10 rounded mr-3" />
                <div class="flex-1 overflow-hidden">
                    <div>
                        <span class="font-bold">Adam Wathan</span>
                        <span class="text-grey text-xs">12:45</span>
                    </div>
                    <p class="text-black leading-normal">How are we supposed to control the marquee space without an utility for it? I propose this:</p>
                </div>
            </div>
            <!-- A message -->
            <div class="flex items-start mb-4 text-sm">
                <img src="https://pbs.twimg.com/profile_images/929910740156215296/yDEC9GW9_400x400.jpg" class="w-10 h-10 rounded mr-3" />
                <div class="flex-1 overflow-hidden">
                    <div>
                        <span class="font-bold">David Hemphill</span>
                        <span class="text-grey text-xs">12:46</span>
                    </div>
                    <p class="text-black leading-normal"><a href="#" class="inline-block bg-blue-lightest text-blue no-underline">@Adam Wathan</a> the size of the generated CSS is creating a singularity in space/time, we must stop adding more utilities before it's too late!</p>
                </div>
            </div>
            <!-- A message -->
            <div class="flex items-start mb-4 text-sm">
                <img src="https://pbs.twimg.com/profile_images/875010472105222144/Pkt9zqPY_400x400.jpg" class="w-10 h-10 rounded mr-3">
                <div class="flex-1 overflow-hidden">
                    <div>
                        <span class="font-bold">Steve Schoger</span>
                        <span class="text-grey text-xs">11:46</span>
                    </div>
                    <p class="text-black leading-normal">The slack from the other side.</p>
                </div>
            </div>
            <!-- A message -->
            <div class="flex items-start mb-4 text-sm">
                <img src="https://pbs.twimg.com/profile_images/887661330832003072/Zp6rA_e2_400x400.jpg" class="w-10 h-10 rounded mr-3" />
                <div class="flex-1 overflow-hidden">
                    <div>
                        <span class="font-bold">Adam Wathan</span>
                        <span class="text-grey text-xs">12:45</span>
                    </div>
                    <p class="text-black leading-normal">How are we supposed to control the marquee space without an utility for it? I propose this:</p>
 
                </div>
            </div>
            <!-- A message -->
            <div class="flex items-start mb-4 text-sm">
                <img src="https://pbs.twimg.com/profile_images/929910740156215296/yDEC9GW9_400x400.jpg" class="w-10 h-10 rounded mr-3" />
                <div class="flex-1 overflow-hidden">
                    <div>
                        <span class="font-bold">David Hemphill</span>
                        <span class="text-grey text-xs">12:46</span>
                    </div>
                    <p class="text-black leading-normal"><a href="#" class="inline-block bg-blue-lightest text-blue no-underline">@Adam Wathan</a> the size of the generated CSS is creating a singularity in space/time, we must stop adding more utilities before it's too late!</p>
                </div>
            </div>
            <!-- A message -->
            <div class="flex items-start mb-4 text-sm">
                <img src="https://pbs.twimg.com/profile_images/875010472105222144/Pkt9zqPY_400x400.jpg" class="w-10 h-10 rounded mr-3">
                <div class="flex-1 overflow-hidden">
                    <div>
                        <span class="font-bold">Steve Schoger</span>
                        <span class="text-grey text-xs">11:46</span>
                    </div>
                    <p class="text-black leading-normal">The slack from the other side.</p>
                </div>
            </div>
            <!-- A message -->
            <div class="flex items-start mb-4 text-sm">
                <img src="https://pbs.twimg.com/profile_images/887661330832003072/Zp6rA_e2_400x400.jpg" class="w-10 h-10 rounded mr-3" />
                <div class="flex-1 overflow-hidden">
                    <div>
                        <span class="font-bold">Adam Wathan</span>
                        <span class="text-grey text-xs">12:45</span>
                    </div>
                    <p class="text-black leading-normal">How are we supposed to control the marquee space without an utility for it? I propose this:</p>
                </div>
            </div>
            <!-- A message -->
            <div class="flex items-start mb-4 text-sm">
                <img src="https://pbs.twimg.com/profile_images/929910740156215296/yDEC9GW9_400x400.jpg" class="w-10 h-10 rounded mr-3" />
                <div class="flex-1 overflow-hidden">
                    <div>
                        <span class="font-bold">David Hemphill</span>
                        <span class="text-grey text-xs">12:46</span>
                    </div>
                    <p class="text-black leading-normal"><a href="#" class="inline-block bg-blue-lightest text-blue no-underline">@Adam Wathan</a> the size of the generated CSS is creating a singularity in space/time, we must stop adding more utilities before it's too late!</p>
                </div>
            </div>
            <!-- A message -->
            <div class="flex items-start mb-4 text-sm">
                <img src="https://pbs.twimg.com/profile_images/875010472105222144/Pkt9zqPY_400x400.jpg" class="w-10 h-10 rounded mr-3">
                <div class="flex-1 overflow-hidden">
                    <div>
                        <span class="font-bold">Steve Schoger</span>
                        <span class="text-grey text-xs">11:46</span>
                    </div>
                    <p class="text-black leading-normal">The slack from the other side.</p>
                </div>
            </div>
            <!-- A message -->
            <div class="flex items-start mb-4 text-sm">
                <img src="https://pbs.twimg.com/profile_images/887661330832003072/Zp6rA_e2_400x400.jpg" class="w-10 h-10 rounded mr-3" />
                <div class="flex-1 overflow-hidden">
                    <div>
                        <span class="font-bold">Adam Wathan</span>
                        <span class="text-grey text-xs">12:45</span>
                    </div>
                    <p class="text-black leading-normal">How are we supposed to control the marquee space without an utility for it? I propose this:</p>
                </div>
            </div>
            <!-- A message -->
            <div class="flex items-start mb-4 text-sm">
                <img src="https://pbs.twimg.com/profile_images/929910740156215296/yDEC9GW9_400x400.jpg" class="w-10 h-10 rounded mr-3" />
                <div class="flex-1 overflow-hidden">
                    <div>
                        <span class="font-bold">David Hemphill</span>
                        <span class="text-grey text-xs">12:46</span>
                    </div>
                    <p class="text-black leading-normal"><a href="#" class="inline-block bg-blue-lightest text-blue no-underline">@Adam Wathan</a> the size of the generated CSS is creating a singularity in space/time, we must stop adding more utilities before it's too late!</p>
                </div>
            </div>
            <!-- A message -->
            <div class="flex items-start mb-4 text-sm">
                <img src="https://pbs.twimg.com/profile_images/875010472105222144/Pkt9zqPY_400x400.jpg" class="w-10 h-10 rounded mr-3">
                <div class="flex-1 overflow-hidden">
                    <div>
                        <span class="font-bold">Steve Schoger</span>
                        <span class="text-grey text-xs">11:46</span>
                    </div>
                    <p class="text-black leading-normal">The slack from the other side.</p>
                </div>
            </div>
            <!-- A message -->
            <div class="flex items-start mb-4 text-sm">
                <img src="https://pbs.twimg.com/profile_images/887661330832003072/Zp6rA_e2_400x400.jpg" class="w-10 h-10 rounded mr-3" />
                <div class="flex-1 overflow-hidden">
                    <div>
                        <span class="font-bold">Adam Wathan</span>
                        <span class="text-grey text-xs">12:45</span>
                    </div>
                    <p class="text-black leading-normal">How are we supposed to control the marquee space without an utility for it? I propose this:</p>
                </div>
            </div>
            <!-- A message -->
            <div class="flex items-start mb-4 text-sm">
                <img src="https://pbs.twimg.com/profile_images/929910740156215296/yDEC9GW9_400x400.jpg" class="w-10 h-10 rounded mr-3" />
                <div class="flex-1 overflow-hidden">
                    <div>
                        <span class="font-bold">David Hemphill</span>
                        <span class="text-grey text-xs">12:46</span>
                    </div>
                    <p class="text-black leading-normal"><a href="#" class="inline-block bg-blue-lightest text-blue no-underline">@Adam Wathan</a> the size of the generated CSS is creating a singularity in space/time, we must stop adding more utilities before it's too late!</p>
                </div>
            </div>
        </div>
        <div class="pb-6 px-4 flex-none">
            <div class="flex rounded-lg border-2 border-grey overflow-hidden">
                <span class="text-3xl text-grey border-r-2 border-grey p-2">
                    <svg class="fill-current h-6 w-6 block" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M16 10c0 .553-.048 1-.601 1H11v4.399c0 .552-.447.601-1 .601-.553 0-1-.049-1-.601V11H4.601C4.049 11 4 10.553 4 10c0-.553.049-1 .601-1H9V4.601C9 4.048 9.447 4 10 4c.553 0 1 .048 1 .601V9h4.399c.553 0 .601.447.601 1z"/></svg>
                  </span>
                <input type="text" class="w-full px-4" placeholder="Message #general" />
            </div>
        </div>
    </div>
</div>

  
</template>

<script>
import axios from "axios";
import '../../../src/assets/css/tailwind.css'
export default {
  data() {
    return {
      data: {},
      similar: {},
    };
  },
  beforeMount() {
    this.getContentTab();
  },
  methods: {
    async getContentTab() {
      const { data } = await axios.get(
        "http://localhost/lab-block1/asm/index.php?folder=User&ctrl=ProductController&action=getProductDetail&param=" +
          this.$route.params.slug
      );
      this.data = data;
      this.data.map((e)=>{
        e.tag.map((f)=>{
         this.similar = f.product;
        })
      })
    const uniqueSet = new Set(this.similar);
    this.similar = [...uniqueSet];
    console.log(this.similar);
    },
    getImgUrl(pet) {
      var images = require.context("../../assets/", false, /\.jpg$/);
      return images("./" + pet + ".jpg");
    },
    goTodetail(event) {
      this.$router.push(`/product/slug=${event}`)
      this.getContentTab();
    },
    getIndex(index) {
      if (index % 2 == 0) {
        return true;
      } else {
        return false;
      }
    }
  },
};
</script>

<style>
.nameDetail {
  font-family: "Kaushan Script", cursive;
  color: #222222;
  font-size: 45px;
  font-weight: 400;
  line-height: 1;
  margin-top: 0px;
}
.title{
  font-family: 'Kaushan Script', cursive;
    color: #222222;
    font-size: 45px;
    font-weight: 400;
    line-height: 1;
    margin-top: 0px;
}
</style>