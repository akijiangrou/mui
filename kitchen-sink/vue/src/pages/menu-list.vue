<template>
  <cbx-page>
    <cbx-navbar title="Menu List" back-link="Back"></cbx-navbar>

    <cbx-block strong>
      <p>
        Menu list unlike usual links list is designed to indicate currently active screen (or
        section) of your app. Think about it like a Tabbar but in a form of a list.
      </p>
    </cbx-block>

    <cbx-list menu-list>
      <cbx-list-item
        link
        title="Home"
        :selected="selected === 'home'"
        @click="() => (selected = 'home')"
      >
        <template #media>
          <cbx-icon md="material:home" aurora="cbx:house_fill" ios="cbx:house_fill" />
        </template>
      </cbx-list-item>
      <cbx-list-item
        link
        title="Profile"
        :selected="selected === 'profile'"
        @click="() => (selected = 'profile')"
      >
        <template #media>
          <cbx-icon md="material:person" aurora="cbx:person_fill" ios="cbx:person_fill" />
        </template>
      </cbx-list-item>
      <cbx-list-item
        link
        title="Settings"
        :selected="selected === 'settings'"
        @click="() => (selected = 'settings')"
      >
        <template #media>
          <cbx-icon md="material:settings" aurora="cbx:gear_alt_fill" ios="cbx:gear_alt_fill" />
        </template>
      </cbx-list-item>
    </cbx-list>

    <cbx-list menu-list media-list>
      <cbx-list-item
        link
        title="Home"
        subtitle="Home subtitle"
        :selected="selectedMedia === 'home'"
        @click="() => (selectedMedia = 'home')"
      >
        <template #media>
          <cbx-icon md="material:home" aurora="cbx:house_fill" ios="cbx:house_fill" />
        </template>
      </cbx-list-item>
      <cbx-list-item
        link
        title="Profile"
        subtitle="Profile subtitle"
        :selected="selectedMedia === 'profile'"
        @click="() => (selectedMedia = 'profile')"
      >
        <template #media>
          <cbx-icon md="material:person" aurora="cbx:person_fill" ios="cbx:person_fill" />
        </template>
      </cbx-list-item>
      <cbx-list-item
        link
        title="Settings"
        subtitle="Settings subtitle"
        :selected="selectedMedia === 'settings'"
        @click="() => (selectedMedia = 'settings')"
      >
        <template #media>
          <cbx-icon md="material:settings" aurora="cbx:gear_alt_fill" ios="cbx:gear_alt_fill" />
        </template>
      </cbx-list-item>
    </cbx-list>
  </cbx-page>
</template>
<script>
import { ref } from 'vue';
import { cbxNavbar, cbxPage, cbxBlock, cbxList, cbxListItem, cbxIcon } from 'xui-vue';

export default {
  components: {
    cbxNavbar,
    cbxPage,
    cbxBlock,
    cbxList,
    cbxListItem,
    cbxIcon,
  },
  setup() {
    const selected = ref('home');
    const selectedMedia = ref('home');
    return {
      selected,
      selectedMedia,
    };
  },
};
</script>
