module.exports = function(grunt) {

  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-less');

  grunt.initConfig({
    clean: ['dist'],

    less: {
      options: {},
      target: {
        files: [
          {
            src: ['bower_components/bootstrap/less/bootstrap.less'],
            dest: '.tmp/css/bootstrap.css'
          },
          {
            src: ['src/less/**/*.less'],
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
      target: {
        files: [
          { src: ['src/index.html'], dest: 'dist/index.html' }
        ]
      }
    }

  });

  grunt.registerTask('build', ['clean', 'less', 'cssmin', 'copy']);
};