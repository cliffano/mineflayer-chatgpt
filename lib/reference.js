"use strict"

class Conversation {

  constructor(conversationId, parentMessageId) {
    this.conversationId = conversationId;
    this.parentMessageId = parentMessageId;
  }

  getConversationId() {
    return this.conversationId;
  }

  getParentMessageId() {
    return this.parentMessageId;
  }
}

export {
  Conversation as default
};