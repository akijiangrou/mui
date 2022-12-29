<template>
  <div ref="elRef" :class="classes">
    <slot />
  </div>
</template>
<script>
import { computed, ref, onMounted, onBeforeUnmount, watch } from 'vue';
import { classNames } from '../shared/utils.js';
import { colorClasses, colorProps } from '../shared/mixins.js';
import { cbxready, cbx } from '../shared/cbx.js';

export default {
  name: 'cbx-list-index',
  props: {
    init: {
      type: Boolean,
      default: true,
    },
    listEl: [String, Object],
    indexes: {
      type: [String, Array],
      default: 'auto',
    },
    scrollList: {
      type: Boolean,
      default: true,
    },
    label: {
      type: Boolean,
      default: false,
    },
    iosItemHeight: {
      type: Number,
      default: 14,
    },
    mdItemHeight: {
      type: Number,
      default: 14,
    },
    auroraItemHeight: {
      type: Number,
      default: 14,
    },
    ...colorProps,
  },
  emits: ['listindex:select'],
  setup(props, { emit }) {
    let cbxListIndex = null;
    const elRef = ref(null);

    const update = () => {
      if (!cbxListIndex) return;
      cbxListIndex.update();
    };
    const scrollListToIndex = (indexContent) => {
      if (!cbxListIndex) return;
      cbxListIndex.scrollListToIndex(indexContent);
    };

    watch(
      () => props.indexes,
      (newValue) => {
        if (!cbxListIndex) return;
        cbxListIndex.params.indexes = newValue;
        update();
      },
    );

    onMounted(() => {
      if (!props.init) return;
      cbxready(() => {
        cbxListIndex = cbx.listIndex.create({
          el: elRef.value,
          listEl: props.listEl,
          indexes: props.indexes,
          iosItemHeight: props.iosItemHeight,
          mdItemHeight: props.mdItemHeight,
          auroraItemHeight: props.auroraItemHeight,
          scrollList: props.scrollList,
          label: props.label,
          on: {
            select(index, itemContent, itemIndex) {
              emit('listindex:select', itemContent, itemIndex);
            },
          },
        });
      });
    });

    onBeforeUnmount(() => {
      if (cbxListIndex && cbxListIndex.destroy) {
        cbxListIndex.destroy();
      }
      cbxListIndex = null;
    });

    const classes = computed(() => classNames('list-index', colorClasses(props)));
    return { elRef, classes, update, scrollListToIndex };
  },
};
</script>
