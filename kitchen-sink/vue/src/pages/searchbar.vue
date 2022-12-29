<template>
  <cbx-page>
    <cbx-navbar back-link="Back" title="Searchbar">
      <cbx-subnavbar :inner="false">
        <cbx-searchbar
          search-container=".search-list"
          search-in=".item-title"
          :disable-button="!theme.aurora"
        ></cbx-searchbar>
      </cbx-subnavbar>
    </cbx-navbar>
    <cbx-list class="searchbar-not-found">
      <cbx-list-item title="Nothing found" />
    </cbx-list>
    <cbx-list class="search-list searchbar-found">
      <cbx-list-item title="Acura" />
      <cbx-list-item title="Audi" />
      <cbx-list-item title="BMW" />
      <cbx-list-item title="Cadillac" />
      <cbx-list-item title="Chevrolet" />
      <cbx-list-item title="Chrysler" />
      <cbx-list-item title="Dodge" />
      <cbx-list-item title="Ferrari" />
      <cbx-list-item title="Ford" />
      <cbx-list-item title="GMC" />
      <cbx-list-item title="Honda" />
      <cbx-list-item title="Hummer" />
      <cbx-list-item title="Hyundai" />
      <cbx-list-item title="Infiniti" />
      <cbx-list-item title="Isuzu" />
      <cbx-list-item title="Jaguar" />
      <cbx-list-item title="Jeep" />
      <cbx-list-item title="Kia" />
      <cbx-list-item title="Lamborghini" />
      <cbx-list-item title="Land Rover" />
      <cbx-list-item title="Lexus" />
      <cbx-list-item title="Lincoln" />
      <cbx-list-item title="Lotus" />
      <cbx-list-item title="Mazda" />
      <cbx-list-item title="Mercedes-Benz" />
      <cbx-list-item title="Mercury" />
      <cbx-list-item title="Mitsubishi" />
      <cbx-list-item title="Nissan" />
      <cbx-list-item title="Oldsmobile" />
      <cbx-list-item title="Peugeot" />
      <cbx-list-item title="Pontiac" />
      <cbx-list-item title="Porsche" />
      <cbx-list-item title="Regal" />
      <cbx-list-item title="Saab" />
      <cbx-list-item title="Saturn" />
      <cbx-list-item title="Subaru" />
      <cbx-list-item title="Suzuki" />
      <cbx-list-item title="Toyota" />
      <cbx-list-item title="Volkswagen" />
      <cbx-list-item title="Volvo" />
    </cbx-list>
  </cbx-page>
</template>
<script>
import {
  cbxNavbar,
  cbxPage,
  cbxSearchbar,
  cbxSubnavbar,
  cbxList,
  cbxListItem,
  theme,
} from 'xui-vue';

export default {
  components: {
    cbxNavbar,
    cbxPage,
    cbxSearchbar,
    cbxSubnavbar,
    cbxList,
    cbxListItem,
  },
  data() {
    return {
      theme,
    };
  },
};
</script>
