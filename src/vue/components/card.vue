<template>
  <div
    ref="elRef"
    :class="classes"
    :data-animate="typeof animate === 'undefined' ? animate : animate.toString()"
    :data-hide-navbar-on-open="
      typeof hideNavbarOnOpen === 'undefined' ? hideNavbarOnOpen : hideNavbarOnOpen.toString()
    "
    :data-hide-toolbar-on-open="
      typeof hideToolbarOnOpen === 'undefined' ? hideToolbarOnOpen : hideToolbarOnOpen.toString()
    "
    :data-hide-statusbar-on-open="
      typeof hideStatusbarOnOpen === 'undefined'
        ? hideStatusbarOnOpen
        : hideStatusbarOnOpen.toString()
    "
    :data-scrollable-el="scrollableEl"
    :data-swipe-to-close="
      typeof swipeToClose === 'undefined' ? swipeToClose : swipeToClose.toString()
    "
    :data-close-by-backdrop-click="
      typeof closeByBackdropClick === 'undefined'
        ? closeByBackdropClick
        : closeByBackdropClick.toString()
    "
    :data-backdrop="typeof backdrop === 'undefined' ? backdrop : backdrop.toString()"
    :data-backdrop-el="backdropEl"
  >
    <cbx-card-header v-if="hasHeader">
      {{ title }}
      <slot name="header" />
    </cbx-card-header>
    <cbx-card-content v-if="hasContent" :padding="padding">
      {{ content }}
      <slot name="content" />
    </cbx-card-content>
    <cbx-card-footer v-if="hasFooter">
      {{ footer }}
      <slot name="footer" />
    </cbx-card-footer>
    <slot />
  </div>
</template>
<script>
import { computed, ref, onMounted, onBeforeUnmount, watch } from 'vue';
import { classNames } from '../shared/utils.js';
import { colorClasses, colorProps } from '../shared/mixins.js';
import { cbx, cbxready } from '../shared/cbx.js';

import cbxCardHeader from './card-header.js';
import cbxCardContent from './card-content.js';
import cbxCardFooter from './card-footer.js';

export default {
  name: 'cbx-card',
  components: {
    cbxCardHeader,
    cbxCardContent,
    cbxCardFooter,
  },
  props: {
    title: [String, Number],
    content: [String, Number],
    footer: [String, Number],
    outline: Boolean,
    expandable: Boolean,
    expandableAnimateWidth: Boolean,
    expandableOpened: Boolean,
    animate: {
      type: Boolean,
      default: undefined,
    },
    hideNavbarOnOpen: {
      type: Boolean,
      default: undefined,
    },
    hideToolbarOnOpen: {
      type: Boolean,
      default: undefined,
    },
    hideStatusbarOnOpen: {
      type: Boolean,
      default: undefined,
    },
    scrollableEl: {
      type: String,
      default: undefined,
    },
    swipeToClose: {
      type: Boolean,
      default: undefined,
    },
    closeByBackdropClick: {
      type: Boolean,
      default: undefined,
    },
    backdrop: {
      type: Boolean,
      default: undefined,
    },
    backdropEl: {
      type: String,
      default: undefined,
    },
    noShadow: Boolean,
    noBorder: Boolean,
    padding: {
      type: Boolean,
      default: true,
    },
    ...colorProps,
  },
  emits: [
    'card:beforeopen',
    'card:open',
    'card:opened',
    'card:close',
    'card:closed',
    'update:expandableOpened',
  ],
  setup(props, { emit, slots }) {
    const elRef = ref(null);

    const open = () => {
      if (!elRef.value) return;
      cbx.card.open(elRef.value);
    };
    const close = () => {
      if (!elRef.value) return;
      cbx.card.close(elRef.value);
    };
    const onBeforeOpen = (el, prevent) => {
      if (elRef.value !== el) return;
      emit('card:beforeopen', el, prevent);
    };
    const onOpen = (el) => {
      if (elRef.value !== el) return;
      emit('card:open', el);
      emit('update:expandableOpened', true);
    };
    const onOpened = (el, pageEl) => {
      if (elRef.value !== el) return;
      emit('card:opened', el, pageEl);
    };
    const onClose = (el) => {
      if (elRef.value !== el) return;
      emit('card:close', el);
    };
    const onClosed = (el, pageEl) => {
      if (elRef.value !== el) return;
      emit('card:closed', el, pageEl);
      emit('update:expandableOpened', false);
    };

    onMounted(() => {
      if (!props.expandable || !elRef.value) return;
      cbxready(() => {
        if (props.expandable && props.expandableOpened) {
          cbx.card.open(elRef.value, false);
        }
        cbx.on('cardBeforeOpen', onBeforeOpen);
        cbx.on('cardOpen', onOpen);
        cbx.on('cardOpened', onOpened);
        cbx.on('cardClose', onClose);
        cbx.on('cardClosed', onClosed);
      });
    });

    onBeforeUnmount(() => {
      cbx.off('cardBeforeOpen', onBeforeOpen);
      cbx.off('cardOpen', onOpen);
      cbx.off('cardOpened', onOpened);
      cbx.off('cardClose', onClose);
      cbx.off('cardClosed', onClosed);
    });

    watch(
      () => props.expandableOpened,
      (value) => {
        if (value) {
          open();
        } else {
          close();
        }
      },
    );

    const hasHeader = computed(() => props.title || slots.header);
    const hasContent = computed(() => props.content || slots.content);
    const hasFooter = computed(() => props.footer || slots.footer);

    const classes = computed(() =>
      classNames(
        'card',
        {
          'card-outline': props.outline,
          'card-expandable': props.expandable,
          'card-expandable-animate-width': props.expandableAnimateWidth,
          'no-shadow': props.noShadow,
          'no-border': props.noBorder,
        },
        colorClasses(props),
      ),
    );
    return {
      elRef,
      classes,
      hasHeader,
      hasContent,
      hasFooter,
    };
  },
};
</script>
