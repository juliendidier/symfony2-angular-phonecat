({
    mainConfigFile: 'web/assets/js/common.js',
    baseUrl: './js',
    appDir: 'web/assets',
    dir: 'web/assets-built',
    modules: [
        {
            name: 'common',
            include: ['jquery', 'bootstrap'] 
        },
        {
            name: 'app/homepage',
            include: ['common'] 
        }
    ]
})
