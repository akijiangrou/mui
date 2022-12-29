/* eslint no-underscore-dangle: "off" */
import { cbxevents, cbxrouters } from './cbx.js';
import { extend, getComponentId } from './utils.js';
import { routerOpenIn } from './router-open-in.js';

const getChildrenArray = (el) => {
  const arr = [];
  for (let i = 0; i < el.children.length; i += 1) {
    arr.push(el.children[i]);
  }
  return arr;
};
const hasSameChildren = (childrenBefore, childrenAfter) => {
  if (childrenBefore.length !== childrenAfter.length) return false;
  const set = new Set([...childrenBefore, ...childrenAfter]);
  if (set.size === childrenBefore.length) return true;
  return false;
};

export default {
  proto: {
    openIn(router, navigateUrl, options) {
      return routerOpenIn(router, navigateUrl, options);
    },
    pageComponentLoader({ routerEl, component, options, resolve, reject }) {
      const router = this;
      const routerId = router.id;
      const el = routerEl;
      let viewRouter;
      cbxrouters.views.forEach((data) => {
        if ((data.el && data.el === routerEl) || (data.routerId && data.routerId === routerId)) {
          viewRouter = data;
        }
      });

      if (!viewRouter) {
        reject();
        return;
      }

      const pageData = {
        component,
        id: getComponentId(),
        props: extend(
          {
            cbxroute: options.route,
            cbxrouter: router,
          },
          options.route.params,
          options.props || {},
        ),
      };

      let resolved;

      const childrenBefore = getChildrenArray(el);
      function onDidUpdate(componentRouterData) {
        if (componentRouterData !== viewRouter || resolved) return;
        const childrenAfter = getChildrenArray(el);
        if (hasSameChildren(childrenBefore, childrenAfter)) return;
        cbxevents.off('viewRouterDidUpdate', onDidUpdate);

        const pageEl = el.children[el.children.length - 1];
        pageData.el = pageEl;

        resolve(pageEl);
        resolved = true;
      }

      cbxevents.on('viewRouterDidUpdate', onDidUpdate);

      viewRouter.pages.push(pageData);
      viewRouter.setPages(viewRouter.pages);
    },
    removePage($pageEl) {
      if (!$pageEl) return;
      const router = this;
      let cbxPage;
      if ('length' in $pageEl && $pageEl[0]) cbxPage = $pageEl[0].cbxPage;
      else cbxPage = $pageEl.cbxPage;
      if (cbxPage && cbxPage.route && cbxPage.route.route && cbxPage.route.route.keepAlive) {
        router.app.$($pageEl).remove();
        return;
      }
      let viewRouter;
      cbxrouters.views.forEach((data) => {
        if (data.el && data.el === router.el) {
          viewRouter = data;
        }
      });

      let pageEl;
      if ('length' in $pageEl) {
        // Dom7
        if ($pageEl.length === 0) return;
        pageEl = $pageEl[0];
      } else {
        pageEl = $pageEl;
      }
      if (!pageEl) return;

      let pageComponentFound;
      viewRouter.pages.forEach((page, index) => {
        if (page.el === pageEl) {
          pageComponentFound = true;
          viewRouter.pages.splice(index, 1);
          viewRouter.setPages(viewRouter.pages);
        }
      });
      if (!pageComponentFound) {
        pageEl.parentNode.removeChild(pageEl);
      }
    },
    tabComponentLoader({ tabEl, component, options, resolve, reject } = {}) {
      const router = this;
      if (!tabEl) reject();

      let tabRouter;
      cbxrouters.tabs.forEach((tabData) => {
        if (tabData.el && tabData.el === tabEl) {
          tabRouter = tabData;
        }
      });
      if (!tabRouter) {
        reject();
        return;
      }

      const id = getComponentId();
      const tabContent = {
        id,
        component,
        props: extend(
          {
            cbxroute: options.route,
            cbxrouter: router,
          },
          (options.route.route &&
            options.route.route.tab &&
            options.route.route.tab.options &&
            options.route.route.tab.options.props) ||
            {},
          options.route.params,
          options.props || {},
        ),
      };

      let resolved;
      function onDidUpdate(componentRouterData) {
        if (componentRouterData !== tabRouter || resolved) return;
        cbxevents.off('tabRouterDidUpdate', onDidUpdate);

        const tabContentEl = tabEl.children[0];
        resolve(tabContentEl);

        resolved = true;
      }

      cbxevents.on('tabRouterDidUpdate', onDidUpdate);

      tabRouter.setTabContent(tabContent);
    },
    removeTabContent(tabEl) {
      if (!tabEl) return;

      let tabRouter;
      cbxrouters.tabs.forEach((tabData) => {
        if (tabData.el && tabData.el === tabEl) {
          tabRouter = tabData;
        }
      });
      if (!tabRouter) {
        tabEl.innerHTML = ''; // eslint-disable-line
        return;
      }
      tabRouter.setTabContent(null);
    },
    modalComponentLoader({ component, options, resolve, reject } = {}) {
      const router = this;
      const modalsRouter = cbxrouters.modals;

      if (!modalsRouter) {
        reject();
        return;
      }

      const modalData = {
        component,
        id: getComponentId(),
        props: extend(
          {
            cbxroute: options.route,
            cbxrouter: router,
          },
          options.route.params,
          options.props || {},
        ),
      };

      let resolved;
      function onDidUpdate() {
        if (resolved) return;
        cbxevents.off('modalsRouterDidUpdate', onDidUpdate);

        const modalEl = modalsRouter.el.children[modalsRouter.el.children.length - 1];
        modalData.el = modalEl;

        resolve(modalEl);
        resolved = true;
      }

      cbxevents.on('modalsRouterDidUpdate', onDidUpdate);

      modalsRouter.modals.push(modalData);
      modalsRouter.setModals(modalsRouter.modals);
    },
    removeModal(modalEl) {
      const modalsRouter = cbxrouters.modals;
      if (!modalsRouter) return;

      let modalDataToRemove;
      modalsRouter.modals.forEach((modalData) => {
        if (modalData.el === modalEl) modalDataToRemove = modalData;
      });

      modalsRouter.modals.splice(modalsRouter.modals.indexOf(modalDataToRemove), 1);
      modalsRouter.setModals(modalsRouter.modals);
    },
  },
};
