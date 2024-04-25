"use strict"
import assert from 'assert';
import action from '../lib/action.js';
import mineflayerChatgpt from '../lib/mineflayer-chatgpt.js';
import sinon from 'sinon';

describe('mineflayer-chatgpt', function() {

  describe('chatgpt', function() {
    beforeEach(function () {
      this.mockAction = sinon.mock(action);
      // this.mockChat = sinon.mock();
      this.mockBot = { chat: {} };
      this.mockConsole = sinon.mock(console);
    });
    afterEach(function () {
      this.mockAction.verify();
      // this.mockBot.verify();
      // this.mockChat.verify();
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
    // it('should call bot chat when sendMessage is called without error', function() {
    //   this.mockChat.expects('chat').once().withExactArgs('Hi there!');
    //   this.mockAction.expects('respond').once().withArgs('Hi there!');
    //   mineflayerChatgpt.chatgpt(this.mockBot);
    //   this.mockBot.chatgpt.sendMessage('someplayer', 'Hello');
    // });
  });

});
