import * as chai from 'chai';
export const expect = chai.expect;
export const should = chai.should();

import {pigeon} from './../index.ts';

describe('pigeon.ts', () => {

  let channelOne, channelTwo;
  before(() => {
    channelOne = pigeon.channel('one');
    channelTwo = pigeon.channel('two');
  });

  describe('#channel()', () => {
    it('channel have to given names', () => {
      channelOne.getName().should.equal('one');
      channelTwo.getName().should.equal('two');
    });
  });

});
