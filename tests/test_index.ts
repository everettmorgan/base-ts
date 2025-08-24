import 'chai-as-promised';
import * as chai from 'chai';

const { expect } = chai;

describe('A test', function() {
  it ('can do something', function() {
    const a: boolean = true;
    const b: boolean = false;
    expect(a).to.not.equal(b);
  })
});
