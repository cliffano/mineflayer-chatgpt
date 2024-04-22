"use strict"

class Memory {

  constructor() {
    this.references = {};
  }

  register(player, reference) {
    this.references[player] = reference;
  }

  retrieve(player) {
    return this.references[player];
  }

  exists(player) {
    return this.references.hasOwnProperty(player);
  }
}

export {
  Memory as default
};