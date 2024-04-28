"use strict"
import assert from 'assert';
import action from '../lib/action.js';
import mineflayerChatgpt from '../lib/mineflayer-chatgpt.js';
import OpenAI from 'openai';
import sinon from 'sinon';

describe('mineflayer-chatgpt', function() {

  describe('chatgpt', function() {
    beforeEach(function () {
      this.mockAction = sinon.mock(action);
      this.mockConsole = sinon.mock(console);

      this.chatCallsCount = 0;
      this.chatLastCallreply = null;
      const self = this;
      this.mockBot = { chat: function (reply) {
        self.chatCallsCount += 1;
        self.chatCallReply = reply;
      }};
    });
    afterEach(function () {
      this.mockAction.verify();
      this.mockConsole.verify();
      sinon.restore();
    });
    it('should add setConfig function', function() {
      mineflayerChatgpt.chatgpt(this.mockBot);
      assert.equal(typeof this.mockBot.chatgpt.setConfig, 'function');
    });
    it('should add sendMessage function', function() {
      mineflayerChatgpt.chatgpt(this.mockBot);
      assert.equal(typeof this.mockBot.chatgpt.sendMessage, 'function');
    });
    it('should set opts when setConfig is called', function() {
      mineflayerChatgpt.chatgpt(this.mockBot);
      let opts = {};
      this.mockBot.chatgpt.setConfig('sk-123', opts);
      assert.equal(opts.model, 'gpt-3.5-turbo');
    });
    it('should complete and set opts when setConfig is called with undefined opts', function() {
      mineflayerChatgpt.chatgpt(this.mockBot);
      this.mockBot.chatgpt.setConfig('sk-123');
    });
    it('should call bot chat when sendMessage is called without error', async function() {
      this.mockAction.expects('respond').once().withArgs(sinon.match.any, sinon.match.any, 'someplayer', 'Hello').returns('Hi there!');
      mineflayerChatgpt.chatgpt(this.mockBot);
      await this.mockBot.chatgpt.sendMessage('someplayer', 'Hello');
      assert.equal(this.chatCallsCount, 1);
      assert.equal(this.chatCallReply, 'Hi there!');
    });
    it('should logged error message when it is a generic error', async function() {
      this.mockConsole.expects('error').once().withExactArgs('An unexpected error has occurred: some error');
      this.mockAction.expects('respond').once().withArgs(sinon.match.any, sinon.match.any, 'someplayer', 'Hello').throws(new Error('some error'));
      mineflayerChatgpt.chatgpt(this.mockBot);
      await this.mockBot.chatgpt.sendMessage('someplayer', 'Hello');
      assert.equal(this.chatCallsCount, 0);
    });
    it('should logged formatted error message when it is an OpenAI.APIError', async function() {
      this.mockConsole.expects('error').once().withExactArgs('An OpenAI error has occurred: some openai error undefined undefined some openai error 400');
      let openAiError = new OpenAI.APIError('some openai error', 400, 'some type', 'some code');
      this.mockAction.expects('respond').once().withArgs(sinon.match.any, sinon.match.any, 'someplayer', 'Hello').throws(openAiError);
      mineflayerChatgpt.chatgpt(this.mockBot);
      await this.mockBot.chatgpt.sendMessage('someplayer', 'Hello');
      assert.equal(this.chatCallsCount, 0);
    });
  });

});
