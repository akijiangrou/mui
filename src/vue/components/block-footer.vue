<template>
  <div :class="classes">
    <slot />
  </div>
</template>
<script>
import { computed } from 'vue';
import { classNames } from '../shared/utils.js';
import { colorClasses, colorProps } from '../shared/mixins.js';

export default {
  name: 'cbx-block-footer',
  props: {
    ...colorProps,
  },
  setup(props) {
    const classes = computed(() => classNames('block-footer', colorClasses(props)));
    return { classes };
  },
};
</script>
