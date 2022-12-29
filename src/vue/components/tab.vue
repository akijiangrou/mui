<template>
  <div ref="elRef" :class="classes">
    <component
      :is="getComponent(tabContent)"
      v-if="tabContent"
      :key="tabContent.id"
      v-bind="getProps(tabContent)"
    />
    <slot v-else />
  </div>
</template>
<script>
import { computed, ref, inject, onMounted, onBeforeUnmount, onUpdated, toRaw } from 'vue';
import { classNames, getComponentId } from '../shared/utils.js';
import { colorClasses, colorProps } from '../shared/mixins.js';
import { cbxready, cbxrouters, cbx, cbxevents } from '../shared/cbx.js';
import { useTab } from '../shared/use-tab.js';

export default {
  name: 'cbx-tab',
  props: {
    tabActive: Boolean,
    ...colorProps,
  },
  emits: ['tab:show', 'tab:hide'],
  setup(props, { emit }) {
    const elRef = ref(null);
    const routerData = ref(null);
    const route = inject('cbxroute', null);
    const router = inject('cbxroute', null);

    let initialTabContent = null;

    if (
      !routerData.value &&
      route &&
      route.route &&
      route.route.tab &&
      route.route.tab.id === props.id
    ) {
      const { component, asyncComponent, options: tabRouteOptions } = route.route.tab;
      if (component || asyncComponent) {
        const parentProps = route.route.options && route.route.options.props;
        initialTabContent = {
          id: getComponentId(),
          component: component || asyncComponent,
          isAsync: !!asyncComponent,
          props: {
            ...(parentProps || {}),
            ...((tabRouteOptions && tabRouteOptions.props) || {}),
            cbxrouter: router,
            cbxroute: route,
            ...route.params,
          },
        };
      }
    }

    const tabContent = ref(initialTabContent || null);

    const setTabContent = (newContent) => {
      tabContent.value = newContent;
    };

    if (cbx && !routerData.value) {
      routerData.value = {
        setTabContent,
      };
      cbxrouters.tabs.push(routerData.value);
    }

    onMounted(() => {
      if (elRef.value && initialTabContent) {
        elRef.value.cbxRouterTabLoaded = true;
      }
      cbxready(() => {
        if (!routerData.value) {
          routerData.value = {
            el: elRef.value,
            setTabContent,
          };
          cbxrouters.tabs.push(routerData.value);
        } else {
          routerData.value.el = elRef.value;
        }
      });
    });

    onBeforeUnmount(() => {
      if (!routerData.value) return;
      cbxrouters.tabs.splice(cbxrouters.tabs.indexOf(routerData.value), 1);
      routerData.value = null;
    });

    onUpdated(() => {
      if (!routerData.value || !cbx) return;
      cbxevents.emit('tabRouterDidUpdate', routerData.value);
    });

    useTab(elRef, emit);

    const classes = computed(() =>
      classNames(
        'tab',
        {
          'tab-active': props.tabActive,
        },
        colorClasses(props),
      ),
    );

    const getComponent = (content) => toRaw(content.component);
    const getProps = (content) => {
      const { component: tabComponent, props: tabProps } = content;
      let keys = [];
      const passProps = {};
      if (tabComponent && tabComponent.props) keys = Object.keys(tabComponent.props);
      keys.forEach((key) => {
        if (key in tabProps) passProps[key] = tabProps[key];
      });
      return passProps;
    };

    return {
      elRef,
      classes,
      tabContent,
      getComponent,
      getProps,
    };
  },
};
</script>
