<template>
  <cbx-page>
    <cbx-navbar title="Messages" back-link="Back"></cbx-navbar>

    <cbx-messagebar
      ref="messagebar"
      v-model:value="messageText"
      :placeholder="placeholder"
      :attachments-visible="attachmentsVisible"
      :sheet-visible="sheetVisible"
    >
      <template #inner-start>
        <cbx-link
          icon-ios="cbx:camera_fill"
          icon-aurora="cbx:camera_fill"
          icon-md="material:camera_alt"
          @click="sheetVisible = !sheetVisible"
        />
      </template>
      <template #inner-end>
        <cbx-link
          icon-ios="cbx:arrow_up_circle_fill"
          icon-aurora="cbx:arrow_up_circle_fill"
          icon-md="material:send"
          @click="sendMessage"
        />
      </template>
      <cbx-messagebar-attachments>
        <cbx-messagebar-attachment
          v-for="(image, index) in attachments"
          :key="index"
          :image="image"
          @attachment:delete="deleteAttachment(image)"
        ></cbx-messagebar-attachment>
      </cbx-messagebar-attachments>
      <cbx-messagebar-sheet>
        <cbx-messagebar-sheet-image
          v-for="(image, index) in images"
          :key="index"
          :image="image"
          :checked="attachments.indexOf(image) >= 0"
          @change="handleAttachment"
        ></cbx-messagebar-sheet-image>
      </cbx-messagebar-sheet>
    </cbx-messagebar>

    <cbx-messages>
      <cbx-messages-title><b>Sunday, Feb 9,</b> 12:58</cbx-messages-title>
      <cbx-message
        v-for="(message, index) in messagesData"
        :key="index"
        :type="message.type"
        :image="message.image"
        :name="message.name"
        :avatar="message.avatar"
        :first="isFirstMessage(message, index)"
        :last="isLastMessage(message, index)"
        :tail="isTailMessage(message, index)"
      >
        <template #text>
          <!-- eslint-disable-next-line -->
          <span v-if="message.text" v-html="message.text"></span>
        </template>
      </cbx-message>
      <cbx-message
        v-if="typingMessage"
        type="received"
        :typing="true"
        :first="true"
        :last="true"
        :tail="true"
        :header="`${typingMessage.name} is typing`"
        :avatar="typingMessage.avatar"
      ></cbx-message>
    </cbx-messages>
  </cbx-page>
</template>
<script>
import {
  cbxNavbar,
  cbxPage,
  cbxMessages,
  cbxMessagesTitle,
  cbxMessage,
  cbxMessagebar,
  cbxLink,
  cbxMessagebarAttachments,
  cbxMessagebarAttachment,
  cbxMessagebarSheet,
  cbxMessagebarSheetImage,
  cbxready,
  cbx,
} from 'xui-vue';
import $ from 'dom7';

export default {
  components: {
    cbxNavbar,
    cbxPage,
    cbxMessages,
    cbxMessagesTitle,
    cbxMessage,
    cbxMessagebar,
    cbxMessagebarAttachments,
    cbxMessagebarAttachment,
    cbxMessagebarSheet,
    cbxMessagebarSheetImage,
    cbxLink,
  },
  data() {
    return {
      attachments: [],
      sheetVisible: false,
      typingMessage: null,
      messageText: '',
      messagesData: [
        {
          type: 'sent',
          text: 'Hi, Kate',
        },
        {
          type: 'sent',
          text: 'How are you?',
        },
        {
          name: 'Kate',
          type: 'received',
          text: 'Hi, I am good!',
          avatar: '../../public/img/ks/people-100x100-9.jpeg',
        },
        {
          name: 'Blue Ninja',
          type: 'received',
          text: 'Hi there, I am also fine, thanks! And how are you?',
          avatar: '../../public/img/ks/people-100x100-7.jpeg',
        },
        {
          type: 'sent',
          text: 'Hey, Blue Ninja! Glad to see you ;)',
        },
        {
          type: 'sent',
          text: 'Hey, look, cutest kitten ever!',
        },
        {
          type: 'sent',
          image: '../../public/img/ks/cats-200x260-4.jpg',
        },
        {
          name: 'Kate',
          type: 'received',
          text: 'Nice!',
          avatar: '../../public/img/ks/people-100x100-9.jpeg',
        },
        {
          name: 'Kate',
          type: 'received',
          text: 'Like it very much!',
          avatar: '../../public/img/ks/people-100x100-9.jpeg',
        },
        {
          name: 'Blue Ninja',
          type: 'received',
          text: 'Awesome!',
          avatar: '../../public/img/ks/people-100x100-7.jpeg',
        },
      ],
      images: [
        '../../public/img/ks/cats-300x300-1.jpg',
        '../../public/img/ks/cats-300x300-2.jpg',
        '../../public/img/ks/cats-300x300-3.jpg',
        '../../public/img/ks/cats-200x260-4.jpg',
        '../../public/img/ks/cats-300x300-5.jpg',
        '../../public/img/ks/cats-300x300-6.jpg',
        '../../public/img/ks/cats-300x300-7.jpg',
        '../../public/img/ks/cats-300x300-8.jpg',
        '../../public/img/ks/abstract-88x88-5.jpg',
        '../../public/img/ks/abstract-88x88-6.jpeg',
      ],
      people: [
        {
          name: 'Kate Johnson',
          avatar: '../../public/img/ks/people-100x100-9.jpeg',
        },
        {
          name: 'Blue Ninja',
          avatar: '../../public/img/ks/people-100x100-7.jpeg',
        },
      ],
      answers: [
        'Yes!',
        'No',
        'Hm...',
        'I am not sure',
        'And what about you?',
        'May be ;)',
        'Lorem ipsum dolor sit amet, consectetur',
        'What?',
        'Are you sure?',
        'Of course',
        'Need to think about it',
        'Amazing!!!',
      ],
      responseInProgress: false,
    };
  },
  computed: {
    attachmentsVisible() {
      const self = this;
      return self.attachments.length > 0;
    },
    placeholder() {
      const self = this;
      return self.attachments.length > 0 ? 'Add comment or Send' : 'Message';
    },
  },
  mounted() {
    const self = this;
    cbxready(() => {
      self.messagebar = cbx.messagebar.get(self.$refs.messagebar.$el);
    });
  },
  methods: {
    isFirstMessage(message, index) {
      const self = this;
      const previousMessage = self.messagesData[index - 1];
      if (message.isTitle) return false;
      if (
        !previousMessage ||
        previousMessage.type !== message.type ||
        previousMessage.name !== message.name
      )
        return true;
      return false;
    },
    isLastMessage(message, index) {
      const self = this;
      const nextMessage = self.messagesData[index + 1];
      if (message.isTitle) return false;
      if (!nextMessage || nextMessage.type !== message.type || nextMessage.name !== message.name)
        return true;
      return false;
    },
    isTailMessage(message, index) {
      const self = this;
      const nextMessage = self.messagesData[index + 1];
      if (message.isTitle) return false;
      if (!nextMessage || nextMessage.type !== message.type || nextMessage.name !== message.name)
        return true;
      return false;
    },
    deleteAttachment(image) {
      const self = this;
      const index = self.attachments.indexOf(image);
      self.attachments.splice(index, 1)[0]; // eslint-disable-line
    },
    handleAttachment(e) {
      const self = this;
      const index = $(e.target).parents('label.checkbox').index();
      const image = self.images[index];
      if (e.target.checked) {
        // Add to attachments
        self.attachments.unshift(image);
      } else {
        // Remove from attachments
        self.attachments.splice(self.attachments.indexOf(image), 1);
      }
    },
    sendMessage() {
      const self = this;
      const text = self.messageText.replace(/\n/g, '<br>').trim();
      const messagesToSend = [];
      self.attachments.forEach((attachment) => {
        messagesToSend.push({
          image: attachment,
        });
      });
      if (text.length) {
        messagesToSend.push({
          text,
        });
      }
      if (messagesToSend.length === 0) {
        return;
      }

      // Reset attachments
      self.attachments = [];
      // Hide sheet
      self.sheetVisible = false;
      // Clear area
      self.messageText = '';
      // Focus area
      if (text.length) self.messagebar.focus();
      // Send message
      self.messagesData.push(...messagesToSend);

      // Mock response
      if (self.responseInProgress) return;
      self.responseInProgress = true;
      setTimeout(() => {
        const answer = self.answers[Math.floor(Math.random() * self.answers.length)];
        const person = self.people[Math.floor(Math.random() * self.people.length)];
        self.typingMessage = {
          name: person.name,
          avatar: person.avatar,
        };
        setTimeout(() => {
          self.messagesData.push({
            text: answer,
            type: 'received',
            name: person.name,
            avatar: person.avatar,
          });
          self.typingMessage = null;
          self.responseInProgress = false;
        }, 4000);
      }, 1000);
    },
  },
};
</script>
