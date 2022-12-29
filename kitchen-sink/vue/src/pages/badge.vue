<template>
  <cbx-page>
    <cbx-navbar sliding back-link="Back" title="Badge">
      <cbx-nav-right>
        <cbx-link icon-only>
          <cbx-icon
            ios="cbx:person_circle_fill"
            aurora="cbx:person_circle_fill"
            md="material:person"
          >
            <cbx-badge color="red">5</cbx-badge>
          </cbx-icon>
        </cbx-link>
      </cbx-nav-right>
    </cbx-navbar>
    <cbx-toolbar bottom tabbar labels>
      <cbx-link tab-link="#tab-1" tab-link-active>
        <cbx-icon ios="cbx:envelope_fill" aurora="cbx:envelope_fill" md="material:email">
          <cbx-badge color="green">5</cbx-badge>
        </cbx-icon>
        <span class="tabbar-label">Inbox</span>
      </cbx-link>
      <cbx-link tab-link="#tab-2">
        <cbx-icon ios="cbx:calendar_fill" aurora="cbx:calendar_fill" md="material:today">
          <cbx-badge color="red">7</cbx-badge>
        </cbx-icon>
        <span class="tabbar-label">Calendar</span>
      </cbx-link>
      <cbx-link tab-link="#tab-3">
        <cbx-icon
          ios="cbx:cloud_upload_fill"
          aurora="cbx:cloud_upload_fill"
          md="material:file_upload"
        >
          <cbx-badge color="red">1</cbx-badge>
        </cbx-icon>
        <span class="tabbar-label">Upload</span>
      </cbx-link>
    </cbx-toolbar>

    <cbx-list>
      <cbx-list-item title="Foo Bar" badge="0">
        <template #media>
          <cbx-icon icon="icon-cbx" />
        </template>
      </cbx-list-item>
      <cbx-list-item title="Ivan Petrov" badge="CEO" badge-color="blue">
        <template #media>
          <cbx-icon icon="icon-cbx" />
        </template>
      </cbx-list-item>
      <cbx-list-item title="John Doe" badge="5" badge-color="green">
        <template #media>
          <cbx-icon icon="icon-cbx" />
        </template>
      </cbx-list-item>
      <cbx-list-item title="Jane Doe" badge="NEW" badge-color="orange">
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
  cbxNavRight,
  cbxToolbar,
  cbxPage,
  cbxLink,
  cbxBadge,
  cbxList,
  cbxListItem,
  cbxIcon,
} from 'xui-vue';

export default {
  components: {
    cbxPage,
    cbxNavbar,
    cbxNavRight,
    cbxToolbar,
    cbxLink,
    cbxBadge,
    cbxList,
    cbxListItem,
    cbxIcon,
  },
};
</script>
