import { Markup } from 'telegraf';
import I18n from 'telegraf-i18n';
import { InlineKeyboardMarkup } from 'telegram-typings';

/**
 * When user is talking in a chat to the bot, this will generates the menu keyboard
 *
 * @param translation Telegraf-i18n middleware
 * @example
 * startKeyboard(i18n);
 * @returns A Telegraf keyboard
 */
export const startKeyboard = (translation: I18n): InlineKeyboardMarkup => {
    return Markup.resize().keyboard([ translation.t('menuButton'), translation.t('helpButton') ]);
};
