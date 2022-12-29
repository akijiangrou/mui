<template>
  <cbx-page>
    <cbx-navbar title="Preloader" back-link="Back"></cbx-navbar>
    <cbx-block>
      <p>
        How about an activity indicator? Xui has a nice one. The cbx Preloader is made with SVG and
        animated with CSS so it can be easily resized.
      </p>
    </cbx-block>

    <cbx-block-title>Default</cbx-block-title>
    <cbx-block strong class="row demo-preloaders align-items-stretch text-align-center">
      <cbx-col>
        <cbx-preloader />
      </cbx-col>
      <cbx-col style="background: #000">
        <cbx-preloader color="white" />
      </cbx-col>
      <cbx-col>
        <cbx-preloader :size="42" />
      </cbx-col>
      <cbx-col style="background: #000">
        <cbx-preloader :size="42" color="white" />
      </cbx-col>
    </cbx-block>

    <cbx-block-title>Color Preloaders</cbx-block-title>
    <cbx-block strong class="row text-align-center">
      <cbx-col>
        <cbx-preloader color="red" />
      </cbx-col>
      <cbx-col>
        <cbx-preloader color="green" />
      </cbx-col>
      <cbx-col>
        <cbx-preloader color="orange" />
      </cbx-col>
      <cbx-col>
        <cbx-preloader color="blue" />
      </cbx-col>
    </cbx-block>

    <cbx-block-title>Multi-color</cbx-block-title>
    <cbx-block strong class="text-align-center">
      <cbx-preloader color="multi" />
    </cbx-block>

    <cbx-block-title>Preloader Modals</cbx-block-title>
    <cbx-block strong>
      <p>With <b>app.preloader.show()</b> you can show small overlay with preloader indicator.</p>
      <p>
        <a class="button button-fill" @click="openIndicator">Open Small Indicator</a>
      </p>
      <p>With <b>app.dialog.preloader()</b> you can show dialog modal with preloader indicator.</p>
      <p>
        <a class="button button-fill" @click="openDialog">Open Dialog Preloader</a>
      </p>
      <p>
        With <b>app.dialog.preloader('My text...')</b> you can show dialog preloader modal with
        custom title.
      </p>
      <p>
        <a class="button button-fill" @click="openCustomDialog">Open Dialog Preloader</a>
      </p>
    </cbx-block>
  </cbx-page>
</template>
<script>
import { cbxNavbar, cbxPage, cbxBlockTitle, cbxBlock, cbxPreloader, cbxCol, cbx } from 'xui-vue';

export default {
  components: {
    cbxNavbar,
    cbxPage,
    cbxBlockTitle,
    cbxBlock,
    cbxPreloader,
    cbxCol,
  },
  methods: {
    openIndicator() {
      cbx.preloader.show();
      setTimeout(() => {
        cbx.preloader.hide();
      }, 2000);
    },
    openDialog() {
      cbx.dialog.preloader();
      setTimeout(() => {
        cbx.dialog.close();
      }, 2000);
    },
    openCustomDialog() {
      cbx.dialog.preloader('My text...');
      setTimeout(() => {
        cbx.dialog.close();
      }, 2000);
    },
  },
};
</script>
