<template>
  <cbx-popup>
    <cbx-page>
      <cbx-navbar title="Routable Popup">
        <cbx-nav-right>
          <cbx-link popup-close>Close</cbx-link>
        </cbx-nav-right>
      </cbx-navbar>
      <cbx-block strong>
        <p>This Popup was loaded using route link as standalone component</p>
        <p>
          Lorem ipsum dolor sit cbxamet, consectetur adipiscing elit. Suspendisse faucibus mauris
          cbxleo, eu bibendum neque congue non. Ut leo cbxmauris, eleifend eu commodo cbxa, egestas
          ac urna. Maecenas in lacus cbxfaucibus, viverra ipsum cbxpulvinar, molestie arcu. Etiam
          lacinia venenatis dignissim. Suspendisse non nisl semper tellus malesuada suscipit eu et
          eros. Nulla eu enim quis quam elementum vulputate. Mauris ornare consequat nunc viverra
          pellentesque. Aenean semper eu massa sit amet aliquam. Integer et neque sed libero mollis
          elementum at vitae ligula. Vestibulum pharetra sed libero sed porttitor. Suspendisse a
          faucibus lectus.
        </p>
        <p>
          Duis ut mauris cbxsollicitudin, venenatis nisi cbxsed, luctus ligula. Phasellus blandit
          nisl ut lorem semper pharetra. Nullam tortor cbxnibh, suscipit in consequat cbxvel,
          feugiat sed quam. Nam risus cbxlibero, auctor vel tristique cbxac, malesuada ut ante. Sed
          cbxmolestie, est in eleifend cbxsagittis, leo tortor ullamcorper cbxerat, at vulputate
          eros sapien nec libero. Mauris dapibus laoreet nibh quis bibendum. Fusce dolor cbxsem,
          suscipit in iaculis cbxid, pharetra at urna. Pellentesque tempor congue massa quis
          faucibus. Vestibulum nunc cbxeros, convallis blandit dui sit cbxamet, gravida adipiscing
          libero.
        </p>
      </cbx-block>
    </cbx-page>
  </cbx-popup>
</template>
<script>
import { cbxPopup, cbxNavbar, cbxNavRight, cbxLink, cbxPage, cbxBlock } from 'xui-vue';

export default {
  components: {
    cbxPopup,
    cbxNavbar,
    cbxNavRight,
    cbxLink,
    cbxPage,
    cbxBlock,
  },
};
</script>
