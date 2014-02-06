module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        sass: {
            dist: {
                options: {
                    style: 'expanded',
                    noCache: true
                },
                files: {
                    'build/css/himmel.css' : 'himmel.sass'
                }
            }
        },
        cssmin : {
            options: {
                    banner: '/* Himmel minified css file  */'
                },
            css:{
                src: 'build/css/himmel.css',
                dest: 'build/css/himmel.min.css'
            }
        },
        watch: {
            css: {
                files: '**/*.sass',
                tasks: ['sass','cssmin']
            }
        }
});

    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-cssmin');

    grunt.registerTask('default',['watch']);
};