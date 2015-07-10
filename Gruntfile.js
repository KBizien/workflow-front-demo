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
    }
  });

  grunt.registerTask('default', ['sass']);
};