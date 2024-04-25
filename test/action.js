"use strict"
import assert from 'assert';
import action from '../lib/action.js';
import Memory from '../lib/memory.js';

describe('action', function() {

  describe('respond to message', function() {
    beforeEach(function () {
      this.memory = new Memory();
      this.mockApi = {
        chat: {
          completions: {
            create: function (params) {
              assert.equal(params.messages[0].role, 'user');
              assert.equal(params.messages[0].content, 'Hello');
              assert.equal(params.model, 'gpt-3.5-turbo');
              return {
                id: 'compl-123',
                choices: [{ message: { content: 'Hi there!' } }]
              };
            }
          }
        }
      };
    });
    it('should return a reply from chat completion message', async function() {
      const reply = await action.respond(this.memory, this.mockApi, 'someplayer', 'Hello');
      assert.equal(reply, 'Hi there!');
    });
    it('should register reference to memory', async function() {
      await action.respond(this.memory, this.mockApi, 'someplayer', 'Hello');
      assert.equal(this.memory.exists('someplayer'), true);
      const reference = this.memory.retrieve('someplayer');
      assert.equal(reference.getConversationId(), 'compl-123');
      assert.equal(reference.getParentMessageId(), 'compl-123');
    });
  });

});
