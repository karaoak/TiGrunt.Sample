//Generic stuff...
Ti.Media.audioSessionMode = Ti.Media.AUDIO_SESSION_MODE_AMBIENT;

Alloy.Globals.logger = require("utils/logger");
Alloy.Globals.logger_ = require("utils/logger_");
Alloy.Globals.tools = require("utils/tools");
Alloy.Globals.dispatcher = require("dispatcher");
Alloy.Globals.share = require("share");
Alloy.Globals.ga = require("ga");

if(Alloy.CFG.theme == 'match') {
    Alloy.Globals.isMatch = true;
    Alloy.Globals.isQuiz = false;
    Alloy.Globals.isMemory = false;
} else if (Alloy.CFG.theme == 'quiz') {
    Alloy.Globals.isMatch = false;
    Alloy.Globals.isQuiz = true;
    Alloy.Globals.isMemory = false;
} else if (Alloy.CFG.theme == 'memory') {
    Alloy.Globals.isMatch = false;
    Alloy.Globals.isQuiz = false;
    Alloy.Globals.isMemory = true;
}

Alloy.Globals.isIOS7Plus = (OS_IOS && parseInt(Ti.Platform.version.split(".")[0]) >= 7);
Alloy.Globals.isAndroid4Plus = (OS_ANDROID && parseInt(Ti.Platform.version.split(".")[0]) >= 4);

Alloy.Globals.jolicode = {};
Alloy.Globals.jolicode.pageflow = {};
Alloy.Globals.jolicode.pageflow.height = (Alloy.Globals.isIOS7Plus) ? Ti.Platform.displayCaps.platformHeight : (Ti.Platform.displayCaps.platformHeight - 20);
Alloy.Globals.jolicode.pageflow.width = Ti.Platform.displayCaps.platformWidth;

if (OS_ANDROID) {
    if (Alloy.isTablet) {
        Alloy.Globals.jolicode.pageflow.height = Math.min(Ti.Platform.displayCaps.platformHeight / Ti.Platform.displayCaps.logicalDensityFactor, Ti.Platform.displayCaps.platformWidth / Ti.Platform.displayCaps.logicalDensityFactor) - 25;
        Alloy.Globals.jolicode.pageflow.width = Math.max(Ti.Platform.displayCaps.platformHeight / Ti.Platform.displayCaps.logicalDensityFactor, Ti.Platform.displayCaps.platformWidth / Ti.Platform.displayCaps.logicalDensityFactor);
    } else {
        Alloy.Globals.jolicode.pageflow.height = Ti.Platform.displayCaps.platformHeight / Ti.Platform.displayCaps.logicalDensityFactor - 25;
        Alloy.Globals.jolicode.pageflow.width = Ti.Platform.displayCaps.platformWidth / Ti.Platform.displayCaps.logicalDensityFactor;
    }
}

Alloy.CFG.style = require("ui/style").style;
Alloy.Globals.Sound = require("ui/sound");
Alloy.Globals.User = require("models/user");

Alloy.Collections.levels = require("backbone/levels").init();
