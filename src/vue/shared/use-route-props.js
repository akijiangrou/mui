import { onMounted, onUpdated } from 'vue';

export const useRouteProps = (elRef, { routeProps } = {}) => {
  onMounted(() => {
    if (elRef.value && routeProps) {
      elRef.value.cbxRouteProps = routeProps;
    }
  });
  onUpdated(() => {
    if (elRef.value && routeProps) {
      elRef.value.cbxRouteProps = routeProps;
    } else if (elRef.value && elRef.value.cbxRouteProps) {
      delete elRef.value.cbxRouteProps;
    }
  });
};
