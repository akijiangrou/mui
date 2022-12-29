<template>
  <cbx-page>
    <cbx-navbar title="Login Screen" back-link="Back"></cbx-navbar>
    <cbx-block>
      <p>
        Xui comes with ready to use Login Screen layout. It could be used inside of page or inside
        of popup (Embedded) or as a standalone overlay:
      </p>
    </cbx-block>

    <cbx-list>
      <cbx-list-item link="/login-screen-page/" title="As Separate Page"></cbx-list-item>
    </cbx-list>

    <cbx-block>
      <cbx-button raised large fill login-screen-open=".demo-login-screen">As Overlay</cbx-button>
    </cbx-block>

    <cbx-block>
      <cbx-button raised large fill @click="loginScreenOpened = true"
        >Open Via Prop Change</cbx-button
      >
    </cbx-block>

    <cbx-login-screen v-model:opened="loginScreenOpened" class="demo-login-screen">
      <cbx-page login-screen>
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
            >Some text about login information.<br />Lorem ipsum dolor sit amet, consectetur
            adipiscing elit.</cbx-block-footer
          >
        </cbx-list>
      </cbx-page>
    </cbx-login-screen>
  </cbx-page>
</template>
<script>
import {
  cbxNavbar,
  cbxPage,
  cbxLoginScreen,
  cbxList,
  cbxListItem,
  cbxBlock,
  cbxButton,
  cbxLoginScreenTitle,
  cbxBlockFooter,
  cbxListButton,
  cbxListInput,
  cbx,
} from 'xui-vue';

export default {
  components: {
    cbxNavbar,
    cbxPage,
    cbxLoginScreen,
    cbxList,
    cbxListItem,
    cbxBlock,
    cbxButton,
    cbxLoginScreenTitle,
    cbxBlockFooter,
    cbxListButton,
    cbxListInput,
  },
  data() {
    return {
      loginScreenOpened: false,
      username: '',
      password: '',
    };
  },
  methods: {
    signIn() {
      const self = this;

      cbx.dialog.alert(`Username: ${self.username}<br>Password: ${self.password}`, () => {
        cbx.loginScreen.close();
      });
    },
  },
};
</script>
