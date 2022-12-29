<template>
  <cbx-page>
    <cbx-navbar title="Store" back-link="Back" />
    <cbx-block strong>
      <p>
        Xui comes with a built-in lightweight application state management library - Store. It
        serves as a centralized Store for all the components in an application.
      </p>
    </cbx-block>
    <cbx-block v-if="!users" strong class="text-align-center">
      <cbx-button v-if="!loading" @click="load">Load Users</cbx-button>
      <cbx-preloader v-else />
    </cbx-block>
    <cbx-list v-if="users" simple-list>
      <cbx-list-item v-for="user in users" :key="user" :title="user" />
    </cbx-list>
  </cbx-page>
</template>
<script>
import {
  cbx,
  useStore,
  cbxPage,
  cbxNavbar,
  cbxBlock,
  cbxButton,
  cbxPreloader,
  cbxList,
  cbxListItem,
} from 'xui-vue';

export default {
  components: {
    cbxPage,
    cbxNavbar,
    cbxBlock,
    cbxButton,
    cbxPreloader,
    cbxList,
    cbxListItem,
  },
  setup() {
    // Subscribe to store getters
    const users = useStore('users');
    const loading = useStore('usersLoading');

    // Call store action
    const load = () => cbx.store.dispatch('loadUsers');

    return {
      users,
      loading,
      load,
    };
  },
};
</script>
