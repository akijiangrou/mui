<template>
  <cbx-page class="page-home" @page:afterin="onPageAfterIn">
    <cbx-navbar large transparent :sliding="false">
      <cbx-nav-left>
        <cbx-link
          panel-open="left"
          icon-ios="cbx:menu"
          icon-aurora="cbx:menu"
          icon-md="material:menu"
        ></cbx-link>
      </cbx-nav-left>
      <cbx-nav-title sliding>Xui Vue</cbx-nav-title>
      <cbx-nav-right>
        <cbx-link
          class="searchbar-enable"
          data-searchbar=".searchbar-components"
          icon-ios="cbx:search"
          icon-aurora="cbx:search"
          icon-md="material:search"
        ></cbx-link>
      </cbx-nav-right>
      <cbx-nav-title-large>Xui Vue</cbx-nav-title-large>
      <cbx-searchbar
        class="searchbar-components"
        search-container=".components-list"
        search-in="a"
        expandable
        :disable-button="!theme.aurora"
      ></cbx-searchbar>
    </cbx-navbar>

    <cbx-list class="searchbar-hide-on-search">
      <cbx-list-item title="About Xui" reload-detail link="/about/">
        <template #media>
          <cbx-icon icon="icon-cbx" />
        </template>
      </cbx-list-item>
    </cbx-list>

    <cbx-block-title medium class="searchbar-found">组件</cbx-block-title>
    <cbx-list class="components-list searchbar-found">
      <cbx-list-item reload-detail link="/accordion/" title="Accordion">
        <template #media>
          <cbx-icon icon="icon-cbx" />
        </template>
      </cbx-list-item>
      <cbx-list-item reload-detail link="/action-sheet/" title="Action Sheet">
        <template #media>
          <cbx-icon icon="icon-cbx" />
        </template>
      </cbx-list-item>
      <cbx-list-item reload-detail link="/appbar/" title="Appbar">
        <template #media>
          <cbx-icon icon="icon-cbx" />
        </template>
      </cbx-list-item>
      <cbx-list-item reload-detail link="/area-chart/" title="Area Chart">
        <template #media>
          <cbx-icon icon="icon-cbx" />
        </template>
      </cbx-list-item>
      <cbx-list-item reload-detail link="/autocomplete/" title="Autocomplete">
        <template #media>
          <cbx-icon icon="icon-cbx" />
        </template>
      </cbx-list-item>
      <cbx-list-item reload-detail link="/badge/" title="Badge">
        <template #media>
          <cbx-icon icon="icon-cbx" />
        </template>
      </cbx-list-item>
      <cbx-list-item reload-detail link="/breadcrumbs/" title="Breadcrumbs">
        <template #media>
          <cbx-icon icon="icon-cbx" />
        </template>
      </cbx-list-item>
      <cbx-list-item reload-detail link="/buttons/" title="Buttons">
        <template #media>
          <cbx-icon icon="icon-cbx" />
        </template>
      </cbx-list-item>
      <cbx-list-item reload-detail link="/calendar/" title="Calendar / Date Picker">
        <template #media>
          <cbx-icon icon="icon-cbx" />
        </template>
      </cbx-list-item>
      <cbx-list-item reload-detail link="/cards/" title="Cards">
        <template #media>
          <cbx-icon icon="icon-cbx" />
        </template>
      </cbx-list-item>
      <cbx-list-item reload-detail link="/cards-expandable/" title="Cards Expandable">
        <template #media>
          <cbx-icon icon="icon-cbx" />
        </template>
      </cbx-list-item>
      <cbx-list-item reload-detail link="/checkbox/" title="Checkbox">
        <template #media>
          <cbx-icon icon="icon-cbx" />
        </template>
      </cbx-list-item>
      <cbx-list-item reload-detail link="/chips/" title="Chips/Tags">
        <template #media>
          <cbx-icon icon="icon-cbx" />
        </template>
      </cbx-list-item>
      <cbx-list-item reload-detail link="/color-picker/" title="Color Picker">
        <template #media>
          <cbx-icon icon="icon-cbx" />
        </template>
      </cbx-list-item>
      <cbx-list-item reload-detail link="/contacts-list/" title="Contacts List">
        <template #media>
          <cbx-icon icon="icon-cbx" />
        </template>
      </cbx-list-item>
      <cbx-list-item reload-detail link="/content-block/" title="Content Block">
        <template #media>
          <cbx-icon icon="icon-cbx" />
        </template>
      </cbx-list-item>
      <cbx-list-item reload-detail link="/data-table/" title="Data Table">
        <template #media>
          <cbx-icon icon="icon-cbx" />
        </template>
      </cbx-list-item>
      <cbx-list-item reload-detail link="/dialog/" title="Dialog">
        <template #media>
          <cbx-icon icon="icon-cbx" />
        </template>
      </cbx-list-item>
      <cbx-list-item reload-detail link="/elevation/" title="Elevation">
        <template #media>
          <cbx-icon icon="icon-cbx" />
        </template>
      </cbx-list-item>
      <cbx-list-item reload-detail link="/fab/" title="FAB">
        <template #media>
          <cbx-icon icon="icon-cbx" />
        </template>
      </cbx-list-item>
      <cbx-list-item reload-detail link="/fab-morph/" title="FAB Morph">
        <template #media>
          <cbx-icon icon="icon-cbx" />
        </template>
      </cbx-list-item>
      <cbx-list-item reload-detail link="/form-storage/" title="Form Storage">
        <template #media>
          <cbx-icon icon="icon-cbx" />
        </template>
      </cbx-list-item>
      <cbx-list-item reload-detail link="/gauge/" title="Gauge">
        <template #media>
          <cbx-icon icon="icon-cbx" />
        </template>
      </cbx-list-item>
      <cbx-list-item reload-detail link="/grid/" title="Grid / Layout Grid">
        <template #media>
          <cbx-icon icon="icon-cbx" />
        </template>
      </cbx-list-item>
      <cbx-list-item reload-detail link="/icons/" title="Icons">
        <template #media>
          <cbx-icon icon="icon-cbx" />
        </template>
      </cbx-list-item>
      <cbx-list-item reload-detail link="/infinite-scroll/" title="Infinite Scroll">
        <template #media>
          <cbx-icon icon="icon-cbx" />
        </template>
      </cbx-list-item>
      <cbx-list-item reload-detail link="/inputs/" title="Inputs">
        <template #media>
          <cbx-icon icon="icon-cbx" />
        </template>
      </cbx-list-item>
      <cbx-list-item reload-detail link="/lazy-load/" title="Lazy Load">
        <template #media>
          <cbx-icon icon="icon-cbx" />
        </template>
      </cbx-list-item>
      <cbx-list-item reload-detail link="/list/" title="List View">
        <template #media>
          <cbx-icon icon="icon-cbx" />
        </template>
      </cbx-list-item>
      <cbx-list-item reload-detail link="/list-index/" title="List Index">
        <template #media>
          <cbx-icon icon="icon-cbx" />
        </template>
      </cbx-list-item>
      <cbx-list-item reload-detail link="/login-screen/" title="Login Screen">
        <template #media>
          <cbx-icon icon="icon-cbx" />
        </template>
      </cbx-list-item>
      <cbx-list-item reload-detail link="/menu/" title="Menu">
        <template #media>
          <cbx-icon icon="icon-cbx" />
        </template>
      </cbx-list-item>
      <cbx-list-item reload-detail link="/menu-list/" title="Menu List">
        <template #media>
          <cbx-icon icon="icon-cbx" />
        </template>
      </cbx-list-item>
      <cbx-list-item reload-detail link="/messages/" title="Messages">
        <template #media>
          <cbx-icon icon="icon-cbx" />
        </template>
      </cbx-list-item>
      <cbx-list-item reload-detail link="/navbar/" title="Navbar">
        <template #media>
          <cbx-icon icon="icon-cbx" />
        </template>
      </cbx-list-item>
      <cbx-list-item reload-detail link="/notifications/" title="Notifications">
        <template #media>
          <cbx-icon icon="icon-cbx" />
        </template>
      </cbx-list-item>
      <cbx-list-item reload-detail link="/panel/" title="Panel / Side Panels">
        <template #media>
          <cbx-icon icon="icon-cbx" />
        </template>
      </cbx-list-item>
      <cbx-list-item reload-detail link="/photo-browser/" title="Photo Browser">
        <template #media>
          <cbx-icon icon="icon-cbx" />
        </template>
      </cbx-list-item>
      <cbx-list-item reload-detail link="/picker/" title="Picker">
        <template #media>
          <cbx-icon icon="icon-cbx" />
        </template>
      </cbx-list-item>
      <cbx-list-item reload-detail link="/pie-chart/" title="Pie Chart">
        <template #media>
          <cbx-icon icon="icon-cbx" />
        </template>
      </cbx-list-item>
      <cbx-list-item reload-detail link="/popover/" title="Popover">
        <template #media>
          <cbx-icon icon="icon-cbx" />
        </template>
      </cbx-list-item>
      <cbx-list-item reload-detail link="/popup/" title="Popup">
        <template #media>
          <cbx-icon icon="icon-cbx" />
        </template>
      </cbx-list-item>
      <cbx-list-item reload-detail link="/preloader/" title="Preloader">
        <template #media>
          <cbx-icon icon="icon-cbx" />
        </template>
      </cbx-list-item>
      <cbx-list-item reload-detail link="/progressbar/" title="Progress Bar">
        <template #media>
          <cbx-icon icon="icon-cbx" />
        </template>
      </cbx-list-item>
      <cbx-list-item reload-detail link="/pull-to-refresh/" title="Pull To Refresh">
        <template #media>
          <cbx-icon icon="icon-cbx" />
        </template>
      </cbx-list-item>
      <cbx-list-item reload-detail link="/radio/" title="Radio">
        <template #media>
          <cbx-icon icon="icon-cbx" />
        </template>
      </cbx-list-item>
      <cbx-list-item reload-detail link="/range/" title="Range Slider">
        <template #media>
          <cbx-icon icon="icon-cbx" />
        </template>
      </cbx-list-item>
      <cbx-list-item reload-detail link="/searchbar/" title="Searchbar">
        <template #media>
          <cbx-icon icon="icon-cbx" />
        </template>
      </cbx-list-item>
      <cbx-list-item reload-detail link="/searchbar-expandable/" title="Searchbar Expandable">
        <template #media>
          <cbx-icon icon="icon-cbx" />
        </template>
      </cbx-list-item>
      <cbx-list-item reload-detail link="/sheet-modal/" title="Sheet Modal">
        <template #media>
          <cbx-icon icon="icon-cbx" />
        </template>
      </cbx-list-item>
      <cbx-list-item reload-detail link="/skeleton/" title="Skeleton (Ghost) Elements">
        <template #media>
          <cbx-icon icon="icon-cbx" />
        </template>
      </cbx-list-item>
      <cbx-list-item reload-detail link="/smart-select/" title="Smart Select">
        <template #media>
          <cbx-icon icon="icon-cbx" />
        </template>
      </cbx-list-item>
      <cbx-list-item reload-detail link="/sortable/" title="Sortable List">
        <template #media>
          <cbx-icon icon="icon-cbx" />
        </template>
      </cbx-list-item>
      <cbx-list-item reload-detail link="/stepper/" title="Stepper">
        <template #media>
          <cbx-icon icon="icon-cbx" />
        </template>
      </cbx-list-item>
      <cbx-list-item reload-detail link="/subnavbar/" title="Subnavbar">
        <template #media>
          <cbx-icon icon="icon-cbx" />
        </template>
      </cbx-list-item>
      <cbx-list-item reload-detail link="/swipeout/" title="Swipeout (Swipe To Delete)">
        <template #media>
          <cbx-icon icon="icon-cbx" />
        </template>
      </cbx-list-item>
      <cbx-list-item reload-detail link="/swiper/" title="Swiper Slider">
        <template #media>
          <cbx-icon icon="icon-cbx" />
        </template>
      </cbx-list-item>
      <cbx-list-item reload-detail link="/tabs/" title="Tabs">
        <template #media>
          <cbx-icon icon="icon-cbx" />
        </template>
      </cbx-list-item>
      <cbx-list-item reload-detail link="/text-editor/" title="Text Editor">
        <template #media>
          <cbx-icon icon="icon-cbx" />
        </template>
      </cbx-list-item>
      <cbx-list-item reload-detail link="/timeline/" title="Timeline">
        <template #media>
          <cbx-icon icon="icon-cbx" />
        </template>
      </cbx-list-item>
      <cbx-list-item reload-detail link="/toast/" title="Toast">
        <template #media>
          <cbx-icon icon="icon-cbx" />
        </template>
      </cbx-list-item>
      <cbx-list-item reload-detail link="/toggle/" title="Toggle">
        <template #media>
          <cbx-icon icon="icon-cbx" />
        </template>
      </cbx-list-item>
      <cbx-list-item reload-detail link="/toolbar-tabbar/" title="Toolbar & Tabbar">
        <template #media>
          <cbx-icon icon="icon-cbx" />
        </template>
      </cbx-list-item>
      <cbx-list-item reload-detail link="/tooltip/" title="Tooltip">
        <template #media>
          <cbx-icon icon="icon-cbx" />
        </template>
      </cbx-list-item>
      <cbx-list-item reload-detail link="/treeview/" title="Treeview">
        <template #media>
          <cbx-icon icon="icon-cbx" />
        </template>
      </cbx-list-item>
      <cbx-list-item reload-detail link="/virtual-list/" title="Virtual List">
        <template #media>
          <cbx-icon icon="icon-cbx" />
        </template>
      </cbx-list-item>
    </cbx-list>
    <cbx-list class="searchbar-not-found">
      <cbx-list-item title="Nothing found" />
    </cbx-list>
    <cbx-block-title medium class="searchbar-hide-on-search">Themes</cbx-block-title>
    <cbx-list class="searchbar-hide-on-search">
      <cbx-list-item title="iOS Theme" external link="./index.html?theme=ios" />
      <cbx-list-item title="Material (MD) Theme" external link="./index.html?theme=md" />
      <cbx-list-item title="Aurora Desktop Theme" external link="./index.html?theme=aurora" />
      <cbx-list-item title="Color Themes" reload-detail link="/color-themes/" />
    </cbx-list>

    <cbx-block-title medium class="searchbar-hide-on-search">Page Loaders & Router</cbx-block-title>
    <cbx-list class="searchbar-hide-on-search">
      <cbx-list-item title="Page Transitions" reload-detail link="/page-transitions/" />
      <cbx-list-item title="Routable Modals" reload-detail link="/routable-modals/" />
      <cbx-list-item
        title="Default Route (404)"
        reload-detail
        link="/load-something-that-doesnt-exist/"
      />
      <cbx-list-item
        v-if="!theme.aurora"
        title="Master-Detail (Split View)"
        link="/master-detail/"
      />
      <cbx-list-item title="Store" reload-detail link="/store/" />
    </cbx-list>
  </cbx-page>
</template>
<script>
import {
  cbxPage,
  cbxNavbar,
  cbxNavLeft,
  cbxNavTitle,
  cbxNavTitleLarge,
  cbxNavRight,
  cbxBlockTitle,
  cbxList,
  cbxListItem,
  cbxLink,
  cbxSearchbar,
  cbxIcon,
  theme,
  cbx,
} from 'xui-vue';
import { onMounted } from 'vue';

export default {
  components: {
    cbxPage,
    cbxNavbar,
    cbxNavLeft,
    cbxNavTitle,
    cbxNavTitleLarge,
    cbxNavRight,
    cbxBlockTitle,
    cbxList,
    cbxListItem,
    cbxLink,
    cbxSearchbar,
    cbxIcon,
  },
  props: {
    cbxrouter: Object,
  },
  // eslint-disable-next-line
  setup({ cbxrouter }) {
    const onResize = () => {
      const $el = cbx.$('.page-home');
      if (cbx.width >= 768) {
        $el.find('.list:not(.searchbar-not-found)').addClass('menu-list');
      } else {
        $el.find('.list:not(.searchbar-not-found)').removeClass('menu-list');
      }
    };

    const onPageAfterIn = () => {
      if (!theme.aurora) return;
      if (cbx.width >= 768) {
        cbxrouter.navigate('/about/', { reloadDetail: true });
      }
    };
    onMounted(() => {
      if (theme.aurora) {
        const $el = cbx.$('.page-home');
        onResize();

        cbx.on('resize', onResize);

        cbxrouter.on('routeChange', (route) => {
          const url = route.url;
          if (!$el) return;
          const $linkEl = $el.find(`a[href="${url}"]`);
          if (!$linkEl.length) return;
          $el.find('.item-selected').removeClass('item-selected');
          $linkEl.addClass('item-selected');
        });
      }
    });
    return {
      theme,
      onPageAfterIn,
    };
  },
};
</script>
