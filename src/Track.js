function Track(){}

Track.prototype = new Channel();
Track.prototype.constructor = Track;

/**
 * @param {function} callback
 */
Track.prototype.addColorObserver = function(callback){};

/**
 * @param {function} callback
 */
Track.prototype.addIsSelectedObserver = function(callback){};

/**
 * @param {int} numChars
 * @param {string} textWhenUnassigned
 * @param {function} callback
 */
Track.prototype.addNameObserver = function(numChars, textWhenUnassigned, callback){};

/**
 * @param {function} callback
 */
Track.prototype.addNoteObserver = function(callback){};

/**
 * Add an observer for pitch lane names on this track.
 * @param {function} callback
 */
Track.prototype.addPitchNamesObserver = function(callback){};

/**
 * @param {int} numChars
 * @param {string} textWhenUnassigned
 * @param {function} callback
 */
Track.prototype.addTrackTypeObserver = function(numChars, textWhenUnassigned, callback){};

/**
 * Add an observer for a vu-meter of this track.
 * @param {int} range
 * @param {int} channel
 * @param {boolean} peak
 * @param {function} callback
 */
Track.prototype.addVuMeterObserver = function(range, channel, peak, callback){};

/**
 * @returns {BooleanValue}
 */
Track.prototype.getArm = function(){};

/**
 * @returns {BooleanValue}
 */
Track.prototype.getCanHoldAudioData = function(){};

/**
 * @returns {BooleanValue}
 */
Track.prototype.getCanHoldNoteData = function(){};

/**
 * @returns {ClipLauncherSlots}
 */
Track.prototype.getClipLauncherSlots = function(){};

/**
 * @returns {BooleanValue}
 */
Track.prototype.getIsMatrixQueuedForStop = function(){};

/**
 * @returns {BooleanValue}
 */
Track.prototype.getIsMatrixStopped = function(){};

/**
 * @returns {Device}
 */
Track.prototype.getPrimaryDevice = function(){};

/**
 * @param {int} index
 * @return {AutomatableRangedValue}
 */
Track.prototype.getSend = function(index){};

/**
 * @returns {SourceSelector}
 */
Track.prototype.getSourceSelector = function(){};

/**
 * @param {int} key
 * @param {int} velocity
 */
Track.prototype.playNote = function(key, velocity){};

Track.prototype.returnToArrangement = function(){};

/**
 * @param {string} name
 */
Track.prototype.setName = function(name){};

/**
 * @param {int} key
 * @param {int} velocity
 */
Track.prototype.startNote = function(key, velocity){};

Track.prototype.stop = function(){};

/**
 * @param {int} key
 * @param {int} velocity
 */
Track.prototype.stopNote = function(key, velocity){};