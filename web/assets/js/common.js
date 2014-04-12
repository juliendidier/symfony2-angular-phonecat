requirejs.config({
    paths: {
        jquery: "../vendor/jquery/dist/jquery",
        bootstrap: "../vendor/bootstrap/dist/js/bootstrap"
    },
    shim: {
        bootstrap: ['jquery']
    }
});

require(['jquery', 'bootstrap']);
