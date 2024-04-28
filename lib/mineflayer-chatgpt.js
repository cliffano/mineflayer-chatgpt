"use strict"
import action from './action.js';
import Memory from './memory.js';
import OpenAI from 'openai';

const memory = new Memory();

function chatgpt(bot) {

  let api;

  bot.chatgpt = {};

  bot.chatgpt.setConfig = (apiKey, opts) => {
    api = new OpenAI({
      apiKey: apiKey
    });
    opts = opts || {};
    opts.model = opts.model || 'gpt-3.5-turbo';
  }

  bot.chatgpt.sendMessage = async (player, message) => {
    try {
      const reply = await action.respond(memory, api, player, message);
      bot.chat(reply);
    } catch (error) {
      if (error instanceof OpenAI.APIError) {
        console.error(`An OpenAI error has occurred: ${error.status} ${error.type} ${error.code} ${error.message}`);
      } else {
        console.error(`An unexpected error has occurred: ${error.message}`);
      }
    }
  };

}

const exports = {
  chatgpt: chatgpt
};

export {
  exports as default
};