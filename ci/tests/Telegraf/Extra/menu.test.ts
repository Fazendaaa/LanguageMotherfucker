import { startExtra } from 'menuExtra';
import { join } from 'path';
import I18n from 'telegraf-i18n';

let curriedTranslation = <unknown>null;

beforeAll(() => {
    const translation = new I18n({
        useSession: true,
        allowMissing: true,
        defaultLanguage: 'en',
        sessionName: 'session',
        directory: join(__dirname, '../../../../others/locales')
    });
    curriedTranslation = {
        t: (resourceKey?: string, templateData?: object) => translation.t(<string>'en', resourceKey, templateData)
    };
});

describe('Testing startExtra', () => {
    test('Default in English', () => {
        const reply_markup = {
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
        const keyboard = {
            reply_markup,
            parse_mode: 'Markdown'
        };

        return expect(startExtra(<I18n>curriedTranslation)).toEqual(keyboard);
    });
});
