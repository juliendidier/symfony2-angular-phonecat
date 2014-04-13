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
                        'angular': "../vendor/angular/angular",
                        'angular-route': '../vendor/angular-route/angular-route',
                        'bootstrap': "../vendor/bootstrap/dist/js/bootstrap",
                        'jquery': "../vendor/jquery/dist/jquery",
                        'domReady': "../vendor/requirejs-domready/domReady"
                    },
                    modules: [
                        {
                            name: 'common',
                            include: ['jquery', 'bootstrap', 'angular']
                        },
                        {
                            name: 'app/homepage',
                            include: ['common']
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
