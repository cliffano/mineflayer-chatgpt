"use strict"
import OpenAI from 'openai';
import action from './action.js';
import Memory from './memory.js';

const memory = new Memory();

function inject(bot) {

  let openai;
  let message;
  let username;

  bot.chatgpt = {};

  bot.chatgpt.setApiKey = (apiKey) => {
    openai = new OpenAI({
      apiKey: apiKey
    });
  }
  // bot.chatgpt.setUsername = (username) => {
  //   username = username;
  // }

  bot.chatgpt.sendMessage = async (player, message) => {

    const chatCompletion = await openai.chat.completions.create({
      messages: [{ role: 'user', content: message }],
      model: 'gpt-4'
    });
    console.dir(chatCompletion);
    console.dir(chatCompletion.choices[0].message);
    if (chatCompletion.error) {
      console.error(`An unexpected error has occurred: {chatCompletion.error.message}`);
      bot.chat('Burp... sorry');
    } else {
      bot.chat(chatCompletion.choices[0].message.content);
    }

  }

}

const exports = {
  chatgpt: inject
};

export {
  exports as default
};