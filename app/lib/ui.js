exports.createNavigationWindow = function(args) {

    function navigationWindow(args) {

        this.open = function(options) {
            args.window.open();
        };

        this.openWindow = function(win) {
            win.open();
        };

        this.closeWindow = function(win) {
            win.close();
        };

    }

    if (OS_ANDROID) {
        return new navigationWindow(args);
    } else {
        return Ti.UI.iOS.createNavigationWindow(args);
    }
};
