module.exports = function (grunt) {
    grunt.initConfig({
        appDir: "web/assets",
        builtDir: "web/assets-built",
        requirejs: {
            dist: {
                options: {
                    maingConfigFile: '<%= appDir %>/js/common.js',
                    appDir: '<%= appDir %>',
                    baseUrl: './js',
                    dir: '<%= builtDir %>',
                    optimizeCss: "none",
                    optimize: "none",
                    paths: {
                        angular: "../vendor/angular/angular",
                        bootstrap: "../vendor/bootstrap/dist/js/bootstrap",
                        domReady: "../vendor/requirejs-domready/domReady",
                        jquery: "../vendor/jquery/dist/jquery",
                        ngResource: '../vendor/angular-resource/angular-resource',
                        ngRoute: '../vendor/angular-route/angular-route',
                        ngSanitize: '../vendor/angular-sanitize/angular-sanitize'
                    },
                    modules: [
                        {
                            name: 'common',
                            include: ['jquery', 'bootstrap', 'ngSanitize', 'angular', 'ngResource', 'ngRoute']
                        },
                        {
                            name: 'app/homepage',
                            exclude: ['common']
                        }
                    ]
                }
            }
        },
        compass: {
            dist: {
                options: {
                    sassDir: '<%= builtDir %>/sass',
                    cssDir: '<%= builtDir %>/css',
                    environment: 'production',
                    outputStyle: 'compressed'
                }
            },
            dev: {
                options: {
                    sassDir: '<%= appDir %>/sass',
                    cssDir: '<%= appDir %>/css',
                    outputStyle: 'expanded'
                }
            }
        },
        uglify: {
            dist: {
                files: [
                    {
                        expand: true,
                        cwd: '<%= builtDir %>',
                        src: 'js/*.js',
                        dest: '<%= builtDir %>'
                    }
                ]
            }
        },
        watch: {
            compass: {
                files: '<%= appDir %>/sass/*.scss',
                tasks: ['compass:dev']
            }
        }
    });

    grunt.registerTask('dev', [
        'requirejs:dist',
        'compass:dev'
    ]);

    grunt.registerTask('production', [
        'requirejs:dist',
        'compass:dist',
        'uglify:dist'
    ]);

    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-requirejs');
    grunt.loadNpmTasks('grunt-contrib-compass');
    grunt.loadNpmTasks('grunt-contrib-watch');
}; 
