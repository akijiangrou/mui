<template>
  <label ref="elRef" :class="classes">
    <input
      type="checkbox"
      :name="name"
      :disabled="disabled"
      :readonly="readonly"
      :checked="checked"
      :value="value"
      @change="onChange"
    />
    <span class="toggle-icon" />
  </label>
</template>
<script>
import { computed, ref, watch, onMounted, onBeforeUnmount } from 'vue';
import { classNames } from '../shared/utils.js';
import { colorClasses, colorProps } from '../shared/mixins.js';
import { cbxready, cbx } from '../shared/cbx.js';
import { useTooltip } from '../shared/use-tooltip.js';

export default {
  name: 'cbx-toggle',
  props: {
    init: {
      type: Boolean,
      default: true,
    },
    checked: Boolean,
    disabled: Boolean,
    readonly: Boolean,
    name: String,
    value: [String, Number, Array],
    tooltip: String,
    tooltipTrigger: String,
    ...colorProps,
  },
  emits: ['change', 'toggle:change', 'update:checked'],
  setup(props, { emit }) {
    let cbxToggle = null;
    const elRef = ref(null);

    useTooltip(elRef, props);

    const onChange = (event) => {
      emit('change', event);
    };

    watch(
      () => props.checked,
      (newValue) => {
        if (!cbxToggle) return;
        cbxToggle.checked = newValue;
      },
    );

    onMounted(() => {
      cbxready(() => {
        if (!props.init || !elRef.value) return;
        cbxToggle = cbx.toggle.create({
          el: elRef.value,
          on: {
            change(toggleInstance) {
              emit('toggle:change', toggleInstance.checked);
              emit('update:checked', toggleInstance.checked);
            },
          },
        });
      });
    });

    onBeforeUnmount(() => {
      if (cbxToggle && cbxToggle.destroy && cbxToggle.$el) {
        cbxToggle.destroy();
      }
      cbxToggle = null;
    });

    const classes = computed(() =>
      classNames(
        'toggle',
        {
          disabled: props.disabled,
        },
        colorClasses(props),
      ),
    );
    return {
      classes,
      elRef,
      cbxToggle,
      onChange,
    };
  },
};
</script>
