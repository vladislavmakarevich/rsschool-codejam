const assert = require('assert');
const sum = require('./sumOfOther.js');

describe('sumOfOther',() => {
    it('sumOfOther#1',() => {
        const sum = sumOfOther([1,2,3]);
        assert.deepEqual(sum, [5,4,3]);
    })
    it('sumOfOther#2',() => {
        const sum = sumOfOther([1,3,5,7]);
        assert.deepEqual(sum, [15, 13, 11, 9]);
    })
    it('sumOfOther#3',() => {
        const sum = sumOfOther([1,2,8,12,34]);
        assert.deepEqual(sum, [56, 55, 49, 45, 23]);
    })
})