'use strict';

module.exports = function(grunt) {
  // Load NPM tasks
  require('load-grunt-tasks')(grunt);

  grunt.initConfig({
    sass: {
      dist: {
        files: {
          'style.css': 'sass/style.scss'
        }
      }
    },
    concatjs: {
      dist: {
        src: ['js/**/*.js'],
        dest: 'script.js',
      },
    },
  });

  grunt.registerTask('default', ['sass', 'concatjs']);
};
