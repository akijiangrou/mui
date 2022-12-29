<template>
  <cbx-page @page:afterin="onPageAfterIn">
    <cbx-navbar title="Menu" back-link="Back"></cbx-navbar>
    <cbx-block strong>
      <p>
        Menu component is designed to be used as overlay control. It can be very helpful when you
        need controls on top of the map, images, some text/code editor, etc.
      </p>
    </cbx-block>
    <cbx-block-title>Links</cbx-block-title>
    <cbx-block strong class="no-padding-horizontal">
      <cbx-menu>
        <cbx-menu-item href="#" text="Item 1" />
        <cbx-menu-item href="#" text="Item 2" />
        <cbx-menu-item href="#" icon-cbx="pencil" />
        <cbx-menu-item href="#" icon-cbx="square_arrow_up" />
      </cbx-menu>
    </cbx-block>

    <cbx-block-title>Dropdowns</cbx-block-title>
    <cbx-block strong class="no-padding-horizontal" style="z-index: 2000">
      <p class="padding-horizontal">
        Dropdown can be position on left, center or right of the menu item. It also can be
        scrollable.
      </p>
      <cbx-menu>
        <cbx-menu-item text="Left" dropdown>
          <cbx-menu-dropdown left>
            <cbx-menu-dropdown-item href="#" text="Menu Item 1" />
            <cbx-menu-dropdown-item href="#" text="Menu Item 2" />
            <cbx-menu-dropdown-item href="#" text="Menu Item 3" />
            <cbx-menu-dropdown-item href="#" text="Menu Item 4" />
            <cbx-menu-dropdown-item divider />
            <cbx-menu-dropdown-item href="#" text="Menu Item 5" />
            <cbx-menu-dropdown-item href="#" text="Menu Item 6" />
          </cbx-menu-dropdown>
        </cbx-menu-item>

        <cbx-menu-item text="Center" dropdown>
          <cbx-menu-dropdown center content-height="200px">
            <cbx-menu-dropdown-item href="#" text="Menu Item 1" />
            <cbx-menu-dropdown-item href="#" text="Menu Item 2" />
            <cbx-menu-dropdown-item href="#" text="Menu Item 3" />
            <cbx-menu-dropdown-item href="#" text="Menu Item 4" />
            <cbx-menu-dropdown-item divider />
            <cbx-menu-dropdown-item href="#" text="Menu Item 5" />
            <cbx-menu-dropdown-item href="#" text="Menu Item 6" />
            <cbx-menu-dropdown-item href="#" text="Menu Item 7" />
            <cbx-menu-dropdown-item divider />
            <cbx-menu-dropdown-item href="#" text="Menu Item 8" />
            <cbx-menu-dropdown-item href="#" text="Menu Item 9" />
            <cbx-menu-dropdown-item href="#" text="Menu Item 10" />
          </cbx-menu-dropdown>
        </cbx-menu-item>

        <cbx-menu-item text="Right" dropdown>
          <cbx-menu-dropdown right>
            <cbx-menu-dropdown-item href="#" text="Menu Item 1" />
            <cbx-menu-dropdown-item href="#" text="Menu Item 2" />
            <cbx-menu-dropdown-item href="#" text="Menu Item 3" />
            <cbx-menu-dropdown-item href="#" text="Menu Item 4" />
            <cbx-menu-dropdown-item divider />
            <cbx-menu-dropdown-item href="#" text="Menu Item 5" />
            <cbx-menu-dropdown-item href="#" text="Menu Item 6" />
          </cbx-menu-dropdown>
        </cbx-menu-item>

        <cbx-menu-item style="margin-left: auto" icon-cbx="square_arrow_up" dropdown>
          <cbx-menu-dropdown right>
            <cbx-menu-dropdown-item href="#">
              <span>Share on Facebook</span>
              <cbx-icon class="margin-left" cbx="logo_facebook" />
            </cbx-menu-dropdown-item>
            <cbx-menu-dropdown-item href="#">
              <span>Share on Twitter</span>
              <cbx-icon class="margin-left" cbx="logo_twitter" />
            </cbx-menu-dropdown-item>
          </cbx-menu-dropdown>
        </cbx-menu-item>

        <cbx-menu-item href="#" icon-cbx="pencil" />
      </cbx-menu>
    </cbx-block>

    <cbx-block-title>On Top Of Map</cbx-block-title>
    <cbx-card>
      <cbx-card-content :padding="false">
        <div ref="map" style="height: 240px"></div>
        <cbx-menu style="position: absolute; left: 0px; top: 6px">
          <cbx-menu-item href="#" icon-cbx="zoom_in" />
          <cbx-menu-item href="#" icon-cbx="zoom_out" />
          <cbx-menu-item icon-cbx="layers_fill" dropdown>
            <cbx-menu-dropdown left>
              <cbx-menu-dropdown-item href="#" text="Terrain" />
              <cbx-menu-dropdown-item href="#" text="Satellite" />
            </cbx-menu-dropdown>
          </cbx-menu-item>
        </cbx-menu>
      </cbx-card-content>
    </cbx-card>
  </cbx-page>
</template>
<script>
import {
  cbxPage,
  cbxNavbar,
  cbxBlockTitle,
  cbxBlock,
  cbxMenu,
  cbxMenuItem,
  cbxMenuDropdown,
  cbxMenuDropdownItem,
  cbxCard,
  cbxCardContent,
  cbxIcon,
} from 'xui-vue';

export default {
  components: {
    cbxPage,
    cbxNavbar,
    cbxBlockTitle,
    cbxBlock,
    cbxMenu,
    cbxMenuItem,
    cbxMenuDropdown,
    cbxMenuDropdownItem,
    cbxCard,
    cbxCardContent,
    cbxIcon,
  },
  data() {
    return {
      mapStyleLoaded: false,
      mapScriptLoaded: false,
      mapInitialized: false,
    };
  },
  methods: {
    onPageAfterIn() {
      const self = this;
      if (self.mapInitialized) return;
      if (!window.L) {
        self.loadMapAssets();
        return;
      }
      self.initMap();
    },
    loadMapAssets() {
      const self = this;
      const style = document.createElement('link');
      style.rel = 'stylesheet';
      style.href = 'https://unpkg.com/leaflet@1.4.0/dist/leaflet.css';
      style.integrity =
        'sha512-puBpdR0798OZvTTbP4A8Ix/l+A4dHDD0DGqYW6RQ+9jxkRFclaxxQb/SJAWZfWAkuyeQUytO7+7N4QKrDh+drA==';
      style.setAttribute('crossorigin', '');
      style.onload = () => {
        self.mapStyleLoaded = true;
        if (self.mapScriptLoaded) self.initMap();
      };
      document.head.appendChild(style);

      const script = document.createElement('script');
      script.src = 'https://unpkg.com/leaflet@1.4.0/dist/leaflet.js';
      script.integrity =
        'sha512-QVftwZFqvtRNi0ZyCtsznlKSWOStnDORoefr1enyq5mVL4tmKB3S/EnC3rRJcxCPavG10IcrVGSmPh6Qw5lwrg==';
      script.setAttribute('crossorigin', '');
      script.onload = () => {
        self.mapScriptLoaded = true;
        if (self.mapStyleLoaded) self.initMap();
      };
      document.head.appendChild(script);
    },
    initMap() {
      const self = this;
      const mymap = window.L.map(self.$refs.map, { zoomControl: false }).setView(
        [51.505, -0.09],
        10,
      );
      window.L.tileLayer(
        'https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1Ijoibm9saW1pdHM0d2ViIiwiYSI6ImNqcXA4NTdmczBocm8zeG13Zm1zNTdyeDAifQ.HoJgmqQ_uH4zLyNJmiY98A',
        {
          maxZoom: 18,
          attribution: `Map data &copy; <a class="external" target="_blank" href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors,
            <a class="external" target="_blank" href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>,
            Imagery © <a class="external" target="_blank" href="https://www.mapbox.com/">Mapbox</a>`,
          id: 'mapbox.streets',
        },
      ).addTo(mymap);
      self.mapInitialized = true;
    },
  },
};
</script>
