<template>
  <cbx-page style="background: #000">
    <cbx-navbar title="Thumbs Gallery" back-link="Back"></cbx-navbar>
    <cbx-swiper
      class="demo-swiper-gallery-top color-theme-white"
      :space-between="10"
      navigation
      :thumbs="{
        swiper: swiperThumbs,
      }"
    >
      <cbx-swiper-slide style="background-image: url(../../public/img/ks/nature-500x500-1.jpeg)" />
      >
      <cbx-swiper-slide style="background-image: url(../../public/img/ks/nature-500x500-2.jpg)" />
      >
      <cbx-swiper-slide style="background-image: url(../../public/img/ks/nature-500x500-3.jpg)" />
      >
      <cbx-swiper-slide style="background-image: url(../../public/img/ks/nature-500x500-4.jpg)" />
      >
      <cbx-swiper-slide style="background-image: url(../../public/img/ks/nature-500x500-5.jpg)" />
      >
      <cbx-swiper-slide style="background-image: url(../../public/img/ks/nature-500x500-6.jpg)" />
      >
    </cbx-swiper>
    <cbx-swiper
      class="demo-swiper-gallery-thumbs"
      :slides-per-view="4"
      :space-between="10"
      :free-mode="true"
      :watch-slides-progress="true"
      :watch-slides-visibility="true"
      @swiper="swiperThumbs = $event"
    >
      <cbx-swiper-slide>
        <div
          style="background-image: url(../../public/img/ks/nature-500x500-1.jpeg)"
          class="swiper-slide-pic"
        />
      </cbx-swiper-slide>
      <cbx-swiper-slide>
        <div
          style="background-image: url(../../public/img/ks/nature-500x500-2.jpg)"
          class="swiper-slide-pic"
        />
      </cbx-swiper-slide>
      <cbx-swiper-slide>
        <div
          style="background-image: url(../../public/img/ks/nature-500x500-3.jpg)"
          class="swiper-slide-pic"
        />
      </cbx-swiper-slide>
      <cbx-swiper-slide>
        <div
          style="background-image: url(../../public/img/ks/nature-500x500-4.jpg)"
          class="swiper-slide-pic"
        />
      </cbx-swiper-slide>
      <cbx-swiper-slide>
        <div
          style="background-image: url(h../../public/img/ks/nature-500x500-5.jpg)"
          class="swiper-slide-pic"
        />
      </cbx-swiper-slide>
      <cbx-swiper-slide>
        <div
          style="background-image: url(../../public/img/ks/nature-500x500-6.jpg)"
          class="swiper-slide-pic"
        />
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
  data() {
    return {
      swiperThumbs: null,
    };
  },
};
</script>
