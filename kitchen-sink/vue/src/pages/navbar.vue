<template>
  <cbx-page>
    <cbx-navbar title="Navbar" subtitle="Subtitle" back-link="Back">
      <cbx-nav-right>
        <cbx-link>Right</cbx-link>
      </cbx-nav-right>
    </cbx-navbar>
    <cbx-block>
      <p>
        Navbar is a fixed (with Fixed and Through layout types) area at the top of a screen that
        contains Page title and navigation elements.
      </p>
      <p>Navbar has 3 main parts: Left, Title and Right. Each part may contain any HTML content.</p>
    </cbx-block>
    <cbx-list>
      <cbx-list-item link="/navbar-hide-scroll/" title="Hide Navbar On Scroll"></cbx-list-item>
    </cbx-list>
  </cbx-page>
</template>
<script>
import { cbxNavbar, cbxPage, cbxBlock, cbxList, cbxListItem, cbxNavRight, cbxLink } from 'xui-vue';

export default {
  components: {
    cbxNavbar,
    cbxPage,
    cbxBlock,
    cbxList,
    cbxListItem,
    cbxNavRight,
    cbxLink,
  },
};
</script>
