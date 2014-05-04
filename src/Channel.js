function Channel(){}

/**
 * @param {function} callback
 */
Channel.prototype.addColorObserver = function(callback){};

/**
 * @param {function} callback
 */
Channel.prototype.addIsSelectedObserver = function(callback){};

/**
 * @param {int} numChars
 * @param {string} textWhenUnassigned
 * @param {function} callback
 */
Channel.prototype.addNameObserver = function(numChars, textWhenUnassigned, callback){};

/**
 * @param {function} callback
 */
Channel.prototype.addNoteObserver = function(callback){};

/**
 * @param {int} range - number of steps (ex. 128)
 * @param {int} channel - (0 - left, 1, right, -1 sum of both)
 * @param {boolean} peak - (true - peak, false, RMS)
 * @param {function} callback - callback function taking a single value argument
 * @throws com.bitwig.base.control_surface.ControlSurfaceException
 */
Channel.prototype.addVuMeterObserver = function(range, channel, peak, callback){};

/**
 * @returns {BooleanValue}
 */
Channel.prototype.exists = function(){};

/**
 * @returns {BooleanValue}
 */
Channel.prototype.getMute = function(){};

/**
 * @returns {AutomatableRangedValue}
 */
Channel.prototype.getPan = function(){};

/**
 * @returns {AutomatableRangedValue}
 */
Channel.prototype.getSend = function(index){};

/**
 * @returns {BooleanValue}
 */
Channel.prototype.getSolo = function(){};

/**
 * @returns {AutomatableRangedValue}
 */
Channel.prototype.getVolume = function(){};

Channel.prototype.select = function(){};