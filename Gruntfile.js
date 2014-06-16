module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        //Meta
        meta:{
            banner: '/*!\n' +
                ' * <%= pkg.name %> <%= pkg.description %> || (<%= pkg.homepage %>)\n' +
                ' * Version - <%= pkg.version %>\n' +
                ' * Contributors - <%= pkg.contributors %>\n' +
                ' * Copyright (c) <%= grunt.template.today("yyyy") %> <%= pkg.author %>\n' +
                ' * License  <%= pkg.license %> (<%= pkg.license.url %>) \n' +
                ' */\n'
        },
        // Task configuration
        usebanner: {
            options: {
                position: 'top',
                banner: '<%= meta.banner %>'
            },
            files: {
                src: 'dist/css/*.css'
            }
        },
        sass: {
            dist: {
                options: {
                    style: 'expanded',
                    sourcemap: true,
                    noCache: true
                },
                files: {
                    'dist/css/himmel.css' : 'src/himmel.sass'
                }
            }
        },
        cssmin : {
            css:{
                src: 'dist/css/himmel.css',
                dest: 'dist/css/himmel.min.css'
            }
        },
        watch: {
            css: {
                files: '**/*.sass',
                tasks: ['sass','cssmin','usebanner']
            }
        }
});

    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-banner');

    //Task
    grunt.registerTask('default',['watch']);
};