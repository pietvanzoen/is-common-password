import assert = require('assert');
import isCommonPassword from './is-common';

const testList = Buffer.from(`one
two
three`);

assert(isCommonPassword('one', testList));
assert(!isCommonPassword('four', testList));

console.log('isCommonPassword tests pass');
