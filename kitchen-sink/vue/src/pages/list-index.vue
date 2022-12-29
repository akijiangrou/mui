<template>
  <cbx-page>
    <cbx-navbar title="List Index" back-link="Back"></cbx-navbar>
    <cbx-list-index
      indexes="auto"
      list-el=".list.contacts-list"
      :scroll-list="true"
      :label="true"
      @listindex:select="onIndexSelect"
    ></cbx-list-index>
    <cbx-list contacts-list>
      <cbx-list-group>
        <cbx-list-item title="A" group-title></cbx-list-item>
        <cbx-list-item title="Aaron"></cbx-list-item>
        <cbx-list-item title="Adam"></cbx-list-item>
        <cbx-list-item title="Aiden"></cbx-list-item>
        <cbx-list-item title="Albert"></cbx-list-item>
        <cbx-list-item title="Alex"></cbx-list-item>
        <cbx-list-item title="Alexander"></cbx-list-item>
        <cbx-list-item title="Alfie"></cbx-list-item>
        <cbx-list-item title="Archie"></cbx-list-item>
        <cbx-list-item title="Arthur"></cbx-list-item>
        <cbx-list-item title="Austin"></cbx-list-item>
      </cbx-list-group>
      <cbx-list-group>
        <cbx-list-item title="B" group-title></cbx-list-item>
        <cbx-list-item title="Benjamin"></cbx-list-item>
        <cbx-list-item title="Blake"></cbx-list-item>
        <cbx-list-item title="Bobby"></cbx-list-item>
      </cbx-list-group>
      <cbx-list-group>
        <cbx-list-item title="C" group-title></cbx-list-item>
        <cbx-list-item title="Caleb"></cbx-list-item>
        <cbx-list-item title="Callum"></cbx-list-item>
        <cbx-list-item title="Cameron"></cbx-list-item>
        <cbx-list-item title="Charles"></cbx-list-item>
        <cbx-list-item title="Charlie"></cbx-list-item>
        <cbx-list-item title="Connor"></cbx-list-item>
      </cbx-list-group>
      <cbx-list-group>
        <cbx-list-item title="D" group-title></cbx-list-item>
        <cbx-list-item title="Daniel"></cbx-list-item>
        <cbx-list-item title="David"></cbx-list-item>
        <cbx-list-item title="Dexter"></cbx-list-item>
        <cbx-list-item title="Dylan"></cbx-list-item>
      </cbx-list-group>
      <cbx-list-group>
        <cbx-list-item title="E" group-title></cbx-list-item>
        <cbx-list-item title="Edward"></cbx-list-item>
        <cbx-list-item title="Elijah"></cbx-list-item>
        <cbx-list-item title="Elliot"></cbx-list-item>
        <cbx-list-item title="Elliott"></cbx-list-item>
        <cbx-list-item title="Ethan"></cbx-list-item>
        <cbx-list-item title="Evan"></cbx-list-item>
      </cbx-list-group>
      <cbx-list-group>
        <cbx-list-item title="F" group-title></cbx-list-item>
        <cbx-list-item title="Felix"></cbx-list-item>
        <cbx-list-item title="Finlay"></cbx-list-item>
        <cbx-list-item title="Finley"></cbx-list-item>
        <cbx-list-item title="Frankie"></cbx-list-item>
        <cbx-list-item title="Freddie"></cbx-list-item>
        <cbx-list-item title="Frederick"></cbx-list-item>
      </cbx-list-group>
      <cbx-list-group>
        <cbx-list-item title="G" group-title></cbx-list-item>
        <cbx-list-item title="Gabriel"></cbx-list-item>
        <cbx-list-item title="George"></cbx-list-item>
      </cbx-list-group>
      <cbx-list-group>
        <cbx-list-item title="H" group-title></cbx-list-item>
        <cbx-list-item title="Harley"></cbx-list-item>
        <cbx-list-item title="Harrison"></cbx-list-item>
        <cbx-list-item title="Harry"></cbx-list-item>
        <cbx-list-item title="Harvey"></cbx-list-item>
        <cbx-list-item title="Henry"></cbx-list-item>
        <cbx-list-item title="Hugo"></cbx-list-item>
      </cbx-list-group>
      <cbx-list-group>
        <cbx-list-item title="I" group-title></cbx-list-item>
        <cbx-list-item title="Ibrahim"></cbx-list-item>
        <cbx-list-item title="Isaac"></cbx-list-item>
      </cbx-list-group>
      <cbx-list-group>
        <cbx-list-item title="J" group-title></cbx-list-item>
        <cbx-list-item title="Jack"></cbx-list-item>
        <cbx-list-item title="Jacob"></cbx-list-item>
        <cbx-list-item title="Jake"></cbx-list-item>
        <cbx-list-item title="James"></cbx-list-item>
        <cbx-list-item title="Jamie"></cbx-list-item>
        <cbx-list-item title="Jayden"></cbx-list-item>
        <cbx-list-item title="Jenson"></cbx-list-item>
        <cbx-list-item title="Joseph"></cbx-list-item>
        <cbx-list-item title="Joshua"></cbx-list-item>
        <cbx-list-item title="Jude"></cbx-list-item>
      </cbx-list-group>
      <cbx-list-group>
        <cbx-list-item title="K" group-title></cbx-list-item>
        <cbx-list-item title="Kai"></cbx-list-item>
        <cbx-list-item title="Kian"></cbx-list-item>
      </cbx-list-group>
      <cbx-list-group>
        <cbx-list-item title="L" group-title></cbx-list-item>
        <cbx-list-item title="Leo"></cbx-list-item>
        <cbx-list-item title="Leon"></cbx-list-item>
        <cbx-list-item title="Lewis"></cbx-list-item>
        <cbx-list-item title="Liam"></cbx-list-item>
        <cbx-list-item title="Logan"></cbx-list-item>
        <cbx-list-item title="Louie"></cbx-list-item>
        <cbx-list-item title="Louis"></cbx-list-item>
        <cbx-list-item title="Luca"></cbx-list-item>
        <cbx-list-item title="Lucas"></cbx-list-item>
        <cbx-list-item title="Luke"></cbx-list-item>
      </cbx-list-group>
      <cbx-list-group>
        <cbx-list-item title="M" group-title></cbx-list-item>
        <cbx-list-item title="Mason"></cbx-list-item>
        <cbx-list-item title="Matthew"></cbx-list-item>
        <cbx-list-item title="Max"></cbx-list-item>
        <cbx-list-item title="Michael"></cbx-list-item>
        <cbx-list-item title="Mohammad"></cbx-list-item>
        <cbx-list-item title="Mohammed"></cbx-list-item>
        <cbx-list-item title="Muhammad"></cbx-list-item>
      </cbx-list-group>
      <cbx-list-group>
        <cbx-list-item title="N" group-title></cbx-list-item>
        <cbx-list-item title="Nathan"></cbx-list-item>
        <cbx-list-item title="Noah"></cbx-list-item>
      </cbx-list-group>
      <cbx-list-group>
        <cbx-list-item title="O" group-title></cbx-list-item>
        <cbx-list-item title="Oliver"></cbx-list-item>
        <cbx-list-item title="Ollie"></cbx-list-item>
        <cbx-list-item title="Oscar"></cbx-list-item>
        <cbx-list-item title="Owen"></cbx-list-item>
      </cbx-list-group>
      <cbx-list-group>
        <cbx-list-item title="R" group-title></cbx-list-item>
        <cbx-list-item title="Reuben"></cbx-list-item>
        <cbx-list-item title="Riley"></cbx-list-item>
        <cbx-list-item title="Robert"></cbx-list-item>
        <cbx-list-item title="Ronnie"></cbx-list-item>
        <cbx-list-item title="Rory"></cbx-list-item>
        <cbx-list-item title="Ryan"></cbx-list-item>
      </cbx-list-group>
      <cbx-list-group>
        <cbx-list-item title="S" group-title></cbx-list-item>
        <cbx-list-item title="Samuel"></cbx-list-item>
        <cbx-list-item title="Sebastian"></cbx-list-item>
        <cbx-list-item title="Seth"></cbx-list-item>
        <cbx-list-item title="Sonny"></cbx-list-item>
        <cbx-list-item title="Stanley"></cbx-list-item>
      </cbx-list-group>
      <cbx-list-group>
        <cbx-list-item title="T" group-title></cbx-list-item>
        <cbx-list-item title="Teddy"></cbx-list-item>
        <cbx-list-item title="Theo"></cbx-list-item>
        <cbx-list-item title="Theodore"></cbx-list-item>
        <cbx-list-item title="Thomas"></cbx-list-item>
        <cbx-list-item title="Toby"></cbx-list-item>
        <cbx-list-item title="Tommy"></cbx-list-item>
        <cbx-list-item title="Tyler"></cbx-list-item>
      </cbx-list-group>
      <cbx-list-group>
        <cbx-list-item title="W" group-title></cbx-list-item>
        <cbx-list-item title="William"></cbx-list-item>
      </cbx-list-group>
      <cbx-list-group>
        <cbx-list-item title="Z" group-title></cbx-list-item>
        <cbx-list-item title="Zachary"></cbx-list-item>
      </cbx-list-group>
    </cbx-list>
  </cbx-page>
</template>
<script>
import { cbxPage, cbxNavbar, cbxList, cbxListGroup, cbxListItem, cbxListIndex } from 'xui-vue';

export default {
  components: {
    cbxPage,
    cbxNavbar,
    cbxList,
    cbxListGroup,
    cbxListItem,
    cbxListIndex,
  },
  methods: {
    onIndexSelect(itemContent) {
      // eslint-disable-next-line
      console.log(itemContent);
    },
  },
};
</script>
