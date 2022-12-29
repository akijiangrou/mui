<template>
  <cbx-page>
    <cbx-navbar title="Multiple Swipers" back-link="Back"></cbx-navbar>
    <cbx-block-title>1 Slide Per View, 50px Between</cbx-block-title>
    <cbx-swiper pagination :space-between="50" class="demo-swiper-multiple">
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
    <cbx-block-title>2 Slides Per View, 20px Between</cbx-block-title>
    <cbx-swiper pagination :space-between="20" :slides-per-view="2" class="demo-swiper-multiple">
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
    <cbx-block-title>3 Slides Per View, 10px Between</cbx-block-title>
    <cbx-swiper pagination :space-between="10" :slides-per-view="3" class="demo-swiper-multiple">
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
    <cbx-block-title>Auto Slides Per View + Centered</cbx-block-title>
    <cbx-swiper
      pagination
      :space-between="10"
      :slides-per-view="'auto'"
      centered-slides
      class="demo-swiper-multiple demo-swiper-multiple-auto"
    >
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
    <cbx-block-title>Vertical, 10px Between</cbx-block-title>
    <cbx-swiper pagination :space-between="10" direction="vertical" class="demo-swiper-multiple">
      <cbx-swiper-slide>Slide 1</cbx-swiper-slide>
      <cbx-swiper-slide>Slide 2</cbx-swiper-slide>
      <cbx-swiper-slide>Slide 3</cbx-swiper-slide>
      <cbx-swiper-slide>Slide 4</cbx-swiper-slide>
      <cbx-swiper-slide>Slide 5</cbx-swiper-slide>
    </cbx-swiper>
    <cbx-block-title>Slow speed</cbx-block-title>
    <cbx-swiper :speed="900" pagination :space-between="50" class="demo-swiper-multiple">
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
import { cbxNavbar, cbxPage, cbxBlockTitle, cbxSwiper, cbxSwiperSlide } from 'xui-vue';

export default {
  components: {
    cbxNavbar,
    cbxPage,
    cbxBlockTitle,
    cbxSwiper,
    cbxSwiperSlide,
  },
};
</script>
