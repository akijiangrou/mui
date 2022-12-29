<template>
  <cbx-actions>
    <cbx-actions-group>
      <cbx-actions-label>This Action Sheet was loaded as standalone component</cbx-actions-label>
      <cbx-actions-button>Action 1</cbx-actions-button>
      <cbx-actions-button>Action 2</cbx-actions-button>
    </cbx-actions-group>
    <cbx-actions-group>
      <cbx-actions-button color="red">Cancel</cbx-actions-button>
    </cbx-actions-group>
  </cbx-actions>
</template>
<script>
import { cbxActions, cbxActionsLabel, cbxActionsGroup, cbxActionsButton } from 'xui-vue';

export default {
  components: {
    cbxActions,
    cbxActionsLabel,
    cbxActionsGroup,
    cbxActionsButton,
  },
};
</script>
