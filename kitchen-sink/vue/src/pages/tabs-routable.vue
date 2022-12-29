<template>
  <cbx-page :page-content="false">
    <cbx-navbar title="Tabs Routable" back-link="Back"></cbx-navbar>
    <cbx-toolbar bottom tabbar>
      <cbx-link tab-link href="./" route-tab-id="tab1">Tab 1</cbx-link>
      <cbx-link tab-link href="tab2/" route-tab-id="tab2">Tab 2</cbx-link>
      <cbx-link tab-link href="tab3/" route-tab-id="tab3">Tab 3</cbx-link>
    </cbx-toolbar>
    <cbx-tabs routable>
      <cbx-tab id="tab1" class="page-content"></cbx-tab>
      <cbx-tab id="tab2" class="page-content"></cbx-tab>
      <cbx-tab id="tab3" class="page-content"></cbx-tab>
    </cbx-tabs>
  </cbx-page>
</template>
<script>
import { cbxNavbar, cbxPage, cbxTabs, cbxTab, cbxLink, cbxToolbar } from 'xui-vue';

export default {
  components: {
    cbxNavbar,
    cbxPage,
    cbxTabs,
    cbxTab,
    cbxLink,
    cbxToolbar,
  },
};
</script>
