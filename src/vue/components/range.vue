<template>
  <div ref="elRef" :class="classes">
    <input v-if="input" id="inputId" type="range" :name="name" />
    <slot />
  </div>
</template>
<script>
import { computed, ref, onMounted, onBeforeUnmount, watch } from 'vue';
import { classNames, noUndefinedProps } from '../shared/utils.js';
import { colorClasses, colorProps } from '../shared/mixins.js';
import { cbxready, cbx } from '../shared/cbx.js';

export default {
  name: 'cbx-range',
  props: {
    init: {
      type: Boolean,
      default: true,
    },
    value: {
      type: [Number, Array, String],
      default: 0,
    },
    min: {
      type: [Number, String],
      default: 0,
    },
    max: {
      type: [Number, String],
      default: 100,
    },
    step: {
      type: [Number, String],
      default: 1,
    },
    label: {
      type: Boolean,
      default: false,
    },
    dual: {
      type: Boolean,
      default: false,
    },
    vertical: {
      type: Boolean,
      default: false,
    },
    verticalReversed: {
      type: Boolean,
      default: false,
    },
    draggableBar: {
      type: Boolean,
      default: true,
    },
    formatLabel: Function,
    scale: {
      type: Boolean,
      default: false,
    },
    scaleSteps: {
      type: Number,
      default: 5,
    },
    scaleSubSteps: {
      type: Number,
      default: 0,
    },
    formatScaleLabel: Function,
    limitKnobPosition: {
      type: Boolean,
      default: undefined,
    },
    name: String,
    input: Boolean,
    inputId: String,
    disabled: Boolean,
    ...colorProps,
  },
  emits: ['range:change', 'range:changed', 'rangeChange', 'rangeChanged', 'update:value'],
  setup(props, { emit }) {
    let cbxRange = null;
    const elRef = ref(null);

    watch(
      () => props.value,
      (newValue) => {
        if (!cbxRange) return;
        const rangeValue = cbxRange.value;
        if (Array.isArray(newValue) && Array.isArray(rangeValue)) {
          if (rangeValue[0] !== newValue[0] || rangeValue[1] !== newValue[1]) {
            cbxRange.setValue(newValue);
          }
        } else {
          cbxRange.setValue(newValue);
        }
      },
    );

    onMounted(() => {
      cbxready(() => {
        if (!props.init || !elRef.value) return;
        cbxRange = cbx.range.create(
          noUndefinedProps({
            el: elRef.value,
            ...props,
            on: {
              change(range, val) {
                emit('range:change', val);
                emit('rangeChange', val);
              },
              changed(range, val) {
                emit('range:changed', val);
                emit('rangeChanged', val);
                emit('update:value', val);
              },
            },
          }),
        );
      });
    });

    onBeforeUnmount(() => {
      if (cbxRange && cbxRange.destroy) cbxRange.destroy();
      cbxRange = null;
    });

    const classes = computed(() =>
      classNames(
        'range-slider',
        {
          'range-slider-horizontal': !props.vertical,
          'range-slider-vertical': props.vertical,
          'range-slider-vertical-reversed': props.vertical && props.verticalReversed,
          disabled: props.disabled,
        },
        colorClasses(props),
      ),
    );

    return {
      elRef,
      classes,
    };
  },
};
</script>
