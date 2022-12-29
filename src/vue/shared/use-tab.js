import { onMounted, onBeforeUnmount } from 'vue';
import { cbx, cbxready } from './cbx.js';

export const useTab = (elRef, emit) => {
  const onTabShow = (el) => {
    if (elRef.value !== el) return;
    emit('tab:show', el);
  };
  const onTabHide = (el) => {
    if (elRef.value !== el) return;
    emit('tab:hide', el);
  };
  onMounted(() => {
    if (!elRef.value) return;
    cbxready(() => {
      cbx.on('tabShow', onTabShow);
      cbx.on('tabHide', onTabHide);
    });
  });
  onBeforeUnmount(() => {
    if (!cbx) return;
    cbx.off('tabShow', onTabShow);
    cbx.off('tabHide', onTabHide);
  });
};
