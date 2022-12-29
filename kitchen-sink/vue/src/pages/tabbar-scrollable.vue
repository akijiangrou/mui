<template>
  <cbx-page :page-content="false">
    <cbx-navbar title="Tabbar Scrollable" back-link="Back">
      <cbx-nav-right>
        <cbx-link
          icon-md="material:compare_arrows"
          icon-ios="cbx:arrow_up_arrow_down_circle_fill"
          icon-aurora="cbx:arrow_up_arrow_down_circle_fill"
          @click="toggleToolbarPosition"
        />
      </cbx-nav-right>
    </cbx-navbar>
    <cbx-toolbar :position="toolbarPosition" tabbar scrollable>
      <cbx-link
        v-for="(tab, index) in tabs"
        :key="tab"
        :tab-link="`#tab-${tab}`"
        :tab-link-active="index === 0"
        >Tab {{ tab }}</cbx-link
      >
    </cbx-toolbar>
    <cbx-tabs>
      <cbx-tab
        v-for="(tab, index) in tabs"
        :id="`tab-${tab}`"
        :key="tab"
        class="page-content"
        :tab-active="index === 0"
      >
        <cbx-block>
          <p>
            <b>Tab {{ tab }} content</b>
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque corrupti, quos
            asperiores unde aspernatur illum odio, eveniet. Fugiat magnam perspiciatis ex
            dignissimos, rerum modi ea nesciunt praesentium iusto optio rem?
          </p>
          <p>
            Illo debitis et recusandae, ipsum nisi nostrum vero delectus quasi. Quasi, consequatur!
            Corrupti, explicabo maxime incidunt fugit sint dicta saepe officiis sed expedita, minima
            porro! Ipsa dolores quia, delectus labore!
          </p>
          <p>
            At similique minima placeat magni molestias sunt deleniti repudiandae voluptatibus
            magnam quam esse reprehenderit dolor enim qui sed alias, laboriosam quaerat laborum iure
            repellat praesentium pariatur dolorum possimus veniam! Consectetur.
          </p>
          <p>
            Sunt, sed, magnam! Qui, suscipit. Beatae cum ullam necessitatibus eligendi, culpa rem
            excepturi consequatur quidem totam eum voluptates nihil, enim pariatur incidunt corporis
            sed facere magni earum tenetur rerum ea.
          </p>
          <p>
            Veniam nulla quis molestias voluptatem inventore consectetur iusto voluptatibus
            perferendis quisquam, cupiditate voluptates, tenetur vero magnam nisi animi praesentium
            atque adipisci optio quod aliquid vel delectus ad? Dicta deleniti, recusandae.
          </p>
        </cbx-block>
      </cbx-tab>
    </cbx-tabs>
  </cbx-page>
</template>
<script>
import {
  cbxNavbar,
  cbxPage,
  cbxBlock,
  cbxTabs,
  cbxTab,
  cbxLink,
  cbxToolbar,
  cbxNavRight,
} from 'xui-vue';

export default {
  components: {
    cbxNavbar,
    cbxPage,
    cbxBlock,
    cbxTabs,
    cbxTab,
    cbxLink,
    cbxToolbar,
    cbxNavRight,
  },
  data() {
    return {
      tabs: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
      toolbarPosition: 'bottom',
    };
  },
  methods: {
    toggleToolbarPosition() {
      this.toolbarPosition = this.toolbarPosition === 'top' ? 'bottom' : 'top';
    },
  },
};
</script>
