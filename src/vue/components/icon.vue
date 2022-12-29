<template>
  <i
    ref="elRef"
    :style="{ fontSize: sizeComputed, width: sizeComputed, height: sizeComputed }"
    :class="classesComputed"
  >
    {{ iconText }}
    <slot />
  </i>
</template>
<script>
import { ref, computed } from 'vue';
import { classNames } from '../shared/utils.js';
import { colorClasses, colorProps } from '../shared/mixins.js';
import { useTooltip } from '../shared/use-tooltip.js';
import { useTheme } from '../shared/use-theme.js';

export default {
  name: 'cbx-icon',
  props: {
    material: String,
    cbx: String,
    icon: String,
    ios: String,
    aurora: String,
    md: String,
    tooltip: String,
    tooltipTrigger: String,
    size: [String, Number],
    ...colorProps,
  },
  setup(props) {
    const elRef = ref(null);
    const theme = useTheme();

    useTooltip(elRef, props);

    const classesComputed = computed(() => {
      const { ios, md, aurora, cbx, material, icon } = props;
      let classes = {
        icon: true,
      };

      let themeIcon;
      if (theme.value && theme.value.ios) themeIcon = ios;
      else if (theme.value && theme.value.md) themeIcon = md;
      else if (theme.value && theme.value.aurora) themeIcon = aurora;

      if (themeIcon) {
        const parts = themeIcon.split(':');
        const prop = parts[0];
        const value = parts[1];
        if (prop === 'material' || prop === 'cbx') {
          classes['material-icons'] = prop === 'material';
          classes['cbx-icons'] = prop === 'cbx';
        }

        if (prop === 'icon') {
          classes[value] = true;
        }
      } else {
        classes = {
          icon: true,
          'material-icons': material,
          'cbx-icons': cbx,
        };
        if (icon) classes[icon] = true;
      }
      return classNames(classes, colorClasses(props));
    });

    const sizeComputed = computed(() => {
      let size = props.size;
      if (typeof props.size === 'number' || parseFloat(props.size) === props.size * 1) {
        size = `${props.size}px`;
      }
      return size;
    });

    const iconText = computed(() => {
      const { ios, md, aurora, cbx, material } = props;
      let text = material || cbx;
      if (
        md &&
        theme.value &&
        theme.value.md &&
        (md.indexOf('material:') >= 0 || md.indexOf('cbx:') >= 0)
      ) {
        text = md.split(':')[1];
      } else if (
        ios &&
        theme.value &&
        theme.value.ios &&
        (ios.indexOf('material:') >= 0 || ios.indexOf('cbx:') >= 0)
      ) {
        text = ios.split(':')[1];
      } else if (
        aurora &&
        theme.value &&
        theme.value.aurora &&
        (aurora.indexOf('material:') >= 0 || aurora.indexOf('cbx:') >= 0)
      ) {
        text = aurora.split(':')[1];
      }
      return text;
    });

    return {
      elRef,
      sizeComputed,
      classesComputed,
      iconText,
    };
  },
};
</script>
