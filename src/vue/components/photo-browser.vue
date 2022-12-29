<script>
import { watch, onMounted, onBeforeUnmount } from 'vue';
import { extend } from '../shared/utils.js';
import { cbxready, cbx } from '../shared/cbx.js';

export default {
  name: 'cbx-photo-browser',

  props: {
    init: {
      type: Boolean,
      default: true,
    },
    params: Object,
    photos: Array,
    exposition: {
      type: Boolean,
      default: true,
    },
    expositionHideCaptions: {
      type: Boolean,
      default: false,
    },
    type: {
      type: String,
    },
    navbar: {
      type: Boolean,
      default: true,
    },
    toolbar: {
      type: Boolean,
      default: true,
    },
    theme: {
      type: String,
    },
    captionsTheme: {
      type: String,
    },
    iconsColor: {
      type: String,
    },
    swipeToClose: {
      type: Boolean,
      default: true,
    },
    pageBackLinkText: {
      type: String,
      default: undefined,
    },
    popupCloseLinkText: {
      type: String,
      default: undefined,
    },
    navbarOfText: {
      type: String,
      default: undefined,
    },
    navbarShowCount: {
      type: Boolean,
      default: undefined,
    },
    swiper: {
      type: Object,
    },
    url: {
      type: String,
    },
    routableModals: {
      type: Boolean,
      default: false,
    },
    virtualSlides: {
      type: Boolean,
      default: true,
    },
    view: [String, Object],
    renderNavbar: Function,
    renderToolbar: Function,
    renderCaption: Function,
    renderObject: Function,
    renderLazyPhoto: Function,
    renderPhoto: Function,
    renderPage: Function,
    renderPopup: Function,
    renderStandalone: Function,
  },
  emits: [
    'photobrowser:open',
    'photobrowser:close',
    'photobrowser:opened',
    'photobrowser:closed',
    'photobrowser:swipetoclose',
  ],
  setup(props, { emit }) {
    let cbxPhotoBrowser = null;

    const open = (index) => {
      return cbxPhotoBrowser.open(index);
    };
    const close = () => {
      return cbxPhotoBrowser.close();
    };
    const expositionToggle = () => {
      return cbxPhotoBrowser.expositionToggle();
    };
    const expositionEnable = () => {
      return cbxPhotoBrowser.expositionEnable();
    };
    const expositionDisable = () => {
      return cbxPhotoBrowser.expositionDisable();
    };
    watch(
      () => props.photos,
      (value) => {
        const pb = cbxPhotoBrowser;
        if (!pb) return;
        pb.params.photos = value;
        if (pb.opened && pb.swiper) {
          pb.swiper.update();
        }
      },
    );
    onMounted(() => {
      if (!props.init) return;
      cbxready(() => {
        let paramsComputed;

        if (typeof props.params !== 'undefined') {
          paramsComputed = props.params;
        } else {
          paramsComputed = { ...props };
          delete paramsComputed.params;
        }

        Object.keys(paramsComputed).forEach((param) => {
          if (typeof paramsComputed[param] === 'undefined' || paramsComputed[param] === '')
            delete paramsComputed[param];
        });

        paramsComputed = extend({}, paramsComputed, {
          on: {
            open() {
              emit('photobrowser:open');
            },
            close() {
              emit('photobrowser:close');
            },
            opened() {
              emit('photobrowser:opened');
            },
            closed() {
              emit('photobrowser:closed');
            },
            swipeToClose() {
              emit('photobrowser:swipetoclose');
            },
          },
        });

        cbxPhotoBrowser = cbx.photoBrowser.create(paramsComputed);
      });
    });

    onBeforeUnmount(() => {
      if (cbxPhotoBrowser && cbxPhotoBrowser.destroy) cbxPhotoBrowser.destroy();
      cbxPhotoBrowser = null;
    });

    return {
      open,
      close,
      expositionToggle,
      expositionEnable,
      expositionDisable,
    };
  },
  render() {
    return null;
  },
};
</script>
