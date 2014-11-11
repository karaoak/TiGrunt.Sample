module.exports = function(grunt) {

    return {
        options: {
            // Task-specific options go here
        },
        tiapp: {
            options: {
                data: {

                    'ti_sdk_version': '<%= grunt.generic.ti_sdk_version[grunt.option("p")] %>',

                    'version_number': '<%= grunt.context.version_number %>',
                    'version_code': '<%= grunt.context.version_code %>',

                    'publisher': '<%= grunt.context.publisher %>',
                    'app_name': '<%= grunt.context.app_name %>',
                    'app_id': '<%= grunt.context[grunt.option("p")].app_id %>',

                    'url': '<%= grunt.context.url %>',
                    'description': '<%= grunt.context.description %>',
                    'copyright': '<%= grunt.context.copyright %>',

                    'guid': '<%= grunt.context.guid %>',

                    'facebook_app_id': '<%= grunt.context.facebook.app_id %>'

                }
            },
            files: {
                'tiapp.xml': ['_config/templates/tiapp.tpl.xml']
            }
        },
        manifest: {
            options: {
                data: {
                    'app_name': '<%= grunt.context.app_name %>',
                    'app_id': '<%= grunt.context.app_id %>',
                    'guid': '<%= grunt.context.guid %>',
                    'publisher': '<%= grunt.context.publisher %>',
                    'url': '<%= grunt.context.url %>',
                    'description': '<%= grunt.context.description %>'
                }
            },
            files: {
                'manifest': ['_config/templates/manifest.tpl']
            }
        },
        config_json: {
            options: {
                data: {
                    'theme': '<%= grunt.context.theme %>',
                    'google_ua': '<%= grunt.context.google.ua %>',
                    'facebook_app_id': '<%= grunt.context.facebook.app_id %>',
                    'facebook_app_url': '<%= grunt.context.facebook.url %>',
                    'twitter_url': '<%= grunt.context.twitter.url %>'
                }
            },
            files: {
                'app/config.json': ['_config/templates/config.tpl.json']
            }
        }
    }
};