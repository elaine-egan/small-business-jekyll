module.exports = function(grunt) {

  // Don't forget to fix exclude: node_modules to _config.yml

  // load all grunt tasks
  require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

  var jsFileList = [
    'app/_bower_components/bootstrap/js/transition.js',
    'app/_bower_components/bootstrap/js/alert.js',
    'app/_bower_components/bootstrap/js/button.js',
    'app/_bower_components/bootstrap/js/carousel.js',
    'app/_bower_components/bootstrap/js/collapse.js',
    'app/_bower_components/bootstrap/js/dropdown.js',
    'app/_bower_components/bootstrap/js/modal.js',
    'app/_bower_components/bootstrap/js/tooltip.js',
    'app/_bower_components/bootstrap/js/popover.js',
    'app/_bower_components/bootstrap/js/scrollspy.js',
    'app/_bower_components/bootstrap/js/tab.js',
    'app/_bower_components/bootstrap/js/affix.js',
    'app/_bower_components/bootstrap-select/dist/js/bootstrap-select.js'
    //'assets/js/plugins/*.js',
    //'assets/js/_*.js'
    //'app_bower_components/fitvids/jquery.fitvids.js'
  ];

  // Project configuration.
  grunt.initConfig({

    concat: {
      options: {
        separator: ';',
      },
      dist: {
        src: [jsFileList],
        dest: 'assets/js/scripts.js',
      },
    },

    uglify: {
      dist: {
        files: {
          'assets/js/scripts.min.js': [jsFileList]
        }
      }
    },

    less: {
      development: {
        options: {
          compress: true,
          //paths: ['app/assets/_less']
          sourceMap: true,
          sourceMapFilename: 'main.css.map',
          //outputSourceFiles: true,
          sourceMapRootpath: '/',
          //sourceMapBasepath: '/css'
        },
        files: {'app/assets/_less/main.min.css': [
            'app/assets/_less/style.less']
            }
        }
    },

    copy: {
      css : {
        files: {
          'css/main.min.css': 'app/assets/_less/main.min.css'
        }
      },
      fonts: {
        files: [{
          cwd: 'app/_bower_components/font-awesome/fonts',  // set working folder / root to copy
          src: '**/*',           // copy all files and subfolders
          dest: '_site/fonts',    // destination folder
          expand: true           // required when using cwd
        }]

      }
    },

    shell: {
      jekyll: {
        command: 'rm -rf _site/*; jekyll build',
        stdout: true
      },

      jekyllDev: {
        command: 'rm -rf _site/*; jekyll build --config _config.yml,_config_dev.yml',
        stdout: true
      },

      deploy: {
        command: 'rsync --progress -a -v -rz --checksum --delete -e "ssh -p 1234" _site/ username@123.456.789.012:/path/to/remote'
      }

    },

    watch: {
      options: {
        livereload: true
      },
      less: {
        files: ['app/assets/_less/*.less'], // Expand this
        tasks: ['lessCopy']
      },
      jekyllSources: {
        files: [
            'css/*', // new line to trigger rebuild if css changes
            'assets/*/*',
            '_includes/**/*.html',
            '_includes/**/*.md',
            '_layouts/*.html',
            '_posts/*.md',
            '_config.yml',
            'index.html',
            'alt-home/index.html',
            'services/index.html',
            'img/*'
        ],
        tasks: [
          'shell:jekyllDev',
          //'less:development',
          //'copy:css',
          'copy:fonts'
          ]
      }
    },

    connect: {
      server: {
        options: {
          base: '_site/',
          port: 9000
        }
      }
    },

    open: {
      server: {
        path: 'http://localhost:<%= connect.server.options.port %>/'
      }
    }
  });

  grunt.registerTask('lessCopy', ['less:development', 'copy:css']);

  grunt.registerTask('server', [
    //'shell:jekyllDev',
    'less:development',
    'shell:jekyllDev',
    'uglify',
    'copy:css',
    'copy:fonts',
    'connect:server',
    'open:server',
    'watch'
  ]);

  grunt.registerTask('deploy', [
    'shell:jekyll',
    'less:development',
    'copy:css',
    'copy:fonts',
    'shell:deploy'
  ]);

  // Default task.
  grunt.registerTask('default', 'server');

};
