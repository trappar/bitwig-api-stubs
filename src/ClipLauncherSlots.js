function ClipLauncherSlots(){}

ClipLauncherSlots.prototype = new ClipLauncherScenesOrSlots();
ClipLauncherSlots.prototype.constructor = ClipLauncherSlots;

/**
 * Add an observer on the colors of the clips.
 * @param {function} callback
 */
ClipLauncherSlots.prototype.addColorObserver = function(callback){};

/**
 * Add an observer notifying if which slots has a clip in them
 * @param {function} callback
 */
ClipLauncherSlots.prototype.addHasContentObserver = function(callback){};

/**
 * Add an observer if clip is playing on the slot.
 * @param {function} callback
 */
ClipLauncherSlots.prototype.addIsPlayingObserver = function(callback){};

/**
 * Add an observer if clip playback is queued on the slot.
 * @param {function} callback
 */
ClipLauncherSlots.prototype.addIsQueuedObserver = function(callback){};

/**
 * Add an observer if clip is recording on the slot.
 * @param {function} callback
 */
ClipLauncherSlots.prototype.addIsRecordingObserver = function(callback){};

/**
 * Add an observer notifying if the clip is the selection cursor
 * @param {function} callback
 */
ClipLauncherSlots.prototype.addIsSelectedObserver = function(callback){};

/**
 * @param {int} slot
 * @param {int} lengthInBeats
 */
ClipLauncherSlots.prototype.createEmptyClip = function(slot, lengthInBeats){};

/**
 * @param {int} slot
 */
ClipLauncherSlots.prototype.record = function(slot){};

/**
 * @param {int} slot
 */
ClipLauncherSlots.prototype.select = function(slot){};

/**
 * Set if an indication in the GUI should be shown. (initially false)
 * @param {boolean} shouldIndicate
 */
ClipLauncherSlots.prototype.setIndication = function(shouldIndicate){};

/**
 * @param {int} slot
 */
ClipLauncherSlots.prototype.showInEditor = function(slot){};