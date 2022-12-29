<template>
  <cbx-page @page:beforeremove="onPageBeforeRemove" @page:beforeout="onPageBeforeOut">
    <cbx-navbar title="Notifications" back-link="Back"></cbx-navbar>
    <cbx-block>
      <p>
        Xui comes with simple Notifications component that allows you to show some useful messages
        to user and request basic actions.
      </p>
      <p><cbx-button fill @click="showNotificationFull">Full layout notification</cbx-button></p>
      <p><cbx-button fill @click="showNotificationWithButton">With close button</cbx-button></p>
      <p><cbx-button fill @click="showNotificationCloseOnClick">Click to close</cbx-button></p>
      <p>
        <cbx-button fill @click="showNotificationCallbackOnClose">Callback on close</cbx-button>
      </p>
    </cbx-block>
  </cbx-page>
</template>
<script>
import { cbxNavbar, cbxPage, cbxBlock, cbxButton, cbx } from 'xui-vue';

export default {
  components: {
    cbxNavbar,
    cbxPage,
    cbxButton,
    cbxBlock,
  },
  methods: {
    showNotificationFull() {
      const self = this;
      // Create toast
      if (!self.notificationFull) {
        self.notificationFull = cbx.notification.create({
          icon: '<i class="icon icon-cbx"></i>',
          title: 'Xui',
          titleRightText: 'now',
          subtitle: 'This is a subtitle',
          text: 'This is a simple notification message',
          closeTimeout: 3000,
        });
      }
      // Open it
      self.notificationFull.open();
    },
    showNotificationWithButton() {
      const self = this;
      // Create toast
      if (!self.notificationWithButton) {
        self.notificationWithButton = cbx.notification.create({
          icon: '<i class="icon icon-cbx"></i>',
          title: 'Xui',
          subtitle: 'Notification with close button',
          text: 'Click (x) button to close me',
          closeButton: true,
        });
      }
      // Open it
      self.notificationWithButton.open();
    },
    showNotificationCloseOnClick() {
      const self = this;
      // Create toast
      if (!self.notificationCloseOnClick) {
        self.notificationCloseOnClick = cbx.notification.create({
          icon: '<i class="icon icon-cbx"></i>',
          title: 'Xui',
          titleRightText: 'now',
          subtitle: 'Notification with close on click',
          text: 'Click me to close',
          closeOnClick: true,
        });
      }
      // Open it
      self.notificationCloseOnClick.open();
    },
    showNotificationCallbackOnClose() {
      const self = this;
      // Create toast
      if (!self.notificationCallbackOnClose) {
        self.notificationCallbackOnClose = cbx.notification.create({
          icon: '<i class="icon icon-cbx"></i>',
          title: 'Xui',
          titleRightText: 'now',
          subtitle: 'Notification with close on click',
          text: 'Click me to close',
          closeOnClick: true,
          on: {
            close() {
              cbx.dialog.alert('Notification closed');
            },
          },
        });
      }
      // Open it
      self.notificationCallbackOnClose.open();
    },
    onPageBeforeOut() {
      cbx.notification.close();
    },
    onPageBeforeRemove() {
      const self = this;
      // Destroy toasts when page removed
      if (self.notificationFull) self.notificationFull.destroy();
      if (self.notificationWithButton) self.notificationWithButton.destroy();
      if (self.notificationCloseOnClick) self.notificationCloseOnClick.destroy();
      if (self.notificationCallbackOnClose) self.notificationCallbackOnClose.destroy();
    },
  },
};
</script>
