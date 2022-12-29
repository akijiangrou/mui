<template>
  <cbx-page>
    <cbx-navbar large title="Color Themes" back-link="Back"></cbx-navbar>
    <cbx-block-title medium>Layout Themes</cbx-block-title>
    <cbx-block strong>
      <p>Xui comes with 2 main layout themes: Light (default) and Dark:</p>
      <cbx-row>
        <cbx-col
          width="50"
          class="bg-color-white demo-theme-picker"
          @click="setLayoutTheme('light')"
        >
          <cbx-checkbox v-if="theme === 'light'" checked disabled />
        </cbx-col>
        <cbx-col
          width="50"
          class="bg-color-black demo-theme-picker"
          @click="setLayoutTheme('dark')"
        >
          <cbx-checkbox v-if="theme === 'dark'" checked disabled />
        </cbx-col>
      </cbx-row>
    </cbx-block>
    <cbx-block-title medium>Navigation Bars Style</cbx-block-title>
    <cbx-block strong>
      <p>Switch navigation bars to filled style:</p>
      <cbx-row>
        <cbx-col
          width="50"
          class="demo-bars-picker demo-bars-picker-empty"
          @click="setBarsStyle('empty')"
        >
          <div class="demo-navbar"></div>
          <cbx-checkbox v-if="barsStyle === 'empty'" checked disabled />
        </cbx-col>
        <cbx-col
          width="50"
          class="demo-bars-picker demo-bars-picker-fill"
          @click="setBarsStyle('fill')"
        >
          <div class="demo-navbar"></div>
          <cbx-checkbox v-if="barsStyle === 'fill'" checked disabled />
        </cbx-col>
      </cbx-row>
    </cbx-block>
    <cbx-block-title medium>Default Color Themes</cbx-block-title>
    <cbx-block strong>
      <p>Xui comes with {{ colors.length }} color themes set.</p>
      <cbx-row>
        <cbx-col v-for="(color, index) in colors" :key="index" width="33" medium="25" large="20">
          <cbx-button
            fill
            round
            small
            class="demo-color-picker-button"
            :color="color"
            @click="setColorTheme(color)"
            >{{ color }}</cbx-button
          >
        </cbx-col>
        <cbx-col width="33" medium="25" large="20" />
        <cbx-col width="33" medium="25" large="20" />
        <cbx-col width="33" medium="25" large="20" />
      </cbx-row>
    </cbx-block>
    <cbx-block-title medium>Custom Color Theme</cbx-block-title>
    <cbx-list>
      <cbx-list-input
        type="colorpicker"
        label="HEX Color"
        placeholder="e.g. #ff0000"
        readonly
        :value="{ hex: customColor || themeColor }"
        :color-picker-params="{
          targetEl: '#color-theme-picker-color',
        }"
        @colorpicker:change="(value) => setCustomColor(value.hex)"
      >
        <template #media>
          <div
            id="color-theme-picker-color"
            style="
              width: 28px;
              height: 28px;
              border-radius: 4px;
              background: var(--cbx-theme-color);
            "
          ></div>
        </template>
      </cbx-list-input>
    </cbx-list>

    <cbx-block-title medium>Generated CSS Variables</cbx-block-title>
    <cbx-block strong>
      <template v-if="customProperties">
        <p>Add this code block to your custom stylesheet:</p>
        <pre
          style="overflow: auto; -webkit-overflow-scrolling: touch; margin: 0; font-size: 12px"
          >{{ customProperties }}</pre
        >
      </template>
      <p v-else>
        Change navigation bars styles or specify custom color to see custom CSS variables here
      </p>
    </cbx-block>
  </cbx-page>
</template>
<script>
import {
  cbxNavbar,
  cbxPage,
  cbxBlockTitle,
  cbxButton,
  cbxRow,
  cbxCol,
  cbxBlock,
  cbxList,
  cbxListInput,
  cbxCheckbox,
  cbx,
} from 'xui-vue';
import $ from 'dom7';

let stylesheet;
let globalTheme = 'light';
let globalBarsStyle = 'empty';
let globalCustomColor = '';
let globalCustomProperties = '';

const setWebThemeColor = (hexColor) => {
  const $meta = $('meta[name="theme-color"]');
  if (!$meta.length) {
    $('head').append(`<meta name="theme-color" content="${hexColor}">`);
    return;
  }
  $meta.attr('content', hexColor);
};

export default {
  components: {
    cbxNavbar,
    cbxPage,
    cbxBlockTitle,
    cbxButton,
    cbxRow,
    cbxCol,
    cbxBlock,
    cbxList,
    cbxListInput,
    cbxCheckbox,
  },
  data() {
    const colors = [
      'red',
      'green',
      'blue',
      'pink',
      'yellow',
      'orange',
      'purple',
      'deeppurple',
      'lightblue',
      'teal',
      'lime',
      'deeporange',
      'gray',
      'black',
    ];
    return {
      theme: globalTheme,
      barsStyle: globalBarsStyle,
      customColor: globalCustomColor,
      customProperties: globalCustomProperties,
      colors,
      themeColor: $('html').css('--cbx-theme-color').trim(),
    };
  },
  mounted() {
    if (!stylesheet) {
      stylesheet = document.createElement('style');
      document.head.appendChild(stylesheet);
    }
  },
  methods: {
    generateStylesheet() {
      const self = this;
      let styles = '';
      if (self.customColor) {
        const colorThemeProperties = cbx.utils.colorThemeCSSProperties(self.customColor);
        if (Object.keys(colorThemeProperties).length) {
          styles += `
/* Custom color theme */
:root {
  ${Object.keys(colorThemeProperties)
    .map((key) => `${key}: ${colorThemeProperties[key]};`)
    .join('\n  ')}
}`;
        }
      }
      if (self.barsStyle === 'fill') {
        const colorThemeRgb = $('html')
          .css('--cbx-theme-color-rgb')
          .trim()
          .split(',')
          .map((c) => c.trim());
        styles += `
/* Invert navigation bars to fill style */
:root,
:root.dark,
:root .dark {
  --cbx-bars-bg-color: var(--cbx-theme-color);
  --cbx-bars-bg-color-rgb: var(--cbx-theme-color-rgb);
  --cbx-bars-translucent-opacity: 0.9;
  --cbx-bars-text-color: #fff;
  --cbx-bars-link-color: #fff;
  --cbx-navbar-subtitle-text-color: rgba(255,255,255,0.85);
  --cbx-bars-border-color: transparent;
  --cbx-tabbar-link-active-color: #fff;
  --cbx-tabbar-link-inactive-color: rgba(255,255,255,0.54);
  --cbx-sheet-border-color: transparent;
  --cbx-tabbar-link-active-border-color: #fff;
}
.appbar,
.navbar,
.toolbar,
.subnavbar,
.calendar-header,
.calendar-footer {
  --cbx-touch-ripple-color: var(--cbx-touch-ripple-white);
  --cbx-link-highlight-color: var(--cbx-link-highlight-white);
  --cbx-link-touch-ripple-color: var(--cbx-touch-ripple-white);
  --cbx-button-text-color: #fff;
  --cbx-button-pressed-bg-color: rgba(255,255,255,0.1);
}
.navbar-large-transparent {
  --cbx-navbar-large-title-text-color: #000;

  --r: ${colorThemeRgb[0]};
  --g: ${colorThemeRgb[1]};
  --b: ${colorThemeRgb[2]};
  --progress: var(--cbx-navbar-large-collapse-progress);
  --cbx-bars-link-color: rgb(
    calc(var(--r) + (255 - var(--r)) * var(--progress)),
    calc(var(--g) + (255 - var(--g)) * var(--progress)),
    calc(var(--b) + (255 - var(--b)) * var(--progress))
  );
}
.dark .navbar-large-transparent {
  --cbx-navbar-large-title-text-color: #fff;
}
          `;
      }

      setTimeout(() => {
        if (self.barsStyle === 'fill') {
          setWebThemeColor(self.themeColor);
        } else if (self.theme === 'light') {
          setWebThemeColor('#fff');
        } else if (self.theme === 'dark') {
          setWebThemeColor('#000');
        }
      });
      return styles.trim();
    },
    setLayoutTheme(theme) {
      const self = this;
      const $html = $('html');
      globalTheme = theme;
      $html.removeClass('dark light').addClass(`${globalTheme}`);
      self.theme = globalTheme;
    },
    setColorTheme(color) {
      const self = this;
      const $html = $('html');
      const currentColorClass = $html[0].className.match(/color-theme-([a-z]*)/);
      if (currentColorClass) $html.removeClass(currentColorClass[0]);
      $html.addClass(`color-theme-${color}`);
      self.unsetCustomColor();
      self.themeColor = $html.css(`--cbx-color-${color}`).trim();
    },
    setBarsStyle(barsStyle) {
      const self = this;
      globalBarsStyle = barsStyle;
      self.barsStyle = globalBarsStyle;
      globalCustomProperties = self.generateStylesheet();
      stylesheet.innerHTML = globalCustomProperties;
      self.customProperties = globalCustomProperties;
    },
    unsetCustomColor() {
      const self = this;
      globalCustomColor = '';
      self.customColor = '';
      globalCustomProperties = self.generateStylesheet();
      stylesheet.innerHTML = globalCustomProperties;
      self.customProperties = globalCustomProperties;
    },
    setCustomColor(color) {
      const self = this;
      if (self.themeColor === color) return;
      clearTimeout(self.timeout);
      self.timeout = setTimeout(() => {
        globalCustomColor = color;
        self.customColor = globalCustomColor;
        globalCustomProperties = self.generateStylesheet();
        stylesheet.innerHTML = globalCustomProperties;
        self.customProperties = globalCustomProperties;
      }, 300);
    },
  },
};
</script>
