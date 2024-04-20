"use strict"
import Reference from './reference.js';

async function respond(memory, api, username, message) {

  let response = null;

  if (!memory.exists(username)) {

    // if there's no prior reference with the username
    // then send the message without any past reference
    console.dir(api);
    console.dir(api.sendMessage);
    response = await api.sendMessage(message);

  } else {

    // if there's prior reference with the username
    // then send the message with the reference information
    // in order to provide context to the conversation
    const prev_ref = memory.retrieve(username);
    response = await api.sendMessage(message, {
      conversationId: prev_ref.getConversationId(),
      parentMessageId: prev_ref.getParentMessageId()
    });

  }

  // memorise current conversation with the username
  const curr_ref = new Reference(
    response.conversationId,
    response.id
  );
  memory.register(username, curr_ref);

  bot.chat(response.text);
}

const exports = {
  respond: respond
};

export {
  exports as default
};