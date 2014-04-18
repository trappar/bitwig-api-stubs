//Notes: Annoyingly "host" must be lower cased rather than "Host" as the documentation says.

/**
 * An interface representing the host application to the script.
 * @global
 */
function host(){}

/**
 * Define that the controller can be discovered from the name of the midi in/out drivers.. Can be called (at the global scope) multiple times to define multiple driver names but is optional.
 * @param {string[]} inputs
 * @param {string[]} outputs
 */
host.prototype.addDeviceNameBasedDiscoveryPair = function(inputs, outputs){};

/**
 * Connect to a remote TCP socket. The callback will receive a RemoteConnection instance on connection.
 * @param {string} host
 * @param {int} port
 * @param {function} callback
 * @throws com.bitwig.base.control_surface.ControlSurfaceException
 */
host.prototype.connectToRemoteHost = function(host, port, callback){};

/**
 * @returns {Application}
 * @throws com.bitwig.base.control_surface.ControlSurfaceException
 */
host.prototype.createApplication = function(){
    return new Application();
};

/**
 * @param {int} screenIndex
 * @returns {Arranger}
 * @throws com.bitwig.base.control_surface.ControlSurfaceException
 */
host.prototype.createArranger = function(screenIndex){};

/**
 * @param {int} gridWidth
 * @returns {Clip}
 * @throws com.bitwig.base.control_surface.ControlSurfaceException
 */
host.prototype.createCursorClip = function(gridWidth){};

/**
 * @returns {CursorDevice}
 * @throws com.bitwig.base.control_surface.ControlSurfaceException
 */
host.prototype.createCursorDevice = function(){};

/**
 * @param {int} numSends
 * @returns {CursorTrack}
 * @throws com.bitwig.base.control_surface.ControlSurfaceException
 */
host.prototype.createCursorTrack = function(numSends){};

/**
 * @param {int} numTracks
 * @param {int} numScenes
 * @returns {TrackBank}
 * @throws com.bitwig.base.control_surface.ControlSurfaceException
 */
host.prototype.createEffectTrackBank = function(numTracks, numScenes){};

/**
 * @returns {Groove}
 * @throws com.bitwig.base.control_surface.ControlSurfaceException
 */
host.prototype.createGroove = function(){};

/**
 * @param {int} numTracks
 * @param {int} numSends
 * @param {int} numScenes
 * @returns {TrackBank}
 * @throws com.bitwig.base.control_surface.ControlSurfaceException
 */
host.prototype.createMainTrackBank = function(numTracks, numSends, numScenes){};

/**
 * @param {int} numScenes
 * @returns {Track}
 * @throws com.bitwig.base.control_surface.ControlSurfaceException
 */
host.prototype.createMasterTrack = function(numScenes){};

/**
 * @param {string} perspective
 * @param {int} screenIndex
 * @returns {Mixer}
 * @throws com.bitwig.base.control_surface.ControlSurfaceException
 */
host.prototype.createMixer = function(perspective, screenIndex){};

/**
 * Opens a TCP host socket
 * @param {string} name
 * @param {int} defaultPort
 * @returns {RemoteSocket}
 */
host.prototype.createRemoteConnection = function(name, defaultPort){};

/**
 * @param {int} numTracks
 * @param {int} numSends
 * @param {int} numScenes
 * @returns {TrackBank}
 * @throws com.bitwig.base.control_surface.ControlSurfaceException
 */
host.prototype.createTrackBank = function(numTracks, numSends, numScenes){};

/**
 * @returns {Transport}
 * @throws com.bitwig.base.control_surface.ControlSurfaceException
 */
host.prototype.createTransport = function(){};

/**
 * @param {int} numControllers
 * @returns {UserControlBank}
 * @throws com.bitwig.base.control_surface.ControlSurfaceException
 */
host.prototype.createUserControls = function(numControllers){};

/**
 * Define the controller. Must be called at the global scope of the script
 * @param {string} vendor
 * @param {string} name
 * @param {string} version
 * @param {string} uuid
 * @throws com.bitwig.base.control_surface.ControlSurfaceException
 */
host.prototype.defineController = function(vendor, name, version, uuid){};

/**
 * @param {int} numInports
 * @param {int} numOutports
 */
host.prototype.defineMidiPorts = function(numInports, numOutports){};

/**
 * Define the sysex "identity reply" message (if any) that the MIDI device sends after receiving the standard Identity Request (F0 7E 7F 06 01 F7) message Must be called at the global scope of the script, but is optional. Only applicable to scripts with 1 MIDI in and 1 MIDI out
 * @param {string} reply
 */
host.prototype.defineSysexIdentityReply = function(reply){};

/**
 * @param {string} s
 */
host.prototype.errorln = function(s){};

/**
 * The highest supported API version of the host application.
 * @returns {int}
 */
host.prototype.getHostApiVersion = function(){};

/**
 * The product name of the host application.
 * @returns {string}
 */
host.prototype.getHostProduct = function(){};

/**
 * The vendor of the host application.
 * @returns {string}
 */
host.prototype.getHostVendor = function(){};

/**
 * The version number of the host application.
 * @returns {string}
 */
host.prototype.getHostVersion = function(){};

/**
 * @param {int} index
 * @returns {MidiIn}
 * @throws com.bitwig.base.control_surface.ControlSurfaceException
 */
host.prototype.getMidiInPort = function(index){};

/**
 * @param {int} index
 * @returns {MidiOut}
 * @throws com.bitwig.base.control_surface.ControlSurfaceException
 */
host.prototype.getMidiOutPort = function(index){};

/**
 * @returns {boolean}
 */
host.prototype.platformIsLinux = function(){};

/**
 * @returns {boolean}
 */
host.prototype.platformIsMac = function(){};

/**
 * @returns {boolean}
 */
host.prototype.platformIsWindows = function(){};

/**
 * @param {string} s
 */
host.prototype.println = function(s){};

/**
 * @param {function} callback
 * @param {string[]} args
 * @param {int} delay
 * @throws com.bitwig.base.control_surface.ControlSurfaceException
 */
host.prototype.scheduleTask = function(callback, args, delay){};

/**
 * @param {string} text
 */
host.prototype.showPopupNotification = function(text){};
