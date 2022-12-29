<template>
  <div :class="classes">
    <div class="menu-inner">
      <slot />
    </div>
  </div>
</template>
<script>
import { computed } from 'vue';
import { classNames } from '../shared/utils.js';
import { colorClasses, colorProps } from '../shared/mixins.js';

export default {
  name: 'cbx-menu',
  props: {
    ...colorProps,
  },
  setup(props) {
    const classes = computed(() => classNames('menu', colorClasses(props)));
    return { classes };
  },
};
</script>
