<template>
  <!-- end header-banner -->
  <!-- section-1 -->
  <div>
    <div class="boxcenter" style="margin-top: 20px">
      <div class="about">
        <h3 class="sub-title">Taste the best</h3>
        <h2 class="title-headline">Fresh Ingredient, Tasty Meal</h2>
        <img src="../../assets/shape-4.png" alt style="display: inline-block;text-align:center"/>
        <p>
          Everyone has taste, even if they don't realize it. Even if you're not a great chef, there's nothing to
          stop you understanding the difference between what tastes good and what doesn't.
        </p>
      </div>
    </div>
    <!-- menu -->
    <div class="discorver-menu" style="margin: 30px 0">
      <img src="../../assets/discorver-menu.jpg" alt class="hinh" />
      <div class="arrow">
        <img src="../../assets/arrow-up.png" alt style="display: inline-block;text-align:center"/>
        <div class="text-content">
          <h2>Order Online</h2>
        </div>
      </div>
      <div class="shape-down">
        <img src="../../assets/shape-3down.png" alt style="display: inline-block;text-align:center" />
      </div>
      <div class="overlay"></div>
    </div>
    <div class="clr"></div>
    <div class="boxcenter">
      <div class="col-9 mr">
        <div class="shop-option">
          <div>
            <ul class="list-line">
              <li>
                <div class="product-sort">
                  <span>Sort by:</span>
                  <select @change="onChange($event)">
                    <option value="Defaut">Sort Price</option>
                    <option value="desc">High Price</option>
                    <option value="asc">Low Price</option>
                  </select>
                </div>
              </li>
              <li>
                <div class="product-sort">
                  <span>Show:</span>
                  <select @change="onChangeLimit($event)">
                    <option value="10">10 Item/Page</option>
                    <option value="15">15 Item/Page</option>
                    <option value="20">20 Item/Page</option>
                  </select>
                </div>
              </li>
            </ul>
          </div>
          <div class="product-view text-right">
            <span>View As</span>
            <a href="#">
              <i class="fa fa-th-large" style="color: #c59d5f;"></i>
            </a>
            <a href="#">
              <i class="fa fa-th-list"></i>
            </a>
          </div>
        </div>
        <div class="clr"></div>
        <div>
          <div class="product-item col-4" style="margin-right:1.33%"  v-for="(datas,index) in product.datas" :key="index">
            <div class="product-img">
              <img :src="getImgUrl(datas.image)" alt />
              <div class="overlay"></div>
              <div class="overlay-2" id="product-1">
                <input type="button" value="Add To Cart" />
              </div>
              <div class="shape-product">
                <img src="../../assets/arrow-down.png" alt style="display: inline-block;text-align:center" />
              </div>
            </div>
            <div class="product--content">
              <div class="product-type">
                <span>Light</span>
                <span>- Mexican</span>
                <span>- Organic</span>
              </div>
              <div class="product-title">
                <h3>
                  <a href="#" @click="goTodetail(datas.slug)">{{datas.name}}</a>
                </h3>
              </div>
              <div class="product-price">
                <span>$ {{datas.price}}</span>
              </div>
            </div>
          </div>
          <pagination-component :pagination="product" @paginate="getProductLimit()" :offset="12">></pagination-component>
        </div>
      </div>
      <div class="col-3">
        <form action class="newsletter form-search">
          <input class="textControl" type="text" placeholder="Type Your Search Words" v-model="query" @keyup="fetchData()"/>
          <button type="submit">
            <i class="fa fa-search"></i>
          </button>
        </form>
        <BestSeller />
      </div>
    </div>
    <div class="clr"></div>
    <div class="discorver-menu" style="margin: 30px 0">
      <img src="../../assets/banner-sup-2.jpg" alt class="hinh" />
      <div class="arrow">
        <img src="../../assets/arrow-up.png" alt style="display: inline-block;text-align:center"/>
        <div class="text-content">
          <h2>Find Table</h2>
        </div>
      </div>
      <div class="shape-down">
        <img src="../../assets/shape-3down.png" alt style="display: inline-block;text-align:center"/>
      </div>
      <div class="overlay"></div>
    </div>
    <div class="clr"></div>
    <div class="section2">
      <div class="boxcenter80">
        <div class="boxcenter90">
          <div class="fill-form">
            <div class="boxcenter55">
              <p>
                You can Book a table online easily in just a couple of minutes. We take reservations for
                lunch and dinner, just check the availability of your table & book it now!
              </p>
              <form name="myForm">
                <input
                  class="fill-form-input"
                  style="margin-right:40px"
                  type="text"
                  value="2 People"
                  name="people"
                />
                <input
                  class="fill-form-input"
                  type="text"
                  value="Januaray 18, 2020"
                  name="date"
                  id="date"
                />
                <input
                  class="fill-form-input"
                  style="float:right"
                  type="text"
                  value="9:00 PM"
                  name="time"
                />

                <input
                  class="fill-form-input"
                  style="margin-right:40px"
                  type="text"
                  value="Your Name"
                  name="yourName"
                />
                <input class="fill-form-input" type="text" value="Email" id="email" />
                <input
                  class="fill-form-input"
                  style="float:right"
                  type="text"
                  value="Phone Number"
                  name="phone"
                  id="phone"
                />

                <input
                  class="fill-form-optional"
                  type="text"
                  value="Add a special request (Optional)"
                  name="special-request"
                />

                <input
                  class="fill-form-submit"
                  type="button"
                  value="FIND TABLE"
                  onclick="DisplayErrors()"
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- end menu -->
    <!-- end section1 -->
    <!-- section-2 -->
  </div>
</template>

<script>
import paginationComponent from "./paginationComponent.vue";
import BestSeller from "./BestSeller.vue";
import axios from "axios";

export default {
  components: {
    paginationComponent,
    BestSeller
  },
  data() {
    return {
      product: {
        limit: 9,
        datas:{},
        from: 0,
        to: 1,
        totals: 0,
        current_page: 1
      },
      offset: 12,
      query: "",
    };
  },
  mounted() {
    this.getAllProduct();
  },
  beforeMount(){
    this.getProductLimit();
  },
  methods: {
    getAllProduct() {
      axios
        .post(`http://localhost/lab-block1/asm/index.php?folder=User&ctrl=ProductController&action=index`)
        .then(rs => {
        this.product.totals = rs.data.length;
        // console.log(this.product.datas);
        })
        .catch(() => {
          console.log("handle server error from here");
        });
    },
      getProductLimit() {
      axios
        .post(`http://localhost/lab-block1/asm/index.php?folder=User&ctrl=ProductController&action=getProductLimit`,{
          limit: this.product.limit,
          page: this.product.current_page,
          sort : "",
          query: this.query
        }).then(res => {
        this.product.datas = res.data;
        console.log(res.data);
        })  
        .catch(() => {
          console.log("handle server error from here");
        });
    },
    getProductSort(sorts) {
      axios
        .post(`http://localhost/lab-block1/asm/index.php?folder=User&ctrl=ProductController&action=getProductLimit`,{
          sort: sorts,
          limit: this.product.limit,
          page: this.product.current_page,
          query: this.query
        }).then(res => {
        this.product.datas = res.data;
        console.log(res.data);
        })  
        .catch(() => {
          console.log("handle server error from here");
        });
    },
    onChange(event) {
      this.getProductSort(event.target.value);
    },
    onChangeLimit(event){
      this.product.limit = event.target.value; 
       this.getProductLimit();
    },
    fetchData: function() {
       axios
        .post(`http://localhost/lab-block1/asm/index.php?folder=User&ctrl=ProductController&action=getProductLimit`,{
          limit: this.product.limit,
          page: this.product.current_page,
          sort : "",
          query: this.query
        }).then(res => {
        this.product.datas = res.data;
        // console.log(res.data);
        })  
        .catch(() => {
          console.log("handle server error from here");
        });
    },
    goTodetail(event) {
      this.$router.push(`/product/slug=${event}`)
    },
    getImgUrl(pet) {
      var images = require.context("../../assets/", false, /\.jpg$/);
      return images("./" + pet + ".jpg");
    }
  }
};
</script>

<style>
</style>