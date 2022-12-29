<template>
  <cbx-page>
    <cbx-navbar title="Photo Browser" back-link="Back"></cbx-navbar>
    <cbx-block strong>
      <p>
        Photo Browser is a standalone and highly configurable component that allows to open window
        with photo viewer and navigation elements with the following features:
      </p>
      <ul>
        <li>Swiper between photos</li>
        <li>Multi-gestures support for zooming</li>
        <li>Toggle zoom by double tap on photo</li>
        <li>Single click on photo to toggle Exposition mode</li>
      </ul>
    </cbx-block>
    <cbx-block strong>
      <p>
        Photo Browser could be opened in a three ways - as a Standalone component (Popup
        modification), in Popup, and as separate Page:
      </p>
      <cbx-row>
        <cbx-col>
          <cbx-photo-browser ref="standalone" :photos="photos" />
          <cbx-button fill @click="$refs.standalone.open()">Standalone</cbx-button>
        </cbx-col>
        <cbx-col>
          <cbx-photo-browser ref="popup" :photos="photos" type="popup" />
          <cbx-button fill @click="$refs.popup.open()">Popup</cbx-button>
        </cbx-col>
        <cbx-col>
          <cbx-photo-browser ref="page" :photos="photos" type="page" page-back-link-text="Back" />
          <cbx-button fill @click="$refs.page.open()">Page</cbx-button>
        </cbx-col>
      </cbx-row>
    </cbx-block>
    <cbx-block strong>
      <p>
        Photo Browser supports 2 default themes - default Light (like in previous examples) and Dark
        theme. Here is a Dark theme examples:
      </p>
      <cbx-row>
        <cbx-col>
          <cbx-photo-browser ref="standaloneDark" :photos="photos" theme="dark" />
          <cbx-button fill @click="$refs.standaloneDark.open()">Standalone</cbx-button>
        </cbx-col>
        <cbx-col>
          <cbx-photo-browser ref="popupDark" :photos="photos" theme="dark" type="popup" />
          <cbx-button fill @click="$refs.popupDark.open()">Popup</cbx-button>
        </cbx-col>
        <cbx-col>
          <cbx-photo-browser
            ref="pageDark"
            :photos="photos"
            theme="dark"
            type="page"
            page-back-link-text="Back"
          />
          <cbx-button fill @click="$refs.pageDark.open()">Page</cbx-button>
        </cbx-col>
      </cbx-row>
    </cbx-block>
  </cbx-page>
</template>
<script>
import { cbxNavbar, cbxPage, cbxPhotoBrowser, cbxBlock, cbxRow, cbxCol, cbxButton } from 'xui-vue';

export default {
  components: {
    cbxNavbar,
    cbxPage,
    cbxPhotoBrowser,
    cbxBlock,
    cbxRow,
    cbxCol,
    cbxButton,
  },
  data() {
    return {
      photos: [
        {
          url: 'img/beach.jpg',
          caption: 'Amazing beach in Goa, India',
        },
        'http://placekitten.com/1024/1024',
        'img/lock.jpg',
        {
          url: 'img/monkey.jpg',
          caption: 'I met this monkey in Chinese mountains',
        },
        {
          url: 'img/mountains.jpg',
          caption: 'Beautiful mountains in Zhangjiajie, China',
        },
      ],
    };
  },
};
</script>
