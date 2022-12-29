<template>
  <cbx-page>
    <cbx-navbar title="Progress Bar" back-link="Back"></cbx-navbar>
    <cbx-block>
      <p>
        In addition to <a href="/preloader/">Preloader</a>, Xui also comes with fancy animated
        determinate and infinite/indeterminate progress bars to indicate some activity.
      </p>
    </cbx-block>
    <cbx-block-title>Determinate Progress Bar</cbx-block-title>
    <cbx-block strong>
      <p>
        When progress bar is determinate it indicates how long an operation will take when the
        percentage complete is detectable.
      </p>
      <p>Inline determinate progress bar:</p>
      <div>
        <p><cbx-progressbar id="demo-inline-progressbar" :progress="10" /></p>
        <cbx-segmented raised>
          <cbx-button @click="setInlineProgress(10)">10%</cbx-button>
          <cbx-button @click="setInlineProgress(30)">30%</cbx-button>
          <cbx-button @click="setInlineProgress(50)">50%</cbx-button>
          <cbx-button @click="setInlineProgress(100)">100%</cbx-button>
        </cbx-segmented>
      </div>
      <div>
        <p>Inline determinate load & hide:</p>
        <p id="demo-determinate-container"></p>
        <p>
          <cbx-button fill @click="showDeterminate(true)">Start Loading</cbx-button>
        </p>
      </div>
      <div>
        <p>Overlay with determinate progress bar on top of the app:</p>
        <p>
          <cbx-button fill @click="showDeterminate(false)">Start Loading</cbx-button>
        </p>
      </div>
    </cbx-block>
    <cbx-block-title>Infinite Progress Bar</cbx-block-title>
    <cbx-block strong>
      <p>
        When progress bar is infinite/indeterminate it requests that the user wait while something
        finishes when it’s not necessary to indicate how long it will take.
      </p>
      <p>Inline infinite progress bar</p>
      <p>
        <cbx-progressbar infinite />
      </p>
      <p>Multi-color infinite progress bar</p>
      <p>
        <cbx-progressbar infinite color="multi" />
      </p>
      <div>
        <p>Overlay with infinite progress bar on top of the app</p>
        <p id="demo-infinite-container"></p>
        <p>
          <cbx-button fill @click="showInfinite(false)">Start Loading</cbx-button>
        </p>
      </div>
      <div>
        <p>Overlay with infinite multi-color progress bar on top of the app</p>
        <p>
          <cbx-button fill @click="showInfinite(true)">Start Loading</cbx-button>
        </p>
      </div>
    </cbx-block>
    <cbx-block-title>Colors</cbx-block-title>
    <div class="list simple-list">
      <ul>
        <li>
          <cbx-progressbar color="blue" :progress="10" />
        </li>
        <li>
          <cbx-progressbar color="red" :progress="20" />
        </li>
        <li>
          <cbx-progressbar color="pink" :progress="30" />
        </li>
        <li>
          <cbx-progressbar color="green" :progress="80" />
        </li>
        <li>
          <cbx-progressbar color="yellow" :progress="90" />
        </li>
        <li>
          <cbx-progressbar color="orange" :progress="100" />
        </li>
      </ul>
    </div>
  </cbx-page>
</template>
<script>
import {
  cbxNavbar,
  cbxPage,
  cbxBlockTitle,
  cbxBlock,
  cbxProgressbar,
  cbxButton,
  cbxSegmented,
  cbx,
} from 'xui-vue';

export default {
  components: {
    cbxNavbar,
    cbxPage,
    cbxBlockTitle,
    cbxBlock,
    cbxProgressbar,
    cbxButton,
    cbxSegmented,
  },
  methods: {
    setInlineProgress(value) {
      cbx.progressbar.set('#demo-inline-progressbar', value);
    },
    showDeterminate(inline) {
      const self = this;
      if (self.determinateLoading) return;
      self.determinateLoading = true;
      let progressBarEl;
      if (inline) {
        progressBarEl = cbx.progressbar.show('#demo-determinate-container', 0);
      } else {
        progressBarEl = cbx.progressbar.show(0);
      }
      let progress = 0;
      function simulateLoading() {
        setTimeout(() => {
          const progressBefore = progress;
          progress += Math.random() * 20;
          cbx.progressbar.set(progressBarEl, progress);
          if (progressBefore < 100) {
            simulateLoading(); // keep "loading"
          } else {
            self.determinateLoading = false;
            cbx.progressbar.hide(progressBarEl); // hide
          }
        }, Math.random() * 200 + 200);
      }
      simulateLoading();
    },
    showInfinite(multiColor) {
      const self = this;
      if (self.infiniteLoading) return;
      self.infiniteLoading = true;
      if (multiColor) {
        cbx.progressbar.show('multi');
      } else {
        cbx.progressbar.show();
      }
      setTimeout(() => {
        self.infiniteLoading = false;
        cbx.progressbar.hide();
      }, 3000);
    },
  },
};
</script>
