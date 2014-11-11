module.exports = function(grunt) {

    //var _ = grunt.util._;

    return {
        clean: {
            options: {
                command: 'clean',
                quiet: false
            }
        },
        ios_sim: {
            options: {
                command: 'build',
                platform: 'ios',
                deviceFamily: 'universal',
                deployType: 'development',
                target: 'simulator',
                deviceId: '<%= grunt.developer.simulators[grunt.option("p")][grunt.option("device")] %>' || '',
                forceCopy: true,
                buildOnly: false,
                logLevel: (grunt.option('logLevel') === 'debug') ? 'debug' : 'info'
            }
        },
        ios_device: {
            options: {
                command: 'build',
                deployType: 'test',
                platform: 'ios',
                target: 'device',
                deviceId: '<%= grunt.developer.devices[grunt.option("p")][grunt.option("device")] %>' || '',
                developerName: '<%= grunt.context.ios.device.developerName %>',
                ppUuid: '<%= grunt.context.ios.device.ppUuid %>'
            }
        },
        ios_dist_adhoc: {
            options: {
                command: 'build',
                platform: 'ios',
                deviceFamily: 'universal',
                target: 'dist-adhoc',
                distributionName: '<%= grunt.context.ios.dist_adhoc.distributionName %>',
                ppUuid: '<%= grunt.context.ios.dist_adhoc.ppUuid %>',
                outputDir: '_builds'
            }
        },
        ios_dist_appstore: {
            options: {
                command: 'build',
                platform: 'ios',
                deviceFamily: 'universal',
                target: 'dist-appstore',
                distributionName: '<%= grunt.context.ios.dist_appstore.distributionName %>',
                ppUuid: '<%= grunt.context.ios.dist_appstore.ppUuid %>'
            }
        },
        test_android: {
            options: {
                command: 'build',
                deployType: 'test',
                platform: 'android',
                target: "device",
                deviceId: '<%= grunt.developer.devices[grunt.option("p")][grunt.option("device")] %>' || '',
                keystore: '<%= grunt.context.android.keystore %>',
                storePassword: '<%= grunt.context.android.storepass %>',
                alias: '<%= grunt.context.android.keyalias %>'

            }
        },
        android_dist_playstore: {
            options: {
                command: 'build',
                platform: 'android',
                target: "dist-playstore",
                keystore: '<%= grunt.context.android.keystore %>',
                storePassword: '<%= grunt.context.android.storepass %>',
                alias: '<%= grunt.context.android.keyalias %>',
                outputDir: '_builds'
            }
        }
    };
};