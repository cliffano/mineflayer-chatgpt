"use strict"
import Reference from './reference.js';

async function respond(memory, api, player, message) {

  const params = {
    messages: [{ role: 'user', content: message }],
    model: 'gpt-3.5-turbo'
  };

  // if (memory.exists(player)) {

  //   // if there's prior reference for the player
  //   // then send the message with the reference information
  //   // in order to provide context to the conversation
  //   previousReference = memory.retrieve(player);
  //   // TODO: add previousReference details to the message params
  // }

  const chatCompletion = await api.chat.completions.create(params);
  const reply = chatCompletion.choices[0].message.content;

  // memorise current reference against the player
  const reference = new Reference(
    chatCompletion.id,
    chatCompletion.id
  );
  memory.register(player, reference);

  return reply;
}

const exports = {
  respond: respond
};

export {
  exports as default
};