import * as chai from 'chai';
import * as chaiAsPromised from 'chai-as-promised';

const { expect } = chai;

chai.use(chaiAsPromised);

describe('A test', function() {
  it ('can do something', function() {
    const a: boolean = true;
    const b: boolean = false;
    expect(a).to.not.equal(b);
  })
});