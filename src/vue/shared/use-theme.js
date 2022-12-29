import { ref } from 'vue';
import { cbx, cbxready, theme } from './cbx.js';

export const useTheme = () => {
  const t = ref(cbx ? theme : null);
  if (!cbx) {
    cbxready(() => {
      t.value = theme;
    });
  }
  return t;
};
