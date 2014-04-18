function CursorDevice(){}

CursorDevice.prototype = new Device();
CursorDevice.prototype.constructor = CursorDevice;

/**
 * @param {function} callback
 */
BooleanValue.prototype.addCanSelectNextObserver = function(callback){};

/**
 * @param {function} callback
 */
BooleanValue.prototype.addCanSelectPreviousObserver = function(callback){};

/**
 * Make the next device in the parent device chain the selected one..
 */
BooleanValue.prototype.selectNext = function(){};

/**
 * Make the previous device in the parent device chain the selected one..
 */
BooleanValue.prototype.selectPrevious = function(){};