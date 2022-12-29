<template>
  <cbx-page class="grid-demo">
    <cbx-navbar title="Grid / Layout" back-link="Back"></cbx-navbar>
    <cbx-block>
      <p>
        Columns within a row are automatically set to have equal width. Otherwise you can define
        your column with pourcentage of screen you want.
      </p>
    </cbx-block>
    <cbx-block-title>Columns with gap</cbx-block-title>
    <cbx-block>
      <cbx-row>
        <cbx-col>50% (.col)</cbx-col>
        <cbx-col>50% (.col)</cbx-col>
      </cbx-row>
      <cbx-row>
        <cbx-col>25% (.col)</cbx-col>
        <cbx-col>25% (.col)</cbx-col>
        <cbx-col>25% (.col)</cbx-col>
        <cbx-col>25% (.col)</cbx-col>
      </cbx-row>
      <cbx-row>
        <cbx-col>33% (.col)</cbx-col>
        <cbx-col>33% (.col)</cbx-col>
        <cbx-col>33% (.col)</cbx-col>
      </cbx-row>
      <cbx-row>
        <cbx-col>20% (.col)</cbx-col>
        <cbx-col>20% (.col)</cbx-col>
        <cbx-col>20% (.col)</cbx-col>
        <cbx-col>20% (.col)</cbx-col>
        <cbx-col>20% (.col)</cbx-col>
      </cbx-row>
      <cbx-row>
        <cbx-col width="33">33% (.col-33)</cbx-col>
        <cbx-col width="66">66% (.col-66)</cbx-col>
      </cbx-row>
      <cbx-row>
        <cbx-col width="25">25% (.col-25)</cbx-col>
        <cbx-col width="25">25% (.col-25)</cbx-col>
        <cbx-col width="50">50% (.col-50)</cbx-col>
      </cbx-row>
      <cbx-row>
        <cbx-col width="75">75% (.col-75)</cbx-col>
        <cbx-col width="25">25% (.col-25)</cbx-col>
      </cbx-row>
      <cbx-row>
        <cbx-col width="80">80% (.col-80)</cbx-col>
        <cbx-col width="20">20% (.col-20)</cbx-col>
      </cbx-row>
    </cbx-block>
    <cbx-block-title>No gap between columns</cbx-block-title>
    <cbx-block>
      <cbx-row no-gap>
        <cbx-col>50% (.col)</cbx-col>
        <cbx-col>50% (.col)</cbx-col>
      </cbx-row>
      <cbx-row no-gap>
        <cbx-col>25% (.col)</cbx-col>
        <cbx-col>25% (.col)</cbx-col>
        <cbx-col>25% (.col)</cbx-col>
        <cbx-col>25% (.col)</cbx-col>
      </cbx-row>
      <cbx-row no-gap>
        <cbx-col>33% (.col)</cbx-col>
        <cbx-col>33% (.col)</cbx-col>
        <cbx-col>33% (.col)</cbx-col>
      </cbx-row>
      <cbx-row no-gap>
        <cbx-col>20% (.col)</cbx-col>
        <cbx-col>20% (.col)</cbx-col>
        <cbx-col>20% (.col)</cbx-col>
        <cbx-col>20% (.col)</cbx-col>
        <cbx-col>20% (.col)</cbx-col>
      </cbx-row>
      <cbx-row no-gap>
        <cbx-col width="33">33% (.col-33)</cbx-col>
        <cbx-col width="66">66% (.col-66)</cbx-col>
      </cbx-row>
      <cbx-row no-gap>
        <cbx-col width="25">25% (.col-25)</cbx-col>
        <cbx-col width="25">25% (.col-25)</cbx-col>
        <cbx-col width="50">50% (.col-50)</cbx-col>
      </cbx-row>
      <cbx-row no-gap>
        <cbx-col width="75">75% (.col-75)</cbx-col>
        <cbx-col width="25">25% (.col-25)</cbx-col>
      </cbx-row>
      <cbx-row no-gap>
        <cbx-col width="80">80% (.col-80)</cbx-col>
        <cbx-col width="20">20% (.col-20)</cbx-col>
      </cbx-row>
    </cbx-block>

    <cbx-block-title>Nested</cbx-block-title>
    <cbx-block>
      <cbx-row>
        <cbx-col
          >50% (.col)
          <cbx-row>
            <cbx-col>50% (.col)</cbx-col>
            <cbx-col>50% (.col)</cbx-col>
          </cbx-row>
        </cbx-col>
        <cbx-col
          >50% (.col)
          <cbx-row>
            <cbx-col width="33">33% (.col-33)</cbx-col>
            <cbx-col width="66">66% (.col-66)</cbx-col>
          </cbx-row>
        </cbx-col>
      </cbx-row>
    </cbx-block>

    <cbx-block-title>Responsive Grid</cbx-block-title>
    <cbx-block>
      <p>Grid cells have different size on Phone/Tablet</p>
      <cbx-row>
        <cbx-col width="100" medium="50">.col-100.medium-50</cbx-col>
        <cbx-col width="100" medium="50">.col-100.medium-50</cbx-col>
      </cbx-row>
      <cbx-row>
        <cbx-col width="50" medium="25">.col-50.medium-25</cbx-col>
        <cbx-col width="50" medium="25">.col-50.medium-25</cbx-col>
        <cbx-col width="50" medium="25">.col-50.medium-25</cbx-col>
        <cbx-col width="50" medium="25">.col-50.medium-25</cbx-col>
      </cbx-row>
      <cbx-row>
        <cbx-col width="100" medium="40">.col-100.medium-40</cbx-col>
        <cbx-col width="50" medium="60">.col-50.medium-60</cbx-col>
        <cbx-col width="50" medium="66">.col-50.medium-66</cbx-col>
        <cbx-col width="100" medium="33">.col-100.medium-33</cbx-col>
      </cbx-row>
    </cbx-block>

    <cbx-block-title>Resizable Grid</cbx-block-title>
    <cbx-block class="grid-resizable-demo">
      <cbx-row class="align-items-stretch" style="height: 300px">
        <cbx-col resizable class="demo-col-center-content" style="min-width: 80px">Left</cbx-col>
        <cbx-col
          resizable
          class="display-flex flex-direction-column"
          style="padding: 0px; border: none; min-width: 80px; background-color: transparent"
        >
          <cbx-row resizable style="height: 50%; min-height: 50px">
            <cbx-col class="demo-col-center-content" style="height: 100%">Center Top</cbx-col>
          </cbx-row>
          <cbx-row resizable style="height: 50%; min-height: 50px">
            <cbx-col class="demo-col-center-content" style="height: 100%">Center Bottom</cbx-col>
          </cbx-row>
        </cbx-col>
        <cbx-col resizable class="demo-col-center-content" style="min-width: 80px">Right</cbx-col>
      </cbx-row>
    </cbx-block>
  </cbx-page>
</template>
<script>
import { cbxNavbar, cbxPage, cbxBlockTitle, cbxRow, cbxCol, cbxBlock } from 'xui-vue';

export default {
  components: {
    cbxNavbar,
    cbxPage,
    cbxBlockTitle,
    cbxRow,
    cbxCol,
    cbxBlock,
  },
};
</script>
