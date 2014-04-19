/**
 * An interface representing the transport of the a
 */
function Transport(){};

/**
 * @param {function} callback
 */
Transport.prototype.addAutomationOverrideObserver = function(callback){};

/**
 * @param {function} callback
 */
Transport.prototype.addAutomationWriteModeObserver = function(callback){};

/**
 * @param {function} callback
 */
Transport.prototype.addClickObserver = function(callback){};

/**
 * @param {function} callback
 */
Transport.prototype.addIsLoopActiveObserver = function(callback){};

/**
 * Add observer on the isPlaying state of the transport
 * @param {function} callback - function with signature (Boolean isPlaying)
 */
Transport.prototype.addIsPlayingObserver = function(callback){};

/**
 * @param {function} callback
 */
Transport.prototype.addIsRecordingObserver = function(callback){};

/**
 * @param {function} callback
 */
Transport.prototype.addIsWritingArrangerAutomationObserver = function(callback){};

/**
 * @param {function} callback
 */
Transport.prototype.addIsWritingClipLauncherAutomationObserver = function(callback){};

/**
 * @param {function} callback
 */
Transport.prototype.addLauncherOverdubObserver = function(callback){};

/**
 * @param {function} callback
 */
Transport.prototype.addMetronomeTicksObserver = function(callback){};

/**
 * @param {function} callback
 */
Transport.prototype.addMetronomeVolumeObserver = function(callback){};

/**
 * @param {function} callback
 */
Transport.prototype.addOverdubObserver = function(callback){};

/**
 * @param {function} callback
 */
Transport.prototype.addPreRollObserver = function(callback){};

/**
 * @param {function} callback
 */
Transport.prototype.addPunchInObserver = function(callback){};

/**
 * @param {function} callback
 */
Transport.prototype.addPunchOutObserver = function(callback){};

Transport.prototype.fastForward = function(){};

/**
 * @returns {BeatTime}
 */
Transport.prototype.getInPosition = function(){};

/**
 * @returns {BeatTime}
 */
Transport.prototype.getOutPosition = function(){};

/**
 * @returns {BeatTime}
 */
Transport.prototype.getPosition = function(){};

/**
 * @returns {AutomatableRangedValue}
 */
Transport.prototype.getTempo = function(){};

/**
 * @param {number} deltaBeats
 * @param {boolean} snap
 */
Transport.prototype.incPosition = function(deltaBeats, snap){};

/**
 * @param {number} amount
 * @param {number} range
 */
Transport.prototype.increaseTempo = function(amount, range){};

/**
 * Equivalent to pressing play on the transport.
 */
Transport.prototype.play = function(){};

/**
 * Equivalent to pressing record on the transport.
 */
Transport.prototype.record = function(){};

Transport.prototype.resetAutomationOverrides = function(){};

/**
 * When the transport is stopped, this function is equivalent to pressing play in the transport, otherwise the transport is first stopped and the playback is restarted from the last play-start position.
 */
Transport.prototype.restart = function(){};

Transport.prototype.returnToArrangement = function(){};

Transport.prototype.rewind = function(){};

/**
 * @param {string} mode
 */
Transport.prototype.setAutomationWriteMode = function(mode){};

/**
 * @param {boolean} on
 */
Transport.prototype.setClick = function(on){};

/**
 * @param {boolean} on
 */
Transport.prototype.setLauncherOverdub = function(on){};

/**
 * @param {boolean} on
 */
Transport.prototype.setLoop = function(on){};

/**
 * @param {number} amount
 * @param {number} range
 */
Transport.prototype.setMetronomeValue = function(amount, range){};

/**
 * @param {boolean} on
 */
Transport.prototype.setOverdub = function(on){};

/**
 * @param {number} beats
 */
Transport.prototype.setPosition = function(beats){};

/**
 * Equivalent to pressing stop on the transport.
 */
Transport.prototype.stop = function(){};

Transport.prototype.toggleClick = function(){};

Transport.prototype.toggleLatchAutomationWriteMode = function(){};

Transport.prototype.toggleLauncherOverdub = function(){};

Transport.prototype.toggleLoop = function(){};

Transport.prototype.toggleMetronomeTicks = function(){};

Transport.prototype.toggleOverdub = function(){};

/**
 * Toggles the transport playback state between playing and stopped.
 */
Transport.prototype.togglePlay = function(){};

Transport.prototype.togglePunchIn = function(){};

Transport.prototype.togglePunchOut = function(){};

Transport.prototype.toggleWriteArrangerAutomation = function(){};

Transport.prototype.toggleWriteClipLauncherAutomation = function(){};