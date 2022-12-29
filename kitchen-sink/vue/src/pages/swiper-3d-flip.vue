<template>
  <cbx-page>
    <cbx-navbar title="3D Flip Effect" back-link="Back"></cbx-navbar>
    <cbx-swiper effect="flip" class="demo-swiper demo-swiper-cube">
      <cbx-swiper-slide style="background-image: url(../../public/img/ks/nature-500x500-1.jpeg)">
        Slide 1
      </cbx-swiper-slide>
      <cbx-swiper-slide style="background-image: url(../../public/img/ks/nature-500x500-2.jpg)">
        Slide 2
      </cbx-swiper-slide>
      <cbx-swiper-slide style="background-image: url(../../public/img/ks/nature-500x500-3.jpg)">
        Slide 3
      </cbx-swiper-slide>
      <cbx-swiper-slide style="background-image: url(../../public/img/ks/nature-500x500-4.jpg)">
        Slide 4
      </cbx-swiper-slide>
      <cbx-swiper-slide style="background-image: url(../../public/img/ks/nature-500x500-5.jpg)">
        Slide 5
      </cbx-swiper-slide>
      <cbx-swiper-slide style="background-image: url(../../public/img/ks/nature-500x500-6.jpg)">
        Slide 6
      </cbx-swiper-slide>
      <cbx-swiper-slide style="background-image: url(../../public/img/ks/nature-500x500-7.jpg)">
        Slide 7
      </cbx-swiper-slide>
      <cbx-swiper-slide style="background-image: url(../../public/img/ks/nature-500x500-8.jpg)">
        Slide 8
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
