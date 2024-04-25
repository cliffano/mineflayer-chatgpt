"use strict"
import assert from 'assert';
import Reference from '../lib/reference.js';

describe('reference', function() {

  describe('retrieve properties', function() {
    beforeEach(function () {
      this.reference = new Reference('conv-123', 'parmsg-456');
    });
    it('should get conversation ID', function() {
      assert.equal(this.reference.getConversationId(), 'conv-123');
    });
    it('should get parent message ID', function() {
      assert.equal(this.reference.getParentMessageId(), 'parmsg-456');
    });
  });

});
