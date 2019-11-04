import { Selector } from 'testcafe';

enum DigisosEnv {
    Local ,
    DigisosTest,
    Q0,
    Q1
}

const env: DigisosEnv = DigisosEnv.DigisosTest;

const domainWoldena: (env: DigisosEnv) => string = (environment) => {
    switch (environment) {
        case DigisosEnv.Local: return "http://localhost:3001";
        case DigisosEnv.DigisosTest: return "https://www.digisos-test.com";
        case DigisosEnv.Q0: return "https://www-q0.nav.no";
        case DigisosEnv.Q1: return "https://www-q1.nav.no";
        default: return "http://localhost:3000";
    }
};

const domainInnsyn: (env: DigisosEnv) => string = (environment) => {
    switch (environment) {
        case DigisosEnv.Local: return "http://localhost:3000";
        case DigisosEnv.DigisosTest: return "https://www.digisos-test.com";
        case DigisosEnv.Q0: return "https://www-q0.nav.no";
        case DigisosEnv.Q1: return "https://www-q1.nav.no";
        default: return "http://localhost:3000";
    }
};

const woldenaSystemSettingsUrlTypes: (env: DigisosEnv) => string = (env) => {
    switch (env) {
        case DigisosEnv.Local: return "lokalt";
        case DigisosEnv.DigisosTest: return "digisostest";
        case DigisosEnv.Q0: return "q0";
        case DigisosEnv.Q1: return "q1";
        default: return "lokalt";
    }
};

const woldenaPath: string = '/sosialhjelp/fagsystem-mock/v3';
const innsynPath: string = "/sosialhjelp/innsyn/";
const fiksDigisosSokerId: string = '86457621452347869780789886';

fixture(`oppgaver`);

test('at opplasting av vedlegg og sletting fungerer paa oppgaver', async t => {
    await t
        .navigateTo(`${domainWoldena(env)}${woldenaPath}`)
        .typeText('#ny_soknad_input', fiksDigisosSokerId)
        .click('#opprett_ny_soknad_knapp')
        .click('#soknad_1')
        .click('#etterspor_mer_dokumentasjon_knapp')
        .typeText('#nytt_dokumentasjonskrav_input_type', "verdipapir")
        .typeText('#nytt_dokumentasjonskrav_input_tilleggsinformasjon', "verdibevis for Ancestral Recall")
        .typeText('#Innsendelsesfrist', '2025-02-02')
        .click('#legg_til_dokumentkrav')
        .click('#etterspor_dokumentasjon_send')
        .expect(Selector('#innsyn_status_snackbar').visible).ok()
        .navigateTo(`${domainInnsyn(env)}${innsynPath}${fiksDigisosSokerId}/status`)
        .expect(Selector('html').textContent).contains('verdibevis for Ancestral Recall')
        .wait(5000)
});
