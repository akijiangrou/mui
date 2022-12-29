<template>
  <cbx-page>
    <cbx-navbar title="Routable Modals" back-link="Back"></cbx-navbar>
    <cbx-block>
      <p>In addition to pages, Xui router allows to load modal components:</p>
    </cbx-block>
    <cbx-list>
      <cbx-list-item title="Popup" link="popup/" />
      <cbx-list-item title="Action Sheet" link="actions/" />
    </cbx-list>
  </cbx-page>
</template>
<script>
import { cbxNavbar, cbxPage, cbxList, cbxListItem, cbxBlock } from 'xui-vue';

export default {
  components: {
    cbxNavbar,
    cbxPage,
    cbxList,
    cbxListItem,
    cbxBlock,
  },
};
</script>
