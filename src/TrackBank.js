function TrackBank(){}

/**
 * @param {function} callback
 */
TrackBank.prototype.addCanScrollScenesDownObserver = function(callback){};

/**
 * @param {function} callback
 */
TrackBank.prototype.addCanScrollScenesUpObserver = function(callback){};

/**
 * @param {function} callback
 */
TrackBank.prototype.addCanScrollSendsDownObserver = function(callback){};

/**
 * @param {function} callback
 */
TrackBank.prototype.addCanScrollSendsUpObserver = function(callback){};

/**
 * @param {function} callback
 */
TrackBank.prototype.addCanScrollTracksDownObserver = function(callback){};

/**
 * @param {function} callback
 */
TrackBank.prototype.addCanScrollTracksUpObserver = function(callback){};

/**
 * @param {function} callback
 * @param {int} valueWhenUnassigned
 */
TrackBank.prototype.addSceneScrollPositionObserver = function(callback, valueWhenUnassigned){};

/**
 * @param {function} callback
 * @param {int} valueWhenUnassigned
 */
TrackBank.prototype.addTrackScrollPositionObserver = function(callback, valueWhenUnassigned){};

/**
 * @returns {ClipLauncherScenesOrSlots}
 */
TrackBank.prototype.getClipLauncherScenes = function(){};

/**
 * @param {int} indexInBank
 * @returns {Track}
 */
TrackBank.prototype.getTrack = function(indexInBank){};

/**
 * @param {int} indexInWindow
 */
TrackBank.prototype.launchScene = function(indexInWindow){};

TrackBank.prototype.scrollScenesDown = function(){};

TrackBank.prototype.scrollScenesPageDown = function(){};

TrackBank.prototype.scrollScenesPageUp = function(){};

TrackBank.prototype.scrollScenesUp = function(){};

TrackBank.prototype.scrollSendsDown = function(){};

TrackBank.prototype.scrollSendsPageDown = function(){};

TrackBank.prototype.scrollSendsPageUp = function(){};

TrackBank.prototype.scrollSendsUp = function(){};

/**
 * @param {int} position
 */
TrackBank.prototype.scrollToScene = function(position){};

/**
 * @param {int} position
 */
TrackBank.prototype.scrollToTrack = function(position){};

TrackBank.prototype.scrollTracksDown = function(){};

TrackBank.prototype.scrollTracksPageDown = function(){};

TrackBank.prototype.scrollTracksPageUp = function(){};

TrackBank.prototype.scrollTracksUp = function(){};

/**
 * @param {int} stepSize
 */
TrackBank.prototype.setTrackScrollStepSize = function(stepSize){};