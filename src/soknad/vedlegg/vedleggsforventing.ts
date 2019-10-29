import { config} from "../../config";

fixture `Vedlegg`
    .page(`${config.soknadUrl}/mock-login`);

test('Gjennomgang av søknad for å trigge 27 vedlegg', async t => {
    await t
        .typeText("#root > span > div > div > input", "12345678911")
        .click("#login-button")
        .click("#root > span > div > div > div:nth-child(8) > div.mock-data-bolk__body > div:nth-child(2) > label") // Barn
        .click("#root > span > div > div > div:nth-child(8) > div.mock-data-bolk__body > div.mock-block-collapse > div > div:nth-child(3) > button") // Legg til barn
        .click("#root > span > div > div > div:nth-child(8) > div.mock-data-bolk__body > div.mock-block-collapse > div > div:nth-child(3) > div > div > div > div.mock-newThing-body > button:nth-child(7)") // Ok       
        .click('#root > span > div > div > div:nth-child(10) > button')
        .click("#start_soknad_button")
        .click('#oppholdsadresse_folkeregistrert', {offsetX: 50})
        .click('#gaa_videre_button')

        .typeText("#begrunnelse_hva", "-livsopphold, komfyr, bestikk") // Hva søkes om
        .typeText("#begrunnelse_hvorfor", "Hei, jeg trenger hjelp fra dere. Mangler mange viktige ting til kjøkkenet mitt og så har jeg ikke penger til det hverdagslige") // Begrunnelse
        .click("#gaa_videre_button")

        .click("#soknadsskjema > div:nth-child(6) > div > fieldset > div > div > div:nth-child(1) > div > div") // Ja
        .click("#soknadsskjema > div.skjema-sporsmal.skjema-sporsmal--noBottomPadding.skjema-sporsmal--jaNeiSporsmal > div > fieldset > div > div > div.valgMedUnderskjema__skjema > div > div > div > div > div > div > div > fieldset > div > div:nth-child(2) > div") // Deltid
        .click("#gaa_videre_button")

        .click("#soknadsskjema > div:nth-child(4) > div > div > fieldset > div > div:nth-child(3) > div") // Ugift
        .click("#barn_radio_0_radio_nei", {offsetX: 50}) // Ikke delt bosted
        .click("#familie_barnebidrag_radio_begge_label") // Betaler og mottar barnebidrag
        .click("#gaa_videre_button")

        .click("#bosituasjon_radio_kommunal_label") // Kommunal bolig
        .typeText("#bosituasjon_antallpersoner", "5") // Antall bor sammen med
        .click("#gaa_videre_button")

        .click("#inntekt_bostotte_radio_ja", {offsetX: 50}) // Har søkt bostøtte
        .click("#inntekt_inntekter_radio_ja", {offsetX: 50}) // Har utbetalt penger fra andre
        .click("#boutgifter_utbytte_checkbox", {offsetX: 50}) // Har utbetalt penger fra andre
        .click("#boutgifter_salg_checkbox", {offsetX: 50}) // Har utbetalt penger fra andre
        .click("#boutgifter_forsikring_checkbox", {offsetX: 50}) // Har utbetalt penger fra andre
        .click("#boutgifter_annet_checkbox", {offsetX: 50}) // Har utbetalt penger fra andre
        .typeText("#inntekt_inntekterutbetalinger_annet_textarea", "Har fått utbetalt arv fra morfar")
        .click("#formue_brukskonto_checkbox", {offsetX: 50}) // Hvilke bankkonti og spareordniger har du?
        .click("#formue_sparekonto_checkbox", {offsetX: 50}) // Hvilke bankkonti og spareordniger har du?
        .click("#formue_bsu_checkbox", {offsetX: 50}) // Hvilke bankkonti og spareordniger har du?
        .click("#formue_livsforsikring_checkbox", {offsetX: 50}) // Hvilke bankkonti og spareordniger har du?
        .click("#formue_verdipapirer_checkbox", {offsetX: 50}) // Hvilke bankkonti og spareordniger har du?
        .click("#formue_annet_checkbox", {offsetX: 50}) // Hvilke bankkonti og spareordniger har du?
        .typeText("#inntekt_bankinnskuddformue_annet_textarea", "Storebrand stipend-konto")
        .click("#inntekt_eierandeler_radio_ja", {offsetX: 50}) // Eier du noe med økonomisk verdi?
        .click("#verdier_bolig_checkbox", {offsetX: 50}) // Eier du noe med økonomisk verdi?
        .click("#verdier_campingvogn_checkbox", {offsetX: 50}) // Eier du noe med økonomisk verdi?
        .click("#verdier_kjoretoy_checkbox", {offsetX: 50}) // Eier du noe med økonomisk verdi?
        .click("#verdier_fritidseiendom_checkbox", {offsetX: 50}) // Eier du noe med økonomisk verdi?
        .click("#verdier_annet_checkbox", {offsetX: 50}) // Eier du noe med økonomisk verdi?
        .typeText("#inntekt_eierandelerverdier_annet_textarea", "Flaggstang fra sist gang jeg flyttet.")
        .click("#gaa_videre_button")

        .click("#soknadsskjema > div.skjema-sporsmal > div > fieldset > div > div > div:nth-child(1) > div > div") // Har du utgifter til å bo?
        .click("#soknadsskjema > div:nth-child(4) > div > fieldset > div > div > div.valgMedUnderskjema__skjema > div > div > div > div > div > div > div > fieldset > div > div:nth-child(1) > div > div") // Husleie
        .click("#soknadsskjema > div:nth-child(4) > div > fieldset > div > div > div.valgMedUnderskjema__skjema > div > div > div > div > div > div > div > fieldset > div > div:nth-child(2) > div > div") // Strøm
        .click("#soknadsskjema > div:nth-child(4) > div > fieldset > div > div > div.valgMedUnderskjema__skjema > div > div > div > div > div > div > div > fieldset > div > div:nth-child(3) > div > div") // Kommunale avgifter
        .click("#soknadsskjema > div:nth-child(4) > div > fieldset > div > div > div.valgMedUnderskjema__skjema > div > div > div > div > div > div > div > fieldset > div > div:nth-child(4) > div > div") // Oppvarming
        .click("#soknadsskjema > div:nth-child(4) > div > fieldset > div > div > div.valgMedUnderskjema__skjema > div > div > div > div > div > div > div > fieldset > div > div:nth-child(5) > div > div") // Avdrag og renter på boliglån
        .click("#soknadsskjema > div:nth-child(4) > div > fieldset > div > div > div.valgMedUnderskjema__skjema > div > div > div > div > div > div > div > fieldset > div > div:nth-child(6) > div > div") // Andre utgifter
        .click("#soknadsskjema > div:nth-child(5) > div > fieldset > div > div > div:nth-child(1) > div > div") // Har du utgifter til barn?
        .click("#soknadsskjema > div:nth-child(5) > div > fieldset > div > div > div.valgMedUnderskjema__skjema > div > div > div > div > div > div > div > fieldset > div > div:nth-child(1) > div > div") // Fritidsaktiviteter
        .click("#soknadsskjema > div:nth-child(5) > div > fieldset > div > div > div.valgMedUnderskjema__skjema > div > div > div > div > div > div > div > fieldset > div > div:nth-child(2) > div > div") // Barnehage
        .click("#soknadsskjema > div:nth-child(5) > div > fieldset > div > div > div.valgMedUnderskjema__skjema > div > div > div > div > div > div > div > fieldset > div > div:nth-child(3) > div > div") // SFO
        .click("#soknadsskjema > div:nth-child(5) > div > fieldset > div > div > div.valgMedUnderskjema__skjema > div > div > div > div > div > div > div > fieldset > div > div:nth-child(4) > div > div") // Tannregulering
        .click("#soknadsskjema > div:nth-child(5) > div > fieldset > div > div > div.valgMedUnderskjema__skjema > div > div > div > div > div > div > div > fieldset > div > div:nth-child(5) > div > div") // Annet
        .click("#gaa_videre_button")

        .click("#gaa_videre_button")

        .click("#soknadsskjema > div:nth-child(3) > div > div:nth-child(8) > div > button > div")
        .click("#soknadsskjema > div.bekreftOpplysningerPanel.blokk-xs.bolk > div > div > label")
        .click("#gaa_videre_button")
        .wait(10000) // Vent 10 sekunder
});

