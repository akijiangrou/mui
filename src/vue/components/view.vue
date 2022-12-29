<script>
import { computed, ref, onMounted, onBeforeUnmount, onUpdated, toRaw, h } from 'vue';
import { classNames, noUndefinedProps, getRouterId } from '../shared/utils.js';
import { colorClasses, colorProps } from '../shared/mixins.js';
import { cbxready, cbxrouters, cbx, cbxevents } from '../shared/cbx.js';
import { useTab } from '../shared/use-tab.js';
import { getRouterInitialComponent } from '../shared/get-router-initial-component.js';

export default {
  name: 'cbx-view',
  props: {
    tab: Boolean,
    tabActive: Boolean,

    name: String,
    initRouterOnTabShow: {
      type: Boolean,
      default: undefined,
    },
    router: {
      type: Boolean,
      default: true,
    },
    linksView: [Object, String],
    url: String,
    main: {
      type: Boolean,
      default: undefined,
    },
    stackPages: {
      type: Boolean,
      default: undefined,
    },
    xhrCache: {
      type: Boolean,
      default: undefined,
    },
    xhrCacheIgnore: Array,
    xhrCacheIgnoreGetParameters: {
      type: Boolean,
      default: undefined,
    },
    xhrCacheDuration: Number,
    preloadPreviousPage: {
      type: Boolean,
      default: undefined,
    },
    allowDuplicateUrls: {
      type: Boolean,
      default: undefined,
    },
    reloadPages: {
      type: Boolean,
      default: undefined,
    },
    reloadDetail: {
      type: Boolean,
      default: undefined,
    },
    masterDetailResizable: {
      type: Boolean,
      default: undefined,
    },
    masterDetailBreakpoint: Number,
    removeElements: {
      type: Boolean,
      default: undefined,
    },
    removeElementsWithTimeout: {
      type: Boolean,
      default: undefined,
    },
    removeElementsTimeout: Number,
    restoreScrollTopOnBack: {
      type: Boolean,
      default: undefined,
    },
    loadInitialPage: {
      type: Boolean,
      default: undefined,
    },
    // Swipe Back
    iosSwipeBack: {
      type: Boolean,
      default: undefined,
    },
    iosSwipeBackAnimateShadow: {
      type: Boolean,
      default: undefined,
    },
    iosSwipeBackAnimateOpacity: {
      type: Boolean,
      default: undefined,
    },
    iosSwipeBackActiveArea: Number,
    iosSwipeBackThreshold: Number,
    mdSwipeBack: {
      type: Boolean,
      default: undefined,
    },
    mdSwipeBackAnimateShadow: {
      type: Boolean,
      default: undefined,
    },
    mdSwipeBackAnimateOpacity: {
      type: Boolean,
      default: undefined,
    },
    mdSwipeBackActiveArea: Number,
    mdSwipeBackThreshold: Number,
    auroraSwipeBack: {
      type: Boolean,
      default: undefined,
    },
    auroraSwipeBackAnimateShadow: {
      type: Boolean,
      default: undefined,
    },
    auroraSwipeBackAnimateOpacity: {
      type: Boolean,
      default: undefined,
    },
    auroraSwipeBackActiveArea: Number,
    auroraSwipeBackThreshold: Number,
    // Push State
    browserHistory: {
      type: Boolean,
      default: undefined,
    },
    browserHistoryRoot: String,
    browserHistoryAnimate: {
      type: Boolean,
      default: undefined,
    },
    browserHistoryAnimateOnLoad: {
      type: Boolean,
      default: undefined,
    },
    browserHistorySeparator: String,
    browserHistoryOnLoad: {
      type: Boolean,
      default: undefined,
    },
    browserHistoryInitialMatch: {
      type: Boolean,
      default: true,
    },
    browserHistoryStoreHistory: {
      type: Boolean,
      default: undefined,
    },
    // Animate Pages
    animate: {
      type: Boolean,
      default: undefined,
    },
    transition: String,
    // iOS Dynamic Navbar
    iosDynamicNavbar: {
      type: Boolean,
      default: undefined,
    },
    // Animate iOS Navbar Back Icon
    iosAnimateNavbarBackIcon: {
      type: Boolean,
      default: undefined,
    },
    // MD Theme delay
    materialPageLoadDelay: Number,

    passRouteQueryToRequest: {
      type: Boolean,
      default: undefined,
    },
    passRouteParamsToRequest: {
      type: Boolean,
      default: undefined,
    },
    routes: Array,
    routesAdd: Array,

    // Routes hooks
    routesBeforeEnter: [Function, Array],
    routesBeforeLeave: [Function, Array],

    init: {
      type: Boolean,
      default: true,
    },
    ...colorProps,
  },
  emits: [
    'view:init',
    'view:resize',
    'swipeback:move',
    'swipeback:beforechange',
    'swipeback:afterchange',
    'swipeback:beforereset',
    'swipeback:afterreset',
    'tab:hide',
    'tab:show',
  ],
  setup(props, { emit, slots }) {
    const initialPageComponent = null;
    const shouldInitRouter = !(props.initRouterOnTabShow && props.tab && !props.tabActive);

    let cbxView = null;
    const elRef = ref(null);
    let routerData = null;

    let initialPage;
    let initialRoute;

    const onViewInit = (view) => {
      emit('view:init', view);
      if (!props.init) {
        routerData.instance = view;
        cbxView = routerData.instance;
      }
    };

    const getViewParams = () => {
      const routes = toRaw(props.routes || []);
      const routesAdd = toRaw(props.routesAdd || []);
      return noUndefinedProps({ ...props, routes, routesAdd });
    };

    if (cbx && !cbxView && props.init) {
      const routerId = getRouterId();
      cbxView = cbx.views.create(elRef.value, {
        ...getViewParams(),
        routerId,
        init: false,
        on: {
          init: onViewInit,
        },
      });
      routerData = {
        routerId,
        instance: cbxView,
      };
      cbxrouters.views.push(routerData);
      if (shouldInitRouter && cbxView && cbxView.router && (props.url || props.main)) {
        const initialData = getRouterInitialComponent(cbxView.router, initialPageComponent);
        initialPage = initialData.initialPage;
        initialRoute = initialData.initialRoute;
        if (initialRoute && initialRoute.route && initialRoute.route.masterRoute) {
          initialPage = undefined;
          initialRoute = undefined;
        }
      }
    }

    const pages = ref(initialPage ? [initialPage] : []);
    const setPages = (newPages) => {
      newPages.forEach((page) => {
        // eslint-disable-next-line
        page.component = toRaw(page.component);
      });
      pages.value = newPages;
    };

    const onResize = (view, width) => {
      emit('view:resize', width);
    };
    const onSwipeBackMove = (data) => {
      const swipeBackData = data;
      emit('swipeback:move', swipeBackData);
    };
    const onSwipeBackBeforeChange = (data) => {
      const swipeBackData = data;
      emit('swipeback:beforechange', swipeBackData);
    };
    const onSwipeBackAfterChange = (data) => {
      const swipeBackData = data;
      emit('swipeback:afterchange', swipeBackData);
    };
    const onSwipeBackBeforeReset = (data) => {
      const swipeBackData = data;
      emit('swipeback:beforereset', swipeBackData);
    };
    const onSwipeBackAfterReset = (data) => {
      const swipeBackData = data;
      emit('swipeback:afterreset', swipeBackData);
    };

    onMounted(() => {
      cbxready(() => {
        if (cbxView) {
          routerData.el = elRef.value;
          routerData.pages = pages.value;
          routerData.setPages = (newPages) => {
            setPages([...newPages]);
          };
          if (initialPage && initialPage.isAsync && !initialPage.initialComponent) {
            initialPage.component().then(() => {
              setTimeout(() => {
                cbxView.init(elRef.value);
                if (initialPage) {
                  initialPage.el = cbxView.router.currentPageEl;
                  if (initialRoute && initialRoute.route && initialRoute.route.keepAlive) {
                    initialRoute.route.keepAliveData = { pageEl: initialPage.el };
                  }
                }
              }, 100);
            });
          } else {
            cbxView.init(elRef.value);
            if (initialPage) {
              initialPage.el = cbxView.router.currentPageEl;
              if (initialRoute && initialRoute.route && initialRoute.route.keepAlive) {
                initialRoute.route.keepAliveData = { pageEl: initialPage.el };
              }
            }
          }
        } else {
          const routerId = getRouterId();
          routerData = {
            el: elRef.value,
            routerId,
            pages: pages.value,
            instance: cbxView,
            setPages(newPages) {
              setPages([...newPages]);
            },
          };
          cbxrouters.views.push(routerData);
          routerData.instance = cbx.views.create(elRef.value, {
            routerId,
            ...getViewParams(),
            on: {
              init: onViewInit,
            },
          });
          cbxView = routerData.instance;
        }

        if (!props.init) return;

        cbxView.on('resize', onResize);
        cbxView.on('swipebackMove', onSwipeBackMove);
        cbxView.on('swipebackBeforeChange', onSwipeBackBeforeChange);
        cbxView.on('swipebackAfterChange', onSwipeBackAfterChange);
        cbxView.on('swipebackBeforeReset', onSwipeBackBeforeReset);
        cbxView.on('swipebackAfterReset', onSwipeBackAfterReset);
      });
    });

    onBeforeUnmount(() => {
      if (cbxView) {
        cbxView.off('resize', onResize);
        cbxView.off('swipebackMove', onSwipeBackMove);
        cbxView.off('swipebackBeforeChange', onSwipeBackBeforeChange);
        cbxView.off('swipebackAfterChange', onSwipeBackAfterChange);
        cbxView.off('swipebackBeforeReset', onSwipeBackBeforeReset);
        cbxView.off('swipebackAfterReset', onSwipeBackAfterReset);
        if (cbxView.destroy) cbxView.destroy();
        cbxView = null;
      }

      cbxrouters.views.splice(cbxrouters.views.indexOf(routerData), 1);
      routerData = null;
    });

    onUpdated(() => {
      if (!routerData || !cbx) return;
      cbxevents.emit('viewRouterDidUpdate', routerData);
    });

    useTab(elRef, emit);

    const classes = computed(() =>
      classNames(
        'view',
        {
          'view-main': props.main,
          'tab-active': props.tabActive,
          tab: props.tab,
        },
        colorClasses(props),
      ),
    );

    const getComponent = (page) => toRaw(page.component);
    const getProps = (page) => {
      const { component: pageComponent, props: pageProps } = page;
      let keys = [];
      const passProps = {};
      if (pageComponent && pageComponent.props) keys = Object.keys(pageComponent.props);
      keys.forEach((key) => {
        if (key in pageProps) passProps[key] = pageProps[key];
      });
      return passProps;
    };

    return () => {
      return h('div', { ref: elRef, class: classes.value }, [
        slots.default && slots.default(),
        ...pages.value.map((page) =>
          h(getComponent(page), {
            key: page.id,
            ...getProps(page),
          }),
        ),
      ]);
    };
  },
};
</script>
