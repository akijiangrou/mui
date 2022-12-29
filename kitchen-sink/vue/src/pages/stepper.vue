<template>
  <cbx-page>
    <cbx-navbar title="Stepper" back-link="Back"></cbx-navbar>
    <cbx-block-title>Shape and size</cbx-block-title>
    <cbx-block strong class="text-align-center">
      <cbx-row>
        <cbx-col>
          <small class="display-block">Default</small>
          <cbx-stepper />
        </cbx-col>
        <cbx-col>
          <small class="display-block">Round</small>
          <cbx-stepper round />
        </cbx-col>
      </cbx-row>

      <cbx-row class="margin-top">
        <cbx-col>
          <small class="display-block">Fill</small>
          <cbx-stepper fill />
        </cbx-col>
        <cbx-col>
          <small class="display-block">Round Fill</small>
          <cbx-stepper fill round />
        </cbx-col>
      </cbx-row>

      <cbx-row class="margin-top">
        <cbx-col>
          <small class="display-block">Small</small>
          <cbx-stepper small />
        </cbx-col>
        <cbx-col>
          <small class="display-block">Small Round</small>
          <cbx-stepper small round />
        </cbx-col>
      </cbx-row>

      <cbx-row class="margin-top">
        <cbx-col>
          <small class="display-block">Small Fill</small>
          <cbx-stepper small fill />
        </cbx-col>
        <cbx-col>
          <small class="display-block">Small Round Fill</small>
          <cbx-stepper small round fill />
        </cbx-col>
      </cbx-row>

      <cbx-row class="margin-top">
        <cbx-col>
          <small class="display-block">Large</small>
          <cbx-stepper large />
        </cbx-col>
        <cbx-col>
          <small class="display-block">Large Round</small>
          <cbx-stepper large round />
        </cbx-col>
      </cbx-row>

      <cbx-row class="margin-top">
        <cbx-col>
          <small class="display-block">Large Fill</small>
          <cbx-stepper large fill />
        </cbx-col>
        <cbx-col>
          <small class="display-block">Large Round Fill</small>
          <cbx-stepper large round fill />
        </cbx-col>
      </cbx-row>
    </cbx-block>

    <cbx-block-title>Raised</cbx-block-title>
    <cbx-block strong class="text-align-center">
      <cbx-row>
        <cbx-col>
          <small class="display-block">Default</small>
          <cbx-stepper raised />
        </cbx-col>
        <cbx-col>
          <small class="display-block">Round</small>
          <cbx-stepper raised round />
        </cbx-col>
      </cbx-row>

      <cbx-row class="margin-top">
        <cbx-col>
          <small class="display-block">Fill</small>
          <cbx-stepper raised fill />
        </cbx-col>
        <cbx-col>
          <small class="display-block">Round Fill</small>
          <cbx-stepper raised fill round />
        </cbx-col>
      </cbx-row>

      <cbx-row class="margin-top">
        <cbx-col>
          <small class="display-block">Small</small>
          <cbx-stepper raised small />
        </cbx-col>
        <cbx-col>
          <small class="display-block">Small Round</small>
          <cbx-stepper raised small round />
        </cbx-col>
      </cbx-row>

      <cbx-row class="margin-top">
        <cbx-col>
          <small class="display-block">Small Fill</small>
          <cbx-stepper raised small fill />
        </cbx-col>
        <cbx-col>
          <small class="display-block">Small Round Fill</small>
          <cbx-stepper raised small round fill />
        </cbx-col>
      </cbx-row>

      <cbx-row class="margin-top">
        <cbx-col>
          <small class="display-block">Large</small>
          <cbx-stepper raised large />
        </cbx-col>
        <cbx-col>
          <small class="display-block">Large Round</small>
          <cbx-stepper raised large round />
        </cbx-col>
      </cbx-row>

      <cbx-row class="margin-top">
        <cbx-col>
          <small class="display-block">Large Fill</small>
          <cbx-stepper raised large fill />
        </cbx-col>
        <cbx-col>
          <small class="display-block">Large Round Fill</small>
          <cbx-stepper raised large round fill />
        </cbx-col>
      </cbx-row>
    </cbx-block>
    <cbx-block-title>Colors</cbx-block-title>
    <cbx-block strong class="text-align-center">
      <cbx-row>
        <cbx-col>
          <cbx-stepper fill color="red" />
        </cbx-col>
        <cbx-col>
          <cbx-stepper fill round color="green" />
        </cbx-col>
      </cbx-row>

      <cbx-row class="margin-top">
        <cbx-col>
          <cbx-stepper fill color="blue" />
        </cbx-col>
        <cbx-col>
          <cbx-stepper fill round color="pink" />
        </cbx-col>
      </cbx-row>

      <cbx-row class="margin-top">
        <cbx-col>
          <cbx-stepper fill small color="yellow" />
        </cbx-col>
        <cbx-col>
          <cbx-stepper fill small round color="orange" />
        </cbx-col>
      </cbx-row>

      <cbx-row class="margin-top">
        <cbx-col>
          <cbx-stepper fill small color="gray" />
        </cbx-col>
        <cbx-col>
          <cbx-stepper fill small round color="black" />
        </cbx-col>
      </cbx-row>
    </cbx-block>
    <cbx-block-title>Without input element</cbx-block-title>
    <cbx-block strong class="text-align-center">
      <cbx-row>
        <cbx-col>
          <cbx-stepper :input="false" />
        </cbx-col>
        <cbx-col>
          <cbx-stepper :input="false" round />
        </cbx-col>
      </cbx-row>
    </cbx-block>
    <cbx-block-title>Min, max, step</cbx-block-title>
    <cbx-block strong class="text-align-center">
      <cbx-row>
        <cbx-col>
          <cbx-stepper fill :value="100" :min="0" :max="1000" :step="100" />
        </cbx-col>
        <cbx-col>
          <cbx-stepper fill :input="false" :value="5" :min="0" :max="10" :step="0.5" />
        </cbx-col>
      </cbx-row>
    </cbx-block>

    <cbx-block-title>Autorepeat (Tap & hold)</cbx-block-title>
    <cbx-block-header
      >Pressing and holding one of its buttons increments or decrements the stepper’s value
      repeatedly. With dynamic autorepeat, the rate of change depends on how long the user continues
      pressing the control.</cbx-block-header
    >
    <cbx-block strong class="text-align-center">
      <cbx-row>
        <cbx-col>
          <small class="display-block">Default</small>
          <cbx-stepper fill :value="0" :min="0" :max="100" :step="1" :autorepeat="true" />
        </cbx-col>
        <cbx-col>
          <small class="display-block">Dynamic</small>
          <cbx-stepper
            fill
            :value="0"
            :min="0"
            :max="100"
            :step="1"
            :autorepeat="true"
            :autorepeat-dynamic="true"
          />
        </cbx-col>
      </cbx-row>
    </cbx-block>

    <cbx-block-title>Wraps</cbx-block-title>
    <cbx-block-header
      >In wraps mode incrementing beyond maximum value sets value to minimum value, likewise,
      decrementing below minimum value sets value to maximum value</cbx-block-header
    >
    <cbx-block strong class="text-align-center">
      <cbx-row>
        <cbx-col>
          <cbx-stepper
            fill
            :value="0"
            :min="0"
            :max="10"
            :step="1"
            :autorepeat="true"
            :wraps="true"
          />
        </cbx-col>
      </cbx-row>
    </cbx-block>

    <cbx-block-title>Custom value element</cbx-block-title>
    <cbx-list>
      <cbx-list-item :title="`Apples ${applesCount}`">
        <template #after>
          <cbx-stepper :buttons-only="true" small raised @stepper:change="setApples" />
        </template>
      </cbx-list-item>
      <cbx-list-item :title="`Oranges ${orangesCount}`">
        <template #after>
          <cbx-stepper :buttons-only="true" small raised @stepper:change="setOranges" />
        </template>
      </cbx-list-item>
    </cbx-list>

    <cbx-block-title>Custom value format</cbx-block-title>
    <cbx-list>
      <cbx-list-item header="Meeting starts in" :title="meetingTimeComputed">
        <template #after>
          <cbx-stepper
            :min="15"
            :max="240"
            :step="15"
            :value="meetingTime"
            :buttons-only="true"
            small
            fill
            raised
            @stepper:change="setMeetingTime"
          />
        </template>
      </cbx-list-item>
    </cbx-list>

    <cbx-block-title>Manual input</cbx-block-title>
    <cbx-block-header
      >It is possible to enter value manually from keyboard or mobile keypad. When click on input
      field, stepper enter into manual input mode, which allow type value from keyboar and check
      fractional part with defined accurancy. Click outside or enter Return key, ending manual
      mode.</cbx-block-header
    >
    <cbx-block strong class="text-align-center">
      <cbx-row>
        <cbx-col>
          <cbx-stepper
            fill
            :value="0"
            :min="0"
            :max="1000"
            :step="1"
            :autorepeat="true"
            :wraps="true"
            :manual-input-mode="true"
            :decimal-point="2"
          />
        </cbx-col>
      </cbx-row>
    </cbx-block>
  </cbx-page>
</template>
<script>
import {
  cbxPage,
  cbxNavbar,
  cbxBlockTitle,
  cbxBlock,
  cbxBlockHeader,
  cbxRow,
  cbxCol,
  cbxList,
  cbxListItem,
  cbxStepper,
} from 'xui-vue';

export default {
  components: {
    cbxPage,
    cbxNavbar,
    cbxBlockTitle,
    cbxBlock,
    cbxBlockHeader,
    cbxRow,
    cbxCol,
    cbxList,
    cbxListItem,
    cbxStepper,
  },
  data() {
    return {
      applesCount: 0,
      orangesCount: 0,
      meetingTime: 15,
    };
  },
  computed: {
    meetingTimeComputed() {
      const self = this;
      const value = self.meetingTime;

      const hours = Math.floor(value / 60);
      const minutes = value - hours * 60;
      const formatted = [];
      if (hours > 0) {
        formatted.push(`${hours} ${hours > 1 ? 'hours' : 'hour'}`);
      }
      if (minutes > 0) {
        formatted.push(`${minutes} minutes`);
      }
      return formatted.join(' ');
    },
  },
  methods: {
    setApples(value) {
      this.applesCount = value;
    },
    setOranges(value) {
      this.orangesCount = value;
    },
    setMeetingTime(value) {
      this.meetingTime = value;
    },
  },
};
</script>
