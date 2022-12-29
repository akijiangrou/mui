<template>
  <cbx-page>
    <cbx-navbar title="Accordion" back-link="Back"></cbx-navbar>

    <cbx-block-title>List View Accordion</cbx-block-title>
    <cbx-list accordion-list>
      <cbx-list-item accordion-item title="Lorem Ipsum">
        <cbx-accordion-content>
          <cbx-block>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean elementum id neque nec
              commodo. Sed vel justo at turpis laoreet pellentesque quis sed lorem. Integer semper
              arcu nibh, non mollis arcu tempor vel. Sed pharetra tortor vitae est rhoncus, vel
              congue dui sollicitudin. Donec eu arcu dignissim felis viverra blandit suscipit eget
              ipsum.
            </p>
          </cbx-block>
        </cbx-accordion-content>
      </cbx-list-item>
      <cbx-list-item accordion-item title="Nested List">
        <cbx-accordion-content>
          <cbx-list>
            <cbx-list-item title="Item 1"></cbx-list-item>
            <cbx-list-item title="Item 2"></cbx-list-item>
            <cbx-list-item title="Item 3"></cbx-list-item>
            <cbx-list-item title="Item 4"></cbx-list-item>
          </cbx-list>
        </cbx-accordion-content>
      </cbx-list-item>
      <cbx-list-item accordion-item title="Integer semper">
        <cbx-accordion-content>
          <cbx-block>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean elementum id neque nec
              commodo. Sed vel justo at turpis laoreet pellentesque quis sed lorem. Integer semper
              arcu nibh, non mollis arcu tempor vel. Sed pharetra tortor vitae est rhoncus, vel
              congue dui sollicitudin. Donec eu arcu dignissim felis viverra blandit suscipit eget
              ipsum.
            </p>
          </cbx-block>
        </cbx-accordion-content>
      </cbx-list-item>
    </cbx-list>

    <cbx-block-title>Inset Accordion</cbx-block-title>
    <cbx-list accordion-list inset>
      <cbx-list-item accordion-item title="Lorem Ipsum">
        <cbx-accordion-content>
          <cbx-block>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean elementum id neque nec
              commodo. Sed vel justo at turpis laoreet pellentesque quis sed lorem. Integer semper
              arcu nibh, non mollis arcu tempor vel. Sed pharetra tortor vitae est rhoncus, vel
              congue dui sollicitudin. Donec eu arcu dignissim felis viverra blandit suscipit eget
              ipsum.
            </p>
          </cbx-block>
        </cbx-accordion-content>
      </cbx-list-item>
      <cbx-list-item accordion-item title="Nested List">
        <cbx-accordion-content>
          <cbx-list>
            <cbx-list-item title="Item 1"></cbx-list-item>
            <cbx-list-item title="Item 2"></cbx-list-item>
            <cbx-list-item title="Item 3"></cbx-list-item>
            <cbx-list-item title="Item 4"></cbx-list-item>
          </cbx-list>
        </cbx-accordion-content>
      </cbx-list-item>
      <cbx-list-item accordion-item title="Integer semper">
        <cbx-accordion-content>
          <cbx-block>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean elementum id neque nec
              commodo. Sed vel justo at turpis laoreet pellentesque quis sed lorem. Integer semper
              arcu nibh, non mollis arcu tempor vel. Sed pharetra tortor vitae est rhoncus, vel
              congue dui sollicitudin. Donec eu arcu dignissim felis viverra blandit suscipit eget
              ipsum.
            </p>
          </cbx-block>
        </cbx-accordion-content>
      </cbx-list-item>
    </cbx-list>

    <cbx-block-title>Opposite Side</cbx-block-title>
    <cbx-list accordion-list accordion-opposite>
      <cbx-list-item accordion-item title="Lorem Ipsum">
        <cbx-accordion-content>
          <cbx-block>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean elementum id neque nec
              commodo. Sed vel justo at turpis laoreet pellentesque quis sed lorem. Integer semper
              arcu nibh, non mollis arcu tempor vel. Sed pharetra tortor vitae est rhoncus, vel
              congue dui sollicitudin. Donec eu arcu dignissim felis viverra blandit suscipit eget
              ipsum.
            </p>
          </cbx-block>
        </cbx-accordion-content>
      </cbx-list-item>
      <cbx-list-item accordion-item title="Nested List">
        <cbx-accordion-content>
          <cbx-list>
            <cbx-list-item title="Item 1"></cbx-list-item>
            <cbx-list-item title="Item 2"></cbx-list-item>
            <cbx-list-item title="Item 3"></cbx-list-item>
            <cbx-list-item title="Item 4"></cbx-list-item>
          </cbx-list>
        </cbx-accordion-content>
      </cbx-list-item>
      <cbx-list-item accordion-item title="Integer semper">
        <cbx-accordion-content>
          <cbx-block>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean elementum id neque nec
              commodo. Sed vel justo at turpis laoreet pellentesque quis sed lorem. Integer semper
              arcu nibh, non mollis arcu tempor vel. Sed pharetra tortor vitae est rhoncus, vel
              congue dui sollicitudin. Donec eu arcu dignissim felis viverra blandit suscipit eget
              ipsum.
            </p>
          </cbx-block>
        </cbx-accordion-content>
      </cbx-list-item>
    </cbx-list>

    <cbx-block-title>Custom Collapsible</cbx-block-title>
    <cbx-block inner accordion-list>
      <cbx-accordion-item v-for="n in 3" :key="n">
        <cbx-accordion-toggle
          ><b>Item {{ n }}</b></cbx-accordion-toggle
        >
        <cbx-accordion-content>Content {{ n }}</cbx-accordion-content>
      </cbx-accordion-item>
    </cbx-block>
  </cbx-page>
</template>
<script>
import {
  cbxNavbar,
  cbxPage,
  cbxBlockTitle,
  cbxBlock,
  cbxAccordionItem,
  cbxAccordionToggle,
  cbxAccordionContent,
  cbxList,
  cbxListItem,
} from 'xui-vue';

export default {
  components: {
    cbxNavbar,
    cbxPage,
    cbxBlockTitle,
    cbxBlock,
    cbxAccordionItem,
    cbxAccordionToggle,
    cbxAccordionContent,
    cbxList,
    cbxListItem,
  },
};
</script>
