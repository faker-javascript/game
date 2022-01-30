import {expectType} from 'tsd';
import game from './index.js';

expectType<string>(game({locale: 'en_US'}).title());
expectType<string>(game().title());
expectType<string>(game().genre());
expectType<string>(game().platform());
