<template>
  <div ref="elRef" :class="classes">
    <slot />
  </div>
</template>
<script>
import { computed, ref, onMounted, onBeforeUnmount, onBeforeUpdate, onUpdated, watch } from 'vue';
import { classNames, getChildren, noUndefinedProps } from '../shared/utils.js';
import { colorClasses, colorProps } from '../shared/mixins.js';
import { cbxready, cbx } from '../shared/cbx.js';

export default {
  name: 'cbx-messages',
  props: {
    autoLayout: {
      type: Boolean,
      default: false,
    },
    messages: {
      type: Array,
      default() {
        return [];
      },
    },
    newMessagesFirst: {
      type: Boolean,
      default: false,
    },
    scrollMessages: {
      type: Boolean,
      default: true,
    },
    scrollMessagesOnEdge: {
      type: Boolean,
      default: true,
    },
    typing: {
      type: Boolean,
      default: false,
    },
    firstMessageRule: Function,
    lastMessageRule: Function,
    tailMessageRule: Function,
    sameNameMessageRule: Function,
    sameHeaderMessageRule: Function,
    sameFooterMessageRule: Function,
    sameAvatarMessageRule: Function,
    customClassMessageRule: Function,
    renderMessage: Function,

    init: {
      type: Boolean,
      default: true,
    },
    ...colorProps,
  },
  setup(props, { slots }) {
    let cbxMessages = null;
    let childrenBeforeUpdated = null;
    const elRef = ref(null);

    onMounted(() => {
      if (!props.init) return;

      cbxready(() => {
        cbxMessages = cbx.messages.create(
          noUndefinedProps({
            el: elRef.value,
            autoLayout: props.autoLayout,
            messages: props.messages,
            newMessagesFirst: props.newMessagesFirst,
            scrollMessages: props.scrollMessages,
            scrollMessagesOnEdge: props.scrollMessagesOnEdge,
            firstMessageRule: props.firstMessageRule,
            lastMessageRule: props.lastMessageRule,
            tailMessageRule: props.tailMessageRule,
            sameNameMessageRule: props.sameNameMessageRule,
            sameHeaderMessageRule: props.sameHeaderMessageRule,
            sameFooterMessageRule: props.sameFooterMessageRule,
            sameAvatarMessageRule: props.sameAvatarMessageRule,
            customClassMessageRule: props.customClassMessageRule,
            renderMessage: props.renderMessage,
          }),
        );
        if (cbxMessages && props.typing) {
          cbxMessages.showTyping();
        }
      });
    });

    onBeforeUpdate(() => {
      if (!props.init || !elRef.value) return;
      const children = elRef.value.children;
      if (!children) return;
      childrenBeforeUpdated = children.length;

      for (let i = 0; i < children.length; i += 1) {
        children[i].classList.add('message-appeared');
      }
      const childrenAfterUpdate = getChildren(slots);
      if (cbxMessages && props.scrollMessages && childrenBeforeUpdated !== childrenAfterUpdate) {
        cbxMessages.setScrollData();
      }
    });

    onUpdated(() => {
      if (!props.init) return;
      if (!elRef.value) return;

      const children = elRef.value.children;
      if (!children) return;
      const childerAftterUpdated = children.length;

      for (let i = 0; i < children.length; i += 1) {
        if (!children[i].classList.contains('message-appeared')) {
          children[i].classList.add('message-appear-from-bottom');
        }
      }

      if (cbxMessages && cbxMessages.layout && props.autoLayout) {
        cbxMessages.layout();
      }
      if (
        childerAftterUpdated !== childrenBeforeUpdated &&
        cbxMessages &&
        cbxMessages.scroll &&
        cbxMessages.scrollData &&
        props.scrollMessages
      ) {
        cbxMessages.scrollWithEdgeCheck(true);
      }
    });

    onBeforeUnmount(() => {
      if (cbxMessages && cbxMessages.destroy) cbxMessages.destroy();
      cbxMessages = null;
    });

    watch(
      () => props.typing,
      (newValue) => {
        if (!cbxMessages) return;
        if (newValue) cbxMessages.showTyping();
        else cbxMessages.hideTyping();
      },
    );

    const classes = computed(() => classNames('messages', colorClasses(props)));

    return {
      elRef,
      classes,
    };
  },
};
</script>
