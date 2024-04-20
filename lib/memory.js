"use strict"

class Memory {
  
  constructor() {
    this.references = {};
  }

  register(username, reference) {
    this.references[username] = reference;
  }

  retrieve(username) {
    return this.references[username];
  }

  exists(username) {
    return this.references.hasOwnProperty(username);
  }
}

export {
  Memory as default
};