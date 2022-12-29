<template>
  <cbx-page>
    <cbx-navbar title="Parallax" back-link="Back"></cbx-navbar>
    <cbx-swiper
      pagination
      navigation
      parallax
      :speed="600"
      class="demo-swiper-parallax color-theme-white"
    >
      <template #container-start>
        <div
          data-swiper-parallax="-23%"
          style="background-image: url(../../public/img/ks/nightlife-1024x1024-2.jpeg)"
          class="swiper-parallax-bg"
        ></div>
      </template>

      <cbx-swiper-slide>
        <div data-swiper-parallax="-300" class="swiper-slide-title">Slide 1</div>
        <div data-swiper-parallax="-200" class="swiper-slide-subtitle">Subtitle</div>
        <div data-swiper-parallax="-100" class="swiper-slide-text">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam dictum mattis velit,
            sit amet faucibus felis iaculis nec. Nulla laoreet justo vitae porttitor porttitor.
            Suspendisse in sem justo. Integer laoreet magna nec elit suscipit, ac laoreet nibh
            euismod. Aliquam hendrerit lorem at elit facilisis rutrum. Ut at ullamcorper velit.
            Nulla ligula nisi, imperdiet ut lacinia nec, tincidunt ut libero. Aenean feugiat non
            eros quis feugiat.
          </p>
        </div>
      </cbx-swiper-slide>
      <cbx-swiper-slide>
        <div data-swiper-parallax="-300" class="swiper-slide-title">Slide 2</div>
        <div data-swiper-parallax="-200" class="swiper-slide-subtitle">Subtitle</div>
        <div data-swiper-parallax="-100" class="swiper-slide-text">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam dictum mattis velit,
            sit amet faucibus felis iaculis nec. Nulla laoreet justo vitae porttitor porttitor.
            Suspendisse in sem justo. Integer laoreet magna nec elit suscipit, ac laoreet nibh
            euismod. Aliquam hendrerit lorem at elit facilisis rutrum. Ut at ullamcorper velit.
            Nulla ligula nisi, imperdiet ut lacinia nec, tincidunt ut libero. Aenean feugiat non
            eros quis feugiat.
          </p>
        </div>
      </cbx-swiper-slide>
      <cbx-swiper-slide>
        <div data-swiper-parallax="-300" class="swiper-slide-title">Slide 3</div>
        <div data-swiper-parallax="-200" class="swiper-slide-subtitle">Subtitle</div>
        <div data-swiper-parallax="-100" class="swiper-slide-text">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam dictum mattis velit,
            sit amet faucibus felis iaculis nec. Nulla laoreet justo vitae porttitor porttitor.
            Suspendisse in sem justo. Integer laoreet magna nec elit suscipit, ac laoreet nibh
            euismod. Aliquam hendrerit lorem at elit facilisis rutrum. Ut at ullamcorper velit.
            Nulla ligula nisi, imperdiet ut lacinia nec, tincidunt ut libero. Aenean feugiat non
            eros quis feugiat.
          </p>
        </div>
      </cbx-swiper-slide>
    </cbx-swiper>
  </cbx-page>
</template>
<script>
import { cbxNavbar, cbxPage, cbxSwiper, cbxSwiperSlide } from 'xui-vue';

export default {
  components: {
    cbxNavbar,
    cbxPage,
    cbxSwiper,
    cbxSwiperSlide,
  },
};
</script>
