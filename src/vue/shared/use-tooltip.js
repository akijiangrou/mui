import { watch, onMounted, onBeforeUnmount } from 'vue';
import { cbx, cbxready } from './cbx.js';

export const useTooltip = (elRef, props) => {
  let cbxTooltip = null;
  const { tooltip, tooltipTrigger } = props;

  onMounted(() => {
    if (!elRef.value) return;
    if (!tooltip) return;

    cbxready(() => {
      cbxTooltip = cbx.tooltip.create({
        targetEl: elRef.value,
        text: tooltip,
        trigger: tooltipTrigger,
      });
    });
  });

  onBeforeUnmount(() => {
    if (cbxTooltip && cbxTooltip.destroy) {
      cbxTooltip.destroy();
      cbxTooltip = null;
    }
  });

  watch(
    () => props.tooltip,
    (value) => {
      if (!value && cbxTooltip) {
        cbxTooltip.destroy();
        cbxTooltip = null;
        return;
      }
      if (value && !cbxTooltip && cbx) {
        cbxTooltip = cbx.tooltip.create({
          targetEl: elRef.value,
          text: value,
          trigger: tooltipTrigger,
        });
        return;
      }
      if (!value || !cbxTooltip) return;
      cbxTooltip.setText(value);
    },
  );
};
