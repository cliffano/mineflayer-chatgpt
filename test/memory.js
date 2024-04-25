"use strict"
import assert from 'assert';
import Memory from '../lib/memory.js';
import Reference from '../lib/reference.js';

describe('memory', function() {

  describe('check memory references', function() {
    beforeEach(function () {
      const reference = new Reference('conv-123', 'parmsg-456');
      this.memory = new Memory();
      this.memory.register('someplayer', reference);
    });
    it('should not return undefined when retrieving reference of an existing player', function() {
      assert.notEqual(this.memory.retrieve('someplayer'), undefined);
    });
    it('should return undefined when retrieving reference of an inexisting player', function() {
      assert.equal(this.memory.retrieve('inexistingplayer'), undefined);
    });
    it('should return true when checking for an existing player', function() {
      assert.equal(this.memory.exists('someplayer'), true);
    });
    it('should return false when checking for an inexisting player', function() {
      assert.equal(this.memory.exists('inexistingplayer'), false);
    });
  });

});
