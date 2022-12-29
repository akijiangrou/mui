<template>
  <cbx-page @page:beforeremove="onPageBeforeRemove" @page:beforeout="onPageBeforeOut">
    <cbx-navbar title="Toast" back-link="Back"></cbx-navbar>
    <cbx-block strong>
      <p>Toasts provide brief feedback about an operation through a message on the screen.</p>
      <p>
        <cbx-button fill @click="showToastBottom">Toast on Bottom</cbx-button>
      </p>
      <p>
        <cbx-button fill @click="showToastTop">Toast on Top</cbx-button>
      </p>
      <p>
        <cbx-button fill @click="showToastCenter">Toast on Center</cbx-button>
      </p>
      <p>
        <cbx-button fill @click="showToastIcon">Toast with icon</cbx-button>
      </p>
      <p>
        <cbx-button fill @click="showToastLargeMessage">Toast with large message</cbx-button>
      </p>
      <p>
        <cbx-button fill @click="showToastWithButton">Toast with close button</cbx-button>
      </p>
      <p>
        <cbx-button fill @click="showToastWithCustomButton">Toast with custom button</cbx-button>
      </p>
      <p>
        <cbx-button fill @click="showToastWithCallback">Toast with callback on close</cbx-button>
      </p>
    </cbx-block>
  </cbx-page>
</template>
<script>
import { cbxNavbar, cbxPage, cbxBlock, cbxButton, cbx, theme } from 'xui-vue';

export default {
  components: {
    cbxNavbar,
    cbxPage,
    cbxBlock,
    cbxButton,
  },
  methods: {
    showToastBottom() {
      const self = this;
      // Create toast
      if (!self.toastBottom) {
        self.toastBottom = cbx.toast.create({
          text: 'This is default bottom positioned toast',
          closeTimeout: 2000,
        });
      }
      // Open it
      self.toastBottom.open();
    },
    showToastTop() {
      const self = this;
      // Create toast
      if (!self.toastTop) {
        self.toastTop = cbx.toast.create({
          text: 'Top positioned toast',
          position: 'top',
          closeTimeout: 2000,
        });
      }
      // Open it
      self.toastTop.open();
    },
    showToastCenter() {
      const self = this;
      // Create toast
      if (!self.toastCenter) {
        self.toastCenter = cbx.toast.create({
          text: "I'm on center",
          position: 'center',
          closeTimeout: 2000,
        });
      }
      // Open it
      self.toastCenter.open();
    },
    showToastIcon() {
      const self = this;
      // Create toast
      if (!self.toastIcon) {
        self.toastIcon = cbx.toast.create({
          icon:
            theme.ios || theme.aurora
              ? '<i class="cbx-icons">star_fill</i>'
              : '<i class="material-icons">star</i>',
          text: "I'm on center",
          position: 'center',
          closeTimeout: 2000,
        });
      }
      // Open it
      self.toastIcon.open();
    },
    showToastLargeMessage() {
      const self = this;
      // Create toast
      if (!self.toastLargeMessage) {
        self.toastLargeMessage = cbx.toast.create({
          text: 'This toast contains a lot of text. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil, quae, ab. Delectus amet optio facere autem sapiente quisquam beatae culpa dolore.',
          closeTimeout: 2000,
        });
      }
      // Open it
      self.toastLargeMessage.open();
    },
    showToastWithButton() {
      const self = this;
      // Create toast
      if (!self.toastWithButton) {
        self.toastWithButton = cbx.toast.create({
          text: 'Toast with additional close button',
          closeButton: true,
        });
      }
      // Open it
      self.toastWithButton.open();
    },
    showToastWithCustomButton() {
      const self = this;
      // Create toast
      if (!self.toastWithCustomButton) {
        self.toastWithCustomButton = cbx.toast.create({
          text: 'Custom close button',
          closeButton: true,
          closeButtonText: 'Close Me',
          closeButtonColor: 'red',
        });
      }
      // Open it
      self.toastWithCustomButton.open();
    },
    showToastWithCallback() {
      const self = this;
      // Create toast
      if (!self.toastWithCallback) {
        self.toastWithCallback = cbx.toast.create({
          text: 'Callback on close',
          closeButton: true,
          on: {
            close() {
              cbx.dialog.alert('Toast closed');
            },
          },
        });
      }
      // Open it
      self.toastWithCallback.open();
    },
    onPageBeforeOut() {
      cbx.toast.close();
    },
    onPageBeforeRemove() {
      const self = this;
      // Destroy toasts when page removed
      if (self.toastBottom) self.toastBottom.destroy();
      if (self.toastTop) self.toastTop.destroy();
      if (self.toastCenter) self.toastCenter.destroy();
      if (self.toastIcon) self.toastIcon.destroy();
      if (self.toastLargeMessage) self.toastLargeMessage.destroy();
      if (self.toastWithButton) self.toastWithButton.destroy();
      if (self.toastWithCustomButton) self.toastWithCustomButton.destroy();
      if (self.toastWithCallback) self.toastWithCallback.destroy();
    },
  },
};
</script>
