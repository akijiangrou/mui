<template>
  <cbx-icon v-bind="icon.props">
    <cbx-badge v-if="icon.badge" v-bind="icon.badge.props">{{ icon.badge.content }}</cbx-badge>
  </cbx-icon>
</template>
<script>
import cbxIcon from './icon.js';
import cbxBadge from './badge.js';

export default {
  name: 'cbx-use-icon',
  components: {
    cbxIcon,
    cbxBadge,
  },
  props: {
    icon: Object,
  },
};
</script>
