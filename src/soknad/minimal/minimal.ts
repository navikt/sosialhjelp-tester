import { Selector } from 'testcafe';
import { config } from '../../config';

fixture `Minimal`
    .page(`${config.soknadUrl}/mock-login`);

test('Grønt løp', async t => {
    await t
        .typeText('#root > span > div > div > div > div > input', "01234567890")
        .click('#login-button')
        .click('#root > span > div > div > div:nth-child(10) > button')
        .click("#start_soknad_button")
        .expect(Selector("#folkeregistrertAdresse_data_loaded").visible).ok()
        .click('#oppholdsadresse_folkeregistrert_klikkbar_div')
        .typeText('#kontakt_telefon', '12345678')
        .click('#gaa_videre_button')
        .click('#gaa_videre_button')
        .click('#gaa_videre_button')
        .click('#gaa_videre_button')
        .click('#gaa_videre_button')
        .click('#gaa_videre_button')
        .click('#gaa_videre_button')
        .click('#gaa_videre_button')
        .click("#soknadsskjema > div.bekreftOpplysningerPanel.blokk-xs.bolk > div > div > label")
        .click('#gaa_videre_button')
        .expect(Selector('#root > span > div > div.blokk-center.panel.ettersendelse__panel > div:nth-child(2) > div.avsnitt > h3 > span').innerText).eql('Søknaden er sendt til');
        });