function RangedValue(){}

/**
 * Add an observer which receives the normalized value of the parameter as an integer in the [0..range-1] range.
 * @param {int} range
 * @param {function} callback
 */
RangedValue.prototype.addValueObserver = function(range, callback){};

/**
 * Increments/Decrements the value.
 * @param {number} increment
 * @param {number} resolution
 */
RangedValue.prototype.inc = function(increment, resolution){};

/**
 * Set the value in an absolute fashion, value will be scaled with resolution.
 * @param {number} value
 * @param {number} resolution
 */
RangedValue.prototype.set = function(value, resolution){};