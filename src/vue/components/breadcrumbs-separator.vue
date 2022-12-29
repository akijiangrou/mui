<template>
  <div ref="elRef" class="breadcrumbs-separator" />
</template>
<script>
import { ref } from 'vue';

export default {
  name: 'cbx-breadcrumbs-separator',
  props: {},
  setup() {
    const elRef = ref(null);

    return {
      elRef,
    };
  },
};
</script>
