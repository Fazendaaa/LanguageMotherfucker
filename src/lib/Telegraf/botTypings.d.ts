import Telegraf, { ContextMessageUpdate } from 'telegraf';
import { I18n } from 'telegraf-i18n';

interface Scene {
    readonly state: Object;
    readonly leave: (...args: unknown[]) => Scene;
    readonly reenter: (...args: unknown[]) => Scene;
    readonly enter: (sceneId: string, defaultState?: unknown, silent?: boolean) => Scene;
}

export interface IBotContext extends ContextMessageUpdate {
    readonly i18n: I18n;
    readonly scene: Scene;
}
