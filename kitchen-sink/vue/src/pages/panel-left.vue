<template>
  <cbx-page>
    <cbx-block-title>Left Panel</cbx-block-title>
    <cbx-block>
      <p>
        This is a left side panel. You can close it by clicking outsite or on this link:
        <cbx-link panel-close>close me</cbx-link>. You can put here anything, even another isolated
        view like in <cbx-link panel-open="right">Right Panel</cbx-link>
      </p>
    </cbx-block>
    <cbx-block-title>Main View Navigation</cbx-block-title>
    <cbx-list>
      <cbx-list-item link="/accordion/" title="Accordion" panel-close />
      <cbx-list-item link="/action-sheet/" title="Action Sheet" panel-close />
      <cbx-list-item link="/badge/" title="Badge" panel-close />
      <cbx-list-item link="/buttons/" title="Buttons" panel-close />
      <cbx-list-item link="/cards/" title="Cards" panel-close />
      <cbx-list-item link="/checkbox/" title="Checkbox" panel-close />
      <cbx-list-item link="/chips/" title="Chips/Tags" panel-close />
      <cbx-list-item link="/contacts-list/" title="Contacts List" panel-close />
      <cbx-list-item link="/data-table/" title="Data Table" panel-close />
    </cbx-list>
    <cbx-block>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse faucibus mauris leo, eu
        bibendum neque congue non. Ut leo mauris, eleifend eu commodo a, egestas ac urna. Maecenas
        in lacus faucibus, viverra ipsum pulvinar, molestie arcu. Etiam lacinia venenatis dignissim.
        Suspendisse non nisl semper tellus malesuada suscipit eu et eros. Nulla eu enim quis quam
        elementum vulputate. Mauris ornare consequat nunc viverra pellentesque. Aenean semper eu
        massa sit amet aliquam. Integer et neque sed libero mollis elementum at vitae ligula.
        Vestibulum pharetra sed libero sed porttitor. Suspendisse a faucibus lectus.
      </p>
      <p>
        Duis ut mauris sollicitudin, venenatis nisi sed, luctus ligula. Phasellus blandit nisl ut
        lorem semper pharetra. Nullam tortor nibh, suscipit in consequat vel, feugiat sed quam. Nam
        risus libero, auctor vel tristique ac, malesuada ut ante. Sed molestie, est in eleifend
        sagittis, leo tortor ullamcorper erat, at vulputate eros sapien nec libero. Mauris dapibus
        laoreet nibh quis bibendum. Fusce dolor sem, suscipit in iaculis id, pharetra at urna.
        Pellentesque tempor congue massa quis faucibus. Vestibulum nunc eros, convallis blandit dui
        sit amet, gravida adipiscing libero.
      </p>
    </cbx-block>
  </cbx-page>
</template>
<script>
import { cbxPage, cbxBlockTitle, cbxBlock, cbxList, cbxListItem, cbxLink } from 'xui-vue';

export default {
  components: {
    cbxPage,
    cbxBlockTitle,
    cbxBlock,
    cbxList,
    cbxListItem,
    cbxLink,
  },
};
</script>
