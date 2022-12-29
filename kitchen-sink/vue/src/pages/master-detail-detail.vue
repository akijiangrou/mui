<template>
  <cbx-page>
    <cbx-navbar :title="`Detail Page ${cbxroute.params.id}`" back-link="Back"></cbx-navbar>
    <cbx-block strong>
      <p>
        <b>Detail Page {{ cbxroute.params.id }}</b>
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque congue turpis et risus
        fringilla condimentum. Aliquam vestibulum est tempor, sagittis massa nec, dictum massa.
        Phasellus non viverra dui, eget aliquam sem. Donec eleifend dolor id arcu ultrices, vel
        ultrices dolor fringilla. Phasellus feugiat consectetur libero, eget luctus felis rhoncus
        at. Duis scelerisque ligula sit amet purus congue pulvinar. Proin a risus id nibh fermentum
        auctor. Vestibulum at sem a risus mollis iaculis. In vestibulum malesuada arcu id
        consectetur.
      </p>
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
  props: {
    cbxroute: Object,
  },
};
</script>
