<template>
  <cbx-page>
    <cbx-navbar title="Nested Swipers" back-link="Back"></cbx-navbar>
    <cbx-swiper :pagination="{ el: '.swiper-pagination-h' }" class="demo-swiper">
      <div class="swiper-pagination swiper-pagination-h"></div>
      <cbx-swiper-slide>Horizontal Slide 1</cbx-swiper-slide>
      <cbx-swiper-slide>
        <cbx-swiper
          :pagination="{ el: '.swiper-pagination-v' }"
          direction="vertical"
          class="demo-swiper"
        >
          <div class="swiper-pagination swiper-pagination-v"></div>
          <cbx-swiper-slide>Vertical Slide 1</cbx-swiper-slide>
          <cbx-swiper-slide>Vertical Slide 2</cbx-swiper-slide>
          <cbx-swiper-slide>Vertical Slide 3</cbx-swiper-slide>
        </cbx-swiper>
      </cbx-swiper-slide>
      <cbx-swiper-slide>Horizontal Slide 3</cbx-swiper-slide>
      <cbx-swiper-slide>Horizontal Slide 4</cbx-swiper-slide>
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
