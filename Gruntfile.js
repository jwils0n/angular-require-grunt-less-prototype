module.exports = function(grunt) {

  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-less');

  grunt.initConfig({
    clean: {
      init: ['dist'],
      cleanup: ['.tmp']
    },

    less: {
      options: {},
      target: {
        files: [
          {
            src: ['bower_components/bootstrap/less/bootstrap.less'],
            dest: '.tmp/css/bootstrap.css'
          },
          {
            src: ['assets/less/**/*.less'],
            dest: '.tmp/css'
          }
        ]
      }
    },

    cssmin: {
      combine: {
        files: {
          '.tmp/css/main.css': ['.tmp/css/**/*.css']
        }
      },
      minify: {
        src: ['.tmp/css/main.css'],
        dest: 'dist/css/main.min.css'
      }
    },

    copy: {
      prepOptimize: {
        files: [
          { src: ['bower_components/angular/angular.js'], dest: '.tmp/js/vendor/angular.js' },
          { src: ['bower_components/jquery/jquery.js'], dest: '.tmp/js/vendor/jquery.js' },
          { src: ['bower_components/bootstrap/dist/js/bootstrap.js'], dest: '.tmp/js/vendor/bootstrap.js' },
          { src: ['bower_components/requirejs-hogan-plugin/hgn.js'], dest: '.tmp/js/vendor/hgn.js' },
          { src: ['bower_components/requirejs-hogan-plugin/hogan.js'], dest: '.tmp/js/vendor/hogan.js' },
          { src: ['bower_components/requirejs-hogan-plugin/text.js'], dest: '.tmp/js/vendor/text.js' },
          { cwd: 'assets/', src: ['js/**/*.js'], dest: '.tmp/', expand: true }
        ]
      },
      dist: {
        files: [
          { src: ['assets/index.html'], dest: 'dist/index.html' },
          { src: ['bower_components/requirejs/require.js'], dest: 'dist/js/require.js' }
        ]
      }
    }

  });

  grunt.registerTask('build', ['clean:init', 'less', 'cssmin', 'copy:prepOptimize', 'copy:dist', 'clean:cleanup']);
};