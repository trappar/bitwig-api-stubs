function CursorDevice(){}

CursorDevice.prototype = new Device();
CursorDevice.prototype.constructor = CursorDevice;

/**
 * @param {function} callback
 */
CursorDevice.prototype.addCanSelectNextObserver = function(callback){};

/**
 * @param {function} callback
 */
CursorDevice.prototype.addCanSelectPreviousObserver = function(callback){};

/**
 * Make the next device in the parent device chain the selected one..
 */
CursorDevice.prototype.selectNext = function(){};

/**
 * Make the previous device in the parent device chain the selected one..
 */
CursorDevice.prototype.selectPrevious = function(){};