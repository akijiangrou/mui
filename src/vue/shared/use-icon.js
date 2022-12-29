export const useIcon = (props = {}) => {
  const {
    icon,
    iconMaterial,
    iconCbx,
    iconMd,
    iconIos,
    iconAurora,
    iconColor,
    iconSize,
    iconBadge,
    badgeColor,
    iconBadgeColor,
  } = props;
  if (icon || iconMaterial || iconCbx || iconMd || iconIos || iconAurora) {
    return {
      props: {
        material: iconMaterial,
        cbx: iconCbx,
        icon,
        md: iconMd,
        ios: iconIos,
        aurora: iconAurora,
        color: iconColor,
        size: iconSize,
      },
      badge:
        iconBadge || iconBadge === 0
          ? { props: { color: badgeColor || iconBadgeColor }, content: iconBadge }
          : null,
    };
  }
  return null;
};
