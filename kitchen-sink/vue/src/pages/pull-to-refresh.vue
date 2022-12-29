<template>
  <cbx-page ptr :ptr-mousewheel="true" @ptr:refresh="loadMore">
    <cbx-navbar title="Pull To Refresh" back-link="Back"></cbx-navbar>
    <cbx-list media-list>
      <cbx-list-item
        v-for="(item, index) in items"
        :key="index"
        :title="item.title"
        :subtitle="item.author"
      >
        <template #media>
          <img :src="item.cover" width="44" />
        </template>
      </cbx-list-item>

      <cbx-block-footer>
        <p>
          Just pull page down to let the magic happen.<br />Note that pull-to-refresh feature is
          optimised for touch and native scrolling so it may not work on desktop browser.
        </p>
      </cbx-block-footer>
    </cbx-list>
  </cbx-page>
</template>
<script>
import { cbxNavbar, cbxPage, cbxList, cbxListItem, cbxBlockFooter } from 'xui-vue';

export default {
  components: {
    cbxNavbar,
    cbxPage,
    cbxList,
    cbxListItem,
    cbxBlockFooter,
  },
  data() {
    return {
      items: [
        {
          title: 'Yellow Submarine',
          author: 'Beatles',
          cover: '../../public/img/ks/abstract-88x88-1.jpeg',
        },
        {
          title: "Don't Stop Me Now",
          author: 'Queen',
          cover: '../../public/img/ks/abstract-88x88-2.jpeg',
        },
        {
          title: 'Billie Jean',
          author: 'Michael Jackson',
          cover: '../../public/img/ks/abstract-88x88-3.jpeg',
        },
      ],
      songs: ['Yellow Submarine', "Don't Stop Me Now", 'Billie Jean', 'Californication'],
      authors: ['Beatles', 'Queen', 'Michael Jackson', 'Red Hot Chili Peppers'],
    };
  },
  methods: {
    loadMore(done) {
      const self = this;

      setTimeout(() => {
        const picURL = `../../public/img/ks/abstract-88x88-${
          Math.floor(Math.random() * 10) + 1
        }.jpeg`;
        const song = self.songs[Math.floor(Math.random() * self.songs.length)];
        const author = self.authors[Math.floor(Math.random() * self.authors.length)];

        self.items.push({
          title: song,
          author,
          cover: picURL,
        });

        done();
      }, 1000);
    },
  },
};
</script>
