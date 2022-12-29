<template>
  <cbx-page>
    <cbx-navbar title="Custom Controls" back-link="Back"></cbx-navbar>
    <div class="demo-swiper-custom">
      <cbx-swiper :pagination="{ clickable: true }" navigation :space-between="0">
        <cbx-swiper-slide
          style="background-image: url(../../public/img/ks/nature-500x500-1.jpeg)"
        ></cbx-swiper-slide>
        <cbx-swiper-slide
          style="background-image: url(../../public/img/ks/nature-500x500-2.jpg)"
        ></cbx-swiper-slide>
        <cbx-swiper-slide
          style="background-image: url(../../public/img/ks/nature-500x500-3.jpg)"
        ></cbx-swiper-slide>
        <cbx-swiper-slide
          style="background-image: url(../../public/img/ks/nature-500x500-4.jpg)"
        ></cbx-swiper-slide>
        <cbx-swiper-slide
          style="background-image: url(../../public/img/ks/nature-500x500-5.jpg)"
        ></cbx-swiper-slide>
        <cbx-swiper-slide
          style="background-image: url(../../public/img/ks/nature-500x500-6.jpg)"
        ></cbx-swiper-slide>
      </cbx-swiper>
    </div>
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
