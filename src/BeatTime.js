function BeatTime(){}

BeatTime.prototype = new RangedValue();
BeatTime.prototype.constructor = BeatTime;

/**
 * Add an observer which receives the internal raw of the parameter as floating point.
 * @param {function} callback
 */
BeatTime.prototype.addRawValueObserver = function(callback){}

/**
 * @param {string} separator
 * @param {int} barsLen
 * @param {int} beatsLen
 * @param {int} subdivisionLen
 * @param {int} ticksLen
 * @param {function} callback
 */
BeatTime.prototype.addTimeObserver = function(separator, barsLen, beatsLen, subdivisionLen, ticksLen, callback){}

/**
 * Increments/Decrements the internal (raw) value.
 * @param {number} delta
 */
BeatTime.prototype.incRaw = function(delta){}

/**
 * Set the internal (raw) value.
 * @param {number} value
 */
BeatTime.prototype.setRaw = function(value){}