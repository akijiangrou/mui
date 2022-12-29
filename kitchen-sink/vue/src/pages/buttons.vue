<template>
  <cbx-page>
    <cbx-navbar title="Buttons" back-link="Back"></cbx-navbar>

    <cbx-block-title>Usual Buttons</cbx-block-title>
    <cbx-block strong>
      <cbx-row>
        <cbx-col>
          <cbx-button>Button</cbx-button>
        </cbx-col>
        <cbx-col>
          <cbx-button>Button</cbx-button>
        </cbx-col>
        <cbx-col>
          <cbx-button round>Round</cbx-button>
        </cbx-col>
      </cbx-row>
    </cbx-block>

    <cbx-block-title>Fill Buttons</cbx-block-title>
    <cbx-block strong>
      <cbx-row>
        <cbx-col>
          <cbx-button fill>Button</cbx-button>
        </cbx-col>
        <cbx-col>
          <cbx-button fill>Button</cbx-button>
        </cbx-col>
        <cbx-col>
          <cbx-button fill round>Round</cbx-button>
        </cbx-col>
      </cbx-row>
    </cbx-block>

    <cbx-block-title>Outline Buttons</cbx-block-title>
    <cbx-block strong>
      <cbx-row>
        <cbx-col>
          <cbx-button outline>Button</cbx-button>
        </cbx-col>
        <cbx-col>
          <cbx-button outline>Button</cbx-button>
        </cbx-col>
        <cbx-col>
          <cbx-button outline round>Round</cbx-button>
        </cbx-col>
      </cbx-row>
    </cbx-block>

    <cbx-block-title>Raised Buttons</cbx-block-title>
    <cbx-block strong>
      <cbx-row tag="p">
        <cbx-col tag="span">
          <cbx-button raised>Button</cbx-button>
        </cbx-col>
        <cbx-col tag="span">
          <cbx-button raised fill>Fill</cbx-button>
        </cbx-col>
        <cbx-col tag="span">
          <cbx-button raised outline>Outline</cbx-button>
        </cbx-col>
      </cbx-row>
      <cbx-row tag="p">
        <cbx-col tag="span">
          <cbx-button raised round>Round</cbx-button>
        </cbx-col>
        <cbx-col tag="span">
          <cbx-button raised fill round>Fill</cbx-button>
        </cbx-col>
        <cbx-col tag="span">
          <cbx-button raised outline round>Outline</cbx-button>
        </cbx-col>
      </cbx-row>
    </cbx-block>

    <cbx-block-title>Segmented</cbx-block-title>
    <cbx-block strong>
      <cbx-segmented tag="p">
        <cbx-button>Button</cbx-button>
        <cbx-button>Button</cbx-button>
        <cbx-button active>Active</cbx-button>
      </cbx-segmented>
      <cbx-segmented strong tag="p">
        <cbx-button :active="activeStrongButton === 0" @click="activeStrongButton = 0"
          >Button</cbx-button
        >
        <cbx-button :active="activeStrongButton === 1" @click="activeStrongButton = 1"
          >Button</cbx-button
        >
        <cbx-button :active="activeStrongButton === 2" @click="activeStrongButton = 2"
          >Button</cbx-button
        >
      </cbx-segmented>
      <cbx-segmented raised tag="p">
        <cbx-button>Button</cbx-button>
        <cbx-button>Button</cbx-button>
        <cbx-button active>Active</cbx-button>
      </cbx-segmented>
      <cbx-segmented tag="p">
        <cbx-button outline>Outline</cbx-button>
        <cbx-button outline>Outline</cbx-button>
        <cbx-button outline active>Active</cbx-button>
      </cbx-segmented>
      <cbx-segmented raised round tag="p">
        <cbx-button round>Button</cbx-button>
        <cbx-button round>Button</cbx-button>
        <cbx-button round active>Active</cbx-button>
      </cbx-segmented>
      <cbx-segmented round tag="p">
        <cbx-button round outline>Outline</cbx-button>
        <cbx-button round outline>Outline</cbx-button>
        <cbx-button round outline active>Active</cbx-button>
      </cbx-segmented>
    </cbx-block>

    <cbx-block-title>Large Buttons</cbx-block-title>
    <cbx-block strong>
      <cbx-row tag="p">
        <cbx-col tag="span">
          <cbx-button large>Button</cbx-button>
        </cbx-col>
        <cbx-col tag="span">
          <cbx-button large fill>Fill</cbx-button>
        </cbx-col>
      </cbx-row>
      <cbx-row tag="p">
        <cbx-col tag="span">
          <cbx-button large raised>Raised</cbx-button>
        </cbx-col>
        <cbx-col tag="span">
          <cbx-button large raised fill>Raised Fill</cbx-button>
        </cbx-col>
      </cbx-row>
    </cbx-block>

    <cbx-block-title>Small Buttons</cbx-block-title>
    <cbx-block strong>
      <cbx-row tag="p">
        <cbx-col tag="span">
          <cbx-button small>Button</cbx-button>
        </cbx-col>
        <cbx-col tag="span">
          <cbx-button small outline>Outline</cbx-button>
        </cbx-col>
        <cbx-col tag="span">
          <cbx-button small fill>Fill</cbx-button>
        </cbx-col>
      </cbx-row>
      <cbx-row tag="p">
        <cbx-col tag="span">
          <cbx-button small round>Button</cbx-button>
        </cbx-col>
        <cbx-col tag="span">
          <cbx-button small outline round>Outline</cbx-button>
        </cbx-col>
        <cbx-col tag="span">
          <cbx-button small fill round>Fill</cbx-button>
        </cbx-col>
      </cbx-row>
    </cbx-block>

    <cbx-block-title>Preloader Buttons</cbx-block-title>
    <cbx-block strong>
      <cbx-row tag="p">
        <cbx-col tag="span">
          <cbx-button preloader :loading="isLoading1" large @click="load1"> Load </cbx-button>
        </cbx-col>
        <cbx-col tag="span">
          <cbx-button preloader :loading="isLoading2" large fill @click="load2"> Load </cbx-button>
        </cbx-col>
      </cbx-row>
    </cbx-block>

    <cbx-block-title>Color Buttons</cbx-block-title>
    <cbx-block strong>
      <cbx-row>
        <cbx-col>
          <cbx-button color="red">Red</cbx-button>
        </cbx-col>
        <cbx-col>
          <cbx-button color="green">Green</cbx-button>
        </cbx-col>
        <cbx-col>
          <cbx-button color="blue">Blue</cbx-button>
        </cbx-col>
      </cbx-row>
    </cbx-block>

    <cbx-block-title>Color Fill Buttons</cbx-block-title>
    <cbx-block strong>
      <cbx-row>
        <cbx-col>
          <cbx-button fill color="red">Red</cbx-button>
        </cbx-col>
        <cbx-col>
          <cbx-button fill color="green">Green</cbx-button>
        </cbx-col>
        <cbx-col>
          <cbx-button fill color="blue">Blue</cbx-button>
        </cbx-col>
      </cbx-row>
    </cbx-block>

    <cbx-block-title>List-Block Buttons</cbx-block-title>
    <cbx-list inset>
      <cbx-list-button title="List Button 1"></cbx-list-button>
      <cbx-list-button title="List Button 2"></cbx-list-button>
      <cbx-list-button title="List Button 3"></cbx-list-button>
    </cbx-list>
    <cbx-list inset>
      <cbx-list-button title="Large Red Button" color="red"></cbx-list-button>
    </cbx-list>
  </cbx-page>
</template>
<script>
import { ref } from 'vue';
import {
  cbxNavbar,
  cbxPage,
  cbxBlockTitle,
  cbxBlock,
  cbxList,
  cbxRow,
  cbxCol,
  cbxListButton,
  cbxButton,
  cbxSegmented,
} from 'xui-vue';

export default {
  components: {
    cbxNavbar,
    cbxPage,
    cbxBlockTitle,
    cbxBlock,
    cbxList,
    cbxRow,
    cbxCol,
    cbxListButton,
    cbxButton,
    cbxSegmented,
  },
  setup() {
    const activeStrongButton = ref(0);
    const isLoading1 = ref(false);
    const isLoading2 = ref(false);

    const load1 = () => {
      if (isLoading1.value) return;
      isLoading1.value = true;
      setTimeout(() => {
        isLoading1.value = false;
      }, 4000);
    };

    const load2 = () => {
      if (isLoading2.value) return;
      isLoading2.value = true;
      setTimeout(() => {
        isLoading2.value = false;
      }, 4000);
    };

    return {
      activeStrongButton,
      isLoading1,
      isLoading2,
      load1,
      load2,
    };
  },
};
</script>
