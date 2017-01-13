exports.createNavigationWindow = function(args) {
    if (OS_IOS) {
        return Ti.UI.iOS.createNavigationWindow(args);
    } else {
        return args.window;
    }
};
