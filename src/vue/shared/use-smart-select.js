import { onMounted, onBeforeUnmount } from 'vue';
import { cbxready, cbx } from './cbx.js';
import { extend } from './utils.js';

export const useSmartSelect = (props, setInstance, getEl) => {
  let cbxSmartSelect;
  onMounted(() => {
    cbxready(() => {
      if (props.smartSelect) {
        const ssParams = extend({ el: getEl() }, props.smartSelectParams || {});
        cbxSmartSelect = cbx.smartSelect.create(ssParams);
        setInstance(cbxSmartSelect);
      }
    });
  });
  onBeforeUnmount(() => {
    if (cbxSmartSelect && cbxSmartSelect.destroy) {
      cbxSmartSelect.destroy();
    }
    cbxSmartSelect = null;
    setInstance(cbxSmartSelect);
  });
};
