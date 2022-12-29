<template>
  <cbx-page>
    <cbx-navbar title="Not found" back-link="Back"></cbx-navbar>
    <cbx-block strong>
      <p>Sorry</p>
      <p>Requested content not found.</p>
    </cbx-block>
  </cbx-page>
</template>

<script>
import { cbxPage, cbxNavbar, cbxBlock } from 'xui-vue';

export default {
  components: {
    cbxPage,
    cbxNavbar,
    cbxBlock,
  },
};
</script>
