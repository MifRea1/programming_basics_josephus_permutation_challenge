import assert from 'assert';
import solution from './solution';

assert(solution());
assert.deepStrictEqual(solution(0, 1), []);
assert.deepStrictEqual(solution(1, 1), [1]);
assert.deepStrictEqual(solution(2, 2), [2, 1]);
assert.deepStrictEqual(solution(7, 3), [3, 6, 2, 7, 5, 1, 4]);
assert.deepStrictEqual(solution(10, 1), [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
assert.deepStrictEqual(solution(10, 2), [2, 4, 6, 8, 10, 3, 7, 1, 9, 5]);
assert.deepStrictEqual(solution(15, 40), [10, 7, 8, 13, 5, 4, 12, 11, 3, 15, 14, 9, 1, 6, 2]);

console.log('That\'s OK!');
