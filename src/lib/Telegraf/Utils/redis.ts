import { Context } from 'telegraf';
import { User } from 'telegram-typings';

/**
 * Creates user based key to be used in Redis to handle all info from that user
 *
 * @param id User id
 * @example
 * generateKey(111111);
 * generateKey(222222);
 * generateKey(333333);
 * @returns Key to be used in Redis
 */
const generateKey = (id: number): string => `${id}:${id}`;

/**
 * Select from when the key to given user should be generate then returns it
 *
 * @param from Info fetched from Telegraf
 * @param updateType Info fetched from Telegraf
 * @returns Key to be used in Redis
 */
export const getSessionKey = ({ from, updateType }: Context): string => {
    if ('message' === updateType) {
        return generateKey((<User> from).id);
    }

    return '';
};
