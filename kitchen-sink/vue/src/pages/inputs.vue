<template>
  <cbx-page>
    <cbx-navbar title="Form Inputs" back-link="Back"></cbx-navbar>
    <cbx-block-title>Full Layout / Inline Labels</cbx-block-title>
    <cbx-list inline-labels no-hairlines-md>
      <cbx-list-input label="Name" type="text" placeholder="Your name" clear-button>
        <template #media>
          <cbx-icon icon="demo-list-icon" />
        </template>
      </cbx-list-input>

      <cbx-list-input label="Password" type="password" placeholder="Your password" clear-button>
        <template #media>
          <cbx-icon icon="demo-list-icon" />
        </template>
      </cbx-list-input>

      <cbx-list-input label="E-mail" type="email" placeholder="Your e-mail" clear-button>
        <template #media>
          <cbx-icon icon="demo-list-icon" />
        </template>
      </cbx-list-input>

      <cbx-list-input label="URL" type="url" placeholder="URL" clear-button>
        <template #media>
          <cbx-icon icon="demo-list-icon" />
        </template>
      </cbx-list-input>

      <cbx-list-input label="Phone" type="tel" placeholder="Your phone number" clear-button>
        <template #media>
          <cbx-icon icon="demo-list-icon" />
        </template>
      </cbx-list-input>

      <cbx-list-input label="Gender" type="select" placeholder="Please choose...">
        <template #media>
          <cbx-icon icon="demo-list-icon" />
        </template>
        <option value="Male">Male</option>
        <option value="Female">Female</option>
      </cbx-list-input>

      <cbx-list-input label="Birthday" type="date" placeholder="Please choose...">
        <template #media>
          <cbx-icon icon="demo-list-icon" />
        </template>
      </cbx-list-input>

      <cbx-list-input label="Date time" type="datetime-local" placeholder="Please choose...">
        <template #media>
          <cbx-icon icon="demo-list-icon" />
        </template>
      </cbx-list-input>

      <cbx-list-input label="Range" :input="false">
        <template #media>
          <cbx-icon icon="demo-list-icon" />
        </template>
        <template #input>
          <cbx-range :value="50" :min="0" :max="100" :step="1" />
        </template>
      </cbx-list-input>

      <cbx-list-input label="Textarea" type="textarea" placeholder="Bio">
        <template #media>
          <cbx-icon icon="demo-list-icon" />
        </template>
      </cbx-list-input>

      <cbx-list-input label="Resizable" type="textarea" resizable placeholder="Bio">
        <template #media>
          <cbx-icon icon="demo-list-icon" />
        </template>
      </cbx-list-input>
    </cbx-list>

    <cbx-block-title>Full Layout / Stacked Labels</cbx-block-title>
    <cbx-list no-hairlines-md>
      <cbx-list-input label="Name" type="text" placeholder="Your name" clear-button>
        <template #media>
          <cbx-icon icon="demo-list-icon" />
        </template>
      </cbx-list-input>

      <cbx-list-input label="Password" type="password" placeholder="Your password" clear-button>
        <template #media>
          <cbx-icon icon="demo-list-icon" />
        </template>
      </cbx-list-input>

      <cbx-list-input label="E-mail" type="email" placeholder="Your e-mail" clear-button>
        <template #media>
          <cbx-icon icon="demo-list-icon" />
        </template>
      </cbx-list-input>

      <cbx-list-input label="URL" type="url" placeholder="URL" clear-button>
        <template #media>
          <cbx-icon icon="demo-list-icon" />
        </template>
      </cbx-list-input>

      <cbx-list-input label="Phone" type="tel" placeholder="Your phone number" clear-button>
        <template #media>
          <cbx-icon icon="demo-list-icon" />
        </template>
      </cbx-list-input>

      <cbx-list-input label="Gender" type="select" placeholder="Please choose...">
        <template #media>
          <cbx-icon icon="demo-list-icon" />
        </template>
        <option value="Male">Male</option>
        <option value="Female">Female</option>
      </cbx-list-input>

      <cbx-list-input label="Birthday" type="date" placeholder="Please choose...">
        <template #media>
          <cbx-icon icon="demo-list-icon" />
        </template>
      </cbx-list-input>

      <cbx-list-input label="Date time" type="datetime-local" placeholder="Please choose...">
        <template #media>
          <cbx-icon icon="demo-list-icon" />
        </template>
      </cbx-list-input>

      <cbx-list-input label="Range" :input="false">
        <template #media>
          <cbx-icon icon="demo-list-icon" />
        </template>
        <template #input>
          <cbx-range :value="50" :min="0" :max="100" :step="1" />
        </template>
      </cbx-list-input>

      <cbx-list-input label="Textarea" type="textarea" placeholder="Bio">
        <template #media>
          <cbx-icon icon="demo-list-icon" />
        </template>
      </cbx-list-input>

      <cbx-list-input label="Resizable" type="textarea" resizable placeholder="Bio">
        <template #media>
          <cbx-icon icon="demo-list-icon" />
        </template>
      </cbx-list-input>
    </cbx-list>

    <cbx-block-title>Floating Labels</cbx-block-title>
    <cbx-list no-hairlines-md>
      <cbx-list-input label="Name" floating-label type="text" placeholder="Your name" clear-button>
        <template #media>
          <cbx-icon icon="demo-list-icon" />
        </template>
      </cbx-list-input>

      <cbx-list-input
        label="Password"
        floating-label
        type="password"
        placeholder="Your password"
        clear-button
      >
        <template #media>
          <cbx-icon icon="demo-list-icon" />
        </template>
      </cbx-list-input>

      <cbx-list-input
        label="E-mail"
        floating-label
        type="email"
        placeholder="Your e-mail"
        clear-button
      >
        <template #media>
          <cbx-icon icon="demo-list-icon" />
        </template>
      </cbx-list-input>

      <cbx-list-input label="URL" floating-label type="url" placeholder="URL" clear-button>
        <template #media>
          <cbx-icon icon="demo-list-icon" />
        </template>
      </cbx-list-input>

      <cbx-list-input
        label="Phone"
        floating-label
        type="tel"
        placeholder="Your phone number"
        clear-button
      >
        <template #media>
          <cbx-icon icon="demo-list-icon" />
        </template>
      </cbx-list-input>

      <cbx-list-input label="Resizable" floating-label type="textarea" resizable placeholder="Bio">
        <template #media>
          <cbx-icon icon="demo-list-icon" />
        </template>
      </cbx-list-input>
    </cbx-list>

    <cbx-block-title>Floating Labels + Outline Inputs</cbx-block-title>
    <cbx-list no-hairlines-md>
      <cbx-list-input
        outline
        label="Name"
        floating-label
        type="text"
        placeholder="Your name"
        clear-button
      >
        <template #media>
          <cbx-icon icon="demo-list-icon" />
        </template>
      </cbx-list-input>
      <cbx-list-input
        outline
        label="Password"
        floating-label
        type="password"
        placeholder="Your password"
        clear-button
      >
        <template #media>
          <cbx-icon icon="demo-list-icon" />
        </template>
      </cbx-list-input>
      <cbx-list-input
        outline
        label="E-mail"
        floating-label
        type="email"
        placeholder="Your e-mail"
        clear-button
      >
        <template #media>
          <cbx-icon icon="demo-list-icon" />
        </template>
      </cbx-list-input>
      <cbx-list-input outline label="URL" floating-label type="url" placeholder="URL" clear-button>
        <template #media>
          <cbx-icon icon="demo-list-icon" />
        </template>
      </cbx-list-input>
      <cbx-list-input
        outline
        label="Phone"
        floating-label
        type="tel"
        placeholder="Your phone number"
        clear-button
      >
        <template #media>
          <cbx-icon icon="demo-list-icon" />
        </template>
      </cbx-list-input>
      <cbx-list-input
        outline
        label="Bio"
        floating-label
        type="textarea"
        resizable
        placeholder="Bio"
        clear-button
      >
        <template #media>
          <cbx-icon icon="demo-list-icon" />
        </template>
      </cbx-list-input>
    </cbx-list>

    <cbx-block-title>Validation + Additional Info</cbx-block-title>
    <cbx-list no-hairlines-md>
      <cbx-list-input
        label="Name"
        type="text"
        placeholder="Your name"
        info="Default validation"
        required
        validate
        clear-button
      >
        <template #media>
          <cbx-icon icon="demo-list-icon" />
        </template>
      </cbx-list-input>

      <cbx-list-input
        label="Fruit"
        type="text"
        placeholder="Type 'apple' or 'banana'"
        required
        validate
        pattern="apple|banana"
        clear-button
      >
        <template #media>
          <cbx-icon icon="demo-list-icon" />
        </template>
        <template #info>
          <span>Pattern validation (<b>apple|banana</b>)</span>
        </template>
      </cbx-list-input>

      <cbx-list-input
        label="E-mail"
        type="email"
        placeholder="Your e-mail"
        info="Default e-mail validation"
        required
        validate
        clear-button
      >
        <template #media>
          <cbx-icon icon="demo-list-icon" />
        </template>
      </cbx-list-input>

      <cbx-list-input
        label="URL"
        type="url"
        placeholder="Your URL"
        info="Default URL validation"
        required
        validate
        clear-button
      >
        <template #media>
          <cbx-icon icon="demo-list-icon" />
        </template>
      </cbx-list-input>

      <cbx-list-input
        label="Number"
        type="text"
        placeholder="Enter number"
        info="With custom error message"
        error-message="Only numbers please!"
        required
        validate
        pattern="[0-9]*"
        clear-button
      >
        <template #media>
          <cbx-icon icon="demo-list-icon" />
        </template>
      </cbx-list-input>
    </cbx-list>

    <cbx-block-title>Icon + Input</cbx-block-title>
    <cbx-list no-hairlines-md>
      <cbx-list-input type="text" placeholder="Your name" clear-button>
        <template #media>
          <cbx-icon icon="demo-list-icon" />
        </template>
      </cbx-list-input>

      <cbx-list-input type="password" placeholder="Your password" clear-button>
        <template #media>
          <cbx-icon icon="demo-list-icon" />
        </template>
      </cbx-list-input>

      <cbx-list-input type="email" placeholder="Your e-mail" clear-button>
        <template #media>
          <cbx-icon icon="demo-list-icon" />
        </template>
      </cbx-list-input>

      <cbx-list-input type="url" placeholder="URL" clear-button>
        <template #media>
          <cbx-icon icon="demo-list-icon" />
        </template>
      </cbx-list-input>
    </cbx-list>

    <cbx-block-title>Label + Input</cbx-block-title>
    <cbx-list no-hairlines-md>
      <cbx-list-input
        label="Name"
        type="text"
        placeholder="Your name"
        clear-button
      ></cbx-list-input>

      <cbx-list-input
        label="Password"
        type="password"
        placeholder="Your password"
        clear-button
      ></cbx-list-input>

      <cbx-list-input
        label="E-mail"
        type="email"
        placeholder="Your e-mail"
        clear-button
      ></cbx-list-input>

      <cbx-list-input label="URL" type="url" placeholder="URL" clear-button></cbx-list-input>
    </cbx-list>

    <cbx-block-title>Only Inputs</cbx-block-title>
    <cbx-list no-hairlines-md>
      <cbx-list-input type="text" placeholder="Your name" clear-button></cbx-list-input>

      <cbx-list-input type="password" placeholder="Your password" clear-button></cbx-list-input>

      <cbx-list-input type="email" placeholder="Your e-mail" clear-button></cbx-list-input>

      <cbx-list-input type="url" placeholder="URL" clear-button></cbx-list-input>
    </cbx-list>

    <cbx-block-title>Inputs + Additional Info</cbx-block-title>
    <cbx-list no-hairlines-md>
      <cbx-list-input
        type="text"
        placeholder="Your name"
        info="Full name please"
        clear-button
      ></cbx-list-input>

      <cbx-list-input
        type="password"
        placeholder="Your password"
        info="8 characters minimum"
        clear-button
      ></cbx-list-input>

      <cbx-list-input
        type="email"
        placeholder="Your e-mail"
        info="Your work e-mail address"
        clear-button
      ></cbx-list-input>

      <cbx-list-input
        type="url"
        placeholder="URL"
        info="Your website URL"
        clear-button
      ></cbx-list-input>
    </cbx-list>

    <cbx-block-title>Only Inputs Inset</cbx-block-title>
    <cbx-list inset>
      <cbx-list-input type="text" placeholder="Your name" clear-button></cbx-list-input>

      <cbx-list-input type="password" placeholder="Your password" clear-button></cbx-list-input>

      <cbx-list-input type="email" placeholder="Your e-mail" clear-button></cbx-list-input>

      <cbx-list-input type="url" placeholder="URL" clear-button></cbx-list-input>
    </cbx-list>
  </cbx-page>
</template>
<script>
import {
  cbxNavbar,
  cbxPage,
  cbxBlockTitle,
  cbxList,
  cbxIcon,
  cbxListInput,
  cbxRange,
} from 'xui-vue';

export default {
  components: {
    cbxNavbar,
    cbxPage,
    cbxBlockTitle,
    cbxList,
    cbxIcon,
    cbxListInput,
    cbxRange,
  },
};
</script>
