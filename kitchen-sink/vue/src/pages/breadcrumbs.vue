<template>
  <cbx-page>
    <cbx-navbar sliding back-link="Back" title="Breadcrumbs" />
    <cbx-block strong>
      <p>
        Breadcrumbs allow users to keep track and maintain awareness of their locations within the
        app or website. They should be used for large sites and apps with hierarchically arranged
        pages.
      </p>
    </cbx-block>

    <cbx-block-title>Basic</cbx-block-title>
    <cbx-block strong>
      <cbx-breadcrumbs>
        <cbx-breadcrumbs-item>
          <cbx-link>Home</cbx-link>
        </cbx-breadcrumbs-item>
        <cbx-breadcrumbs-separator />
        <cbx-breadcrumbs-item>
          <cbx-link>Catalog</cbx-link>
        </cbx-breadcrumbs-item>
        <cbx-breadcrumbs-separator />
        <cbx-breadcrumbs-item active>Phones</cbx-breadcrumbs-item>
      </cbx-breadcrumbs>
    </cbx-block>

    <cbx-block-title>Scrollable</cbx-block-title>
    <cbx-block-header>Breadcrumbs will be scrollable if they don't fit the screen</cbx-block-header>
    <cbx-block strong>
      <cbx-breadcrumbs>
        <cbx-breadcrumbs-item>
          <cbx-link>Home</cbx-link>
        </cbx-breadcrumbs-item>
        <cbx-breadcrumbs-separator />
        <cbx-breadcrumbs-item>
          <cbx-link>Catalog</cbx-link>
        </cbx-breadcrumbs-item>
        <cbx-breadcrumbs-separator />
        <cbx-breadcrumbs-item>
          <cbx-link>Phones</cbx-link>
        </cbx-breadcrumbs-item>
        <cbx-breadcrumbs-separator />
        <cbx-breadcrumbs-item>
          <cbx-link>Apple</cbx-link>
        </cbx-breadcrumbs-item>
        <cbx-breadcrumbs-separator />
        <cbx-breadcrumbs-item active>iPhone 12</cbx-breadcrumbs-item>
      </cbx-breadcrumbs>
    </cbx-block>

    <cbx-block-title>Collapsed</cbx-block-title>
    <cbx-block strong>
      <cbx-breadcrumbs>
        <cbx-breadcrumbs-item>
          <cbx-link>Home</cbx-link>
        </cbx-breadcrumbs-item>
        <cbx-breadcrumbs-separator />
        <cbx-breadcrumbs-collapsed class="popover-open" data-popover=".breadcrumbs-popover">
          <cbx-popover class="breadcrumbs-popover" style="width: 120px">
            <cbx-list>
              <cbx-list-item link title="Catalog" popover-close />
              <cbx-list-item link title="Phones" popover-close />
              <cbx-list-item link title="Apple" popover-close />
            </cbx-list>
          </cbx-popover>
        </cbx-breadcrumbs-collapsed>
        <cbx-breadcrumbs-separator />
        <cbx-breadcrumbs-item active>iPhone 12</cbx-breadcrumbs-item>
      </cbx-breadcrumbs>
    </cbx-block>

    <cbx-block-title>With Icons</cbx-block-title>
    <cbx-block strong>
      <cbx-breadcrumbs>
        <cbx-breadcrumbs-item>
          <cbx-link
            icon-ios="cbx:house_fill"
            icon-aurora="cbx:house_fill"
            icon-md="material:home"
            text="Home"
          />
        </cbx-breadcrumbs-item>
        <cbx-breadcrumbs-separator />
        <cbx-breadcrumbs-item>
          <cbx-link
            icon-ios="cbx:square_list_fill"
            icon-aurora="cbx:square_list_fill"
            icon-md="material:list_alt"
            text="Catalog"
          />
        </cbx-breadcrumbs-item>
        <cbx-breadcrumbs-separator />
        <cbx-breadcrumbs-item>
          <cbx-link
            icon-ios="cbx:device_phone_portrait"
            icon-aurora="cbx:device_phone_portrait"
            icon-md="material:smartphone"
            text="Phones"
          />
        </cbx-breadcrumbs-item>
        <cbx-breadcrumbs-separator />
        <cbx-breadcrumbs-item>
          <cbx-link icon-cbx="logo_apple" text="Apple" />
        </cbx-breadcrumbs-item>
        <cbx-breadcrumbs-separator />
        <cbx-breadcrumbs-item active>iPhone 12</cbx-breadcrumbs-item>
      </cbx-breadcrumbs>
    </cbx-block>
  </cbx-page>
</template>
<script>
import {
  cbxNavbar,
  cbxPage,
  cbxLink,
  cbxBlock,
  cbxBlockTitle,
  cbxBlockHeader,
  cbxBreadcrumbs,
  cbxBreadcrumbsItem,
  cbxBreadcrumbsSeparator,
  cbxBreadcrumbsCollapsed,
  cbxPopover,
  cbxList,
  cbxListItem,
} from 'xui-vue';

export default {
  components: {
    cbxNavbar,
    cbxPage,
    cbxLink,
    cbxBlock,
    cbxBlockTitle,
    cbxBlockHeader,
    cbxBreadcrumbs,
    cbxBreadcrumbsItem,
    cbxBreadcrumbsSeparator,
    cbxBreadcrumbsCollapsed,
    cbxPopover,
    cbxList,
    cbxListItem,
  },
};
</script>
