# Gruntify your Titanium Workflow

##Sample Code
Appcelerator Titanium based cross platform iOS and Android trivia puzzle apps project for Logo Match, Quiz and Memory apps.

This is a quick and dirty checkin of sample code to support my 20141105 [Titanium NL Meetup Talk](https://speakerdeck.com/karaoak/gruntify-your-titanium-workflow)

As in presented in my slides this sample code automates the branding of white label code Titanium apps.

The Grunt tasks are setup so that you can 'pre build' an app's tiapp.xml, config.json and alloy.js based on an app context.

###Objectives
(Personal flavours disclaimer)

The following objective were taken into account when creating these Grunt tasks:

* Keep app configurations DRY and in one(!) place
* Keep configurations + keystores under version mgmt.
* App ids and Ti SDKs should be able to differ between platforms
* Enable theming of Classic Ti Apps (not included in this code)
* Automate app signing per deployType easily
* Setup should be simple with little dependencies

###How it works
Once the app has been 'pre-built', the other Grunt tasks help you to automatically create iOS Simulator and GenyMotion builds; on device builds with the right production keys + ppUids. As well helps you to create production releases with less or no error regarding versioning, provisioning or code signing.

###Custom tasks
* tiapp: Set the app (brand) context (custom tiapp.xml, app/config.json, etc.)
* sim, geny, test: Kick off iOS Simulator + Genymotion for different devices easily
* adhoc: Create iOS Adhoc builds and distribute these automatically
* release: Create production IPAs + APKs
* release: Jarsign and zipalign using Android tools (via grunt-shell) instead of by Ti CLI

	
###Grunt prebuilding instructions
	$ grunt tiapp --app (match|quiz|memory) [--p (ios|android)]
	$ grunt sim --device (5|6-plus|s4, etc)
	$ grunt test --p android|ios --device (5|6-plus|s4, etc)
	$ grunt adhoc
	$ grunt release
	
###Example

	$ grunt tiapp —app memory —p ios
	$ grunt sim —device 5s
	$ grunt sim —device ipad-2
	$ grunt tiapp —app quiz —p ios
	$ grunt sim —device 5s
	$ grunt test —device 5
	$ grunt adhoc
	$ grunt release

	$ grunt tiapp —app match —p android
	$ grunt geny —device s4
	$ grunt test —device s4
	$ grunt release
	
###Please Note
This is a personal setup I use and adopt quite often. Use it as inspiration for your own setup.

* Just like your app, your Gruntfile.js is a WiP
* I don’t think there’s a BEST Grunt setup
* Find and create the Grunt tasks that work for you!
* You can solve any workflow issue. There is an awesome amount of npm modules available
* It’s a Means, not an End


For more information see my slides on [Speakerdeck](https://speakerdeck.com/karaoak/gruntify-your-titanium-workflow)