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
    return player in this.references;
  }
}

export {
  Memory as default
};