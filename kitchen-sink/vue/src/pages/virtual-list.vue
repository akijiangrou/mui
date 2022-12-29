<template>
  <cbx-page>
    <cbx-navbar title="Virtual List" back-link="Back">
      <cbx-subnavbar :inner="false">
        <cbx-searchbar
          search-container=".virtual-list"
          search-item="li"
          search-in=".item-title"
          :disable-button="!theme.aurora"
        ></cbx-searchbar>
      </cbx-subnavbar>
    </cbx-navbar>
    <cbx-block>
      <p>
        Virtual List allows to render lists with huge amount of elements without loss of
        performance. And it is fully compatible with all Xui list components such as Search Bar,
        Infinite Scroll, Pull To Refresh, Swipeouts (swipe-to-delete) and Sortable.
      </p>
      <p>Here is the example of virtual list with 10 000 items:</p>
    </cbx-block>
    <cbx-list class="searchbar-not-found">
      <cbx-list-item title="Nothing found"></cbx-list-item>
    </cbx-list>
    <cbx-list
      class="searchbar-found"
      medial-list
      virtual-list
      :virtual-list-params="{
        items,
        searchAll,
        renderExternal,
        height: theme.ios ? 63 : theme.md ? 73 : 77,
      }"
    >
      <ul>
        <cbx-list-item
          v-for="(item, index) in vlData.items"
          :key="index"
          media-item
          link="#"
          :title="item.title"
          :subtitle="item.subtitle"
          :style="`top: ${vlData.topPosition}px`"
          :virtual-list-index="item.index"
        ></cbx-list-item>
      </ul>
    </cbx-list>
  </cbx-page>
</template>
<script>
import {
  cbxNavbar,
  cbxPage,
  cbxList,
  cbxListItem,
  cbxSubnavbar,
  cbxSearchbar,
  cbxBlock,
  theme,
} from 'xui-vue';

export default {
  components: {
    cbxNavbar,
    cbxPage,
    cbxList,
    cbxListItem,
    cbxSubnavbar,
    cbxSearchbar,
    cbxBlock,
  },
  data() {
    const items = [];
    for (let i = 1; i <= 10000; i += 1) {
      items.push({
        title: `Item ${i}`,
        subtitle: `Subtitle ${i}`,
        index: i,
      });
    }
    return {
      theme,
      items,
      vlData: {
        items: [],
      },
    };
  },
  methods: {
    searchAll(query, items) {
      const found = [];
      for (let i = 0; i < items.length; i += 1) {
        if (items[i].title.toLowerCase().indexOf(query.toLowerCase()) >= 0 || query.trim() === '')
          found.push(i);
      }
      return found; // return array with mathced indexes
    },
    renderExternal(vl, vlData) {
      this.vlData = vlData;
    },
  },
};
</script>
