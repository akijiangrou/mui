<template>
  <cbx-page>
    <cbx-navbar title="Pie Chart" back-link="Back" />
    <cbx-block strong>
      <p>Xui comes with simple to use and fully responsive Pie Chart component.</p>
      <p>
        Pie Chart generates SVG layout which makes it also compatible with SSR (server side
        rendering).
      </p>
    </cbx-block>
    <cbx-block-title>Simple Pie Chart</cbx-block-title>
    <cbx-block strong>
      <cbx-pie-chart
        :datasets="[
          {
            value: 100,
            color: '#f00',
          },
          {
            value: 200,
            color: '#0f0',
          },
          {
            value: 300,
            color: '#00f',
          },
        ]"
      />
    </cbx-block>

    <cbx-block-title>With Tooltip</cbx-block-title>
    <cbx-block strong>
      <cbx-pie-chart
        tooltip
        :datasets="[
          {
            label: 'JavaScript',
            value: 150,
            color: '#ff0',
          },
          {
            label: 'Vue.js',
            value: 150,
            color: '#0f0',
          },
          {
            label: 'TypeScript',
            value: 400,
            color: '#00f',
          },
        ]"
      />
    </cbx-block>

    <cbx-block-title>Custom Format Tooltip</cbx-block-title>
    <cbx-block strong>
      <cbx-pie-chart
        tooltip
        :datasets="[
          {
            label: 'JavaScript',
            value: 1000,
            color: '#ff0',
          },
          {
            label: 'Vue.js',
            value: 100,
            color: '#0f0',
          },
          {
            label: 'TypeScript',
            value: 200,
            color: '#00f',
          },
        ]"
        :format-tooltip="
          ({ color, value, label }) =>
            `You have <span style='color: ${color}'>${value} points</span> for ${label}`
        "
      />
    </cbx-block>
  </cbx-page>
</template>
<script>
import { cbxPage, cbxNavbar, cbxBlockTitle, cbxBlock, cbxPieChart } from 'xui-vue';

export default {
  components: {
    cbxPage,
    cbxNavbar,
    cbxBlockTitle,
    cbxBlock,
    cbxPieChart,
  },
};
</script>
