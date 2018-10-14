import { Telegram } from 'telegraf';
import { Update, UpdateType } from 'telegraf/typings/telegram-types';
import { getSessionKey } from 'telegrafRedis';

describe('Testing getSessionKey', () => {
    test('updateType of a message', () => {
        const id = 111111;
        // tslint:disable-next-line:no-reserved-keywords
        const from = {
            id,
            is_bot: false,
            username: 'baz',
            last_name: 'bar',
            first_name: 'foo',
            language_code: 'en'
        };
        const context = {
            from,
            update: <Update><unknown> null,
            telegram: <Telegram><unknown> null,
            updateType: <UpdateType> 'message'
        };

        return expect(getSessionKey(context)).toEqual(`${id}:${id}`);
    });

    test('Any other updateType', () => {
        // tslint:disable-next-line:no-reserved-keywords
        const from = {
            id: 111111,
            is_bot: false,
            username: 'baz',
            last_name: 'bar',
            first_name: 'foo',
            language_code: 'en'
        };
        const context = {
            from,
            update: <Update><unknown>null,
            telegram: <Telegram><unknown>null,
            updateType: <UpdateType>'shipping_query'
        };

        return expect(getSessionKey(context)).toEqual('');
    });

});
