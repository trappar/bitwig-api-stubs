function MidiIn(){}

/**
 * Defines a note input. Must be called within init() The messages matching the masks will be fed directly to the
 * application, and not be processed through the script. If no filter is provided, a standard filter will be used to
 * forward note-related messages on channel 1 (0).
 * @param {string} name
 * @param {string...=} masks - formatted in hex with ? as wildcard. Example "80????" matches Note off on channel 1 (0)
 * @returns {NoteInput}
 * @throws com.bitwig.base.control_surface.ControlSurfaceException
 */
MidiIn.prototype.createNoteInput = function(name, masks){};

/**
 * Add a callback receiving short (normal) MIDI messages for this port.
 * @param {function} callback - with signature (int, int, int)
 * @throws com.bitwig.base.control_surface.ControlSurfaceException
 */
MidiIn.prototype.setMidiCallback = function(callback){};

/**
 * Add a callback receiving sysex MIDI messages for this port.
 * @param {function} callback - with signature (String)
 * @throws com.bitwig.base.control_surface.ControlSurfaceException
 */
MidiIn.prototype.setSysexCallback = function(callback){};