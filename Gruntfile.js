module.exports = function(grunt) {

  var srcFiles = ["lab3.js"];
  grunt.initConfig({
    jshint: {
      files: srcFiles,
      options: {
        sub: true
      }
    },
    jscs: {
      src: srcFiles,
      options: {
        preset: "jquery",
        requireDotNotation: null,
        disallowMultipleVarDecl: null,
        requireMultipleVarDecl: null,
        validateQuoteMarks: null
      }
    }
  });

  grunt.loadNpmTasks("grunt-contrib-jshint");
  grunt.loadNpmTasks("grunt-jscs");

  grunt.registerTask("default", [ "jshint", "jscs"]);

};
