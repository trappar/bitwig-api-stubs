function AutomatableRangedValue(){}

AutomatableRangedValue.prototype = new RangedValue();
AutomatableRangedValue.prototype.constructor = AutomatableRangedValue;

/**
 * @param {int} maxChars
 * @param {string} textWhenUnassigned
 * @param {function} callback
 */
AutomatableRangedValue.prototype.addNameObserver = function(maxChars, textWhenUnassigned, callback){};

/**
 * Add an observer which sends a formatted text representation of the value when the value changes.
 * @param {int} maxChars - maximum length of the string sent to the observer.
 * @param {string} textWhenUnassigned - text to use t
 * @param {function} callback - function with the signature (String text)
 */
AutomatableRangedValue.prototype.addValueDisplayObserver = function(maxChars, textWhenUnassigned, callback){};

/**
 * Reset the value to its default.
 */
AutomatableRangedValue.prototype.reset = function(){};

/**
 * Sets if this value should be indicated in the GUI as mapped. (Colored dots)
 * @param {boolean} shouldIndicate
 */
AutomatableRangedValue.prototype.setIndication = function(shouldIndicate){};

/**
 * Set label of the mapped hardware parameter shown in the application for certain cases (ex. for control learn)
 * @param {string} label
 */
AutomatableRangedValue.prototype.setLabel = function(label){};

/**
 * Touch (or untouch) the value..
 * @param {boolean} isBeingTouched
 */
AutomatableRangedValue.prototype.touch = function(isBeingTouched){};