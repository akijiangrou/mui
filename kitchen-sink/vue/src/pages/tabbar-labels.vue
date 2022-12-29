<template>
  <cbx-page :page-content="false">
    <cbx-navbar title="Tabbar Labels" back-link="Back">
      <cbx-nav-right>
        <cbx-link
          icon-md="material:compare_arrows"
          icon-ios="cbx:arrow_up_arrow_down_circle_fill"
          icon-aurora="cbx:arrow_up_arrow_down_circle_fill"
          @click="toggleToolbarPosition"
        />
      </cbx-nav-right>
    </cbx-navbar>
    <cbx-toolbar :position="toolbarPosition" tabbar labels>
      <cbx-link
        tab-link="#tab-1"
        tab-link-active
        text="Tab 1"
        icon-ios="cbx:envelope_fill"
        icon-aurora="cbx:envelope_fill"
        icon-md="material:email"
      />
      <cbx-link
        tab-link="#tab-2"
        text="Tab 2"
        icon-ios="cbx:calendar_fill"
        icon-aurora="cbx:calendar_fill"
        icon-md="material:today"
      />
      <cbx-link
        tab-link="#tab-3"
        text="Tab 3"
        icon-ios="cbx:cloud_upload_fill"
        icon-aurora="cbx:cloud_upload_fill"
        icon-md="material:file_upload"
      />
    </cbx-toolbar>

    <cbx-tabs>
      <cbx-tab id="tab-1" class="page-content" tab-active>
        <cbx-block>
          <p>Tab 1 content</p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam enim quia molestiae
            facilis laudantium voluptates obcaecati officia cum, sit libero commodi. Ratione illo
            suscipit temporibus sequi iure ad laboriosam accusamus?
          </p>
          <p>
            Saepe explicabo voluptas ducimus provident, doloremque quo totam molestias! Suscipit
            blanditiis eaque exercitationem praesentium reprehenderit, fuga accusamus possimus sed,
            sint facilis ratione quod, qui dignissimos voluptas! Aliquam rerum consequuntur
            deleniti.
          </p>
          <p>
            Totam reprehenderit amet commodi ipsum nam provident doloremque possimus odio itaque,
            est animi culpa modi consequatur reiciendis corporis libero laudantium sed eveniet unde
            delectus a maiores nihil dolores? Natus, perferendis.
          </p>
          <p>
            Atque quis totam repellendus omnis alias magnam corrupti, possimus aspernatur
            perspiciatis quae provident consequatur minima doloremque blanditiis nihil maxime
            ducimus earum autem. Magni animi blanditiis similique iusto, repellat sed quisquam!
          </p>
          <p>
            Suscipit, facere quasi atque totam. Repudiandae facilis at optio atque, rem nam, natus
            ratione cum enim voluptatem suscipit veniam! Repellat, est debitis. Modi nam mollitia
            explicabo, unde aliquid impedit! Adipisci!
          </p>
          <p>
            Deserunt adipisci tempora asperiores, quo, nisi ex delectus vitae consectetur iste
            fugiat iusto dolorem autem. Itaque, ipsa voluptas, a assumenda rem, dolorum porro
            accusantium, officiis veniam nostrum cum cumque impedit.
          </p>
          <p>
            Laborum illum ipsa voluptatibus possimus nesciunt ex consequatur rem, natus ad
            praesentium rerum libero consectetur temporibus cupiditate atque aspernatur, eaque
            provident eligendi quaerat ea soluta doloremque. Iure fugit, minima facere.
          </p>
        </cbx-block>
      </cbx-tab>
      <cbx-tab id="tab-2" class="page-content">
        <cbx-block>
          <p>Tab 2 content</p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam enim quia molestiae
            facilis laudantium voluptates obcaecati officia cum, sit libero commodi. Ratione illo
            suscipit temporibus sequi iure ad laboriosam accusamus?
          </p>
          <p>
            Saepe explicabo voluptas ducimus provident, doloremque quo totam molestias! Suscipit
            blanditiis eaque exercitationem praesentium reprehenderit, fuga accusamus possimus sed,
            sint facilis ratione quod, qui dignissimos voluptas! Aliquam rerum consequuntur
            deleniti.
          </p>
          <p>
            Totam reprehenderit amet commodi ipsum nam provident doloremque possimus odio itaque,
            est animi culpa modi consequatur reiciendis corporis libero laudantium sed eveniet unde
            delectus a maiores nihil dolores? Natus, perferendis.
          </p>
          <p>
            Atque quis totam repellendus omnis alias magnam corrupti, possimus aspernatur
            perspiciatis quae provident consequatur minima doloremque blanditiis nihil maxime
            ducimus earum autem. Magni animi blanditiis similique iusto, repellat sed quisquam!
          </p>
          <p>
            Suscipit, facere quasi atque totam. Repudiandae facilis at optio atque, rem nam, natus
            ratione cum enim voluptatem suscipit veniam! Repellat, est debitis. Modi nam mollitia
            explicabo, unde aliquid impedit! Adipisci!
          </p>
          <p>
            Deserunt adipisci tempora asperiores, quo, nisi ex delectus vitae consectetur iste
            fugiat iusto dolorem autem. Itaque, ipsa voluptas, a assumenda rem, dolorum porro
            accusantium, officiis veniam nostrum cum cumque impedit.
          </p>
          <p>
            Laborum illum ipsa voluptatibus possimus nesciunt ex consequatur rem, natus ad
            praesentium rerum libero consectetur temporibus cupiditate atque aspernatur, eaque
            provident eligendi quaerat ea soluta doloremque. Iure fugit, minima facere.
          </p>
        </cbx-block>
      </cbx-tab>
      <cbx-tab id="tab-3" class="page-content">
        <cbx-block>
          <p>Tab 3 content</p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam enim quia molestiae
            facilis laudantium voluptates obcaecati officia cum, sit libero commodi. Ratione illo
            suscipit temporibus sequi iure ad laboriosam accusamus?
          </p>
          <p>
            Saepe explicabo voluptas ducimus provident, doloremque quo totam molestias! Suscipit
            blanditiis eaque exercitationem praesentium reprehenderit, fuga accusamus possimus sed,
            sint facilis ratione quod, qui dignissimos voluptas! Aliquam rerum consequuntur
            deleniti.
          </p>
          <p>
            Totam reprehenderit amet commodi ipsum nam provident doloremque possimus odio itaque,
            est animi culpa modi consequatur reiciendis corporis libero laudantium sed eveniet unde
            delectus a maiores nihil dolores? Natus, perferendis.
          </p>
          <p>
            Atque quis totam repellendus omnis alias magnam corrupti, possimus aspernatur
            perspiciatis quae provident consequatur minima doloremque blanditiis nihil maxime
            ducimus earum autem. Magni animi blanditiis similique iusto, repellat sed quisquam!
          </p>
          <p>
            Suscipit, facere quasi atque totam. Repudiandae facilis at optio atque, rem nam, natus
            ratione cum enim voluptatem suscipit veniam! Repellat, est debitis. Modi nam mollitia
            explicabo, unde aliquid impedit! Adipisci!
          </p>
          <p>
            Deserunt adipisci tempora asperiores, quo, nisi ex delectus vitae consectetur iste
            fugiat iusto dolorem autem. Itaque, ipsa voluptas, a assumenda rem, dolorum porro
            accusantium, officiis veniam nostrum cum cumque impedit.
          </p>
          <p>
            Laborum illum ipsa voluptatibus possimus nesciunt ex consequatur rem, natus ad
            praesentium rerum libero consectetur temporibus cupiditate atque aspernatur, eaque
            provident eligendi quaerat ea soluta doloremque. Iure fugit, minima facere.
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
