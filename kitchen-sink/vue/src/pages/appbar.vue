<template>
  <cbx-page>
    <cbx-navbar title="Appbar" back-link="Back"></cbx-navbar>
    <cbx-block strong>
      <p>
        Appbar is the main app bar with actions on top of the whole app. It is designed to be used
        in desktop apps with Aurora theme.
      </p>
    </cbx-block>
    <cbx-block strong>
      <cbx-button fill @click="toggleAppbar">Toggle Appbar</cbx-button>
    </cbx-block>
  </cbx-page>
</template>
<script>
import { cbxPage, cbxNavbar, cbxBlock, cbxButton, cbx } from 'xui-vue';
import $ from 'dom7';

let appbarEnabled = false;

export default {
  components: {
    cbxPage,
    cbxNavbar,
    cbxBlock,
    cbxButton,
  },
  data() {
    return {
      appbarEnabled,
    };
  },
  methods: {
    enableAppbar() {
      const self = this;
      self.appbarEnabled = true;
      appbarEnabled = true;
      cbx.$el.prepend(`
        <div class="appbar">
          <div class="appbar-inner">
            <div class="left">
              <a href="#" class="button button-small panel-toggle display-flex" data-panel="left">
                <i class="cbx-icons">bars</i>
              </a>
              <a href="#" class="button button-small display-flex margin-left-half">
                <i class="cbx-icons">square_list</i>
              </a>
              <a href="#" class="button button-small display-flex margin-left-half">
                <i class="cbx-icons">arrowshape_turn_up_left_fill</i>
              </a>
              <a href="#" class="button button-small display-flex margin-left-half">
                <i class="cbx-icons">arrowshape_turn_up_right_fill</i>
              </a>
            </div>
            <div class="right">
              <div class="searchbar searchbar-inline">
                <div class="searchbar-input-wrap">
                  <input type="text" placeholder="Search app">
                  <i class="searchbar-icon"></i>
                  <div class="input-clear-button"></div>
                </div>
              </div>
            </div>

          </div>
        </div>
        `);
    },
    disableAppbar() {
      const self = this;
      self.appbarEnabled = false;
      appbarEnabled = false;
      $('.appbar').remove();
    },
    toggleAppbar() {
      const self = this;
      if (self.appbarEnabled) {
        self.disableAppbar();
      } else {
        self.enableAppbar();
      }
    },
  },
};
</script>
