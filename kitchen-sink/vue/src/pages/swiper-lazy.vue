<template>
  <cbx-page>
    <cbx-navbar title="Slider Lazy Loading" back-link="Back"></cbx-navbar>
    <cbx-swiper pagination navigation lazy class="demo-swiper-lazy">
      <cbx-swiper-slide>
        <img data-src="../../public/img/ks/nature-500x500-1.jpeg" class="swiper-lazy" />
        <div class="swiper-lazy-preloader"></div>
      </cbx-swiper-slide>
      <cbx-swiper-slide>
        <img data-src="../../public/img/ks/nature-500x500-2.jpg" class="swiper-lazy" />
        <div class="swiper-lazy-preloader"></div>
      </cbx-swiper-slide>
      <cbx-swiper-slide>
        <img data-src="../../public/img/ks/nature-500x500-3.jpg" class="swiper-lazy" />
        <div class="swiper-lazy-preloader"></div>
      </cbx-swiper-slide>
      <cbx-swiper-slide>
        <img data-src="../../public/img/ks/nature-500x500-4.jpg" class="swiper-lazy" />
        <div class="swiper-lazy-preloader"></div>
      </cbx-swiper-slide>
      <cbx-swiper-slide>
        <img data-src="../../public/img/ks/nature-500x500-5.jpg" class="swiper-lazy" />
        <div class="swiper-lazy-preloader"></div>
      </cbx-swiper-slide>
      <cbx-swiper-slide>
        <img data-src="../../public/img/ks/nature-500x500-6.jpg" class="swiper-lazy" />
        <div class="swiper-lazy-preloader"></div>
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
