<template>
  <cbx-page>
    <cbx-navbar title="Dialog" back-link="Back"></cbx-navbar>
    <cbx-block strong>
      <p>
        There are 1:1 replacements of native Alert, Prompt and Confirm modals. They support
        callbacks, have very easy api and can be combined with each other. Check these examples:
      </p>
      <cbx-row tag="p">
        <cbx-button fill class="col" @click="openAlert">Alert</cbx-button>
        <cbx-button fill class="col" @click="openConfirm">Confirm</cbx-button>
        <cbx-button fill class="col" @click="openPrompt">Prompt</cbx-button>
      </cbx-row>
      <cbx-row tag="p">
        <cbx-button fill class="col" @click="openLogin">Login</cbx-button>
        <cbx-button fill class="col" @click="openPassword">Password</cbx-button>
      </cbx-row>
    </cbx-block>
    <cbx-block-title>Vertical Buttons</cbx-block-title>
    <cbx-block strong>
      <p>
        <cbx-button fill @click="openVerticalButtons">Vertical Buttons</cbx-button>
      </p>
    </cbx-block>
    <cbx-block-title>Preloader Dialog</cbx-block-title>
    <cbx-block strong>
      <cbx-row tag="p">
        <cbx-button fill class="col" @click="openPreloader">Preloader</cbx-button>
        <cbx-button fill class="col" @click="openCustomPreloader">Custom Text</cbx-button>
      </cbx-row>
    </cbx-block>
    <cbx-block-title>Progress Dialog</cbx-block-title>
    <cbx-block strong>
      <cbx-row tag="p">
        <cbx-button fill class="col" @click="openInfiniteProgress">Infinite</cbx-button>
        <cbx-button fill class="col" @click="openDeterminedProgress">Determined</cbx-button>
      </cbx-row>
    </cbx-block>
    <cbx-block-title>Dialogs Stack</cbx-block-title>
    <cbx-block strong>
      <p>
        This feature doesn't allow to open multiple dialogs at the same time, and will automatically
        open next dialog when you close the current one. Such behavior is similar to browser native
        dialogs:
      </p>
      <p>
        <cbx-button fill @click="openAlerts">Open Multiple Alerts</cbx-button>
      </p>
    </cbx-block>
  </cbx-page>
</template>
<script>
import { cbxNavbar, cbxPage, cbxBlockTitle, cbxBlock, cbxButton, cbxRow, cbx } from 'xui-vue';

export default {
  components: {
    cbxNavbar,
    cbxPage,
    cbxBlockTitle,
    cbxBlock,
    cbxButton,
    cbxRow,
  },
  methods: {
    openAlert() {
      cbx.dialog.alert('Hello!');
    },
    openConfirm() {
      cbx.dialog.confirm('Are you feel good today?', () => {
        cbx.dialog.alert('Great!');
      });
    },
    openPrompt() {
      cbx.dialog.prompt('What is your name?', (name) => {
        cbx.dialog.confirm(`Are you sure that your name is ${name}?`, () => {
          cbx.dialog.alert(`Ok, your name is ${name}`);
        });
      });
    },
    openLogin() {
      cbx.dialog.login('Enter your username and password', (username, password) => {
        cbx.dialog.alert(`Thank you!<br>Username:${username}<br>Password:${password}`);
      });
    },
    openPassword() {
      cbx.dialog.password('Enter your password', (password) => {
        cbx.dialog.alert(`Thank you!<br>Password:${password}`);
      });
    },
    openAlerts() {
      cbx.dialog.alert('Alert 1');
      cbx.dialog.alert('Alert 2');
      cbx.dialog.alert('Alert 3');
      cbx.dialog.alert('Alert 4');
      cbx.dialog.alert('Alert 5');
    },
    openVerticalButtons() {
      cbx.dialog
        .create({
          title: 'Vertical Buttons',
          buttons: [
            {
              text: 'Button 1',
            },
            {
              text: 'Button 2',
            },
            {
              text: 'Button 3',
            },
          ],
          verticalButtons: true,
        })
        .open();
    },
    openPreloader() {
      cbx.dialog.preloader();
      setTimeout(() => {
        cbx.dialog.close();
      }, 3000);
    },
    openCustomPreloader() {
      cbx.dialog.preloader('My text...');
      setTimeout(() => {
        cbx.dialog.close();
      }, 3000);
    },
    openInfiniteProgress() {
      cbx.dialog.progress();
      setTimeout(() => {
        cbx.dialog.close();
      }, 3000);
    },
    openDeterminedProgress() {
      let progress = 0;
      const dialog = cbx.dialog.progress('Loading assets', progress);
      dialog.setText('Image 1 of 10');
      const interval = setInterval(() => {
        progress += 10;
        dialog.setProgress(progress);
        dialog.setText(`Image ${progress / 10} of 10`);
        if (progress === 100) {
          clearInterval(interval);
          dialog.close();
        }
      }, 300);
    },
  },
};
</script>
