"use strict"
import { ChatGPTAPI } from 'chatgpt';
import action from './action.js';
import Memory from './memory.js';

const memory = new Memory();

function inject(bot) {

  let api;
  let message;
  let username;

  bot.chatgpt = {};

  bot.chatgpt.setApiKey = (apiKey) => {
    console.log(apiKey);
    api = new ChatGPTAPI({
      apiKey: apiKey
    });
    console.log("THE API IS")
    console.dir(api);
  }
  // bot.chatgpt.setUsername = (username) => {
  //   username = username;
  // }

  bot.chatgpt.sendMessage = (username, message) => {
    console.log("about to send message");
    console.dir(api);
    action.respond(memory, api, username, message);
  }
}

const exports = {
  chatgpt: inject
};

export {
  exports as default
};