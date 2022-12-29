<template>
  <cbx-page>
    <cbx-navbar title="Toggle" back-link="Back"></cbx-navbar>
    <cbx-block-title>Super Heroes</cbx-block-title>
    <cbx-list simple-list>
      <cbx-list-item>
        <span>Batman</span>
        <cbx-toggle checked></cbx-toggle>
      </cbx-list-item>
      <cbx-list-item>
        <span>Aquaman</span>
        <cbx-toggle checked color="blue"></cbx-toggle>
      </cbx-list-item>
      <cbx-list-item>
        <span>Superman</span>
        <cbx-toggle checked color="red"></cbx-toggle>
      </cbx-list-item>
      <cbx-list-item>
        <span>Hulk</span>
        <cbx-toggle color="green"></cbx-toggle>
      </cbx-list-item>
      <cbx-list-item>
        <span>Spiderman (Disabled)</span>
        <cbx-toggle disabled></cbx-toggle>
      </cbx-list-item>
      <cbx-list-item>
        <span>Ironman (Disabled)</span>
        <cbx-toggle checked disabled></cbx-toggle>
      </cbx-list-item>
      <cbx-list-item>
        <span>Thor</span>
        <cbx-toggle checked color="orange"></cbx-toggle>
      </cbx-list-item>
      <cbx-list-item>
        <span>Wonder Woman</span>
        <cbx-toggle color="pink"></cbx-toggle>
      </cbx-list-item>
    </cbx-list>
  </cbx-page>
</template>
<script>
import { cbxNavbar, cbxPage, cbxBlockTitle, cbxList, cbxListItem, cbxToggle } from 'xui-vue';

export default {
  components: {
    cbxNavbar,
    cbxPage,
    cbxBlockTitle,
    cbxList,
    cbxListItem,
    cbxToggle,
  },
};
</script>
