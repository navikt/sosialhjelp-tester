import { Selector } from 'testcafe';
import { config } from '../../config';

fixture `Minimal`
    .page(`${config.innsynUrl}/`);

// TODO: Tilbakestill status etter test?
test('Grønt løp', async t => {
    await t
        .click('html body div#pagewrapper.pagewrapper main#maincontent.maincontent div.maincontent.side-innhold div#root div.informasjon-side div.blokk-center div.panel ol.typo-normal li a')
        .click('#operations-tag-mock-controller > a:nth-child(1) > span:nth-child(1)')
        .click('.opblock-summary-post > span:nth-child(1)')
        .click('.btn')
        .selectText('.body-param__text', 0)
        .typeText('.body-param__text', JSON.stringify(config.testData.innsyn.soknadsStatusMottatt))
        .typeText('tr.parameters:nth-child(2) > td:nth-child(2) > input:nth-child(2)', '1234')
        .click('.execute')

        .navigateTo(`${config.innsynUrl}/status`)
        .expect(Selector('.typo-innholdstittel').innerText).eql('Søknaden er mottatt');
});
