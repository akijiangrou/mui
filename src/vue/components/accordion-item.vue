<template>
  <div ref="elRef" :class="classes">
    <slot />
  </div>
</template>
<script>
import { ref, computed, onBeforeUnmount, onMounted } from 'vue';
import { classNames } from '../shared/utils.js';
import { colorClasses, colorProps } from '../shared/mixins.js';
import { cbx, cbxready } from '../shared/cbx.js';

export default {
  name: 'cbx-accordion-item',
  props: {
    opened: Boolean,
    ...colorProps,
  },
  emits: [
    'accordion:beforeopen',
    'accordion:open',
    'accordion:opened',
    'accordion:beforeclose',
    'accordion:close',
    'accordion:closed',
  ],
  setup(props, { emit }) {
    const elRef = ref(null);

    const onBeforeOpen = (el, prevent) => {
      if (elRef.value !== el) return;
      emit('accordion:beforeopen', prevent);
    };
    const onOpen = (el) => {
      if (elRef.value !== el) return;
      emit('accordion:open');
    };
    const onOpened = (el) => {
      if (elRef.value !== el) return;
      emit('accordion:opened');
    };
    const onBeforeClose = (el, prevent) => {
      if (elRef.value !== el) return;
      emit('accordion:beforeclose', prevent);
    };
    const onClose = (el) => {
      if (elRef.value !== el) return;
      emit('accordion:close');
    };
    const onClosed = (el) => {
      if (elRef.value !== el) return;
      emit('accordion:closed');
    };

    const attachEvents = () => {
      cbxready(() => {
        cbx.on('accordionBeforeOpen', onBeforeOpen);
        cbx.on('accordionOpen', onOpen);
        cbx.on('accordionOpened', onOpened);
        cbx.on('accordionBeforeClose', onBeforeClose);
        cbx.on('accordionClose', onClose);
        cbx.on('accordionClosed', onClosed);
      });
    };

    const detachEvents = () => {
      cbx.off('accordionBeforeOpen', onBeforeOpen);
      cbx.off('accordionOpen', onOpen);
      cbx.off('accordionOpened', onOpened);
      cbx.off('accordionBeforeClose', onBeforeClose);
      cbx.off('accordionClose', onClose);
      cbx.off('accordionClosed', onClosed);
    };

    onMounted(() => attachEvents());
    onBeforeUnmount(() => detachEvents());

    const classes = computed(() =>
      classNames(
        'accordion-item',
        {
          'accordion-item-opened': props.opened,
        },
        colorClasses(props),
      ),
    );
    return { elRef, classes };
  },
};
</script>
