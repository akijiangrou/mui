import { onBeforeUnmount, ref } from 'vue';
import { cbx } from './cbx.js';

export const useStore = (...args) => {
  // (store, getter)
  let store = args[0];
  let getter = args[1];
  if (args.length === 1) {
    // (getter)
    store = cbx.store;
    getter = args[0];
  }
  // eslint-disable-next-line
  const obj = store._gettersPlain[getter];
  const valueRef = ref(obj.value);
  const callback = (v) => {
    valueRef.value = v;
  };
  obj.onUpdated(callback);
  onBeforeUnmount(() => {
    // eslint-disable-next-line
    store.__removeCallback(callback);
  });
  return valueRef;
};
