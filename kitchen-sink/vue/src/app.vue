<template>
  <cbx-app v-bind="cbxParams">
    <cbx-panel left cover resizable>
      <cbx-view url="/panel-left/" links-view=".view-main"></cbx-view>
    </cbx-panel>
    <cbx-panel right reveal resizable>
      <cbx-view url="/panel-right/"></cbx-view>
    </cbx-panel>
    <cbx-view url="/" :main="true" class="safe-areas" :master-detail-breakpoint="768"></cbx-view>
  </cbx-app>
</template>
<script>
import { cbxApp, cbxPanel, cbxView } from 'xui-vue';
import routes from './routes';
import store from './store';

export default {
  components: {
    cbxApp,
    cbxPanel,
    cbxView,
  },
  data() {
    // Demo Theme
    let theme = 'auto';
    if (document.location.search.indexOf('theme=') >= 0) {
      theme = document.location.search.split('theme=')[1].split('&')[0];
    }

    return {
      cbxParams: {
        id: 'io.xui.testapp',
        theme,
        routes,
        store,
        popup: {
          closeOnEscape: true,
        },
        sheet: {
          closeOnEscape: true,
        },
        popover: {
          closeOnEscape: true,
        },
        actions: {
          closeOnEscape: true,
        },
      },
    };
  },
};
</script>
