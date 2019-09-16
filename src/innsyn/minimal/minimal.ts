import { Selector } from 'testcafe';
import { config } from '../../config';

const fiksDigisosId = (new Date()).getTime().toString();

fixture `Minimal`
    .page(`${config.innsynUrl}/${fiksDigisosId}/status`);

// TODO: Bruk fagsystem-mock til å sette innsyn-data
test('Grønt løp', async t => {
    await t
        .expect(Selector('.typo-innholdstittel').innerText).eql('Søknaden er mottatt');
});
