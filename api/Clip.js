function Clip(){}

/**
 * @param {function} callback
 */
Clip.prototype.addCanScrollKeysDownObserver = function(callback){};

/**
 * @param {function} callback
 */
Clip.prototype.addCanScrollKeysUpObserver = function(callback){};

/**
 * @param {function} callback
 */
Clip.prototype.addCanScrollStepsBackwardsObserver = function(callback){};

/**
 * @param {function} callback
 */
Clip.prototype.addCanScrollStepsForwardObserver = function(callback){};

/**
 * @param {function} callback
 */
Clip.prototype.addPlayingStepObserver = function(callback){};

/**
 * @param {function} callback
 */
Clip.prototype.addStepDataObserver = function(callback){};

/**
 * @param {int} x
 * @param {int} y
 */
Clip.prototype.clearStep = function(x, y){};

/**
 * @returns RangedValue
 */
Clip.prototype.getAccent = function(){};

/**
 * @returns BooleanValue
 */
Clip.prototype.getShuffle = function(){};

Clip.prototype.scrollKeysPageDown = function(){};

Clip.prototype.scrollKeysPageUp = function(){};

Clip.prototype.scrollKeysStepDown = function(){};

Clip.prototype.scrollKeysStepUp = function(){};

Clip.prototype.scrollStepsPageBackwards = function(){};

Clip.prototype.scrollStepsPageForward = function(){};

Clip.prototype.scrollStepsStepBackwards = function(){};

Clip.prototype.scrollStepsStepForward = function(){};

/**
 * @param {int} key
 */
Clip.prototype.scrollToKey = function(key){};

/**
 * @param {int} step
 */
Clip.prototype.scrollToStep = function(step){};

/**
 * @param {int} x
 * @param {int} y
 * @param {boolean} clearCurrentSelection
 */
Clip.prototype.selectStepContents = function(x, y, clearCurrentSelection){};

/**
 * @param {string} name
 */
Clip.prototype.setName = function(name){};

/**
 * @param {int} x
 * @param {int} y
 * @param {int} insertVelocity
 * @param {number} insertDuration
 */
Clip.prototype.setStep = function(x, y, insertVelocity, insertDuration){};

/**
 * @param {number} lengthInBeatTime
 */
Clip.prototype.setStepSize = function(lengthInBeatTime){};

/**
 * @param {int} x
 * @param {int} y
 * @param {int} insertVelocity
 */
Clip.prototype.toggleStep = function(x, y, insertVelocity){};