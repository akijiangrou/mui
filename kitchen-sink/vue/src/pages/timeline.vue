<template>
  <cbx-page>
    <cbx-navbar title="Timeline" back-link="Back"></cbx-navbar>
    <cbx-list>
      <cbx-list-item link="/timeline-vertical/" title="Vertical Timeline" />
      <cbx-list-item link="/timeline-horizontal/" title="Horizontal Timeline" />
      <cbx-list-item link="/timeline-horizontal-calendar/" title="Calendar Timeline" />
    </cbx-list>
  </cbx-page>
</template>
<script>
import { cbxNavbar, cbxPage, cbxList, cbxListItem } from 'xui-vue';

export default {
  components: {
    cbxNavbar,
    cbxPage,
    cbxList,
    cbxListItem,
  },
};
</script>
