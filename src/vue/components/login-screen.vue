<template>
  <div ref="elRef" :class="classes">
    <slot />
  </div>
</template>
<script>
import { computed, ref, watch, onMounted, onBeforeUnmount } from 'vue';
import { classNames } from '../shared/utils.js';
import { colorClasses, colorProps } from '../shared/mixins.js';
import { cbxready, cbx } from '../shared/cbx.js';
import { modalStateClasses } from '../shared/modal-state-classes.js';

export default {
  name: 'cbx-login-screen',
  props: {
    opened: Boolean,
    animate: {
      type: Boolean,
      default: undefined,
    },
    containerEl: {
      type: [String, Object],
      default: undefined,
    },
    ...colorProps,
  },
  emits: [
    'loginscreen:open',
    'loginscreen:opened',
    'loginscreen:close',
    'loginscreen:closed',
    'update:opened',
  ],
  setup(props, { emit }) {
    const cbxLoginScreen = ref(null);
    // eslint-disable-next-line
    let isOpened = props.opened;
    let isClosing = false;
    const elRef = ref(null);

    const onOpen = (instance) => {
      isOpened = true;
      isClosing = false;
      emit('loginscreen:open', instance);
      emit('update:opened', true);
    };
    const onOpened = (instance) => {
      emit('loginscreen:opened', instance);
    };
    const onClose = (instance) => {
      isOpened = false;
      isClosing = true;
      emit('loginscreen:close', instance);
    };
    const onClosed = (instance) => {
      isClosing = false;
      emit('loginscreen:closed', instance);
      emit('update:opened', false);
    };

    watch(
      () => props.opened,
      (value) => {
        if (!cbxLoginScreen.value) return;
        if (value) {
          cbxLoginScreen.value.open();
        } else {
          cbxLoginScreen.value.close();
        }
      },
    );

    onMounted(() => {
      if (!elRef.value) return;
      cbxready(() => {
        const loginScreenParams = {
          el: elRef.value,
          on: {
            open: onOpen,
            opened: onOpened,
            close: onClose,
            closed: onClosed,
          },
        };
        if (typeof props.animate !== 'undefined') {
          loginScreenParams.animate = props.animate;
        }
        if (typeof props.containerEl !== 'undefined') {
          loginScreenParams.containerEl = props.containerEl;
        }
        cbxLoginScreen.value = cbx.loginScreen.create(loginScreenParams);
        if (props.opened) {
          cbxLoginScreen.value.open(false);
        }
      });
    });

    onBeforeUnmount(() => {
      if (cbxLoginScreen.value) {
        cbxLoginScreen.value.destroy();
      }
      cbxLoginScreen.value = null;
    });

    const classes = computed(() =>
      classNames('login-screen', modalStateClasses({ isOpened, isClosing }), colorClasses(props)),
    );

    return {
      elRef,
      classes,
    };
  },
};
</script>
