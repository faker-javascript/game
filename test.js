import test from 'ava';
import game from './index.js';

test('game title return type to be string', t => {
    t.is(typeof game().title(), 'string');
});

test('game genre return type to be string', t => {
    t.is(typeof game().genre(), 'string');
});

test('game platform return type to be string', t => {
    t.is(typeof game().platform(), 'string');
});
