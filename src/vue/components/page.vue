<script>
import { computed, ref, onMounted, onBeforeUnmount, h } from 'vue';
import { classNames } from '../shared/utils.js';
import { colorClasses, colorProps } from '../shared/mixins.js';
import { cbxready, cbx } from '../shared/cbx.js';
import cbxPageContent from './page-content.js';

export default {
  name: 'cbx-page',
  props: {
    name: String,
    stacked: Boolean,
    withSubnavbar: {
      type: Boolean,
      default: undefined,
    },
    subnavbar: {
      type: Boolean,
      default: undefined,
    },
    withNavbarLarge: {
      type: Boolean,
      default: undefined,
    },
    navbarLarge: {
      type: Boolean,
      default: undefined,
    },
    noNavbar: Boolean,
    noToolbar: Boolean,
    tabs: Boolean,
    pageContent: {
      type: Boolean,
      default: true,
    },
    noSwipeback: Boolean,
    // Page Content Props
    ptr: Boolean,
    ptrDistance: Number,
    ptrPreloader: {
      type: Boolean,
      default: true,
    },
    ptrBottom: Boolean,
    ptrMousewheel: Boolean,
    infinite: Boolean,
    infiniteTop: Boolean,
    infiniteDistance: Number,
    infinitePreloader: {
      type: Boolean,
      default: true,
    },
    hideBarsOnScroll: Boolean,
    hideNavbarOnScroll: Boolean,
    hideToolbarOnScroll: Boolean,
    messagesContent: Boolean,
    loginScreen: Boolean,
    ...colorProps,
  },
  emits: [
    'page:mounted',
    'page:init',
    'page:reinit',
    'page:beforein',
    'page:beforeout',
    'page:afterout',
    'page:afterin',
    'page:beforeremove',
    'page:beforeunmount',
    'page:tabshow',
    'page:tabhide',
    'ptr:pullstart',
    'ptr:pullmove',
    'ptr:pullend',
    'ptr:refresh',
    'ptr:done',
    'infinite',
  ],
  setup(props, { emit, slots }) {
    let hasSubnavbar = false;
    let hasNavbarLarge = false;
    let hasNavbarLargeCollapsed = false;
    let hasCardExpandableOpened = false;
    let routerPositionClass = '';
    let routerForceUnstack = false;
    let routerPageRole = null;
    let routerPageRoleDetailRoot = false;
    let routerPageMasterStack = false;

    const elRef = ref(null);

    // Main Page Events
    const onPageMounted = (page) => {
      if (elRef.value !== page.el) return;
      emit('page:mounted', page);
    };
    const onPageInit = (page) => {
      if (elRef.value !== page.el) return;
      if (typeof props.withSubnavbar === 'undefined' && typeof props.subnavbar === 'undefined') {
        if (
          (page.$navbarEl && page.$navbarEl.length && page.$navbarEl.find('.subnavbar').length) ||
          page.$el.children('.navbar').find('.subnavbar').length
        ) {
          hasSubnavbar = true;
        }
      }

      if (
        typeof props.withNavbarLarge === 'undefined' &&
        typeof props.navbarLarge === 'undefined'
      ) {
        if (page.$navbarEl && page.$navbarEl.hasClass('navbar-large')) {
          hasNavbarLarge = true;
        }
      }

      emit('page:init', page);
    };
    const onPageReinit = (page) => {
      if (elRef.value !== page.el) return;
      emit('page:reinit', page);
    };
    const onPageBeforeIn = (page) => {
      if (elRef.value !== page.el) return;
      if (!page.swipeBack) {
        if (page.from === 'next') {
          routerPositionClass = 'page-next';
        }
        if (page.from === 'previous') {
          routerPositionClass = 'page-previous';
        }
      }
      emit('page:beforein', page);
    };
    const onPageBeforeOut = (page) => {
      if (elRef.value !== page.el) return;
      emit('page:beforeout', page);
    };
    const onPageAfterOut = (page) => {
      if (elRef.value !== page.el) return;
      if (page.to === 'next') {
        routerPositionClass = 'page-next';
      }
      if (page.to === 'previous') {
        routerPositionClass = 'page-previous';
      }
      emit('page:afterout', page);
    };
    const onPageAfterIn = (page) => {
      if (elRef.value !== page.el) return;
      routerPositionClass = 'page-current';
      emit('page:afterin', page);
    };
    const onPageBeforeRemove = (page) => {
      if (elRef.value !== page.el) return;
      emit('page:beforeremove', page);
    };
    const onPageBeforeUnmount = (page) => {
      if (elRef.value !== page.el) return;
      emit('page:beforeunmount', page);
    };
    // Helper events
    const onPageStack = (pageEl) => {
      if (elRef.value !== pageEl) return;
      routerForceUnstack = false;
    };
    const onPageUnstack = (pageEl) => {
      if (elRef.value !== pageEl) return;
      routerForceUnstack = true;
    };
    const onPagePosition = (pageEl, position) => {
      if (elRef.value !== pageEl) return;
      routerPositionClass = `page-${position}`;
    };
    const onPageRole = (pageEl, rolesData) => {
      if (elRef.value !== pageEl) return;
      routerPageRole = rolesData.role;
      routerPageRoleDetailRoot = rolesData.detailRoot;
    };
    const onPageMasterStack = (pageEl) => {
      if (elRef.value !== pageEl) return;
      routerPageMasterStack = true;
    };
    const onPageMasterUnstack = (pageEl) => {
      if (elRef.value !== pageEl) return;
      routerPageMasterStack = false;
    };
    const onPageNavbarLargeCollapsed = (pageEl) => {
      if (elRef.value !== pageEl) return;
      hasNavbarLargeCollapsed = true;
    };
    const onPageNavbarLargeExpanded = (pageEl) => {
      if (elRef.value !== pageEl) return;
      hasNavbarLargeCollapsed = false;
    };
    const onCardOpened = (cardEl, pageEl) => {
      if (elRef.value !== pageEl) return;
      hasCardExpandableOpened = true;
    };
    const onCardClose = (cardEl, pageEl) => {
      if (elRef.value !== pageEl) return;
      hasCardExpandableOpened = false;
    };
    const onPageTabShow = (pageEl) => {
      if (elRef.value !== pageEl) return;
      emit('page:tabshow');
    };
    const onPageTabHide = (pageEl) => {
      if (elRef.value !== pageEl) return;
      emit('page:tabhide');
    };

    const onPtrPullStart = () => {
      emit('ptr:pullstart');
    };
    const onPtrPullMove = () => {
      emit('ptr:pullmove');
    };
    const onPtrPullEnd = () => {
      emit('ptr:pullend');
    };
    const onPtrRefresh = (done) => {
      emit('ptr:refresh', done);
    };
    const onPtrDone = () => {
      emit('ptr:done');
    };
    const onInfinite = () => {
      emit('infinite');
    };

    onMounted(() => {
      cbxready(() => {
        cbx.on('pageMounted', onPageMounted);
        cbx.on('pageInit', onPageInit);
        cbx.on('pageReinit', onPageReinit);
        cbx.on('pageBeforeIn', onPageBeforeIn);
        cbx.on('pageBeforeOut', onPageBeforeOut);
        cbx.on('pageAfterOut', onPageAfterOut);
        cbx.on('pageAfterIn', onPageAfterIn);
        cbx.on('pageBeforeRemove', onPageBeforeRemove);
        cbx.on('pageBeforeUnmount', onPageBeforeUnmount);
        cbx.on('pageStack', onPageStack);
        cbx.on('pageUnstack', onPageUnstack);
        cbx.on('pagePosition', onPagePosition);
        cbx.on('pageRole', onPageRole);
        cbx.on('pageMasterStack', onPageMasterStack);
        cbx.on('pageMasterUnstack', onPageMasterUnstack);
        cbx.on('pageNavbarLargeCollapsed', onPageNavbarLargeCollapsed);
        cbx.on('pageNavbarLargeExpanded', onPageNavbarLargeExpanded);
        cbx.on('cardOpened', onCardOpened);
        cbx.on('cardClose', onCardClose);
        cbx.on('pageTabShow', onPageTabShow);
        cbx.on('pageTabHide', onPageTabHide);
      });
    });

    onBeforeUnmount(() => {
      if (!cbx) return;
      cbx.off('pageMounted', onPageMounted);
      cbx.off('pageInit', onPageInit);
      cbx.off('pageReinit', onPageReinit);
      cbx.off('pageBeforeIn', onPageBeforeIn);
      cbx.off('pageBeforeOut', onPageBeforeOut);
      cbx.off('pageAfterOut', onPageAfterOut);
      cbx.off('pageAfterIn', onPageAfterIn);
      cbx.off('pageBeforeRemove', onPageBeforeRemove);
      cbx.off('pageBeforeUnmount', onPageBeforeUnmount);
      cbx.off('pageStack', onPageStack);
      cbx.off('pageUnstack', onPageUnstack);
      cbx.off('pagePosition', onPagePosition);
      cbx.off('pageRole', onPageRole);
      cbx.off('pageMasterStack', onPageMasterStack);
      cbx.off('pageMasterUnstack', onPageMasterUnstack);
      cbx.off('pageNavbarLargeCollapsed', onPageNavbarLargeCollapsed);
      cbx.off('pageNavbarLargeExpanded', onPageNavbarLargeExpanded);
      cbx.off('cardOpened', onCardOpened);
      cbx.off('cardClose', onCardClose);
      cbx.off('pageTabShow', onPageTabShow);
      cbx.off('pageTabHide', onPageTabHide);
    });

    const classes = computed(() =>
      classNames(
        'page',
        routerPositionClass,
        {
          stacked: props.stacked && !routerForceUnstack,
          tabs: props.tabs,
          'page-with-subnavbar': props.subnavbar || props.withSubnavbar,
          'page-with-navbar-large': props.navbarLarge || props.withNavbarLarge,
          'no-navbar': props.noNavbar,
          'no-toolbar': props.noToolbar,
          'no-swipeback': props.noSwipeback,
          'page-master': routerPageRole === 'master',
          'page-master-detail': routerPageRole === 'detail',
          'page-master-detail-root': routerPageRoleDetailRoot === true,
          'page-master-stacked': routerPageMasterStack === true,
          'page-with-navbar-large-collapsed': hasNavbarLargeCollapsed === true,
          'page-with-card-opened': hasCardExpandableOpened === true,
          'login-screen-page': props.loginScreen,
        },
        colorClasses(props),
      ),
    );

    const fixedTags = 'navbar toolbar tabbar subnavbar searchbar messagebar fab list-index panel'
      .split(' ')
      .map((tagName) => `cbx-${tagName}`);

    return () => {
      const fixedList = [];
      const staticList = [];
      const { static: slotsStatic, fixed: slotsFixed, default: slotsDefault } = slots;

      let hasSubnavbarComputed = false;
      let hasNavbarLargeComputed = false;
      let hasMessages = props.messagesContent;
      const slotsDefaultRendered = slotsDefault && slotsDefault();
      if (slotsDefaultRendered) {
        slotsDefaultRendered.forEach((vnode) => {
          if (typeof vnode === 'undefined') return;
          const tag = vnode.type && vnode.type.name ? vnode.type.name : vnode.type;
          let isFixedTag = false;
          if (!tag) {
            if (props.pageContent || props.pageContent === '') staticList.push(vnode);
            return;
          }
          if (tag === 'cbx-subnavbar') hasSubnavbarComputed = true;
          if (tag === 'cbx-navbar') {
            if (vnode.props && (vnode.props.large || vnode.props.large === ''))
              hasNavbarLargeComputed = true;
          }
          if (typeof hasMessages === 'undefined' && tag === 'cbx-messages') hasMessages = true;
          if (fixedTags.indexOf(tag) >= 0) {
            isFixedTag = true;
          }

          if (props.pageContent) {
            if (isFixedTag) fixedList.push(vnode);
            else staticList.push(vnode);
          }
        });
      }

      let classesValue = classes.value;

      if (
        (hasSubnavbarComputed || hasSubnavbar) &&
        typeof props.subnavbar === 'undefined' &&
        typeof props.withSubnavbar === 'undefined' &&
        classesValue.indexOf('page-with-subnavbar') < 0
      ) {
        classesValue += ' page-with-subnavbar';
      }

      if (
        (hasNavbarLargeComputed || hasNavbarLarge) &&
        typeof props.navbarLarge === 'undefined' &&
        typeof props.withNavbarLarge === 'undefined' &&
        classesValue.indexOf('page-with-navbar-large') < 0
      ) {
        classesValue += ' page-with-navbar-large';
      }

      if (!props.pageContent) {
        return h('div', { class: classesValue, ref: elRef, 'data-name': props.name }, [
          slotsFixed && slotsFixed(),
          slotsStatic && slotsStatic(),
          slotsDefault && slotsDefaultRendered,
        ]);
      }

      return h('div', { class: classesValue, ref: elRef, 'data-name': props.name }, [
        fixedList,
        slotsFixed && slotsFixed(),
        h(
          cbxPageContent,
          {
            ptr: props.ptr,
            ptrDistance: props.ptrDistance,
            ptrPreloader: props.ptrPreloader,
            ptrBottom: props.ptrBottom,
            ptrMousewheel: props.ptrMousewheel,
            infinite: props.infinite,
            infiniteTop: props.infiniteTop,
            infiniteDistance: props.infiniteDistance,
            infinitePreloader: props.infinitePreloader,
            hideBarsOnScroll: props.hideBarsOnScroll,
            hideNavbarOnScroll: props.hideNavbarOnScroll,
            hideToolbarOnScroll: props.hideToolbarOnScroll,
            messagesContent: props.messagesContent || hasMessages,
            loginScreen: props.loginScreen,
            onPtrPullStart,
            onPtrPullMove,
            onPtrPullEnd,
            onPtrRefresh,
            onPtrDone,
            onInfinite,
          },
          () => [slotsStatic && slotsStatic(), staticList],
        ),
      ]);
    };
  },
};
</script>
