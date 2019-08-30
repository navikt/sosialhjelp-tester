export const config = {
    "soknadUrl": "https://www.digisos-test.com/sosialhjelp/soknad",
    "innsynUrl": "https://www.digisos-test.com/sosialhjelp/innsyn",
    "testData": {
        "innsyn": {
            "soknadsStatusMottatt": {
                "avsender": {
                    "systemnavn": "test",
                    "systemversjon": "test"
                },
                "hendelser": [
                    {
                        "hendelsestidspunkt": "2019-01-01T12:00:00.000Z",
                        "type": "soknadsStatus",
                        "status": "MOTTATT"
                    }
                ],
                "version": "test"
            }
        }
    }
};
