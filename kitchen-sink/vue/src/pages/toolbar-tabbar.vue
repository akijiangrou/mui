<template>
  <cbx-page>
    <cbx-navbar title="Toolbar & Tabbar" back-link="Back"></cbx-navbar>
    <cbx-toolbar :position="toolbarPosition">
      <cbx-link>Left Link</cbx-link>
      <cbx-link>Right Link</cbx-link>
    </cbx-toolbar>
    <cbx-list>
      <cbx-list-item link="./tabbar/" title="Tabbar" />
      <cbx-list-item link="./tabbar-labels/" title="Tabbar With Labels" />
      <cbx-list-item link="./tabbar-scrollable/" title="Tabbar Scrollable" />
      <cbx-list-item link="./toolbar-hide-scroll/" title="Hide Toolbar On Scroll" />
    </cbx-list>
    <cbx-block-title>Toolbar Position</cbx-block-title>
    <cbx-block>
      <p>
        Toolbar supports both top and bottom positions. Click the following button to change its
        position.
      </p>
      <p>
        <cbx-button fill @click="toggleToolbarPosition">Toggle Toolbar Position</cbx-button>
      </p>
    </cbx-block>
  </cbx-page>
</template>
<script>
import {
  cbxNavbar,
  cbxPage,
  cbxToolbar,
  cbxList,
  cbxListItem,
  cbxButton,
  cbxLink,
  cbxBlockTitle,
  cbxBlock,
} from 'xui-vue';

export default {
  components: {
    cbxNavbar,
    cbxPage,
    cbxToolbar,
    cbxList,
    cbxListItem,
    cbxButton,
    cbxLink,
    cbxBlockTitle,
    cbxBlock,
  },
  data() {
    return {
      toolbarPosition: 'bottom',
    };
  },
  methods: {
    toggleToolbarPosition() {
      this.toolbarPosition = this.toolbarPosition === 'top' ? 'bottom' : 'top';
    },
  },
};
</script>
