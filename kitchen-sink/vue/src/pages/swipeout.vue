<template>
  <cbx-page @page:beforeremove="onPageBeforeRemove" @page:init="onPageInit">
    <cbx-navbar title="Swipeout" back-link="Back"></cbx-navbar>

    <cbx-block>
      <p>
        Swipe out actions on list elements is one of the most awesome cbx features. It allows you to
        call hidden menu for each list element where you can put default ready-to use delete button
        or any other buttons for some required actions.
      </p>
    </cbx-block>

    <cbx-block-title>Swipe to delete with confirm modal</cbx-block-title>
    <cbx-list>
      <cbx-list-item swipeout title="Swipe left on me please">
        <template #media>
          <cbx-icon icon="icon-cbx" />
        </template>
        <cbx-swipeout-actions right>
          <cbx-swipeout-button delete confirm-text="Are you sure you want to delete this item?"
            >Delete</cbx-swipeout-button
          >
        </cbx-swipeout-actions>
      </cbx-list-item>
      <cbx-list-item swipeout title="Swipe left on me too">
        <template #media>
          <cbx-icon icon="icon-cbx" />
        </template>
        <cbx-swipeout-actions right>
          <cbx-swipeout-button delete confirm-text="Are you sure you want to delete this item?"
            >Delete</cbx-swipeout-button
          >
        </cbx-swipeout-actions>
      </cbx-list-item>
      <cbx-list-item title="I am not removable">
        <template #media>
          <cbx-icon icon="icon-cbx" />
        </template>
      </cbx-list-item>
    </cbx-list>

    <cbx-block-title>Swipe to delete without confirm</cbx-block-title>
    <cbx-list>
      <cbx-list-item swipeout title="Swipe left on me please">
        <template #media>
          <cbx-icon icon="icon-cbx" />
        </template>
        <cbx-swipeout-actions right>
          <cbx-swipeout-button delete>Delete</cbx-swipeout-button>
        </cbx-swipeout-actions>
      </cbx-list-item>
      <cbx-list-item swipeout title="Swipe left on me too">
        <template #media>
          <cbx-icon icon="icon-cbx" />
        </template>
        <cbx-swipeout-actions right>
          <cbx-swipeout-button delete>Delete</cbx-swipeout-button>
        </cbx-swipeout-actions>
      </cbx-list-item>
      <cbx-list-item title="I am not removable">
        <template #media>
          <cbx-icon icon="icon-cbx" />
        </template>
      </cbx-list-item>
    </cbx-list>

    <cbx-block-title>Swipe for actions</cbx-block-title>
    <cbx-list>
      <cbx-list-item swipeout title="Swipe left on me please">
        <template #media>
          <cbx-icon icon="icon-cbx" />
        </template>
        <cbx-swipeout-actions right>
          <cbx-swipeout-button @click="more">More</cbx-swipeout-button>
          <cbx-swipeout-button delete>Delete</cbx-swipeout-button>
        </cbx-swipeout-actions>
      </cbx-list-item>
      <cbx-list-item swipeout title="Swipe left on me too">
        <template #media>
          <cbx-icon icon="icon-cbx" />
        </template>
        <cbx-swipeout-actions right>
          <cbx-swipeout-button @click="more">More</cbx-swipeout-button>
          <cbx-swipeout-button delete>Delete</cbx-swipeout-button>
        </cbx-swipeout-actions>
      </cbx-list-item>
      <cbx-list-item swipeout title="You can't delete me">
        <template #media>
          <cbx-icon icon="icon-cbx" />
        </template>
        <cbx-swipeout-actions right>
          <cbx-swipeout-button @click="more">More</cbx-swipeout-button>
        </cbx-swipeout-actions>
      </cbx-list-item>
    </cbx-list>

    <cbx-block-title>With callback on remove</cbx-block-title>
    <cbx-list>
      <cbx-list-item swipeout title="Swipe left on me please" @swipeout:deleted="onDeleted">
        <template #media>
          <cbx-icon icon="icon-cbx" />
        </template>
        <cbx-swipeout-actions right>
          <cbx-swipeout-button delete>Delete</cbx-swipeout-button>
        </cbx-swipeout-actions>
      </cbx-list-item>
      <cbx-list-item swipeout title="Swipe left on me too" @swipeout:deleted="onDeleted">
        <template #media>
          <cbx-icon icon="icon-cbx" />
        </template>
        <cbx-swipeout-actions right>
          <cbx-swipeout-button delete>Delete</cbx-swipeout-button>
        </cbx-swipeout-actions>
      </cbx-list-item>
      <cbx-list-item title="I am not removable">
        <template #media>
          <cbx-icon icon="icon-cbx" />
        </template>
      </cbx-list-item>
    </cbx-list>

    <cbx-block-title>With actions on left side (swipe to right)</cbx-block-title>
    <cbx-list>
      <cbx-list-item swipeout title="Swipe right on me please">
        <template #media>
          <cbx-icon icon="icon-cbx" />
        </template>
        <cbx-swipeout-actions left>
          <cbx-swipeout-button color="green" @click="reply">Reply</cbx-swipeout-button>
          <cbx-swipeout-button color="blue" @click="forward">Forward</cbx-swipeout-button>
        </cbx-swipeout-actions>
      </cbx-list-item>
      <cbx-list-item swipeout title="Swipe right on me too">
        <template #media>
          <cbx-icon icon="icon-cbx" />
        </template>
        <cbx-swipeout-actions left>
          <cbx-swipeout-button color="green" @click="reply">Reply</cbx-swipeout-button>
          <cbx-swipeout-button color="blue" @click="forward">Forward</cbx-swipeout-button>
        </cbx-swipeout-actions>
      </cbx-list-item>
    </cbx-list>

    <cbx-block-title>On both sides with overswipes</cbx-block-title>
    <cbx-list media-list>
      <cbx-list-item
        swipeout
        title="Facebook"
        after="17:14"
        subtitle="New messages from John Doe"
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sagittis tellus ut turpis condimentum, ut dignissim lacus tincidunt. Cras dolor metus, ultrices condimentum sodales sit amet, pharetra sodales eros. Phasellus vel felis tellus. Mauris rutrum ligula nec dapibus feugiat. In vel dui laoreet, commodo augue id, pulvinar lacus."
      >
        <cbx-swipeout-actions left>
          <cbx-swipeout-button overswipe color="green" @click="reply">Reply</cbx-swipeout-button>
          <cbx-swipeout-button color="blue" @click="forward">Forward</cbx-swipeout-button>
        </cbx-swipeout-actions>
        <cbx-swipeout-actions right>
          <cbx-swipeout-button @click="more">More</cbx-swipeout-button>
          <cbx-swipeout-button color="orange" @click="mark">Mark</cbx-swipeout-button>
          <cbx-swipeout-button
            delete
            overswipe
            confirm-text="Are you sure you want to delete this item?"
            >Delete</cbx-swipeout-button
          >
        </cbx-swipeout-actions>
      </cbx-list-item>
      <cbx-list-item
        swipeout
        title="John Doe (via Twitter)"
        after="17:11"
        subtitle="John Doe (@_johndoe) mentioned you on Twitter!"
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sagittis tellus ut turpis condimentum, ut dignissim lacus tincidunt. Cras dolor metus, ultrices condimentum sodales sit amet, pharetra sodales eros. Phasellus vel felis tellus. Mauris rutrum ligula nec dapibus feugiat. In vel dui laoreet, commodo augue id, pulvinar lacus."
      >
        <cbx-swipeout-actions left>
          <cbx-swipeout-button overswipe color="green" @click="reply">Reply</cbx-swipeout-button>
          <cbx-swipeout-button color="blue" @click="forward">Forward</cbx-swipeout-button>
        </cbx-swipeout-actions>
        <cbx-swipeout-actions right>
          <cbx-swipeout-button @click="more">More</cbx-swipeout-button>
          <cbx-swipeout-button color="orange" @click="mark">Mark</cbx-swipeout-button>
          <cbx-swipeout-button
            delete
            overswipe
            confirm-text="Are you sure you want to delete this item?"
            >Delete</cbx-swipeout-button
          >
        </cbx-swipeout-actions>
      </cbx-list-item>
      <cbx-list-item
        swipeout
        title="Facebook"
        after="16:48"
        subtitle="New messages from John Doe"
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sagittis tellus ut turpis condimentum, ut dignissim lacus tincidunt. Cras dolor metus, ultrices condimentum sodales sit amet, pharetra sodales eros. Phasellus vel felis tellus. Mauris rutrum ligula nec dapibus feugiat. In vel dui laoreet, commodo augue id, pulvinar lacus."
      >
        <cbx-swipeout-actions left>
          <cbx-swipeout-button overswipe color="green" @click="reply">Reply</cbx-swipeout-button>
          <cbx-swipeout-button color="blue" @click="forward">Forward</cbx-swipeout-button>
        </cbx-swipeout-actions>
        <cbx-swipeout-actions right>
          <cbx-swipeout-button @click="more">More</cbx-swipeout-button>
          <cbx-swipeout-button color="orange" @click="mark">Mark</cbx-swipeout-button>
          <cbx-swipeout-button
            delete
            overswipe
            confirm-text="Are you sure you want to delete this item?"
            >Delete</cbx-swipeout-button
          >
        </cbx-swipeout-actions>
      </cbx-list-item>
      <cbx-list-item
        swipeout
        title="John Doe (via Twitter)"
        after="15:32"
        subtitle="John Doe (@_johndoe) mentioned you on Twitter!"
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sagittis tellus ut turpis condimentum, ut dignissim lacus tincidunt. Cras dolor metus, ultrices condimentum sodales sit amet, pharetra sodales eros. Phasellus vel felis tellus. Mauris rutrum ligula nec dapibus feugiat. In vel dui laoreet, commodo augue id, pulvinar lacus."
      >
        <cbx-swipeout-actions left>
          <cbx-swipeout-button overswipe color="green" @click="reply">Reply</cbx-swipeout-button>
          <cbx-swipeout-button color="blue" @click="forward">Forward</cbx-swipeout-button>
        </cbx-swipeout-actions>
        <cbx-swipeout-actions right>
          <cbx-swipeout-button @click="more">More</cbx-swipeout-button>
          <cbx-swipeout-button color="orange" @click="mark">Mark</cbx-swipeout-button>
          <cbx-swipeout-button
            delete
            overswipe
            confirm-text="Are you sure you want to delete this item?"
            >Delete</cbx-swipeout-button
          >
        </cbx-swipeout-actions>
      </cbx-list-item>
    </cbx-list>
  </cbx-page>
</template>
<script>
import {
  cbxNavbar,
  cbxPage,
  cbxBlockTitle,
  cbxList,
  cbxListItem,
  cbxIcon,
  cbxSwipeoutActions,
  cbxSwipeoutButton,
  cbxBlock,
  cbx,
} from 'xui-vue';

export default {
  components: {
    cbxNavbar,
    cbxPage,
    cbxBlockTitle,
    cbxList,
    cbxListItem,
    cbxIcon,
    cbxSwipeoutActions,
    cbxSwipeoutButton,
    cbxBlock,
  },
  methods: {
    more() {
      const self = this;
      self.actions.open();
    },
    mark() {
      cbx.dialog.alert('Mark');
    },
    reply() {
      cbx.dialog.alert('Reply');
    },
    forward() {
      cbx.dialog.alert('Forward');
    },
    onDeleted() {
      cbx.dialog.alert('Thanks, item removed!');
    },
    onPageBeforeRemove() {
      const self = this;
      self.actions.destroy();
    },
    onPageInit() {
      const self = this;
      self.actions = cbx.actions.create({
        buttons: [
          [
            {
              text: 'Here comes some optional description or warning for actions below',
              label: true,
            },
            {
              text: 'Action 1',
            },
            {
              text: 'Action 2',
            },
          ],
          [
            {
              text: 'Cancel',
              bold: true,
            },
          ],
        ],
      });
    },
  },
};
</script>
