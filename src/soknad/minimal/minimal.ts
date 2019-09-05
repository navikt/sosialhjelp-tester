import { Selector } from 'testcafe';
import {config} from "../../config";

// Hvis Søknad-API er "kald", kan det ta veldig lang tid før dette elementet finnes på siden
const userIdInput = Selector('#root > span > div > div > input', { timeout: 30_000 });

fixture `Minimal`
    .page(`${config.soknadUrl}/mock-login`);

test('Grønt løp', async t => {
    await t
        .typeText(userIdInput, "01234567890")
        .click('#login-button')
        .click('#root > span > div > div > div:nth-child(10) > button')
        .click("#start_soknad_button")
        .click('#oppholdsadresse_folkeregistrert')
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