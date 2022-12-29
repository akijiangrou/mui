<template>
  <div ref="elRef" :class="classes">
    <div class="popover-angle" />
    <div class="popover-inner"><slot /></div>
  </div>
</template>
<script>
import { computed, ref, watch, onMounted, onBeforeUnmount } from 'vue';
import { classNames } from '../shared/utils.js';
import { colorClasses, colorProps } from '../shared/mixins.js';
import { cbxready, cbx } from '../shared/cbx.js';
import { modalStateClasses } from '../shared/modal-state-classes.js';

export default {
  name: 'cbx-popover',
  props: {
    opened: Boolean,
    animate: {
      type: Boolean,
      default: undefined,
    },
    targetEl: {
      type: [String, Object],
      default: undefined,
    },
    backdrop: {
      type: Boolean,
      default: undefined,
    },
    backdropEl: {
      type: [String, Object],
      default: undefined,
    },
    closeByBackdropClick: {
      type: Boolean,
      default: undefined,
    },
    closeByOutsideClick: {
      type: Boolean,
      default: undefined,
    },
    closeOnEscape: {
      type: Boolean,
      default: undefined,
    },
    containerEl: {
      type: [String, Object],
      default: undefined,
    },
    verticalPosition: {
      type: String,
      default: undefined,
    },
    ...colorProps,
  },
  emits: ['popover:open', 'popover:opened', 'popover:close', 'popover:closed', 'update:opened'],
  setup(props, { emit }) {
    const cbxPopover = ref(null);
    // eslint-disable-next-line
    let isOpened = props.opened;
    let isClosing = false;
    const elRef = ref(null);

    const onOpen = (instance) => {
      isOpened = true;
      isClosing = false;
      emit('popover:open', instance);
      emit('update:opened', true);
    };
    const onOpened = (instance) => {
      emit('popover:opened', instance);
    };
    const onClose = (instance) => {
      isOpened = false;
      isClosing = true;
      emit('popover:close', instance);
    };
    const onClosed = (instance) => {
      isClosing = false;
      emit('popover:closed', instance);
      emit('update:opened', false);
    };

    watch(
      () => props.opened,
      (value) => {
        if (!cbxPopover.value) return;
        if (value) {
          cbxPopover.value.open();
        } else {
          cbxPopover.value.close();
        }
      },
    );

    onMounted(() => {
      if (!elRef.value) return;
      const popoverParams = {
        el: elRef.value,
        on: {
          open: onOpen,
          opened: onOpened,
          close: onClose,
          closed: onClosed,
        },
      };
      const {
        targetEl,
        closeByBackdropClick,
        closeByOutsideClick,
        closeOnEscape,
        backdrop,
        backdropEl,
        containerEl,
        verticalPosition,
      } = props;
      if (typeof targetEl !== 'undefined') popoverParams.targetEl = targetEl;
      if (typeof closeByBackdropClick !== 'undefined')
        popoverParams.closeByBackdropClick = closeByBackdropClick;
      if (typeof closeByOutsideClick !== 'undefined')
        popoverParams.closeByOutsideClick = closeByOutsideClick;
      if (typeof closeOnEscape !== 'undefined') popoverParams.closeOnEscape = closeOnEscape;
      if (typeof backdrop !== 'undefined') popoverParams.backdrop = backdrop;
      if (typeof backdropEl !== 'undefined') popoverParams.backdropEl = backdropEl;
      if (typeof containerEl !== 'undefined') popoverParams.containerEl = containerEl;
      if (typeof verticalPosition !== 'undefined')
        popoverParams.verticalPosition = verticalPosition;

      cbxready(() => {
        cbxPopover.value = cbx.popover.create(popoverParams);
        if (props.opened) {
          cbxPopover.value.open(targetEl, false);
        }
      });
    });

    onBeforeUnmount(() => {
      if (cbxPopover.value) {
        cbxPopover.value.destroy();
      }
      cbxPopover.value = null;
    });

    const classes = computed(() =>
      classNames('popover', modalStateClasses({ isOpened, isClosing }), colorClasses(props)),
    );

    return {
      elRef,
      classes,
    };
  },
};
</script>
