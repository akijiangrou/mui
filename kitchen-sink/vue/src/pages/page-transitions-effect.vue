<template>
  <cbx-page>
    <cbx-navbar :title="effect" back-link="Back"></cbx-navbar>

    <cbx-block strong class="text-align-center">
      <p>
        This page was loaded with <b>{{ effect }}</b> transition.
      </p>
    </cbx-block>
  </cbx-page>
</template>
<script>
import { cbxNavbar, cbxPage, cbxBlock } from 'xui-vue';

export default {
  components: {
    cbxNavbar,
    cbxPage,
    cbxBlock,
  },
  props: {
    effect: String,
  },
};
</script>
