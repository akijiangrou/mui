<template>
  <cbx-page>
    <cbx-navbar title="Tabs" back-link="Back"></cbx-navbar>
    <cbx-list>
      <cbx-list-item link="/tabs-static/" title="Static Tabs"></cbx-list-item>
      <cbx-list-item link="/tabs-animated/" title="Animated Tabs"></cbx-list-item>
      <cbx-list-item link="/tabs-swipeable/" title="Swipeable Tabs"></cbx-list-item>
      <cbx-list-item link="/tabs-routable/" title="Routable Tabs"></cbx-list-item>
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
