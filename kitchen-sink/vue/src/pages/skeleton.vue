<template>
  <cbx-page>
    <cbx-navbar title="Skeleton Elements" back-link="Back"></cbx-navbar>
    <cbx-block strong>
      <p>
        Skeleton (or Ghost) elements designed to improve perceived performance and make app feels
        faster.
      </p>
      <p>
        Xui comes with two types of such elements: Skeleton Block and Skeleton Text. Skeleton
        block is a gray box that can be used as placeholder for any element. Skeleton text uses
        special built-in skeleton font to render each character of such text as gray rectangle.
        Skeleton text allows to make such elements responsive and feel more natural.
      </p>
      <p>It can be used in any places and with any elements.</p>
    </cbx-block>

    <cbx-block-title>Skeleton List</cbx-block-title>
    <cbx-list media-list class="skeleton-text">
      <cbx-list-item
        title="Title"
        subtitle="Subtitle"
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi lobortis et massa ac interdum."
      >
        <template #media>
          <cbx-skeleton-block style="width: 40px; height: 40px; border-radius: 50%" />
        </template>
      </cbx-list-item>
      <cbx-list-item
        title="Title"
        subtitle="Subtitle"
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi lobortis et massa ac interdum."
      >
        <template #media>
          <cbx-skeleton-block style="width: 40px; height: 40px; border-radius: 50%" />
        </template>
      </cbx-list-item>
    </cbx-list>

    <cbx-block-title>Skeleton Card</cbx-block-title>
    <cbx-card
      class="skeleton-text"
      title="Card Header"
      content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi lobortis et massa ac interdum. Cras consequat felis at consequat hendrerit."
      footer="Card Footer"
    ></cbx-card>

    <cbx-block-title>Loading Effects</cbx-block-title>
    <cbx-block strong>
      <p>It supports few loading effects:</p>
      <cbx-row tag="p">
        <cbx-button fill small round class="col" @click="load('fade')">Fade</cbx-button>
        <cbx-button fill small round class="col" @click="load('wave')">Wave</cbx-button>
        <cbx-button fill small round class="col" @click="load('pulse')">Pulse</cbx-button>
      </cbx-row>
    </cbx-block>
    <cbx-list v-if="loading" media-list>
      <cbx-list-item
        v-for="n in 3"
        :key="n"
        :class="`skeleton-text skeleton-effect-${effect}`"
        title="Full Name"
        subtitle="Position"
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi lobortis et massa ac interdum. Cras consequat felis at consequat hendrerit. Aliquam vestibulum vitae lorem ac iaculis. Praesent nec pharetra massa, at blandit lectus. Sed tincidunt, lectus eu convallis elementum, nibh nisi aliquet urna, nec imperdiet felis sapien at enim."
      >
        <template #media>
          <cbx-skeleton-block style="width: 40px; height: 40px; border-radius: 50%" />
        </template>
      </cbx-list-item>
    </cbx-list>
    <cbx-list v-else media-list>
      <cbx-list-item
        title="John Doe"
        subtitle="CEO"
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi lobortis et massa ac interdum. Cras consequat felis at consequat hendrerit. Aliquam vestibulum vitae lorem ac iaculis. Praesent nec pharetra massa, at blandit lectus. Sed tincidunt, lectus eu convallis elementum, nibh nisi aliquet urna, nec imperdiet felis sapien at enim."
      >
        <template #media>
          <img
            src="https://placeimg.com/80/80/people/1"
            style="width: 40px; height: 40px; border-radius: 50%"
          />
        </template>
      </cbx-list-item>
      <cbx-list-item
        title="Jane Doe"
        subtitle="Marketing"
        text="Cras consequat felis at consequat hendrerit. Aliquam vestibulum vitae lorem ac iaculis. Praesent nec pharetra massa, at blandit lectus. Sed tincidunt, lectus eu convallis elementum, nibh nisi aliquet urna, nec imperdiet felis sapien at enim."
      >
        <template #media>
          <img
            src="https://placeimg.com/80/80/people/2"
            style="width: 40px; height: 40px; border-radius: 50%"
          />
        </template>
      </cbx-list-item>
      <cbx-list-item
        title="Kate Johnson"
        subtitle="Admin"
        text="Sed tincidunt, lectus eu convallis elementum, nibh nisi aliquet urna, nec imperdiet felis sapien at enim."
      >
        <template #media>
          <img
            src="https://placeimg.com/80/80/people/3"
            style="width: 40px; height: 40px; border-radius: 50%"
          />
        </template>
      </cbx-list-item>
    </cbx-list>
  </cbx-page>
</template>
<script>
import {
  cbxPage,
  cbxNavbar,
  cbxBlockTitle,
  cbxBlock,
  cbxList,
  cbxListItem,
  cbxButton,
  cbxRow,
  cbxSkeletonBlock,
  cbxCard,
} from 'xui-vue';

export default {
  components: {
    cbxPage,
    cbxNavbar,
    cbxBlockTitle,
    cbxBlock,
    cbxList,
    cbxListItem,
    cbxButton,
    cbxRow,
    cbxSkeletonBlock,
    cbxCard,
  },
  data() {
    return {
      loading: false,
      effect: null,
    };
  },
  methods: {
    load(effect) {
      const self = this;
      if (self.loading) return;
      self.effect = effect;
      self.loading = true;
      setTimeout(() => {
        self.loading = false;
      }, 3000);
    },
  },
};
</script>
