<template>
  <cbx-page>
    <cbx-navbar title="Right Panel"></cbx-navbar>
    <cbx-block-title>Left Panel</cbx-block-title>
    <cbx-block>
      <p>
        This is a right side panel. You can close it by clicking outsite or on this link:
        <cbx-link panel-close>close me</cbx-link>. You can put here anything, even another isolated
        view.
      </p>
    </cbx-block>
    <cbx-block-title>Panel Navigation</cbx-block-title>
    <cbx-list>
      <cbx-list-item link="/panel-right-1/" title="Right panel page 1" />
      <cbx-list-item link="/panel-right-2/" title="Right panel page 2" />
    </cbx-list>
  </cbx-page>
</template>
<script>
import {
  cbxPage,
  cbxNavbar,
  cbxBlockTitle,
  cbxBlock,
  cbxList,
  cbxListItem,
  cbxLink,
} from 'xui-vue';

export default {
  components: {
    cbxPage,
    cbxNavbar,
    cbxBlockTitle,
    cbxBlock,
    cbxList,
    cbxListItem,
    cbxLink,
  },
};
</script>
