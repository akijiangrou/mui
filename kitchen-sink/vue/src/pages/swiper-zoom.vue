<template>
  <cbx-page>
    <cbx-navbar title="Zoom" back-link="Back"></cbx-navbar>
    <cbx-swiper pagination zoom navigation class="demo-swiper">
      <cbx-swiper-slide zoom>
        <img src="../../public/img/ks/nature-500x500-1.jpeg" />
      </cbx-swiper-slide>
      <cbx-swiper-slide zoom>
        <img src="../../public/img/ks/nature-500x500-2.jpg" />
      </cbx-swiper-slide>
      <cbx-swiper-slide zoom>
        <img src="../../public/img/ks/nature-500x500-3.jpg" />
      </cbx-swiper-slide>
      <cbx-swiper-slide zoom>
        <img src="../../public/img/ks/nature-500x500-4.jpg" />
      </cbx-swiper-slide>
      <cbx-swiper-slide zoom>
        <img src="../../public/img/ks/nature-500x500-5.jpg" />
      </cbx-swiper-slide>
      <cbx-swiper-slide zoom>
        <img src="../../public/img/ks/nature-500x500-6.jpg" />
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
