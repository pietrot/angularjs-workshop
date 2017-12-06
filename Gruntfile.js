'use strict';

//  Grunt Module
module.exports = function(grunt) {

	// Time it!
	require('time-grunt')(grunt);

    require('load-grunt-tasks')(grunt);
	
	// Configuration
	grunt.initConfig({
		
        watch: {
            js: {
                files: ['src/app/**/*.js'],
                tasks: []
            },

            html: {
                files: ['src/app/**/*.html'],
                tasks: []
            },

			gruntfile: {
			  	files: ['Gruntfile.js']
			}
        },

        // Browser Sync Config
        browserSync: {
            dev: {
                bsFiles: {
                    // Refresh on these changes...
                    src: [
                        'src/**/*.js',
                        'src/**/*.html'
                    ]
                },

                options: {
                    server: {
                        baseDir: './',
                        middleware: function (req, res, next) {
                            res.setHeader('Access-Control-Allow-Origin', '*');
                            next();
                        }
                    },
                    watchTask: true,
                }
            }
        }

	});

	// Load Tasks
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-browser-sync');

	// Task(s).
    grunt.registerTask('dev', [
        'browserSync',
        'watch'
    ]);
};

