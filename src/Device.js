function Device(){}

/**
 * Add an observer for the name of the currently active modulation source.
 * @param {int} len
 * @param {string} textWhenUnassigned
 * @param {function} callback
 */
Device.prototype.addActiveModulationSourceObserver = function(len, textWhenUnassigned, callback){};

/**
 * @param {function} callback
 */
Device.prototype.addHasSelectedDeviceObserver = function(callback){};

/**
 * @param {function} callback
 */
Device.prototype.addIsEnabledObserver = function(callback){};

/**
 * @param {int} len
 * @param {string} textWhenUnassigned
 * @param {function} callback
 */
Device.prototype.addNameObserver = function(len, textWhenUnassigned, callback){};

/**
 * @param {function} callback
 */
Device.prototype.addNextParameterPageEnabledObserver = function(callback){};

/**
 * @param {function} callback
 */
Device.prototype.addPageNamesObserver = function(callback){};

/**
 * @param {function} callback
 */
Device.prototype.addPresetCategoriesObserver = function(callback){};

/**
 * @param {int} len
 * @param {string} textWhenUnassigned
 * @param {function} callback
 */
Device.prototype.addPresetCategoryObserver = function(len, textWhenUnassigned, callback){};

/**
 * @param {int} len
 * @param {string} textWhenUnassigned
 * @param {function} callback
 */
Device.prototype.addPresetCreatorObserver = function(len, textWhenUnassigned, callback){};

/**
 * @param {function} callback
 */
Device.prototype.addPresetCreatorsObserver = function(callback){};

/**
 * @param {int} len
 * @param {string} textWhenUnassigned
 * @param {function} callback
 */
Device.prototype.addPresetNameObserver = function(len, textWhenUnassigned, callback){};

/**
 * @param {function} callback
 */
Device.prototype.addPreviousParameterPageEnabledObserver = function(callback){};

/**
 * @param valueWhenUnassigned
 * @param {function} callback
 */
Device.prototype.addSelectedPageObserver = function(valueWhenUnassigned, callback){};

/**
 * @returns {AutomatableRangedValue}
 * @throws com.bitwig.base.control_surface.ControlSurfaceException
 */
Device.prototype.getCommonParameter = function(index){};

/**
 * @returns {AutomatableRangedValue}
 * @throws com.bitwig.base.control_surface.ControlSurfaceException
 */
Device.prototype.getEnvelopeParameter = function(index){};

/**
 * @returns {Macro}
 * @throws com.bitwig.base.control_surface.ControlSurfaceException
 */
Device.prototype.getMacro = function(index){};

/**
 * @returns {ModulationSource}
 * @throws com.bitwig.base.control_surface.ControlSurfaceException
 */
Device.prototype.getModulationSource = function(index){};

/**
 * @returns {AutomatableRangedValue}
 * @throws com.bitwig.base.control_surface.ControlSurfaceException
 */
Device.prototype.getParameter = function(indexInPage){};

Device.prototype.nextParameterPage = function(){};

Device.prototype.previousParameterPage = function(){};

/**
 * @param {int} page
 */
Device.prototype.setParameterPage = function(page){};

/**
 * Set the preset category filter with the index from the list provided by addPresetCategoriesObserver
 * @param {int} index
 */
Device.prototype.setPresetCategory = function(index){};

/**
 * Set the preset creator filter with the index from the list provided by addPresetCreatorsObserver
 * @param {int} index
 */
Device.prototype.setPresetCreator = function(index){};

Device.prototype.switchToNextPreset = function(){};

Device.prototype.switchToNextPresetCategory = function(){};

Device.prototype.switchToNextPresetCreator = function(){};

Device.prototype.switchToPreviousPreset = function(){};

Device.prototype.switchToPreviousPresetCategory = function(){};

Device.prototype.switchToPreviousPresetCreator = function(){};

Device.prototype.toggleEnabledState = function(){};