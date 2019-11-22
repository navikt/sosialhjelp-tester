import { Selector } from 'testcafe';

fixture `Klikk`
    .page `https://www.digisos-test.com/soknadsosialhjelp/mock-login`;

test('Grønt løp', async t => {
    await t
        .typeText("#root > span > div > div > input", "12345678911")
        .click("#login-button")
        .click("#root > span > div > div > div:nth-child(3) > div.mock-data-bolk__body > div:nth-child(2) > label") // Velge telefonnummer
        .click("#root > span > div > div > div:nth-child(4) > div.mock-data-bolk__body > div:nth-child(2) > label") // Velge kontonummer
        .click("#root > span > div > div > div:nth-child(10) > button") // Start test

        .click("#start_soknad_button") // Start søknad

        .doubleClick("#soknadsmottaker > div > div > fieldset > div > span:nth-child(1) > div.inputPanel.undefined > div") // Klikk adressesøk
        .click("#soknadsmottaker > div > fieldset > div > div.inputPanel.undefined > div > label > div") // Velge annen adresse
        .doubleClick("#soknadsmottaker > div > div > fieldset > div > span:nth-child(1) > div.inputPanel.undefined > div") // Klikk adressesøk
        
        .click("#bruk_et_annet_telefonnummer_for_søknaden_lenke > span") // Endre telefonnummer
        .click("#angre_endringer_lenke > span") // Angre
        .click("#bruk_et_annet_telefonnummer_for_søknaden_lenke > span") // Endre telefonnummer
        .click("#angre_endringer_lenke > span") // Angre

        .click("#bruk_annet_kontonummer_for_søknaden_lenke > span") // Endre kontonummer
        .click("#angre_endringer_lenke > span") // Angre
        .click("#bruk_annet_kontonummer_for_søknaden_lenke > span") // Endre kontonummer
        .click("#kontakt_kontonummer > div.inputPanel > div > label > div") // Har ikke konto
        .click("#kontakt_kontonummer > div.inputPanel > div > label > div") // Har ikke konto
        .typeText("#kontakt_kontonummer", "12345678911") // Kontonummer
        .click("#angre_endringer_lenke > span") // Angre
        .click("#bruk_annet_kontonummer_for_søknaden_lenke > span") // Endre kontonummer

        .click("#gaa_videre_button") // Gå videre til steg 2

        .click("#gaa_videre_button") // Gå videre til steg 3

        .click("#soknadsskjema > div:nth-child(6) > div > fieldset > div > div > div:nth-child(1) > div > div") // Heltid studie
        .click("#soknadsskjema > div.skjema-sporsmal.skjema-sporsmal--noBottomPadding.skjema-sporsmal--jaNeiSporsmal > div > fieldset > div > div > div.valgMedUnderskjema__skjema > div > div > div > div > div > div > div > fieldset > div > div:nth-child(1) > div") // Ja
        .click("#soknadsskjema > div.skjema-sporsmal.skjema-sporsmal--noBottomPadding.skjema-sporsmal--jaNeiSporsmal > div > fieldset > div > div > div.valgMedUnderskjema__skjema > div > div > div > div > div > div > div > fieldset > div > div:nth-child(1) > div") // Ja
        .click("#gaa_videre_button")

        .doubleClick("#soknadsskjema > div:nth-child(4) > div > div > fieldset > div > div:nth-child(1) > div") // Gift
        .doubleClick("#soknadsskjema > div:nth-child(4) > div > div > fieldset > div > div:nth-child(3) > div") // Ugift
        .doubleClick("#soknadsskjema > div:nth-child(4) > div > div > fieldset > div > div:nth-child(4) > div") // Samboer
        .doubleClick("#soknadsskjema > div:nth-child(4) > div > div > fieldset > div > div:nth-child(5) > div") // Enke
        .doubleClick("#soknadsskjema > div:nth-child(4) > div > div > fieldset > div > div:nth-child(6) > div") // Skilt
        .doubleClick("#soknadsskjema > div:nth-child(4) > div > div > fieldset > div > div:nth-child(7) > div") // Separert
        .doubleClick("#soknadsskjema > div:nth-child(4) > div.skjema-sporsmal > div > fieldset > div > div.inputPanel.undefined.inputPanel__checked > div")
        .click("#soknadsskjema > div:nth-child(4) > div > div > fieldset > div > div:nth-child(1) > div") // Gift
        .click("#soknadsskjema > div:nth-child(4) > div.skjema-sporsmal > div > fieldset > div > div.skjema-sporsmal--jaNeiSporsmal > div > div > div > div > div > div > div > fieldset > div > div > div > div > div.skjema-sporsmal > div > fieldset > div > div:nth-child(1) > div > label") // JA
        .doubleClick("#soknadsskjema > div:nth-child(4) > div.skjema-sporsmal > div > fieldset > div > div.skjema-sporsmal--jaNeiSporsmal > div > div > div > div > div > div > div > fieldset > div > div > div > div > div.skjema-sporsmal > div > fieldset > div > div:nth-child(2) > div > label")

        .click("#gaa_videre_button")
        .click("#bosituasjon_radio_annet_label") // Annet
        .click("#soknadsskjema > div:nth-child(4) > div:nth-child(1) > div > fieldset > div > div.skjema-sporsmal--jaNeiSporsmal > div > div > div > div > div > div > div > fieldset > div > div:nth-child(4) > div > label") // Institusjon
        .click("#soknadsskjema > div:nth-child(4) > div:nth-child(1) > div > fieldset > div > div:nth-child(3) > div > label") // Kommunal bolig
        .doubleClick("#soknadsskjema > div:nth-child(4) > div:nth-child(1) > div > fieldset > div > div:nth-child(2) > div > label") // Privat bolig
        .typeText("#bosituasjon_antallpersoner", "111") // Hvor mange bor du med?
        .click("#gaa_videre_button")

        .doubleClick("#soknadsskjema > div:nth-child(7) > div > fieldset > div > div > div:nth-child(1) > div > div > label") // Ytelser fra andre enn NAV?
        .doubleClick("#gaa_videre_button")
        .click("#gaa_videre_button")

        .click("#soknadsskjema > div.bekreftOpplysningerPanel.blokk-xs.bolk > div > div > label") // Godkjenn innsending
        .click("#gaa_videre_button")

        .wait(3000)
    });