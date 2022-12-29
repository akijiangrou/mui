<template>
  <cbx-page>
    <cbx-navbar title="Content Block" back-link="Back"></cbx-navbar>
    <p>
      This paragraph is outside of content block. Not cool, but useful for any custom elements with
      custom styling.
    </p>

    <cbx-block>
      <p>
        Here comes paragraph within content block. Donec et nulla auctor massa pharetra adipiscing
        ut sit amet sem. Suspendisse molestie velit vitae mattis tincidunt. Ut sit amet quam mollis,
        vulputate turpis vel, sagittis felis.
      </p>
    </cbx-block>

    <cbx-block strong>
      <p>
        Here comes another text block with additional "block-strong" class. Praesent nec imperdiet
        diam. Maecenas vel lectus porttitor, consectetur magna nec, viverra sem. Aliquam sed risus
        dolor. Morbi tincidunt ut libero id sodales. Integer blandit varius nisi quis consectetur.
      </p>
    </cbx-block>

    <cbx-block-title>Block title</cbx-block-title>
    <cbx-block>
      <p>
        Donec et nulla auctor massa pharetra adipiscing ut sit amet sem. Suspendisse molestie velit
        vitae mattis tincidunt. Ut sit amet quam mollis, vulputate turpis vel, sagittis felis.
      </p>
    </cbx-block>

    <cbx-block-title>Another ultra long content block title</cbx-block-title>
    <cbx-block strong>
      <p>
        Donec et nulla auctor massa pharetra adipiscing ut sit amet sem. Suspendisse molestie velit
        vitae mattis tincidunt. Ut sit amet quam mollis, vulputate turpis vel, sagittis felis.
      </p>
    </cbx-block>

    <cbx-block-title>Inset</cbx-block-title>
    <cbx-block strong inset>
      <p>
        Donec et nulla auctor massa pharetra adipiscing ut sit amet sem. Suspendisse molestie velit
        vitae mattis tincidunt. Ut sit amet quam mollis, vulputate turpis vel, sagittis felis.
      </p>
    </cbx-block>

    <cbx-block-title>Tablet Inset</cbx-block-title>
    <cbx-block strong medium-inset>
      <p>
        Donec et nulla auctor massa pharetra adipiscing ut sit amet sem. Suspendisse molestie velit
        vitae mattis tincidunt. Ut sit amet quam mollis, vulputate turpis vel, sagittis felis.
      </p>
    </cbx-block>

    <cbx-block-title>With Header & Footer</cbx-block-title>
    <cbx-block>
      <cbx-block-header>Block Header</cbx-block-header>
      <p>
        Here comes paragraph within content block. Donec et nulla auctor massa pharetra adipiscing
        ut sit amet sem. Suspendisse molestie velit vitae mattis tincidunt. Ut sit amet quam mollis,
        vulputate turpis vel, sagittis felis.
      </p>
      <cbx-block-footer>Block Footer</cbx-block-footer>
    </cbx-block>

    <cbx-block-header>Block Header</cbx-block-header>
    <cbx-block>
      <p>
        Here comes paragraph within content block. Donec et nulla auctor massa pharetra adipiscing
        ut sit amet sem. Suspendisse molestie velit vitae mattis tincidunt. Ut sit amet quam mollis,
        vulputate turpis vel, sagittis felis.
      </p>
    </cbx-block>
    <cbx-block-footer>Block Footer</cbx-block-footer>

    <cbx-block strong>
      <cbx-block-header>Block Header</cbx-block-header>
      <p>
        Here comes paragraph within content block. Donec et nulla auctor massa pharetra adipiscing
        ut sit amet sem. Suspendisse molestie velit vitae mattis tincidunt. Ut sit amet quam mollis,
        vulputate turpis vel, sagittis felis.
      </p>
      <cbx-block-footer>Block Footer</cbx-block-footer>
    </cbx-block>

    <cbx-block-header>Block Header</cbx-block-header>
    <cbx-block strong>
      <p>
        Here comes paragraph within content block. Donec et nulla auctor massa pharetra adipiscing
        ut sit amet sem. Suspendisse molestie velit vitae mattis tincidunt. Ut sit amet quam mollis,
        vulputate turpis vel, sagittis felis.
      </p>
    </cbx-block>
    <cbx-block-footer>Block Footer</cbx-block-footer>

    <cbx-block-title large>Block Title Large</cbx-block-title>
    <cbx-block strong>
      <p>
        Donec et nulla auctor massa pharetra adipiscing ut sit amet sem. Suspendisse molestie velit
        vitae mattis tincidunt. Ut sit amet quam mollis, vulputate turpis vel, sagittis felis.
      </p>
    </cbx-block>

    <cbx-block-title medium>Block Title Medium</cbx-block-title>
    <cbx-block strong>
      <p>
        Donec et nulla auctor massa pharetra adipiscing ut sit amet sem. Suspendisse molestie velit
        vitae mattis tincidunt. Ut sit amet quam mollis, vulputate turpis vel, sagittis felis.
      </p>
    </cbx-block>
  </cbx-page>
</template>
<script>
import {
  cbxNavbar,
  cbxPage,
  cbxBlockTitle,
  cbxBlock,
  cbxBlockHeader,
  cbxBlockFooter,
} from 'xui-vue';

export default {
  components: {
    cbxNavbar,
    cbxPage,
    cbxBlockTitle,
    cbxBlock,
    cbxBlockHeader,
    cbxBlockFooter,
  },
};
</script>
