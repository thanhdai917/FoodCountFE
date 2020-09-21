<template>
  <div id="tab">
    <!-- section-1 -->
    <div class="content-center">
      <div class="about" style="margin-top:20px">
        <h3 class="sub-title">Hello Dear</h3>
        <h2 class="title-headline">Welcom To Granny</h2>
        <img src="../../assets/shape-4.png" alt="" style="display: inline-block;text-align:center" class="object-center sm:object-top md:object-right lg:object-bottom xl:object-left"/>
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
          <h2>Discover Our Menu</h2>
        </div>
      </div>
      <div class="overlay"></div>
    </div>
    <div class="clr"></div>
    <div>
      <TabComconent />
    </div>
    <div class="clr"></div>
    <div class="boxcenter">
      <div class="btn-menu">
        <a href="#">DICOVER FULL MENU</a>
      </div>
    </div>

    <!-- end menu -->
    <!-- end section1 -->
    <!-- section-2 -->
    <div class="discorver-menu" style="margin-bottom: 30px;">
      <img src="../../assets/discorver-menu.jpg" alt="" class="hinh" />
      <div class="arrow">
        <img src="../../assets/arrow-up.png" alt="" style="display: inline-block;text-align:center"/>
        <div class="text-content">
          <p>What For lunch</p>
          <h2>Our Daily Special</h2>
        </div>
      </div>
      <div class="overlay"></div>
    </div>
    <!-- menu -->
    <div class="clr"></div>
    <MenuHomeComponent />
    <div class="clr"></div>
    <div class="discorver-menu" style="margin-bottom: 30px; margin-top: 30px;">
      <img src="../../assets/banner-sup-2.jpg" alt="" class="hinh" />
      <div class="arrow">
        <img src="../../assets/arrow-up.png" alt="" style="display: inline-block;text-align:center"/>
        <div class="text-content">
          <p>What For lunch</p>
          <h2>Our Daily Special</h2>
        </div>
      </div>
      <div class="overlay"></div>
    </div>
    <div class="section2">
      <div class="boxcenter80">
        <div class="boxcenter90">
          <div class="quote">
            <div class="boxcenter60">
              <p>
                “ Once again, I feel compelled to write about our wonderful
                dining at Granny. My wife and I often had wonderful meals. We
                have shared either meals or conversation about our meals at
                yours restaurant with my friends and family"
              </p>

              <img src="../../assets/sec2-hinh7.png" alt="" style="display: inline-block;text-align:center"/>
              <p class="quote-writer-name">-David Casper</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="clr"></div>
    <div class="discorver-menu" style="margin-bottom: 30px; margin-top: 30px;">
      <img src="../../assets/banner-sub.jpg" alt="" class="hinh" />
      <div class="arrow">
        <img src="../../assets/arrow-up.png" alt="" style="display: inline-block;text-align:center"/>
        <div class="text-content">
          <p>What For lunch</p>
          <h2>Our Daily Special</h2>
        </div>
      </div>
      <div class="overlay"></div>
    </div>
    <FormComponent />
    <!-- end-menu -->
    <!-- end section-2 -->
    <!-- footer -->
  </div>
</template>
<script>
import TabComconent from "./TabComconent.vue";
import FormComponent from "./formComponent.vue";
import MenuHomeComponent from "./MenuHomeComponent.vue";
export default {
  name: "tab",
  components: {
    TabComconent,
    FormComponent,
    MenuHomeComponent
  }
};
</script>

<style></style>
