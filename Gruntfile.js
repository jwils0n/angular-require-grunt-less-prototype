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
            dest: 'dist/.tmp/css/bootstrap.css'
          },
          {
            src: ['src/less/**/*.less'],
            dest: 'dist/.tmp/css'
          }
        ]
      }
    },
    cssmin: {
      combine: {
        files: {
          'dist/.tmp/css/main.css': ['dist/.tmp/css/**/*.css']
        }
      },
      minify: {
        src: ['dist/.tmp/css/main.css'],
        dest: 'dist/public/main.min.css'
      }
    }

  });

  grunt.registerTask('build', ['clean', 'less', 'cssmin']);
};