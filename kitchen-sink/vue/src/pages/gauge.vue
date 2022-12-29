<template>
  <cbx-page>
    <cbx-navbar title="Gauge" back-link="Back"></cbx-navbar>
    <cbx-block strong>
      <p>Xui comes with Gauge component. It produces nice looking fully responsive SVG gauges.</p>
    </cbx-block>
    <cbx-block strong class="text-align-center">
      <cbx-gauge
        type="circle"
        :value="gaugeValue"
        :size="250"
        border-color="#2196f3"
        :border-width="10"
        :value-text="`${gaugeValue * 100}%`"
        :value-font-size="41"
        value-text-color="#2196f3"
        label-text="amount of something"
      />
      <cbx-segmented tag="p" raised>
        <cbx-button :active="gaugeValue === 0" @click="() => (gaugeValue = 0)">0%</cbx-button>
        <cbx-button :active="gaugeValue === 0.25" @click="() => (gaugeValue = 0.25)"
          >25%</cbx-button
        >
        <cbx-button :active="gaugeValue === 0.5" @click="() => (gaugeValue = 0.5)">50%</cbx-button>
        <cbx-button :active="gaugeValue === 0.75" @click="() => (gaugeValue = 0.75)"
          >75%</cbx-button
        >
        <cbx-button :active="gaugeValue === 1" @click="() => (gaugeValue = 1)">100%</cbx-button>
      </cbx-segmented>
    </cbx-block>

    <cbx-block-title>Circle Gauges</cbx-block-title>
    <cbx-block strong>
      <cbx-row>
        <cbx-col class="text-align-center">
          <cbx-gauge
            type="circle"
            :value="0.44"
            value-text="44%"
            value-text-color="#ff9800"
            border-color="#ff9800"
          />
        </cbx-col>
        <cbx-col class="text-align-center">
          <cbx-gauge
            type="circle"
            :value="0.12"
            value-text="$120"
            value-text-color="#4caf50"
            border-color="#4caf50"
            label-text="of $1000 budget"
            label-text-color="#f44336"
            :label-font-weight="700"
          />
        </cbx-col>
      </cbx-row>
    </cbx-block>
    <cbx-block-title>Semicircle Gauges</cbx-block-title>
    <cbx-block strong>
      <cbx-row>
        <cbx-col class="text-align-center">
          <cbx-gauge
            type="semicircle"
            :value="0.3"
            value-text="30%"
            value-text-color="#f44336"
            border-color="#f44336"
          />
        </cbx-col>
        <cbx-col class="text-align-center">
          <cbx-gauge
            type="semicircle"
            :value="0.5"
            value-text="30kg"
            value-text-color="#e91e63"
            border-color="#e91e63"
            label-text="of 60kg total"
            label-text-color="#333"
          />
        </cbx-col>
      </cbx-row>
    </cbx-block>
    <cbx-block-title>Customization</cbx-block-title>
    <cbx-block strong>
      <cbx-row>
        <cbx-col class="text-align-center">
          <cbx-gauge
            type="circle"
            :value="0.35"
            value-text="35%"
            value-text-color="#4caf50"
            :value-font-size="51"
            :value-font-weight="700"
            :border-width="20"
            border-color="#4caf50"
            border-bg-color="#ffeb3b"
            bg-color="#ffeb3b"
          />
        </cbx-col>
        <cbx-col class="text-align-center">
          <cbx-gauge
            type="circle"
            :value="0.67"
            value-text="$670"
            value-text-color="#000"
            border-color="#ff9800"
            label-text="of $1000 spent"
            label-text-color="#4caf50"
            :label-font-weight="800"
            :label-font-size="12"
            :border-width="30"
          />
        </cbx-col>
      </cbx-row>
      <br />
      <cbx-row>
        <cbx-col class="text-align-center">
          <cbx-gauge
            type="semicircle"
            :value="0.5"
            value-text="50%"
            value-text-color="#ffeb3b"
            :value-font-size="41"
            :value-font-weight="700"
            :border-width="10"
            border-color="#ffeb3b"
            border-bg-color="transparent"
          />
        </cbx-col>
        <cbx-col class="text-align-center">
          <cbx-gauge
            type="semicircle"
            :value="0.77"
            border-color="#ff9800"
            label-text="$770 spent so far"
            label-text-color="#ff9800"
            :label-font-weight="800"
            :label-font-size="12"
            :border-width="10"
          />
        </cbx-col>
      </cbx-row>
    </cbx-block>
  </cbx-page>
</template>
<script>
import {
  cbxPage,
  cbxNavbar,
  cbxBlockTitle,
  cbxBlock,
  cbxRow,
  cbxCol,
  cbxSegmented,
  cbxButton,
  cbxGauge,
} from 'xui-vue';

export default {
  components: {
    cbxPage,
    cbxNavbar,
    cbxBlockTitle,
    cbxBlock,
    cbxRow,
    cbxCol,
    cbxSegmented,
    cbxButton,
    cbxGauge,
  },
  data() {
    return {
      gaugeValue: 0.5,
    };
  },
};
</script>
