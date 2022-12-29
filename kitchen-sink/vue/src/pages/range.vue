<template>
  <cbx-page>
    <cbx-navbar title="Range Slider" back-link="Back"></cbx-navbar>

    <cbx-block-title>Volume</cbx-block-title>
    <cbx-list simple-list>
      <cbx-list-item>
        <cbx-list-item-cell class="width-auto flex-shrink-0">
          <cbx-icon ios="cbx:speaker_fill" aurora="cbx:speaker_fill" md="material:volume_mute" />
        </cbx-list-item-cell>
        <cbx-list-item-cell class="flex-shrink-3">
          <cbx-range :min="0" :max="100" :step="1" :value="10" />
        </cbx-list-item-cell>
        <cbx-list-item-cell class="width-auto flex-shrink-0">
          <cbx-icon ios="cbx:speaker_3_fill" aurora="cbx:speaker_3_fill" md="material:volume_up" />
        </cbx-list-item-cell>
      </cbx-list-item>
    </cbx-list>

    <cbx-block-title>Brightness</cbx-block-title>
    <cbx-list simple-list>
      <cbx-list-item>
        <cbx-list-item-cell class="width-auto flex-shrink-0">
          <cbx-icon ios="cbx:sun_min" aurora="cbx:sun_min" md="material:brightness_low" />
        </cbx-list-item-cell>
        <cbx-list-item-cell class="flex-shrink-3">
          <cbx-range :min="0" :max="100" :step="1" :value="50" :label="true" color="orange" />
        </cbx-list-item-cell>
        <cbx-list-item-cell class="width-auto flex-shrink-0">
          <cbx-icon
            ios="cbx:sun_max_fill"
            aurora="cbx:sun_max_fill"
            md="material:brightness_high"
          />
        </cbx-list-item-cell>
      </cbx-list-item>
    </cbx-list>

    <cbx-block-title class="display-flex justify-content-space-between"
      >Price Filter <span>${{ priceMin }} - ${{ priceMax }}</span></cbx-block-title
    >
    <cbx-list simple-list>
      <cbx-list-item>
        <cbx-list-item-cell class="width-auto flex-shrink-0">
          <cbx-icon
            ios="cbx:money_dollar_circle"
            aurora="cbx:money_dollar_circle"
            md="material:attach_money"
          />
        </cbx-list-item-cell>
        <cbx-list-item-cell class="flex-shrink-3">
          <cbx-range
            :min="0"
            :max="500"
            :step="1"
            :value="[priceMin, priceMax]"
            :label="true"
            :dual="true"
            color="green"
            @range:change="onPriceChange"
          />
        </cbx-list-item-cell>
        <cbx-list-item-cell class="width-auto flex-shrink-0">
          <cbx-icon
            ios="cbx:money_dollar_circle_fill"
            aurora="cbx:money_dollar_circle_fill"
            md="material:monetization_on"
          />
        </cbx-list-item-cell>
      </cbx-list-item>
    </cbx-list>

    <cbx-block-title>With Scale</cbx-block-title>
    <cbx-block strong>
      <cbx-range
        :min="0"
        :max="100"
        :label="true"
        :step="5"
        :value="25"
        :scale="true"
        :scale-steps="5"
        :scale-sub-steps="4"
      />
    </cbx-block>

    <cbx-block-title>Vertical</cbx-block-title>
    <cbx-block strong class="display-flex justify-content-center">
      <cbx-range
        class="margin-right"
        style="height: 160px"
        :vertical="true"
        :min="0"
        :max="100"
        :label="true"
        :step="1"
        :value="25"
      />
      <cbx-range
        class="margin-horizontal"
        style="height: 160px"
        :vertical="true"
        :min="0"
        :max="100"
        :label="true"
        :step="1"
        :value="50"
      />
      <cbx-range
        class="margin-horizontal"
        style="height: 160px"
        :vertical="true"
        :min="0"
        :max="100"
        :label="true"
        :step="1"
        :value="75"
      />
      <cbx-range
        class="margin-left"
        style="height: 160px"
        :dual="true"
        :vertical="true"
        :min="0"
        :max="100"
        :label="true"
        :step="1"
        :value="[25, 75]"
      />
    </cbx-block>

    <cbx-block-title>Vertical Reversed</cbx-block-title>
    <cbx-block strong class="display-flex justify-content-center">
      <cbx-range
        class="margin-right"
        color="red"
        style="height: 160px"
        :vertical="true"
        :vertical-reversed="true"
        :min="0"
        :max="100"
        :label="true"
        :step="1"
        :value="25"
      />
      <cbx-range
        class="margin-horizontal"
        color="red"
        style="height: 160px"
        :vertical="true"
        :vertical-reversed="true"
        :min="0"
        :max="100"
        :label="true"
        :step="1"
        :value="50"
      />
      <cbx-range
        class="margin-horizontal"
        color="red"
        style="height: 160px"
        :vertical="true"
        :vertical-reversed="true"
        :min="0"
        :max="100"
        :label="true"
        :step="1"
        :value="75"
      />
      <cbx-range
        class="margin-left"
        color="red"
        style="height: 160px"
        :dual="true"
        :vertical="true"
        :vertical-reversed="true"
        :min="0"
        :max="100"
        :label="true"
        :step="1"
        :value="[25, 75]"
      />
    </cbx-block>
  </cbx-page>
</template>
<script>
import {
  cbxNavbar,
  cbxPage,
  cbxBlockTitle,
  cbxRange,
  cbxList,
  cbxListItem,
  cbxListItemCell,
  cbxIcon,
  cbxBlock,
} from 'xui-vue';

export default {
  components: {
    cbxNavbar,
    cbxPage,
    cbxBlockTitle,
    cbxRange,
    cbxList,
    cbxListItem,
    cbxListItemCell,
    cbxIcon,
    cbxBlock,
  },
  data() {
    return {
      priceMin: 200,
      priceMax: 400,
    };
  },
  methods: {
    onPriceChange(values) {
      this.priceMin = values[0];
      this.priceMax = values[1];
    },
  },
};
</script>
