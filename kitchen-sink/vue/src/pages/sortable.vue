<template>
  <cbx-page>
    <cbx-navbar title="Sortable List" back-link="Back">
      <cbx-nav-right>
        <cbx-link sortable-toggle=".sortable">Toggle</cbx-link>
      </cbx-nav-right>
    </cbx-navbar>

    <cbx-block>
      <p>Just click "Toggle" button on navigation bar to enable/disable sorting</p>
    </cbx-block>
    <cbx-list sortable>
      <cbx-list-item title="1 Jenna Smith" after="CEO">
        <template #media>
          <cbx-icon icon="icon-cbx" />
        </template>
      </cbx-list-item>
      <cbx-list-item title="2 John Doe" after="Director">
        <template #media>
          <cbx-icon icon="icon-cbx" />
        </template>
      </cbx-list-item>
      <cbx-list-item title="3 John Doe" after="Developer">
        <template #media>
          <cbx-icon icon="icon-cbx" />
        </template>
      </cbx-list-item>
      <cbx-list-item title="4 Aaron Darling" after="Manager">
        <template #media>
          <cbx-icon icon="icon-cbx" />
        </template>
      </cbx-list-item>
      <cbx-list-item title="5 Calvin Johnson" after="Accounter">
        <template #media>
          <cbx-icon icon="icon-cbx" />
        </template>
      </cbx-list-item>
      <cbx-list-item title="6 John Smith" after="SEO">
        <template #media>
          <cbx-icon icon="icon-cbx" />
        </template>
      </cbx-list-item>
      <cbx-list-item title="7 Chloe" after="Manager">
        <template #media>
          <cbx-icon icon="icon-cbx" />
        </template>
      </cbx-list-item>
    </cbx-list>
    <cbx-list media-list sortable>
      <cbx-list-item
        title="Yellow Submarine"
        after="$15"
        subtitle="Beatles"
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sagittis tellus ut turpis condimentum, ut dignissim lacus tincidunt. Cras dolor metus, ultrices condimentum sodales sit amet, pharetra sodales eros. Phasellus vel felis tellus. Mauris rutrum ligula nec dapibus feugiat. In vel dui laoreet, commodo augue id, pulvinar lacus."
      >
        <template #media>
          <img src="../../public/img/ks/people-96x96-1.jpeg" width="80" />
        </template>
      </cbx-list-item>
      <cbx-list-item
        title="Don't Stop Me Now"
        after="$22"
        subtitle="Queen"
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sagittis tellus ut turpis condimentum, ut dignissim lacus tincidunt. Cras dolor metus, ultrices condimentum sodales sit amet, pharetra sodales eros. Phasellus vel felis tellus. Mauris rutrum ligula nec dapibus feugiat. In vel dui laoreet, commodo augue id, pulvinar lacus."
      >
        <template #media>
          <img src="../../public/img/ks/people-96x96-2.jpeg" width="80" />
        </template>
      </cbx-list-item>
      <cbx-list-item
        title="Billie Jean"
        after="$16"
        subtitle="Michael Jackson"
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sagittis tellus ut turpis condimentum, ut dignissim lacus tincidunt. Cras dolor metus, ultrices condimentum sodales sit amet, pharetra sodales eros. Phasellus vel felis tellus. Mauris rutrum ligula nec dapibus feugiat. In vel dui laoreet, commodo augue id, pulvinar lacus."
      >
        <template #media>
          <img src="../../public/img/ks/people-96x96-4.jpeg" width="80" />
        </template>
      </cbx-list-item>
    </cbx-list>

    <cbx-block-title>Opposite Side</cbx-block-title>
    <cbx-list sortable sortable-opposite>
      <cbx-list-item title="1 Jenna Smith" after="CEO">
        <template #media>
          <cbx-icon icon="icon-cbx" />
        </template>
      </cbx-list-item>
      <cbx-list-item title="2 John Doe" after="Director">
        <template #media>
          <cbx-icon icon="icon-cbx" />
        </template>
      </cbx-list-item>
      <cbx-list-item title="3 John Doe" after="Developer">
        <template #media>
          <cbx-icon icon="icon-cbx" />
        </template>
      </cbx-list-item>
      <cbx-list-item title="4 Aaron Darling" after="Manager">
        <template #media>
          <cbx-icon icon="icon-cbx" />
        </template>
      </cbx-list-item>
      <cbx-list-item title="5 Calvin Johnson" after="Accounter">
        <template #media>
          <cbx-icon icon="icon-cbx" />
        </template>
      </cbx-list-item>
      <cbx-list-item title="6 John Smith" after="SEO">
        <template #media>
          <cbx-icon icon="icon-cbx" />
        </template>
      </cbx-list-item>
      <cbx-list-item title="7 Chloe" after="Manager">
        <template #media>
          <cbx-icon icon="icon-cbx" />
        </template>
      </cbx-list-item>
    </cbx-list>
  </cbx-page>
</template>
<script>
import {
  cbxNavbar,
  cbxPage,
  cbxBlock,
  cbxList,
  cbxListItem,
  cbxNavRight,
  cbxLink,
  cbxIcon,
  cbxBlockTitle,
} from 'xui-vue';

export default {
  components: {
    cbxNavbar,
    cbxPage,
    cbxBlock,
    cbxList,
    cbxListItem,
    cbxNavRight,
    cbxLink,
    cbxIcon,
    cbxBlockTitle,
  },
};
</script>
