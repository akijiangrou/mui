<template>
  <cbx-page>
    <cbx-navbar title="Vertical Swiper" back-link="Back"></cbx-navbar>
    <cbx-swiper direction="vertical" :pagination="{ hideOnClick: true }" class="demo-swiper">
      <cbx-swiper-slide>Slide 1</cbx-swiper-slide>
      <cbx-swiper-slide>Slide 2</cbx-swiper-slide>
      <cbx-swiper-slide>Slide 3</cbx-swiper-slide>
      <cbx-swiper-slide>Slide 4</cbx-swiper-slide>
      <cbx-swiper-slide>Slide 5</cbx-swiper-slide>
      <cbx-swiper-slide>Slide 6</cbx-swiper-slide>
      <cbx-swiper-slide>Slide 7</cbx-swiper-slide>
      <cbx-swiper-slide>Slide 8</cbx-swiper-slide>
      <cbx-swiper-slide>Slide 9</cbx-swiper-slide>
      <cbx-swiper-slide>Slide 10</cbx-swiper-slide>
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
