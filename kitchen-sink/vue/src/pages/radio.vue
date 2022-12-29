<template>
  <cbx-page>
    <cbx-navbar title="Radio" back-link="Back"></cbx-navbar>
    <cbx-block-title>Inline</cbx-block-title>

    <cbx-block strong>
      <p>
        Lorem <cbx-radio name="demo-radio-inline" /> ipsum dolor sit amet, consectetur adipisicing
        elit. Alias beatae illo nihil aut eius commodi sint eveniet aliquid eligendi
        <cbx-radio name="demo-radio-inline" checked /> ad delectus impedit tempore nemo, enim vel
        praesentium consequatur nulla mollitia!
      </p>
    </cbx-block>

    <cbx-block-title>Radio Group</cbx-block-title>
    <cbx-list>
      <cbx-list-item radio radio-icon="start" title="Books" name="demo-radio-start" checked />
      <cbx-list-item radio radio-icon="start" title="Movies" name="demo-radio-start" />
      <cbx-list-item radio radio-icon="start" title="Food" name="demo-radio-start" />
      <cbx-list-item radio radio-icon="start" title="Drinks" name="demo-radio-start" />
    </cbx-list>

    <cbx-list>
      <cbx-list-item radio radio-icon="end" title="Books" name="demo-radio-end" checked />
      <cbx-list-item radio radio-icon="end" title="Movies" name="demo-radio-end" />
      <cbx-list-item radio radio-icon="end" title="Food" name="demo-radio-end" />
      <cbx-list-item radio radio-icon="end" title="Drinks" name="demo-radio-end" />
    </cbx-list>

    <cbx-block-title>With Media Lists</cbx-block-title>
    <cbx-list media-list>
      <cbx-list-item
        radio
        radio-icon="start"
        checked
        name="demo-media-radio"
        value="1"
        title="Facebook"
        after="17:14"
        subtitle="New messages from John Doe"
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sagittis tellus ut turpis condimentum, ut dignissim lacus tincidunt. Cras dolor metus, ultrices condimentum sodales sit amet, pharetra sodales eros. Phasellus vel felis tellus. Mauris rutrum ligula nec dapibus feugiat. In vel dui laoreet, commodo augue id, pulvinar lacus."
      />
      <cbx-list-item
        radio
        radio-icon="start"
        name="demo-media-radio"
        value="2"
        title="John Doe (via Twitter)"
        after="17:11"
        subtitle="John Doe (@_johndoe) mentioned you on Twitter!"
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sagittis tellus ut turpis condimentum, ut dignissim lacus tincidunt. Cras dolor metus, ultrices condimentum sodales sit amet, pharetra sodales eros. Phasellus vel felis tellus. Mauris rutrum ligula nec dapibus feugiat. In vel dui laoreet, commodo augue id, pulvinar lacus."
      />
      <cbx-list-item
        radio
        radio-icon="start"
        name="demo-media-radio"
        value="3"
        title="Facebook"
        after="16:48"
        subtitle="New messages from John Doe"
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sagittis tellus ut turpis condimentum, ut dignissim lacus tincidunt. Cras dolor metus, ultrices condimentum sodales sit amet, pharetra sodales eros. Phasellus vel felis tellus. Mauris rutrum ligula nec dapibus feugiat. In vel dui laoreet, commodo augue id, pulvinar lacus."
      />
      <cbx-list-item
        radio
        radio-icon="start"
        name="demo-media-radio"
        value="4"
        title="John Doe (via Twitter)"
        after="15:32"
        subtitle="John Doe (@_johndoe) mentioned you on Twitter!"
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sagittis tellus ut turpis condimentum, ut dignissim lacus tincidunt. Cras dolor metus, ultrices condimentum sodales sit amet, pharetra sodales eros. Phasellus vel felis tellus. Mauris rutrum ligula nec dapibus feugiat. In vel dui laoreet, commodo augue id, pulvinar lacus."
      />
    </cbx-list>
  </cbx-page>
</template>
<script>
import {
  cbxNavbar,
  cbxPage,
  cbxBlockTitle,
  cbxBlock,
  cbxList,
  cbxListItem,
  cbxRadio,
} from 'xui-vue';

export default {
  components: {
    cbxNavbar,
    cbxPage,
    cbxBlockTitle,
    cbxBlock,
    cbxList,
    cbxListItem,
    cbxRadio,
  },
};
</script>
