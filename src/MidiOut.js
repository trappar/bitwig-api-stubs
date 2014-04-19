function MidiOut(){}

/**
 * @param {int} status
 * @param {int} data1
 * @param {int} data2
 * @throws com.bitwig.base.control_surface.ControlSurfaceException
 */
MidiOut.prototype.sendMidi = function(status, data1, data2){};

/**
 * @param {string} hexString
 * @throws com.bitwig.base.control_surface.ControlSurfaceException
 */
MidiOut.prototype.sendSysex = function(hexString){};

/**
 * @param {boolean} shouldSendClock
 * @throws com.bitwig.base.control_surface.ControlSurfaceException
 */
MidiOut.prototype.setShouldSendMidiBeatClock = function(shouldSendClock){};