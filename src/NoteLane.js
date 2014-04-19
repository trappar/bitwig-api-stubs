function NoteLane(){}

/**
 * @param {function} callback
 */
NoteLane.prototype.addColorObserver = function(callback){};

/**
 * @param {int} numChars
 * @param {string} textWhenUnassigned
 * @param {function} callback
 */
NoteLane.prototype.addNameObserver = function(numChars, textWhenUnassigned, callback){};

/**
 * @param {function} callback
 */
NoteLane.prototype.addNoteValueObserver = function(callback){};

/**
 * @param {number} velocity
 */
NoteLane.prototype.play = function(velocity){};