<template>
  <cbx-page>
    <cbx-navbar title="Fade Effect" back-link="Back"></cbx-navbar>
    <cbx-swiper pagination effect="fade" class="demo-swiper demo-swiper-fade">
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
