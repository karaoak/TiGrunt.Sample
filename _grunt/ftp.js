module.exports = function(grunt) {

    return {
        options: {
            host: '<%= grunt.developer[grunt.option("app")].ftp.host %>',
            user: '<%= grunt.developer[grunt.option("app")].ftp.user %>',
            pass: '<%= grunt.developer[grunt.option("app")].ftp.pass %>'
        },
        ios_upload: {
            files: [{
                //cwd: '_builds/',
                src: '_builds/' + '<%= grunt.ipaFilename(grunt.context["app_name"]) %>',
                dest: '<%= grunt.developer[grunt.option("app")].ftp.dir + grunt.option("p") + "/" %>'
            }]
        },
        android_upload: {
            files: [{
                //cwd: '_builds/',
                src: '_builds/' + '<%= grunt.apkFilename(grunt.context["app_name"]) %>',
                dest: '<%= grunt.developer[grunt.option("app")].ftp.dir + grunt.option("p") + "/" %>'
            }]
        }
    };
};