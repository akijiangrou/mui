<template>
  <cbx-page id="panel-page">
    <cbx-navbar title="Panel / Side panels" back-link="Back"></cbx-navbar>
    <cbx-panel id="panel-nested" left cover container-el="#panel-page">
      <cbx-page>
        <cbx-block strong>
          <p>This is page-nested Panel.</p>
          <p>
            <cbx-link panel-close>Close me</cbx-link>
          </p>
        </cbx-block>
      </cbx-page>
    </cbx-panel>
    <cbx-block>
      <p>
        Xui comes with 2 panels (on left and on right), both are optional. They have two different
        layouts/effects - <b>cover</b> above the content (like left panel here) and
        <b>reveal</b> (like right panel). You can put absolutely anything inside: data lists, forms,
        custom content, and even other isolated app view (like in right panel now) with its own
        dynamic navbar. Checkout panels:
      </p>
    </cbx-block>
    <cbx-block>
      <cbx-row tag="p">
        <cbx-col tag="span">
          <cbx-button raised fill panel-open="left"> Open left panel </cbx-button>
        </cbx-col>
        <cbx-col tag="span">
          <cbx-button raised fill panel-open="right"> Open right panel </cbx-button>
        </cbx-col>
      </cbx-row>
      <cbx-row tag="p">
        <cbx-col tag="span">
          <cbx-button raised fill panel-open="#panel-nested"> Open nested panel </cbx-button>
        </cbx-col>
      </cbx-row>
    </cbx-block>
  </cbx-page>
</template>
<script>
import {
  cbxNavbar,
  cbxPage,
  cbxBlock,
  cbxCol,
  cbxButton,
  cbxLink,
  cbxPanel,
  cbxRow,
} from 'xui-vue';

export default {
  components: {
    cbxNavbar,
    cbxPage,
    cbxBlock,
    cbxCol,
    cbxButton,
    cbxLink,
    cbxPanel,
    cbxRow,
  },
};
</script>
