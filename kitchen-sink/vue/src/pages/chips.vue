<template>
  <cbx-page>
    <cbx-navbar title="Chips" back-link="Back"></cbx-navbar>
    <cbx-block-title>Chips With Text</cbx-block-title>
    <cbx-block strong>
      <cbx-chip text="Example Chip"></cbx-chip>
      <cbx-chip text="Another Chip"></cbx-chip>
      <cbx-chip text="One More Chip"></cbx-chip>
      <cbx-chip text="Fourth Chip"></cbx-chip>
      <cbx-chip text="Last One"></cbx-chip>
    </cbx-block>
    <cbx-block-title>Outline Chips</cbx-block-title>
    <cbx-block strong>
      <cbx-chip outline text="Example Chip"></cbx-chip>
      <cbx-chip outline text="Another Chip"></cbx-chip>
      <cbx-chip outline text="One More Chip"></cbx-chip>
      <cbx-chip outline text="Fourth Chip"></cbx-chip>
      <cbx-chip outline text="Last One"></cbx-chip>
    </cbx-block>
    <cbx-block-title>Icon Chips</cbx-block-title>
    <cbx-block strong>
      <cbx-chip text="Add Contact" media-bg-color="blue">
        <template #media>
          <cbx-icon ios="cbx:plus_circle" aurora="cbx:plus_circle" md="material:add_circle" />
        </template>
      </cbx-chip>
      <cbx-chip text="London" media-bg-color="green">
        <template #media>
          <cbx-icon ios="cbx:compass" aurora="cbx:compass" md="material:location_on" />
        </template>
      </cbx-chip>
      <cbx-chip text="John Doe" media-bg-color="red">
        <template #media>
          <cbx-icon ios="cbx:person" aurora="cbx:person" md="material:person" />
        </template>
      </cbx-chip>
    </cbx-block>
    <cbx-block-title>Contact Chips</cbx-block-title>
    <cbx-block strong>
      <cbx-chip text="Jane Doe">
        <template #media>
          <img src="../../public/img/ks/people-100x100-9.jpeg" />
        </template>
      </cbx-chip>
      <cbx-chip text="John Doe">
        <template #media>
          <img src="../../public/img/ks/people-100x100-3.jpeg" />
        </template>
      </cbx-chip>
      <cbx-chip text="Adam Smith">
        <template #media>
          <img src="../../public/img/ks/people-100x100-7.jpeg" />
        </template>
      </cbx-chip>
      <cbx-chip text="Jennifer" media-bg-color="pink" media="J"></cbx-chip>
      <cbx-chip text="Chris" media-bg-color="yellow" media-text-color="black" media="C"></cbx-chip>
      <cbx-chip text="Kate" media-bg-color="red" media="K"></cbx-chip>
    </cbx-block>
    <cbx-block-title>Deletable Chips / Tags</cbx-block-title>
    <cbx-block strong>
      <cbx-chip text="Example Chip" deleteable @delete="deleteChip"></cbx-chip>
      <cbx-chip
        text="Chris"
        media="C"
        media-bg-color="orange"
        text-color="black"
        deleteable
        @delete="deleteChip"
      ></cbx-chip>
      <cbx-chip text="Jane Doe" deleteable @delete="deleteChip">
        <template #media>
          <img src="../../public/img/ks/people-100x100-9.jpeg" />
        </template>
      </cbx-chip>
      <cbx-chip text="One More Chip" deleteable @delete="deleteChip"></cbx-chip>
      <cbx-chip
        text="Jennifer"
        media-bg-color="pink"
        media="J"
        deleteable
        @delete="deleteChip"
      ></cbx-chip>
      <cbx-chip text="Adam Smith" deleteable @delete="deleteChip">
        <template #media>
          <img src="../../public/img/ks/people-100x100-7.jpeg" />
        </template>
      </cbx-chip>
    </cbx-block>
    <cbx-block-title>Color Chips</cbx-block-title>
    <cbx-block strong>
      <cbx-chip text="Red Chip" color="red"></cbx-chip>
      <cbx-chip text="Green Chip" color="green"></cbx-chip>
      <cbx-chip text="Blue Chip" color="blue"></cbx-chip>
      <cbx-chip text="Orange Chip" color="orange"></cbx-chip>
      <cbx-chip text="Pink Chip" color="pink"></cbx-chip>
      <cbx-chip outline text="Red Chip" color="red"></cbx-chip>
      <cbx-chip outline text="Green Chip" color="green"></cbx-chip>
      <cbx-chip outline text="Blue Chip" color="blue"></cbx-chip>
      <cbx-chip outline text="Orange Chip" color="orange"></cbx-chip>
      <cbx-chip outline text="Pink Chip" color="pink"></cbx-chip>
    </cbx-block>
  </cbx-page>
</template>
<script>
import { cbxNavbar, cbxPage, cbxBlockTitle, cbxChip, cbxBlock, cbxIcon, cbx } from 'xui-vue';
import $ from 'dom7';

export default {
  components: {
    cbxNavbar,
    cbxPage,
    cbxBlockTitle,
    cbxChip,
    cbxBlock,
    cbxIcon,
  },
  methods: {
    deleteChip(e) {
      const target = e.target;
      cbx.dialog.confirm('Do you want to delete this tiny demo Chip?', () => {
        $(target).parents('.chip').remove();
      });
    },
  },
};
</script>
