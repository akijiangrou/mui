<template>
  <cbx-page>
    <cbx-navbar title="Cards" back-link="Back"></cbx-navbar>

    <cbx-block>
      <p>
        Cards are a great way to contain and organize your information, especially when combined
        with List Views. Cards can contain unique related data, like for example photos, text or
        links about a particular subject. Cards are typically an entry point to more complex and
        detailed information.
      </p>
    </cbx-block>
    <cbx-block-title>Simple Cards</cbx-block-title>
    <cbx-card
      content="This is a simple card with plain text, but cards can also contain their own header, footer, list view, image, or any other element."
    ></cbx-card>
    <cbx-card
      title="Card header"
      content="Card with header and footer. Card headers are used to display card titles and footers for additional information or just for custom actions."
      footer="Card footer"
    ></cbx-card>
    <cbx-card
      content="Another card. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse feugiat sem est, non tincidunt ligula volutpat sit amet. Mauris aliquet magna justo. "
    ></cbx-card>

    <cbx-block-title>Outline Cards</cbx-block-title>
    <cbx-card
      outline
      content="This is a simple card with plain text, but cards can also contain their own header, footer, list view, image, or any other element."
    ></cbx-card>
    <cbx-card
      outline
      title="Card header"
      content="Card with header and footer. Card headers are used to display card titles and footers for additional information or just for custom actions."
      footer="Card footer"
    ></cbx-card>
    <cbx-card
      outline
      content="Another card. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse feugiat sem est, non tincidunt ligula volutpat sit amet. Mauris aliquet magna justo. "
    ></cbx-card>

    <cbx-block-title>Styled Cards</cbx-block-title>
    <cbx-card class="demo-card-header-pic">
      <cbx-card-header
        class="no-border"
        valign="bottom"
        style="background-image: url(../../public/img/ks/nature-1000x600-3.jpeg)"
        >Journey To Mountains</cbx-card-header
      >
      <cbx-card-content>
        <p class="date">Posted on January 21, 2015</p>
        <p>
          Quisque eget vestibulum nulla. Quisque quis dui quis ex ultricies efficitur vitae non
          felis. Phasellus quis nibh hendrerit...
        </p>
      </cbx-card-content>
      <cbx-card-footer>
        <cbx-link>Like</cbx-link>
        <cbx-link>Read more</cbx-link>
      </cbx-card-footer>
    </cbx-card>
    <cbx-card class="demo-card-header-pic">
      <cbx-card-header
        class="no-border"
        valign="bottom"
        style="background-image: url(../../public/img/ks/people-1000x600-6.jpeg)"
        >Journey To Mountains</cbx-card-header
      >
      <cbx-card-content>
        <p class="date">Posted on January 21, 2015</p>
        <p>
          Quisque eget vestibulum nulla. Quisque quis dui quis ex ultricies efficitur vitae non
          felis. Phasellus quis nibh hendrerit...
        </p>
      </cbx-card-content>
      <cbx-card-footer>
        <cbx-link>Like</cbx-link>
        <cbx-link>Read more</cbx-link>
      </cbx-card-footer>
    </cbx-card>

    <cbx-block-title>Facebook Cards</cbx-block-title>
    <cbx-card class="demo-facebook-card">
      <cbx-card-header class="no-border">
        <div class="demo-facebook-avatar">
          <img src="../../public/img/ks/people-96x96-1.jpeg" width="34" height="34" />
        </div>
        <div class="demo-facebook-name">John Doe</div>
        <div class="demo-facebook-date">Monday at 3:47 PM</div>
      </cbx-card-header>
      <cbx-card-content :padding="false">
        <img src="../../public/img/ks/nature-1000x600-3.jpeg" width="100%" />
      </cbx-card-content>
      <cbx-card-footer class="no-border">
        <cbx-link>Like</cbx-link>
        <cbx-link>Comment</cbx-link>
        <cbx-link>Share</cbx-link>
      </cbx-card-footer>
    </cbx-card>
    <cbx-card class="demo-facebook-card">
      <cbx-card-header class="no-border">
        <div class="demo-facebook-avatar">
          <img src="../../public/img/ks/people-96x96-1.jpeg" width="34" height="34" />
        </div>
        <div class="demo-facebook-name">John Doe</div>
        <div class="demo-facebook-date">Monday at 2:15 PM</div>
      </cbx-card-header>
      <cbx-card-content>
        <p>What a nice photo i took yesterday!</p>
        <img src="../../public/img/ks/people-1000x600-6.jpeg" width="100%" />
        <p class="likes">Likes: 112 &nbsp;&nbsp; Comments: 43</p>
      </cbx-card-content>
      <cbx-card-footer class="no-border">
        <cbx-link>Like</cbx-link>
        <cbx-link>Comment</cbx-link>
        <cbx-link>Share</cbx-link>
      </cbx-card-footer>
    </cbx-card>

    <cbx-block-title>Cards With List View</cbx-block-title>
    <cbx-card>
      <cbx-card-content :padding="false">
        <cbx-list>
          <cbx-list-item link="#">Link 1</cbx-list-item>
          <cbx-list-item link="#">Link 2</cbx-list-item>
          <cbx-list-item link="#">Link 3</cbx-list-item>
          <cbx-list-item link="#">Link 4</cbx-list-item>
          <cbx-list-item link="#">Link 5</cbx-list-item>
        </cbx-list>
      </cbx-card-content>
    </cbx-card>
    <cbx-card title="New Releases:">
      <cbx-card-content :padding="false">
        <cbx-list medial-list>
          <cbx-list-item title="Yellow Submarine" subtitle="Beatles">
            <template #media>
              <img src="../../public/img/ks/fashion-96x96-4.jpeg" width="44" />
            </template>
          </cbx-list-item>
          <cbx-list-item title="Don't Stop Me Now" subtitle="Queen">
            <template #media>
              <img src="../../public/img/ks/fashion-96x96-5.jpeg" width="44" />
            </template>
          </cbx-list-item>
          <cbx-list-item title="Billie Jean" subtitle="Michael Jackson">
            <template #media>
              <img src="../../public/img/ks/fashion-96x96-6.jpeg" width="44" />
            </template>
          </cbx-list-item>
        </cbx-list>
      </cbx-card-content>
      <cbx-card-footer>
        <span>January 20, 2015</span>
        <span>5 comments</span>
      </cbx-card-footer>
    </cbx-card>
  </cbx-page>
</template>
<script>
import {
  cbxNavbar,
  cbxPage,
  cbxBlock,
  cbxBlockTitle,
  cbxCard,
  cbxCardHeader,
  cbxCardContent,
  cbxCardFooter,
  cbxList,
  cbxListItem,
  cbxLink,
} from 'xui-vue';

export default {
  components: {
    cbxNavbar,
    cbxPage,
    cbxBlock,
    cbxBlockTitle,
    cbxCard,
    cbxCardHeader,
    cbxCardContent,
    cbxCardFooter,
    cbxList,
    cbxListItem,
    cbxLink,
  },
};
</script>
