"use strict"

class Memory {

  constructor() {
    this.conversations = {};
  }

  register(username, conversation) {
    this.conversations[username] = conversation;
  }

  retrieve(username) {
    return this.conversations[username];
  }

  exists(username) {
    return this.conversations.hasOwnProperty(username);
  }
}

export {
  Memory as default
};