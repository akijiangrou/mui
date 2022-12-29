<template>
  <cbx-page @page:beforeremove="onPageBeforeRemove">
    <cbx-navbar title="Action Sheet" back-link="Back"></cbx-navbar>
    <cbx-block strong>
      <p class="row">
        <!-- One group, open by direct accessing instance .open() method -->
        <cbx-button class="col" fill actions-open="#actions-one-group">One group</cbx-button>
        <!-- Two groups, open by "actions-open" attribute -->
        <cbx-button class="col" fill actions-open="#actions-two-groups">Two groups</cbx-button>
      </p>
      <p>
        <!-- Actions Grid, open by changing actionGridOpened prop -->
        <cbx-button fill @click="actionGridOpened = true">Action Grid</cbx-button>
      </p>
    </cbx-block>

    <cbx-block-title>Action Sheet To Popover</cbx-block-title>
    <cbx-block strong>
      <p>
        Action Sheet can be automatically converted to Popover (for tablets). This button will open
        Popover on tablets and Action Sheet on phones:
        <cbx-button
          style="display: inline-block"
          class="button-to-popover"
          @click="openActionsPopover"
          >Actions</cbx-button
        >
      </p>
    </cbx-block>

    <!-- One Group -->
    <cbx-actions id="actions-one-group">
      <cbx-actions-group>
        <cbx-actions-label>Do something</cbx-actions-label>
        <cbx-actions-button bold>Button 1</cbx-actions-button>
        <cbx-actions-button>Button 2</cbx-actions-button>
        <cbx-actions-button color="red">Cancel</cbx-actions-button>
      </cbx-actions-group>
    </cbx-actions>

    <!-- Two Groups -->
    <cbx-actions id="actions-two-groups">
      <cbx-actions-group>
        <cbx-actions-label>Do something</cbx-actions-label>
        <cbx-actions-button bold>Button 1</cbx-actions-button>
        <cbx-actions-button>Button 2</cbx-actions-button>
      </cbx-actions-group>
      <cbx-actions-group>
        <cbx-actions-button color="red">Cancel</cbx-actions-button>
      </cbx-actions-group>
    </cbx-actions>

    <!-- Grid -->
    <cbx-actions v-model:opened="actionGridOpened" :grid="true">
      <cbx-actions-group>
        <cbx-actions-button>
          <template #media>
            <img src="../../public/img/ks/people-96x96-1.jpeg" width="48" style="max-width: 100%" />
          </template>
          <span>Button 1</span>
        </cbx-actions-button>
        <cbx-actions-button>
          <template #media>
            <img src="../../public/img/ks/people-96x96-2.jpeg" width="48" style="max-width: 100%" />
          </template>
          <span>Button 2</span>
        </cbx-actions-button>
        <cbx-actions-button>
          <template #media>
            <img
              src="../../public/img/ks/people-100x100-3.jpeg"
              width="48"
              style="max-width: 100%"
            />
          </template>
          <span>Button 3</span>
        </cbx-actions-button>
      </cbx-actions-group>
      <cbx-actions-group>
        <cbx-actions-button>
          <template #media>
            <img
              src="../../public/img/ks/fashion-96x96-4.jpeg"
              width="48"
              style="max-width: 100%"
            />
          </template>
          <span>Button 4</span>
        </cbx-actions-button>
        <cbx-actions-button>
          <template #media>
            <img
              src="../../public/img/ks/fashion-96x96-5.jpeg"
              width="48"
              style="max-width: 100%"
            />
          </template>
          <span>Button 5</span>
        </cbx-actions-button>
        <cbx-actions-button>
          <template #media>
            <img
              src="../../public/img/ks/fashion-96x96-6.jpeg"
              width="48"
              style="max-width: 100%"
            />
          </template>
          <span>Button 6</span>
        </cbx-actions-button>
      </cbx-actions-group>
    </cbx-actions>
  </cbx-page>
</template>
<script>
import {
  cbxNavbar,
  cbxPage,
  cbxBlockTitle,
  cbxBlock,
  cbxButton,
  cbxActions,
  cbxActionsGroup,
  cbxActionsLabel,
  cbxActionsButton,
  cbx,
} from 'xui-vue';

export default {
  components: {
    cbxPage,
    cbxNavbar,
    cbxBlockTitle,
    cbxBlock,
    cbxButton,
    cbxActions,
    cbxActionsGroup,
    cbxActionsLabel,
    cbxActionsButton,
  },
  props: {
    id: String,
  },
  data() {
    return {
      actionGridOpened: false,
    };
  },
  methods: {
    openActionsPopover() {
      const self = this;
      if (!self.actionsToPopover) {
        self.actionsToPopover = cbx.actions.create({
          buttons: [
            {
              text: 'Do something',
              label: true,
            },
            {
              text: 'Button 1',
              bold: true,
            },
            {
              text: 'Button 2',
            },
            {
              text: 'Cancel',
              color: 'red',
            },
          ],
          // Need to specify popover target
          targetEl: self.$el.querySelector('.button-to-popover'),
        });
      }

      // Open
      self.actionsToPopover.open();
    },
    onPageBeforeRemove() {
      const self = this;
      if (self.actionsToPopover) {
        self.actionsToPopover.destroy();
      }
    },
  },
};
</script>
