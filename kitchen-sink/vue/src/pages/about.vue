<template>
  <cbx-page class="page-about">
    <cbx-navbar large transparent title="About" title-large="About" back-link="Xui"></cbx-navbar>
    <cbx-block-title medium>Welcome to Xui</cbx-block-title>
    <cbx-block strong>
      <p>
        Xui - is a free and open source HTML mobile framework to develop hybrid mobile apps or web
        apps with iOS or Android (Material) native look and feel. It is also an indispensable
        prototyping apps tool to show working app prototype as soon as possible in case you need to.
        Xui is created by Vladimir Kharlampidi.
      </p>
      <p>
        The main approach of the Xui is to give you an opportunity to create iOS and Android
        (Material) apps with HTML, CSS and JavaScript easily and clear. Xui is full of freedom. It
        doesn't limit your imagination or offer ways of any solutions somehow. Xui gives you
        freedom!
      </p>
      <p>
        Xui is not compatible with all platforms. It is focused only on iOS and Android (Material)
        to bring the best experience and simplicity.
      </p>
      <p>
        Xui is definitely for you if you decide to build iOS and Android hybrid app (Cordova or
        Capacitor) or web app that looks like and feels as great native iOS or Android (Material)
        apps.
      </p>
    </cbx-block>
  </cbx-page>
</template>
<script>
import { cbxPage, cbxNavbar, cbxBlockTitle, cbxBlock } from 'xui-vue';

export default {
  components: {
    cbxPage,
    cbxNavbar,
    cbxBlockTitle,
    cbxBlock,
  },
};
</script>
