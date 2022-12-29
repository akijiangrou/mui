<template>
  <cbx-page @page:beforeremove="onPageBeforeRemove" @page:beforeout="onPageBeforeOut">
    <cbx-navbar title="Sheet Modal" back-link="Back"></cbx-navbar>
    <cbx-block strong>
      <p>
        Sheet Modals slide up from the bottom of the screen to reveal more content. Such modals
        allow to create custom overlays with custom content.
      </p>
      <cbx-row tag="p">
        <cbx-button class="col" fill sheet-open=".demo-sheet">Open Sheet</cbx-button>
        <cbx-button class="col" fill @click="createSheet">Create Dynamic Sheet</cbx-button>
      </cbx-row>
      <p>
        <cbx-button class="col" fill sheet-open=".demo-sheet-top">Top Sheet</cbx-button>
      </p>
      <p>
        <cbx-button class="col" fill @click="sheetOpened = true">Open Via Prop Change</cbx-button>
      </p>
    </cbx-block>

    <cbx-block-title>Push View</cbx-block-title>
    <cbx-block strong>
      <p>
        Sheet can push view behind on open. By default it has effect only when `safe-area-inset-top`
        is more than zero (iOS fullscreen webapp or iOS cordova app)
      </p>
      <p>
        <cbx-button fill sheet-open=".demo-sheet-push">Sheet Push</cbx-button>
      </p>
    </cbx-block>

    <cbx-block-title>Swipeable Sheet</cbx-block-title>
    <cbx-block strong>
      <p>
        Sheet modal can be closed with swipe to top (for top Sheet) or bottom (for default Bottom
        sheet):
      </p>
      <p>
        <cbx-button fill sheet-open=".demo-sheet-swipe-to-close">Swipe To Close</cbx-button>
      </p>
      <p>Also there is swipe-step that can be set on Sheet modal to expand it with swipe:</p>
      <p>
        <cbx-button fill sheet-open=".demo-sheet-swipe-to-step">Swipe To Step</cbx-button>
      </p>
    </cbx-block>

    <cbx-sheet v-model:opened="sheetOpened" class="demo-sheet">
      <cbx-toolbar>
        <div class="left"></div>
        <div class="right">
          <cbx-link sheet-close>Close</cbx-link>
        </div>
      </cbx-toolbar>
      <!-- Scrollable sheet content -->
      <cbx-page-content>
        <cbx-block>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae ducimus dolorum ipsa
            aliquid accusamus perferendis laboriosam delectus numquam minima animi, libero illo in
            tempora harum sequi corporis alias ex adipisci.
          </p>
          <p>
            Sunt magni enim saepe quasi aspernatur delectus consectetur fugiat necessitatibus qui
            sed, similique quis facere tempora, laudantium quae expedita ea, aperiam dolores. Aut
            deserunt soluta alias magnam. Consequatur, nisi, enim.
          </p>
          <p>
            Eaque maiores ducimus, impedit unde culpa qui, explicabo accusamus, non vero corporis
            voluptatibus similique odit ab. Quaerat quasi consectetur quidem libero? Repudiandae
            adipisci vel voluptatum, autem libero minus dignissimos repellat.
          </p>
          <p>
            Iusto, est corrupti! Totam minus voluptas natus esse possimus nobis, delectus veniam
            expedita sapiente ut cum reprehenderit aliquid odio amet praesentium vero temporibus
            obcaecati beatae aspernatur incidunt, perferendis voluptates doloribus?
          </p>
          <p>
            Illum id laborum tempore, doloribus culpa labore ex iusto odit. Quibusdam consequuntur
            totam nam obcaecati, enim cumque nobis, accusamus, quos voluptates, voluptatibus
            sapiente repellendus nesciunt praesentium velit ipsa illo iusto.
          </p>
        </cbx-block>
      </cbx-page-content>
    </cbx-sheet>

    <cbx-sheet top class="demo-sheet-top">
      <cbx-toolbar bottom>
        <div class="left"></div>
        <div class="right">
          <cbx-link sheet-close>Close</cbx-link>
        </div>
      </cbx-toolbar>
      <!-- Scrollable sheet content -->
      <cbx-page-content>
        <cbx-block>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae ducimus dolorum ipsa
            aliquid accusamus perferendis laboriosam delectus numquam minima animi, libero illo in
            tempora harum sequi corporis alias ex adipisci.
          </p>
          <p>
            Sunt magni enim saepe quasi aspernatur delectus consectetur fugiat necessitatibus qui
            sed, similique quis facere tempora, laudantium quae expedita ea, aperiam dolores. Aut
            deserunt soluta alias magnam. Consequatur, nisi, enim.
          </p>
          <p>
            Eaque maiores ducimus, impedit unde culpa qui, explicabo accusamus, non vero corporis
            voluptatibus similique odit ab. Quaerat quasi consectetur quidem libero? Repudiandae
            adipisci vel voluptatum, autem libero minus dignissimos repellat.
          </p>
          <p>
            Iusto, est corrupti! Totam minus voluptas natus esse possimus nobis, delectus veniam
            expedita sapiente ut cum reprehenderit aliquid odio amet praesentium vero temporibus
            obcaecati beatae aspernatur incidunt, perferendis voluptates doloribus?
          </p>
          <p>
            Illum id laborum tempore, doloribus culpa labore ex iusto odit. Quibusdam consequuntur
            totam nam obcaecati, enim cumque nobis, accusamus, quos voluptates, voluptatibus
            sapiente repellendus nesciunt praesentium velit ipsa illo iusto.
          </p>
        </cbx-block>
      </cbx-page-content>
    </cbx-sheet>

    <cbx-sheet class="demo-sheet-push" push>
      <cbx-toolbar>
        <div class="left"></div>
        <div class="right">
          <cbx-link sheet-close>Close</cbx-link>
        </div>
      </cbx-toolbar>
      <!-- Scrollable sheet content -->
      <cbx-page-content>
        <cbx-block>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae ducimus dolorum ipsa
            aliquid accusamus perferendis laboriosam delectus numquam minima animi, libero illo in
            tempora harum sequi corporis alias ex adipisci.
          </p>
          <p>
            Sunt magni enim saepe quasi aspernatur delectus consectetur fugiat necessitatibus qui
            sed, similique quis facere tempora, laudantium quae expedita ea, aperiam dolores. Aut
            deserunt soluta alias magnam. Consequatur, nisi, enim.
          </p>
          <p>
            Eaque maiores ducimus, impedit unde culpa qui, explicabo accusamus, non vero corporis
            voluptatibus similique odit ab. Quaerat quasi consectetur quidem libero? Repudiandae
            adipisci vel voluptatum, autem libero minus dignissimos repellat.
          </p>
          <p>
            Iusto, est corrupti! Totam minus voluptas natus esse possimus nobis, delectus veniam
            expedita sapiente ut cum reprehenderit aliquid odio amet praesentium vero temporibus
            obcaecati beatae aspernatur incidunt, perferendis voluptates doloribus?
          </p>
          <p>
            Illum id laborum tempore, doloribus culpa labore ex iusto odit. Quibusdam consequuntur
            totam nam obcaecati, enim cumque nobis, accusamus, quos voluptates, voluptatibus
            sapiente repellendus nesciunt praesentium velit ipsa illo iusto.
          </p>
        </cbx-block>
      </cbx-page-content>
    </cbx-sheet>

    <cbx-sheet class="demo-sheet-swipe-to-close" style="height: auto" swipe-to-close push backdrop>
      <div class="swipe-handler"></div>

      <cbx-page-content>
        <cbx-block-title large>Hello!</cbx-block-title>
        <cbx-block>
          <p>
            Eaque maiores ducimus, impedit unde culpa qui, explicabo accusamus, non vero corporis
            voluptatibus similique odit ab. Quaerat quasi consectetur quidem libero? Repudiandae
            adipisci vel voluptatum, autem libero minus dignissimos repellat.
          </p>
          <p>
            Iusto, est corrupti! Totam minus voluptas natus esse possimus nobis, delectus veniam
            expedita sapiente ut cum reprehenderit aliquid odio amet praesentium vero temporibus
            obcaecati beatae aspernatur incidunt, perferendis voluptates doloribus?
          </p>
        </cbx-block>
      </cbx-page-content>
    </cbx-sheet>

    <cbx-sheet
      class="demo-sheet-swipe-to-step"
      style="height: auto"
      swipe-to-close
      swipe-to-step
      push
      backdrop
    >
      <div class="swipe-handler" @click="toggleSwipeStep"></div>
      <div class="sheet-modal-swipe-step">
        <div class="display-flex padding justify-content-space-between align-items-center">
          <div style="font-size: 18px"><b>Total:</b></div>
          <div style="font-size: 22px"><b>$500</b></div>
        </div>
        <div class="padding-horizontal padding-bottom">
          <cbx-button large fill>Make Payment</cbx-button>
          <div class="margin-top text-align-center">Swipe up for more details</div>
        </div>
      </div>
      <cbx-block-title medium class="margin-top">Your order:</cbx-block-title>
      <cbx-list no-hairlines>
        <cbx-list-item title="Item 1">
          <template #after>
            <b class="text-color-black">$200</b>
          </template>
        </cbx-list-item>
        <cbx-list-item title="Item 2">
          <template #after>
            <b class="text-color-black">$180</b>
          </template>
        </cbx-list-item>
        <cbx-list-item title="Delivery">
          <template #after>
            <b class="text-color-black">$120</b>
          </template>
        </cbx-list-item>
      </cbx-list>
    </cbx-sheet>
  </cbx-page>
</template>
<script>
import {
  cbxPage,
  cbxNavbar,
  cbxSheet,
  cbxPageContent,
  cbxToolbar,
  cbxBlockTitle,
  cbxBlock,
  cbxButton,
  cbxLink,
  cbxRow,
  cbxList,
  cbxListItem,
  cbx,
} from 'xui-vue';
import $ from 'dom7';

export default {
  components: {
    cbxPage,
    cbxNavbar,
    cbxSheet,
    cbxPageContent,
    cbxToolbar,
    cbxBlockTitle,
    cbxBlock,
    cbxButton,
    cbxLink,
    cbxRow,
    cbxList,
    cbxListItem,
  },
  data() {
    return {
      sheetOpened: false,
    };
  },
  methods: {
    toggleSwipeStep() {
      cbx.sheet.stepToggle('.demo-sheet-swipe-to-step');
    },
    createSheet() {
      const self = this;
      // Create sheet modal
      if (!self.sheet) {
        self.sheet = cbx.sheet.create({
          content: `
            <div class="sheet-modal sheet-modal-bottom">
              <div class="toolbar">
                <div class="toolbar-inner justify-content-flex-end">
                  <a href="#" class="link sheet-close">Close</a>
                </div>
              </div>
              <div class="sheet-modal-inner">
                <div class="page-content">
                  <div class="block">
                    <p>This sheet modal was created dynamically</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse faucibus mauris leo, eu bibendum neque congue non. Ut leo mauris, eleifend eu commodo a, egestas ac urna. Maecenas in lacus faucibus, viverra ipsum pulvinar, molestie arcu. Etiam lacinia venenatis dignissim. Suspendisse non nisl semper tellus malesuada suscipit eu et eros. Nulla eu enim quis quam elementum vulputate. Mauris ornare consequat nunc viverra pellentesque. Aenean semper eu massa sit amet aliquam. Integer et neque sed libero mollis elementum at vitae ligula. Vestibulum pharetra sed libero sed porttitor. Suspendisse a faucibus lectus.</p>
                  </div>
                </div>
              </div>
            </div>
          `.trim(),
        });
      }
      // Close inline sheet
      if ($('.demo-sheet.modal-in').length > 0) cbx.sheet.close('.demo-sheet');
      // Open it
      self.sheet.open();
    },
    onPageBeforeOut() {
      // Close opened sheets on page out
      cbx.sheet.close();
    },
    onPageBeforeRemove() {
      const self = this;
      // Destroy sheet modal when page removed
      if (self.sheet) self.sheet.destroy();
    },
  },
};
</script>
