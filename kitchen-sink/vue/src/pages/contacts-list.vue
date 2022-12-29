<template>
  <cbx-page>
    <cbx-navbar title="Contacts List" back-link="Back"></cbx-navbar>
    <cbx-list contacts-list>
      <cbx-list-group>
        <cbx-list-item title="A" group-title />
        <cbx-list-item title="Aaron " />
        <cbx-list-item title="Abbie" />
        <cbx-list-item title="Adam" />
        <cbx-list-item title="Adele" />
        <cbx-list-item title="Agatha" />
        <cbx-list-item title="Agnes" />
        <cbx-list-item title="Albert" />
        <cbx-list-item title="Alexander" />
      </cbx-list-group>
      <cbx-list-group>
        <cbx-list-item title="B" group-title />
        <cbx-list-item title="Bailey" />
        <cbx-list-item title="Barclay" />
        <cbx-list-item title="Bartolo" />
        <cbx-list-item title="Bellamy" />
        <cbx-list-item title="Belle" />
        <cbx-list-item title="Benjamin" />
      </cbx-list-group>
      <cbx-list-group>
        <cbx-list-item title="C" group-title />
        <cbx-list-item title="Caiden" />
        <cbx-list-item title="Calvin" />
        <cbx-list-item title="Candy" />
        <cbx-list-item title="Carl" />
        <cbx-list-item title="Cherilyn" />
        <cbx-list-item title="Chester" />
        <cbx-list-item title="Chloe" />
      </cbx-list-group>
      <cbx-list-group>
        <cbx-list-item title="V" group-title />
        <cbx-list-item title="Vladimir" />
      </cbx-list-group>
    </cbx-list>
  </cbx-page>
</template>
<script>
import { cbxNavbar, cbxPage, cbxList, cbxListGroup, cbxListItem } from 'xui-vue';

export default {
  components: {
    cbxNavbar,
    cbxPage,
    cbxList,
    cbxListGroup,
    cbxListItem,
  },
};
</script>
