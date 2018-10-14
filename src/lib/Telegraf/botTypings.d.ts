import Telegraf, { ContextMessageUpdate } from 'telegraf';
import { I18n } from 'telegraf-i18n';

interface IBotContext extends ContextMessageUpdate {
    readonly i18n: I18n;
}
