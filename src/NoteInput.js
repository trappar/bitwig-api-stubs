function NoteInput(){
    this.NoteExpression = new NoteExpression();
}

/**
 * Assign polyphonic aftertouch to a specific note expression. By using multiple midi channels multi-dimensional control is possible. When set, the key translation table is also used for polyphonic aftertouch.
 * @param {int} channel - MIDI channel to map [0 .. 15]
 * @param {NoteInput.NoteExpression} expression - the note-expression to map to channel
 * @param {int} pitchRange - range of the pitch mapping in semitones. Ignored for non-pitch expressions. [1..24]
 * @throws com.bitwig.base.control_surface.ControlSurfaceException
 */
NoteInput.prototype.assignPolyphonicAftertouchToExpression = function(channel, expression, pitchRange){};

/**
 * Specify a translation table which defines for each key which key (0-127) should be sent from the NoteInput. This is used for Note-On/Off and polyphonic aftertouch events. Specifying -1 for a key means it will send no event. Useful for providing transposition or scale features through the controller scripts. By default an identity transform table is set.
 * @param {Object[]} table - an array which should be 128 values in length.
 * @throws com.bitwig.base.control_surface.ControlSurfaceException
 */
NoteInput.prototype.setKeyTranslationTable = function(table){};

/**
 * When true (default) the events defined for this note-input will be consumed but the input and will not be sent to the MIDI callback of the port. Set this to false if you want to use the events defined by the mask both for the NoteInput and your callback function, or if you want to change the behaviour dynamically. This setting is true by default.
 * @param {boolean} shouldConsumeEvents
 * @throws com.bitwig.base.control_surface.ControlSurfaceException
 */
NoteInput.prototype.setShouldConsumeEvents = function(shouldConsumeEvents){};

/**
 * Specify a translation table which defines for each input velocity which velocity should be sent from the NoteInput. This is used for Note-On events. Useful for providing velocity curves or fixed velocity mappings. By default an identity transform table is set.
 * @param {Object[]} table - an array which should be 128 values in length.
 * @throws com.bitwig.base.control_surface.ControlSurfaceException
 */
NoteInput.prototype.setVelocityTranslationTable = function(table){};