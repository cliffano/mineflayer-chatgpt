"use strict"

class Reference {

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
  Reference as default
};