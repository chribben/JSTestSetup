require.config({
    //baseUrl är sökvägen till koden som ska testas (okänt varför det krävs en extra '../')
    baseUrl: "../../../Production/js/Calculator",
    paths: {
        //Säg åt Require att ladda in eventuella externa libbar
        //(i appen görs det normalt sett från html:en, t.ex. via @Scripts.Render-direktiv i Index.cshtml-filer)
        underscore: "../../Scripts/underscore"
    },
    shim: {
        //Require-ifiera de eventuella externa beroendemodulerna
        'underscore': {
            exports: '_'
        }
    }
});