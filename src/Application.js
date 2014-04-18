function Application(){}

Application.prototype.activateEngine = function(){};

/**
 * @param {function} callable
 */
Application.prototype.addHasActiveEngineObserver = function(callable){};

/**
 * @param {function} callable
 * @param {int} maxChars
 * @param {string} fallbackText
 */
Application.prototype.addSelectedModeObserver = function(callable, maxChars, fallbackText){};

Application.prototype.arrowKeyDown = function(){};

Application.prototype.arrowKeyLeft = function(){};

Application.prototype.arrowKeyRight = function(){};

Application.prototype.arrowKeyUp = function(){};

Application.prototype.copy = function(){};

Application.prototype.cut = function(){};

Application.prototype.deactivateEngine = function(){};

Application.prototype.delete = function(){};

Application.prototype.duplicate = function(){};

Application.prototype.enter = function(){};

Application.prototype.escape = function(){};

Application.prototype.focusPanelAbove = function(){};

Application.prototype.focusPanelBelow = function(){};

Application.prototype.focusPanelToLeft = function(){};

Application.prototype.focusPanelToRight = function(){};

Application.prototype.nextPerspective = function(){};

Application.prototype.paste = function(){};

Application.prototype.previousPerspective = function(){};

Application.prototype.redo = function(){};

Application.prototype.rename = function(){};

Application.prototype.selectAll = function(){};

Application.prototype.selectNone = function(){};

/**
 * @param {string} perspective
 */
Application.prototype.setPerspective = function(perspective){};

Application.prototype.toggleAutomationEditor = function(){};

Application.prototype.toggleBrowserVisibility = function(){};

Application.prototype.toggleDevices = function(){};

Application.prototype.toggleFullScreen = function(){};

Application.prototype.toggleMixer = function(){};

Application.prototype.toggleNoteEditor = function(){};

Application.prototype.undo = function(){};

Application.prototype.zoomIn = function(){};

Application.prototype.zoomOut = function(){};

Application.prototype.zoomToFit = function(){};

Application.prototype.zoomToSelection = function(){};