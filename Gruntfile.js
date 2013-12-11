module.exports = function (grunt) {
  require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    
    jshint: {
      options: {
        globalstrict : true,
        trailing: true
      },
      src: ['public_src/js/**/*.js', '!public_src/js/libs/**/*.js']
    },
    
    
    uglify: {
      build: {
        files: {
          'public/js/main.min.js': ['public/js/main.js']
        }
      }
    },

    compass: {
      dist: {
        options: {
          config: '.compassrc.rb'
        }
      }
    },

    cssmin: {
      build: {
        src: 'public/css/screen.css',
        dest: 'public/css/screen.min.css'
      }
    },

    browserify: {
      js: {
        src: 'public_src/js/main.js',
        dest: 'public/js/main.js'
      },
      test: {
        src: 'tests/tests.js',
        dest: 'tests/tests.bundle.js'
      }
    },

    qunit: {
      all: ['tests/**/*.html']
    },

    watch: {
      js: {
        files: ['public_src/js/**/*.js'],
        tasks: ['buildjs_dev'],
        options: {
          livereload: true
        }
      },
      test: {
        files: ['tests/tests.js'],
        tasks: ['browserify:test', 'qunit'],
        options: {
          livereload: true
        }
      },

      lint: {
        files: ['public_src/js/**/*.js'],
        tasks: ['jshint']
      },

      css: {
        files: ['public_src/scss/**/*.scss'],
        tasks: ['buildcss_dev'],
        options: {
          livereload: true
        }
      }
    }
  });

  grunt.registerTask('default', ['watch']);
  grunt.registerTask('all',  ['compass', 'cssmin', 'browserify', 'uglify', 'qunit']);
  grunt.registerTask('buildcss_prod',  ['compass', 'cssmin']);
  grunt.registerTask('buildjs_prod',  ['browserify', 'uglify']);
  grunt.registerTask('buildcss_dev',  ['compass']);
  grunt.registerTask('buildjs_dev',  ['browserify']);

};
