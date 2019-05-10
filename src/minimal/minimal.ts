import { Selector } from 'testcafe';

fixture `Getting Started`
    .page `https://tjenester-q0.nav.no/esso/UI/Login?service=level4Service&goto=https://tjenester-q0.nav.no/soknadsosialhjelp/informasjon`;

test('Grønt løp', async t => {
    await t
        .click('body > div.container_12 > div.box.clear-float > div.grid_9.left-seperator > div > form > fieldset > div > input')
        .click("#start_soknad_button")
        .click('#oppholdsadresse_folkeregistrert')
        .click('#gaa_videre_button')
        .click('#gaa_videre_button')
        .click('#gaa_videre_button')
        .click('#gaa_videre_button')
        .click('#gaa_videre_button')
        .click('#gaa_videre_button')
        .click('#gaa_videre_button')
        .click('#gaa_videre_button')
        .click('#bekreft_oppsummering_checkbox')
        .click('#gaa_videre_button')
        .expect(Selector('#root > span > div > div.blokk-center.panel.ettersendelse__panel > div:nth-child(2) > div.avsnitt > h3 > span').innerText).eql('Søknaden er sendt til');
});