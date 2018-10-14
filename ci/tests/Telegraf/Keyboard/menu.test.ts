import { startKeyboard } from 'menuKeyboard';
import { join } from 'path';
import I18n from 'telegraf-i18n';

let curriedTranslation = <unknown> null;

beforeAll(() => {
    const translation = new I18n({
        useSession: true,
        allowMissing: true,
        defaultLanguage: 'en',
        sessionName: 'session',
        directory: join(__dirname, '../../../../others/locales')
    });
    curriedTranslation = {
        t: (resourceKey?: string, templateData?: object) => translation.t(<string> 'en', resourceKey, templateData)
    };
});

describe('Testing startKeyboard', () => {
    test('Default in English', () => {
        const keyboard = {
            resize_keyboard: true,
            keyboard: [
                [
                    'Menu'
                ],
                [
                    'Help'
                ]
            ]
        };

        return expect(startKeyboard(<I18n> curriedTranslation)).toEqual(keyboard);
    });
});
