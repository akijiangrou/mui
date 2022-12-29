<template>
  <cbx-page>
    <cbx-navbar title="Page Transitions" back-link="Back"></cbx-navbar>

    <cbx-block strong>
      <p>
        In addition to default theme-specific page transition it is possible to create custom page
        transition or use one of the additional transition effects:
      </p>
    </cbx-block>

    <cbx-list>
      <cbx-list-item
        v-for="effect in effects"
        :key="effect"
        :link="`/page-transitions/${effect}/`"
        :title="effect"
        :transition="effect"
      />
    </cbx-list>
  </cbx-page>
</template>
<script>
import { cbxNavbar, cbxPage, cbxBlock, cbxList, cbxListItem } from 'xui-vue';

export default {
  components: {
    cbxNavbar,
    cbxPage,
    cbxBlock,
    cbxList,
    cbxListItem,
  },
  data() {
    return {
      effects: [
        'cbx-circle',
        'cbx-cover',
        'cbx-cover-v',
        'cbx-dive',
        'cbx-fade',
        'cbx-flip',
        'cbx-parallax',
        'cbx-push',
      ],
    };
  },
};
</script>
