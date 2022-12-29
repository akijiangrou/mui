<template>
  <cbx-page>
    <cbx-navbar title="Treeview" back-link="Back" />

    <cbx-block-title>Basic tree view</cbx-block-title>
    <cbx-block strong class="no-padding-horizontal">
      <cbx-treeview>
        <cbx-treeview-item label="Item 1">
          <cbx-treeview-item label="Sub Item 1">
            <cbx-treeview-item label="Sub Sub Item 1" />
            <cbx-treeview-item label="Sub Sub Item 2" />
          </cbx-treeview-item>
          <cbx-treeview-item label="Sub Item 2">
            <cbx-treeview-item label="Sub Sub Item 1" />
            <cbx-treeview-item label="Sub Sub Item 2" />
          </cbx-treeview-item>
        </cbx-treeview-item>
        <cbx-treeview-item label="Item 2">
          <cbx-treeview-item label="Sub Item 1">
            <cbx-treeview-item label="Sub Sub Item 1" />
            <cbx-treeview-item label="Sub Sub Item 2" />
          </cbx-treeview-item>
          <cbx-treeview-item label="Sub Item 2">
            <cbx-treeview-item label="Sub Sub Item 1" />
            <cbx-treeview-item label="Sub Sub Item 2" />
          </cbx-treeview-item>
        </cbx-treeview-item>
        <cbx-treeview-item label="Item 3" />
      </cbx-treeview>
    </cbx-block>

    <cbx-block-title>With icons</cbx-block-title>
    <cbx-block strong class="no-padding-horizontal">
      <cbx-treeview>
        <cbx-treeview-item label="images" icon-cbx="folder_fill">
          <cbx-treeview-item label="avatar.png" icon-cbx="photo_fill" />
          <cbx-treeview-item label="background.jpg" icon-cbx="photo_fill" />
        </cbx-treeview-item>
        <cbx-treeview-item label="documents" icon-cbx="folder_fill">
          <cbx-treeview-item label="cv.docx" icon-cbx="doc_text_fill" />
          <cbx-treeview-item label="info.docx" icon-cbx="doc_text_fill" />
        </cbx-treeview-item>
        <cbx-treeview-item label=".gitignore" icon-cbx="logo_github" />
        <cbx-treeview-item label="index.html" icon-cbx="doc_text_fill" />
      </cbx-treeview>
    </cbx-block>

    <cbx-block-title>With checkboxes</cbx-block-title>
    <cbx-block strong class="no-padding-horizontal">
      <cbx-treeview>
        <cbx-treeview-item label="images" icon-cbx="folder_fill">
          <template #content-start>
            <cbx-checkbox
              :checked="Object.values(checkboxes.images).indexOf(false) < 0"
              :indeterminate="
                Object.values(checkboxes.images).indexOf(false) >= 0 &&
                Object.values(checkboxes.images).indexOf(true) >= 0
              "
              @change="
                (e) =>
                  Object.keys(checkboxes.images).forEach(
                    (k) => (checkboxes.images[k] = e.target.checked),
                  )
              "
            />
          </template>
          <cbx-treeview-item label="avatar.png" icon-cbx="photo_fill">
            <template #content-start>
              <cbx-checkbox
                :checked="checkboxes.images['avatar.png']"
                @change="checkboxes.images['avatar.png'] = $event.target.checked"
              />
            </template>
          </cbx-treeview-item>
          <cbx-treeview-item label="background.jpg" icon-cbx="photo_fill">
            <template #content-start>
              <cbx-checkbox
                :checked="checkboxes.images['background.jpg']"
                @change="checkboxes.images['background.jpg'] = $event.target.checked"
              />
            </template>
          </cbx-treeview-item>
        </cbx-treeview-item>
        <cbx-treeview-item label="documents" icon-cbx="folder_fill">
          <template #content-start>
            <cbx-checkbox
              :checked="Object.values(checkboxes.documents).indexOf(false) < 0"
              :indeterminate="
                Object.values(checkboxes.documents).indexOf(false) >= 0 &&
                Object.values(checkboxes.documents).indexOf(true) >= 0
              "
              @change="
                (e) =>
                  Object.keys(checkboxes.documents).forEach(
                    (k) => (checkboxes.documents[k] = e.target.checked),
                  )
              "
            />
          </template>
          <cbx-treeview-item label="cv.docx" icon-cbx="doc_text_fill">
            <template #content-start>
              <cbx-checkbox
                :checked="checkboxes.documents['cv.docx']"
                @change="checkboxes.documents['cv.docx'] = $event.target.checked"
              />
            </template>
          </cbx-treeview-item>
          <cbx-treeview-item label="info.docx" icon-cbx="doc_text_fill">
            <template #content-start>
              <cbx-checkbox
                :checked="checkboxes.documents['info.docx']"
                @change="checkboxes.documents['info.docx'] = $event.target.checked"
              />
            </template>
          </cbx-treeview-item>
        </cbx-treeview-item>
        <cbx-treeview-item label=".gitignore" icon-cbx="logo_github">
          <template #content-start>
            <cbx-checkbox
              :checked="checkboxes['.gitignore']"
              @change="checkboxes['.gitignore'] = $event.target.checked"
            />
          </template>
        </cbx-treeview-item>
        <cbx-treeview-item label="index.html" icon-cbx="doc_text_fill">
          <template #content-start>
            <cbx-checkbox
              :checked="checkboxes['index.html']"
              @change="checkboxes['index.html'] = $event.target.checked"
            />
          </template>
        </cbx-treeview-item>
      </cbx-treeview>
    </cbx-block>

    <cbx-block-title>Whole item as toggle</cbx-block-title>
    <cbx-block strong class="no-padding-horizontal">
      <cbx-treeview>
        <cbx-treeview-item item-toggle label="images" icon-cbx="folder_fill">
          <cbx-treeview-item label="avatar.png" icon-cbx="photo_fill" />
          <cbx-treeview-item label="background.jpg" icon-cbx="photo_fill" />
        </cbx-treeview-item>
        <cbx-treeview-item item-toggle label="documents" icon-cbx="folder_fill">
          <cbx-treeview-item label="cv.docx" icon-cbx="doc_text_fill" />
          <cbx-treeview-item label="info.docx" icon-cbx="doc_text_fill" />
        </cbx-treeview-item>
        <cbx-treeview-item label=".gitignore" icon-cbx="logo_github" />
        <cbx-treeview-item label="index.html" icon-cbx="doc_text_fill" />
      </cbx-treeview>
    </cbx-block>

    <cbx-block-title>Selectable</cbx-block-title>
    <cbx-block strong class="no-padding-horizontal">
      <cbx-treeview>
        <cbx-treeview-item
          selectable
          :selected="selectedItem === 'images'"
          label="images"
          icon-cbx="folder_fill"
          @click="toggleSelectable($event, 'images')"
        >
          <cbx-treeview-item
            selectable
            :selected="selectedItem === 'avatar.png'"
            label="avatar.png"
            icon-cbx="photo_fill"
            @click="toggleSelectable($event, 'avatar.png')"
          />
          <cbx-treeview-item
            selectable
            :selected="selectedItem === 'background.jpg'"
            label="background.jpg"
            icon-cbx="photo_fill"
            @click="toggleSelectable($event, 'background.jpg')"
          />
        </cbx-treeview-item>
        <cbx-treeview-item
          selectable
          :selected="selectedItem === 'documents'"
          label="documents"
          icon-cbx="folder_fill"
          @click="toggleSelectable($event, 'documents')"
        >
          <cbx-treeview-item
            selectable
            :selected="selectedItem === 'cv.docx'"
            label="cv.docx"
            icon-cbx="doc_text_fill"
            @click="toggleSelectable($event, 'cv.docx')"
          />
          <cbx-treeview-item
            selectable
            :selected="selectedItem === 'info.docx'"
            label="info.docx"
            icon-cbx="doc_text_fill"
            @click="toggleSelectable($event, 'info.docx')"
          />
        </cbx-treeview-item>
        <cbx-treeview-item
          selectable
          :selected="selectedItem === '.gitignore'"
          label=".gitignore"
          icon-cbx="logo_github"
          @click="toggleSelectable($event, '.gitignore')"
        />
        <cbx-treeview-item
          selectable
          :selected="selectedItem === 'index.html'"
          label="index.html"
          icon-cbx="doc_text_fill"
          @click="toggleSelectable($event, 'index.html')"
        />
      </cbx-treeview>
    </cbx-block>

    <cbx-block-title>Preload children</cbx-block-title>
    <cbx-block strong class="no-padding-horizontal">
      <cbx-treeview>
        <cbx-treeview-item
          toggle
          load-children
          icon-cbx="person_2_fill"
          label="Users"
          @treeview:loadchildren="loadChildren"
        >
          <cbx-treeview-item
            v-for="(item, index) in loadedChildren"
            :key="index"
            icon-cbx="person_fill"
            :label="item.name"
          />
        </cbx-treeview-item>
      </cbx-treeview>
    </cbx-block>

    <cbx-block-title>With links</cbx-block-title>
    <cbx-block strong class="no-padding-horizontal">
      <cbx-treeview>
        <cbx-treeview-item icon-cbx="square_grid_2x2_fill" item-toggle label="Modals">
          <cbx-treeview-item link="/popup/" icon-cbx="link" label="Popup" />
          <cbx-treeview-item link="/dialog/" icon-cbx="link" label="Dialog" />
          <cbx-treeview-item link="/action-sheet/" icon-cbx="link" label="Action Sheet" />
        </cbx-treeview-item>
        <cbx-treeview-item icon-cbx="square_grid_2x2_fill" item-toggle label="Navigation Bars">
          <cbx-treeview-item link="/navbar/" icon-cbx="link" label="Navbar" />
          <cbx-treeview-item link="/toolbar-tabbar/" icon-cbx="link" label="Toolbar & Tabbar" />
        </cbx-treeview-item>
      </cbx-treeview>
    </cbx-block>
  </cbx-page>
</template>
<script>
import {
  cbxPage,
  cbxNavbar,
  cbxBlockTitle,
  cbxBlock,
  cbxTreeview,
  cbxTreeviewItem,
  cbxCheckbox,
} from 'xui-vue';
import $ from 'dom7';

export default {
  components: {
    cbxPage,
    cbxNavbar,
    cbxBlockTitle,
    cbxBlock,
    cbxTreeview,
    cbxTreeviewItem,
    cbxCheckbox,
  },
  data() {
    return {
      checkboxes: {
        images: {
          'avatar.png': false,
          'background.jpg': false,
        },
        documents: {
          'cv.docx': false,
          'info.docx': false,
        },
        '.gitignore': false,
        'index.html': false,
      },
      selectedItem: null,
      loadedChildren: [],
    };
  },
  methods: {
    toggleSelectable(e, item) {
      const self = this;
      if ($(e.target).is('.treeview-toggle')) return;
      self.selectedItem = item;
    },
    loadChildren(e, done) {
      const self = this;
      setTimeout(() => {
        // call done() to hide preloader
        done();
        self.loadedChildren = [
          {
            name: 'John Doe',
          },
          {
            name: 'Jane Doe',
          },
          {
            name: 'Calvin Johnson',
          },
        ];
      }, 2000);
    },
  },
};
</script>
