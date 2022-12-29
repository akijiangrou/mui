<template>
  <cbx-page>
    <cbx-navbar title="List View" back-link="Back" />
    <cbx-block>
      <p>
        Xui allows you to be flexible with list views (table views). You can make them as navigation
        menus, you can use there icons, inputs, and any elements inside of the list, and even make
        them nested:
      </p>
    </cbx-block>
    <cbx-block-title>Simple List</cbx-block-title>
    <cbx-list simple-list>
      <cbx-list-item title="Item 1" />
      <cbx-list-item title="Item 2" />
      <cbx-list-item title="Item 3" />
    </cbx-list>
    <cbx-block-title>Simple Links List</cbx-block-title>
    <cbx-list>
      <cbx-list-item title="Link 1" link="#" />
      <cbx-list-item title="Link 2" link="#" />
      <cbx-list-item title="Link 3" link="#" />
    </cbx-list>
    <cbx-block-title>Data list, with icons</cbx-block-title>
    <cbx-list>
      <cbx-list-item title="Ivan Petrov" after="CEO">
        <template #media>
          <cbx-icon icon="icon-cbx" />
        </template>
      </cbx-list-item>
      <cbx-list-item title="John Doe" badge="5">
        <template #media>
          <cbx-icon icon="icon-cbx" />
        </template>
      </cbx-list-item>
      <cbx-list-item title="Jenna Smith">
        <template #media>
          <cbx-icon icon="icon-cbx" />
        </template>
      </cbx-list-item>
    </cbx-list>
    <cbx-block-title>Links</cbx-block-title>
    <cbx-list>
      <cbx-list-item link="#" title="Ivan Petrov" after="CEO">
        <template #media>
          <cbx-icon icon="icon-cbx" />
        </template>
      </cbx-list-item>
      <cbx-list-item link="#" title="John Doe" after="Cleaner">
        <template #media>
          <cbx-icon icon="icon-cbx" />
        </template>
      </cbx-list-item>
      <cbx-list-item link="#" title="Jenna Smith">
        <template #media>
          <cbx-icon icon="icon-cbx" />
        </template>
      </cbx-list-item>
    </cbx-list>
    <cbx-block-title>Links, Header, Footer</cbx-block-title>
    <cbx-list>
      <cbx-list-item link="#" header="Name" title="John Doe" after="Edit">
        <template #media>
          <cbx-icon icon="icon-cbx" />
        </template>
      </cbx-list-item>
      <cbx-list-item link="#" header="Phone" title="+7 90 111-22-3344" after="Edit">
        <template #media>
          <cbx-icon icon="icon-cbx" />
        </template>
      </cbx-list-item>
      <cbx-list-item link="#" header="Email" title="john@doe" footer="Home" after="Edit">
        <template #media>
          <cbx-icon icon="icon-cbx" />
        </template>
      </cbx-list-item>
      <cbx-list-item link="#" header="Email" title="john@xui" footer="Work" after="Edit">
        <template #media>
          <cbx-icon icon="icon-cbx" />
        </template>
      </cbx-list-item>
    </cbx-list>
    <cbx-block-title>Links, no icons</cbx-block-title>
    <cbx-list>
      <cbx-list-item link="#" title="Ivan Petrov" />
      <cbx-list-item link="#" title="John Doe" />
      <cbx-list-item divider title="Divider Here" />
      <cbx-list-item link="#" title="Ivan Petrov" />
      <cbx-list-item link="#" title="Jenna Smith" />
    </cbx-list>
    <cbx-block-title>Grouped with sticky titles</cbx-block-title>
    <cbx-list>
      <cbx-list-group>
        <cbx-list-item title="A" group-title />
        <cbx-list-item title="Aaron " />
        <cbx-list-item title="Abbie" />
        <cbx-list-item title="Adam" />
      </cbx-list-group>
      <cbx-list-group>
        <cbx-list-item title="B" group-title />
        <cbx-list-item title="Bailey" />
        <cbx-list-item title="Barclay" />
        <cbx-list-item title="Bartolo" />
      </cbx-list-group>
      <cbx-list-group>
        <cbx-list-item title="C" group-title />
        <cbx-list-item title="Caiden" />
        <cbx-list-item title="Calvin" />
        <cbx-list-item title="Candy" />
      </cbx-list-group>
    </cbx-list>
    <cbx-block-title>Mixed and nested</cbx-block-title>
    <cbx-list>
      <cbx-list-item link="#" title="Ivan Petrov" after="CEO">
        <template #media>
          <cbx-icon icon="icon-cbx" />
        </template>
      </cbx-list-item>
      <cbx-list-item link="#" title="Two icons here">
        <template #media>
          <cbx-icon icon="icon-cbx" />
          <cbx-icon icon="icon-cbx" />
        </template>
      </cbx-list-item>
      <cbx-list-item title="No icons here" />
      <li>
        <ul>
          <cbx-list-item link="#" title="Ivan Petrov" after="CEO">
            <template #media>
              <cbx-icon icon="icon-cbx" />
            </template>
          </cbx-list-item>
          <cbx-list-item link="#" title="Two icons here">
            <template #media>
              <cbx-icon icon="icon-cbx" />
              <cbx-icon icon="icon-cbx" />
            </template>
          </cbx-list-item>
          <cbx-list-item title="No icons here" />
          <cbx-list-item link="#" title="Ultra long text goes here, no, it is really really long">
            <template #media>
              <cbx-icon icon="icon-cbx" />
            </template>
          </cbx-list-item>
          <cbx-list-item title="With toggle">
            <template #media>
              <cbx-icon icon="icon-cbx" />
            </template>
            <template #after>
              <cbx-toggle />
            </template>
          </cbx-list-item>
        </ul>
      </li>
      <cbx-list-item link="#" title="Ultra long text goes here, no, it is really really long">
        <template #media>
          <cbx-icon icon="icon-cbx" />
        </template>
      </cbx-list-item>
      <cbx-list-item title="With toggle">
        <template #media>
          <cbx-icon icon="icon-cbx" />
        </template>
        <template #after>
          <cbx-toggle />
        </template>
      </cbx-list-item>
    </cbx-list>
    <cbx-block-title>Mixed, inset</cbx-block-title>
    <cbx-list inset>
      <cbx-list-item link="#" title="Ivan Petrov" after="CEO">
        <template #media>
          <cbx-icon icon="icon-cbx" />
        </template>
      </cbx-list-item>
      <cbx-list-item link="#" title="Two icons here">
        <template #media>
          <cbx-icon icon="icon-cbx" />
          <cbx-icon icon="icon-cbx" />
        </template>
      </cbx-list-item>
      <cbx-list-item link="#" title="Ultra long text goes here, no, it is really really long">
        <template #media>
          <cbx-icon icon="icon-cbx" />
        </template>
      </cbx-list-item>
      <cbx-list-item title="With toggle">
        <template #media>
          <cbx-icon icon="icon-cbx" />
        </template>
        <template #after>
          <cbx-toggle />
        </template>
      </cbx-list-item>
      <cbx-block-footer>
        <p>Here comes some useful information about list above</p>
      </cbx-block-footer>
    </cbx-list>
    <cbx-block-title>Tablet inset</cbx-block-title>
    <cbx-list medium-inset>
      <cbx-list-item link="#" title="Ivan Petrov" after="CEO">
        <template #media>
          <cbx-icon icon="icon-cbx" />
        </template>
      </cbx-list-item>
      <cbx-list-item link="#" title="Two icons here">
        <template #media>
          <cbx-icon icon="icon-cbx" />
          <cbx-icon icon="icon-cbx" />
        </template>
      </cbx-list-item>
      <cbx-list-item link="#" title="Ultra long text goes here, no, it is really really long">
        <template #media>
          <cbx-icon icon="icon-cbx" />
        </template>
      </cbx-list-item>
      <cbx-block-footer>
        <p>This list block will look like "inset" only on tablets (iPad)</p>
      </cbx-block-footer>
    </cbx-list>

    <cbx-block-title>Media Lists</cbx-block-title>
    <cbx-block>
      <p>
        Media Lists are almost the same as Data Lists, but with a more flexible layout for
        visualization of more complex data, like products, services, users, etc.
      </p>
    </cbx-block>
    <cbx-block-title>Songs</cbx-block-title>
    <cbx-list media-list>
      <cbx-list-item
        link="#"
        title="Yellow Submarine"
        after="$15"
        subtitle="Beatles"
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sagittis tellus ut turpis condimentum, ut dignissim lacus tincidunt. Cras dolor metus, ultrices condimentum sodales sit amet, pharetra sodales eros. Phasellus vel felis tellus. Mauris rutrum ligula nec dapibus feugiat. In vel dui laoreet, commodo augue id, pulvinar lacus."
      >
        <template #media>
          <img src="../../public/img/ks/people-96x96-1.jpeg" width="80" />
        </template>
      </cbx-list-item>
      <cbx-list-item
        link="#"
        title="Don't Stop Me Now"
        after="$22"
        subtitle="Queen"
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sagittis tellus ut turpis condimentum, ut dignissim lacus tincidunt. Cras dolor metus, ultrices condimentum sodales sit amet, pharetra sodales eros. Phasellus vel felis tellus. Mauris rutrum ligula nec dapibus feugiat. In vel dui laoreet, commodo augue id, pulvinar lacus."
      >
        <template #media>
          <img src="../../public/img/ks/people-96x96-2.jpeg" width="80" />
        </template>
      </cbx-list-item>
      <cbx-list-item
        link="#"
        title="Billie Jean"
        after="$16"
        subtitle="Michael Jackson"
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sagittis tellus ut turpis condimentum, ut dignissim lacus tincidunt. Cras dolor metus, ultrices condimentum sodales sit amet, pharetra sodales eros. Phasellus vel felis tellus. Mauris rutrum ligula nec dapibus feugiat. In vel dui laoreet, commodo augue id, pulvinar lacus."
      >
        <template #media>
          <img src="../../public/img/ks/people-100x100-3.jpeg" width="80" />
        </template>
      </cbx-list-item>
    </cbx-list>
    <cbx-block-title>Mail App</cbx-block-title>
    <cbx-list media-list>
      <cbx-list-item
        link="#"
        title="Facebook"
        after="17:14"
        subtitle="New messages from John Doe"
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sagittis tellus ut turpis condimentum, ut dignissim lacus tincidunt. Cras dolor metus, ultrices condimentum sodales sit amet, pharetra sodales eros. Phasellus vel felis tellus. Mauris rutrum ligula nec dapibus feugiat. In vel dui laoreet, commodo augue id, pulvinar lacus."
      />
      <cbx-list-item
        link="#"
        title="John Doe (via Twitter)"
        after="17:11"
        subtitle="John Doe (@_johndoe) mentioned you on Twitter!"
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sagittis tellus ut turpis condimentum, ut dignissim lacus tincidunt. Cras dolor metus, ultrices condimentum sodales sit amet, pharetra sodales eros. Phasellus vel felis tellus. Mauris rutrum ligula nec dapibus feugiat. In vel dui laoreet, commodo augue id, pulvinar lacus."
      />
      <cbx-list-item
        link="#"
        title="Facebook"
        after="16:48"
        subtitle="New messages from John Doe"
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sagittis tellus ut turpis condimentum, ut dignissim lacus tincidunt. Cras dolor metus, ultrices condimentum sodales sit amet, pharetra sodales eros. Phasellus vel felis tellus. Mauris rutrum ligula nec dapibus feugiat. In vel dui laoreet, commodo augue id, pulvinar lacus."
      />
      <cbx-list-item
        link="#"
        title="John Doe (via Twitter)"
        after="15:32"
        subtitle="John Doe (@_johndoe) mentioned you on Twitter!"
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sagittis tellus ut turpis condimentum, ut dignissim lacus tincidunt. Cras dolor metus, ultrices condimentum sodales sit amet, pharetra sodales eros. Phasellus vel felis tellus. Mauris rutrum ligula nec dapibus feugiat. In vel dui laoreet, commodo augue id, pulvinar lacus."
      />
    </cbx-list>
    <cbx-block-title>Something more simple</cbx-block-title>
    <cbx-list media-list>
      <cbx-list-item title="Yellow Submarine" subtitle="Beatles">
        <template #media>
          <img src="../../public/img/ks/fashion-96x96-1.jpeg" width="44" />
        </template>
      </cbx-list-item>
      <cbx-list-item link="#" title="Don't Stop Me Now" subtitle="Queen">
        <template #media>
          <img src="../../public/img/ks/fashion-96x96-3.jpeg" width="44" />
        </template>
      </cbx-list-item>
      <cbx-list-item title="Billie Jean" subtitle="Michael Jackson">
        <template #media>
          <img src="../../public/img/ks/fashion-96x96-4.jpeg" width="44" />
        </template>
      </cbx-list-item>
    </cbx-list>
    <cbx-block-title>Inset</cbx-block-title>
    <cbx-list media-list inset>
      <cbx-list-item link="#" title="Yellow Submarine" subtitle="Beatles">
        <template #media>
          <img src="../../public/img/ks/fashion-96x96-5.jpeg" width="44" />
        </template>
      </cbx-list-item>
      <cbx-list-item link="#" title="Don't Stop Me Now" subtitle="Queen">
        <template #media>
          <img src="../../public/img/ks/fashion-96x96-6.jpeg" width="44" />
        </template>
      </cbx-list-item>
      <cbx-list-item link="#" title="Billie Jean" subtitle="Michael Jackson">
        <template #media>
          <img src="../../public/img/ks/abstract-88x88-6.jpeg" width="44" />
        </template>
      </cbx-list-item>
    </cbx-list>
    <cbx-block-title>Custom Table-like Layout</cbx-block-title>
    <cbx-list>
      <li>
        <a href="#" class="item-link item-content">
          <div class="item-inner item-cell">
            <div class="item-row">
              <div class="item-cell">Cell 1-1</div>
              <div class="item-cell">Cell 1-2</div>
              <div class="item-cell">Cell 1-3</div>
            </div>
            <div class="item-row">
              <div class="item-cell">Cell 2-1</div>
              <div class="item-cell">Cell 2-2</div>
            </div>
            <div class="item-row">
              <div class="item-cell">Cell 3-1</div>
              <div class="item-cell">
                <div class="item-row">Cell 3-2</div>
                <div class="item-row">Cell 3-3</div>
              </div>
            </div>
          </div>
        </a>
      </li>
      <li>
        <a href="#" class="item-link item-content">
          <div class="item-inner item-cell">
            <div class="item-row">
              <div class="item-cell">Cell 1-1</div>
              <div class="item-cell">Cell 1-2</div>
              <div class="item-cell">Cell 1-3</div>
            </div>
            <div class="item-row">
              <div class="item-cell">Cell 2-1</div>
              <div class="item-cell">Cell 2-2</div>
            </div>
            <div class="item-row">
              <div class="item-cell">Cell 3-1</div>
              <div class="item-cell">
                <div class="item-row">Cell 3-2</div>
                <div class="item-row">Cell 3-3</div>
              </div>
            </div>
          </div>
        </a>
      </li>
    </cbx-list>
  </cbx-page>
</template>
<script>
import {
  cbxNavbar,
  cbxPage,
  cbxBlockTitle,
  cbxBlock,
  cbxList,
  cbxListItem,
  cbxListGroup,
  cbxBlockFooter,
  cbxIcon,
  cbxToggle,
} from 'xui-vue';

export default {
  components: {
    cbxNavbar,
    cbxPage,
    cbxBlockTitle,
    cbxBlock,
    cbxList,
    cbxListItem,
    cbxListGroup,
    cbxBlockFooter,
    cbxIcon,
    cbxToggle,
  },
};
</script>
