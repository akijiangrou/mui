<template>
  <component :is="tag" ref="elRef" :class="classes">
    <slot />
    <span v-if="resizable && resizableHandler" class="resize-handler" />
  </component>
</template>
<script>
import { ref, computed, onBeforeUnmount, onMounted } from 'vue';
import { classNames } from '../shared/utils.js';
import { colorClasses, colorProps } from '../shared/mixins.js';
import { cbxready, cbx } from '../shared/cbx.js';

export default {
  name: 'cbx-row',
  props: {
    noGap: Boolean,
    tag: {
      type: String,
      default: 'div',
    },
    resizable: Boolean,
    resizableFixed: Boolean,
    resizableAbsolute: Boolean,
    resizableHandler: {
      type: Boolean,
      default: true,
    },
    ...colorProps,
  },
  emits: ['grid:resize'],
  setup(props, { emit }) {
    const elRef = ref(null);

    const onResize = (el) => {
      if (el === elRef.value) {
        emit('grid:resize');
      }
    };

    onMounted(() => {
      cbxready(() => {
        cbx.on('gridResize', onResize);
      });
    });
    onBeforeUnmount(() => {
      cbx.off('gridResize', onResize);
    });

    const classes = computed(() =>
      classNames(
        'row',
        {
          'no-gap': props.noGap,
          resizable: props.resizable,
          'resizable-fixed': props.resizableFixed,
          'resizable-absolute': props.resizableAbsolute,
        },
        colorClasses(props),
      ),
    );
    return { classes, elRef };
  },
};
</script>
