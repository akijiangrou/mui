<template>
  <cbx-page no-toolbar no-navbar no-swipeback login-screen>
    <cbx-login-screen-title>Xui</cbx-login-screen-title>
    <cbx-list form>
      <cbx-list-input
        label="Username"
        type="text"
        placeholder="Your username"
        :value="username"
        @input="username = $event.target.value"
      ></cbx-list-input>
      <cbx-list-input
        label="Password"
        type="password"
        placeholder="Your password"
        :value="password"
        @input="password = $event.target.value"
      ></cbx-list-input>
    </cbx-list>
    <cbx-list>
      <cbx-list-button @click="signIn">Sign In</cbx-list-button>
      <cbx-block-footer
        >Some text about login information.<br />Lorem ipsum dolor sit amet, consectetur adipiscing
        elit.</cbx-block-footer
      >
    </cbx-list>
  </cbx-page>
</template>
<script>
import {
  cbxPage,
  cbxLoginScreenTitle,
  cbxList,
  cbxListButton,
  cbxBlockFooter,
  cbxListInput,
  cbx,
} from 'xui-vue';

export default {
  components: {
    cbxPage,
    cbxLoginScreenTitle,
    cbxList,
    cbxListButton,
    cbxBlockFooter,
    cbxListInput,
  },
  props: {
    cbxrouter: Object,
  },
  data() {
    return {
      username: '',
      password: '',
    };
  },
  methods: {
    signIn() {
      const self = this;
      cbx.dialog.alert(`Username: ${self.username}<br>Password: ${self.password}`, () => {
        this.cbxrouter.back();
      });
    },
  },
};
</script>
