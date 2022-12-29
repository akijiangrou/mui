<template>
  <cbx-page>
    <cbx-navbar title="Subnavbar" back-link="Back">
      <cbx-subnavbar>
        <cbx-segmented strong>
          <cbx-button active>Link 1</cbx-button>
          <cbx-button>Link 2</cbx-button>
          <cbx-button>Link 3</cbx-button>
        </cbx-segmented>
      </cbx-subnavbar>
    </cbx-navbar>
    <cbx-block>
      <p>
        Subnavbar is useful when you need to put any additional elements into Navbar, like Tab Links
        or Search Bar. It also remains visible when Navbar hidden.
      </p>
    </cbx-block>
    <cbx-list>
      <cbx-list-item link="/subnavbar-title/" title="Subnavbar Title"></cbx-list-item>
    </cbx-list>
  </cbx-page>
</template>
<script>
import {
  cbxNavbar,
  cbxPage,
  cbxSubnavbar,
  cbxSegmented,
  cbxButton,
  cbxBlock,
  cbxList,
  cbxListItem,
} from 'xui-vue';

export default {
  components: {
    cbxNavbar,
    cbxPage,
    cbxSubnavbar,
    cbxSegmented,
    cbxButton,
    cbxBlock,
    cbxList,
    cbxListItem,
  },
};
</script>
