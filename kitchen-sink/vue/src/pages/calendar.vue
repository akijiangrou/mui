<template>
  <cbx-page @page:beforeremove="onPageBeforeRemove" @page:init="onPageInit">
    <cbx-navbar title="Calendar" back-link="Back"></cbx-navbar>

    <cbx-block>
      <p>Calendar is a touch optimized component that provides an easy way to handle dates.</p>
      <p>
        Calendar could be used as inline component or as overlay. Overlay Calendar will be
        automatically converted to Popover on tablets (iPad).
      </p>
    </cbx-block>

    <cbx-block-title>Default setup</cbx-block-title>
    <cbx-list no-hairlines-md>
      <cbx-list-input type="datepicker" placeholder="Your birth date" readonly />
    </cbx-list>

    <cbx-block-title>Custom date format</cbx-block-title>
    <cbx-list no-hairlines-md>
      <cbx-list-input
        type="datepicker"
        placeholder="Select date"
        readonly
        :calendar-params="{
          dateFormat: { weekday: 'long', month: 'long', day: '2-digit', year: 'numeric' },
        }"
      />
    </cbx-list>

    <cbx-block-title>Date + Time</cbx-block-title>
    <cbx-list no-hairlines-md>
      <cbx-list-input
        type="datepicker"
        placeholder="Select date and time"
        readonly
        :calendar-params="{
          timePicker: true,
          dateFormat: {
            month: 'numeric',
            day: 'numeric',
            year: 'numeric',
            hour: 'numeric',
            minute: 'numeric',
          },
        }"
      />
    </cbx-list>

    <cbx-block-title>Multiple Values</cbx-block-title>
    <cbx-list no-hairlines-md>
      <cbx-list-input
        type="datepicker"
        placeholder="Select multiple dates"
        readonly
        :calendar-params="{ dateFormat: { month: 'short', day: 'numeric' }, multiple: true }"
      />
    </cbx-list>

    <cbx-block-title>Range Picker</cbx-block-title>
    <cbx-list no-hairlines-md>
      <cbx-list-input
        type="datepicker"
        placeholder="Select date range"
        readonly
        :calendar-params="{ rangePicker: true }"
      />
    </cbx-list>

    <cbx-block-title>Open in Modal</cbx-block-title>
    <cbx-list no-hairlines-md>
      <cbx-list-input
        type="datepicker"
        placeholder="Select date"
        readonly
        :calendar-params="{ openIn: 'customModal', header: true, footer: true }"
      />
    </cbx-list>

    <cbx-block-title>Calendar Page</cbx-block-title>
    <cbx-list>
      <cbx-list-item title="Open Calendar Page" link="/calendar-page/" />
    </cbx-list>

    <cbx-block-title>Inline with custom toolbar</cbx-block-title>
    <cbx-block strong class="no-padding">
      <div id="demo-calendar-inline-container"></div>
    </cbx-block>
  </cbx-page>
</template>
<script>
import {
  cbxNavbar,
  cbxPage,
  cbxBlock,
  cbxBlockTitle,
  cbxList,
  cbxListInput,
  cbxListItem,
  cbx,
} from 'xui-vue';
import $ from 'dom7';

export default {
  components: {
    cbxNavbar,
    cbxPage,
    cbxBlock,
    cbxBlockTitle,
    cbxList,
    cbxListInput,
    cbxListItem,
  },
  methods: {
    onPageInit() {
      const self = this;

      // Inline with custom toolbar
      const monthNames = [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December',
      ];
      self.calendarInline = cbx.calendar.create({
        containerEl: '#demo-calendar-inline-container',
        value: [new Date()],
        renderToolbar() {
          return `
              <div class="toolbar calendar-custom-toolbar no-shadow">
                <div class="toolbar-inner">
                  <div class="left">
                    <a href="#" class="link icon-only"><i class="icon icon-back"></i></a>
                  </div>
                  <div class="center"></div>
                  <div class="right">
                    <a href="#" class="link icon-only"><i class="icon icon-forward"></i></a>
                  </div>
                </div>
              </div>
            `.trim();
        },
        on: {
          init(c) {
            $('.calendar-custom-toolbar .center').text(
              `${monthNames[c.currentMonth]}, ${c.currentYear}`,
            );
            $('.calendar-custom-toolbar .left .link').on('click', () => {
              self.calendarInline.prevMonth();
            });
            $('.calendar-custom-toolbar .right .link').on('click', () => {
              self.calendarInline.nextMonth();
            });
          },
          monthYearChangeStart(c) {
            $('.calendar-custom-toolbar .center').text(
              `${monthNames[c.currentMonth]}, ${c.currentYear}`,
            );
          },
        },
      });
    },
    onPageBeforeRemove() {
      const self = this;
      self.calendarInline.destroy();
    },
  },
};
</script>
