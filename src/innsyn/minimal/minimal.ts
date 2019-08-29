import { Selector } from 'testcafe';
import { config } from '../../config';

fixture `Minimal`
    .page(`${config.innsynUrl}/`);

// TODO: Sjekk status på sak
test('Grønt løp', async t => {
    await t
        .expect(Selector('.typo-sidetittel').innerText)
        .eql('Sosialhjelp innsyn');
});