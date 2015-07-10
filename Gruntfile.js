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
    concat: {
      dist: {
        src: ['js/**/*.js'],
        dest: 'script.js',
      },
    },
  });

  grunt.registerTask('default', ['sass', 'concat']);
};