function Application(){
    this.activateEngine = function(){};

    /**
     * @param {function} callable
     */
    this.addHasActiveEngineObserver = function(callable){};

    /**
     * @param {function} callable
     * @param {int} maxChars
     * @param {string} fallbackText
     */
    this.addSelectedModeObserver = function(callable, maxChars, fallbackText){};

    this.arrowKeyDown = function(){};

    this.arrowKeyLeft = function(){};

    this.arrowKeyRight = function(){};

    this.arrowKeyUp = function(){};

    this.copy = function(){};

    this.cut = function(){};

    this.deactivateEngine = function(){};

    this.delete = function(){};

    this.duplicate = function(){};

    this.enter = function(){};

    this.escape = function(){};

    this.focusPanelAbove = function(){};

    this.focusPanelBelow = function(){};

    this.focusPanelToLeft = function(){};

    this.focusPanelToRight = function(){};

    this.nextPerspective = function(){};

    this.paste = function(){};

    this.previousPerspective = function(){};

    this.redo = function(){};

    this.rename = function(){};

    this.selectAll = function(){};

    this.selectNone = function(){};

    /**
     * @param {string} perspective
     */
    this.setPerspective = function(perspective){};

    this.toggleAutomationEditor = function(){};

    this.toggleBrowserVisibility = function(){};

    this.toggleDevices = function(){};

    this.toggleFullScreen = function(){};

    this.toggleMixer = function(){};

    this.toggleNoteEditor = function(){};

    this.undo = function(){};

    this.zoomIn = function(){};

    this.zoomOut = function(){};

    this.zoomToFit = function(){};

    this.zoomToSelection = function(){};
}