import { startKeyboard } from 'menuKeyboard';
import { Extra } from 'telegraf';
import { I18n } from 'telegraf-i18n';

/**
 * When user is talking in a chat to the bot, this will generates the menu Extra type, which is a keyboard if a few caveats that configures
 * another options also
 *
 * @param translation Telegraf-i18n middleware
 * @example
 * startKeyboard(i18n);
 * @returns A Telegraf Extra
 */
export const startExtra = (translation: I18n) => Extra.markdown().markup(startKeyboard(translation));
