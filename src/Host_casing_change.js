/**
 * An interface representing the Host application to the script.
 * @global
 */
function Host(){}

/**
 * Define that the controller can be discovered from the name of the midi in/out drivers.. Can be called (at the global scope) multiple times to define multiple driver names but is optional.
 * @param {string[]} inputs
 * @param {string[]} outputs
 */
Host.prototype.addDeviceNameBasedDiscoveryPair = function(inputs, outputs){};

/**
 * Connect to a remote TCP socket. The callback will receive a RemoteConnection instance on connection.
 * @param {string} host
 * @param {int} port
 * @param {function} callback
 * @throws com.bitwig.base.control_surface.ControlSurfaceException
 */
Host.prototype.connectToRemoteHost = function(host, port, callback){};

/**
 * @returns {Application}
 * @throws com.bitwig.base.control_surface.ControlSurfaceException
 */
Host.prototype.createApplication = function(){
    return new Application();
};

/**
 * @param {int} screenIndex
 * @returns {Arranger}
 * @throws com.bitwig.base.control_surface.ControlSurfaceException
 */
Host.prototype.createArranger = function(screenIndex){};

/**
 * @param {int} gridWidth
 * @returns {Clip}
 * @throws com.bitwig.base.control_surface.ControlSurfaceException
 */
Host.prototype.createCursorClip = function(gridWidth){};

/**
 * @returns {CursorDevice}
 * @throws com.bitwig.base.control_surface.ControlSurfaceException
 */
Host.prototype.createCursorDevice = function(){};

/**
 * @param {int} numSends
 * @returns {CursorTrack}
 * @throws com.bitwig.base.control_surface.ControlSurfaceException
 */
Host.prototype.createCursorTrack = function(numSends){};

/**
 * @param {int} numTracks
 * @param {int} numScenes
 * @returns {TrackBank}
 * @throws com.bitwig.base.control_surface.ControlSurfaceException
 */
Host.prototype.createEffectTrackBank = function(numTracks, numScenes){};

/**
 * @returns {Groove}
 * @throws com.bitwig.base.control_surface.ControlSurfaceException
 */
Host.prototype.createGroove = function(){};

/**
 * @param {int} numTracks
 * @param {int} numSends
 * @param {int} numScenes
 * @returns {TrackBank}
 * @throws com.bitwig.base.control_surface.ControlSurfaceException
 */
Host.prototype.createMainTrackBank = function(numTracks, numSends, numScenes){};

/**
 * @param {int} numScenes
 * @returns {Track}
 * @throws com.bitwig.base.control_surface.ControlSurfaceException
 */
Host.prototype.createMasterTrack = function(numScenes){};

/**
 * @param {string} perspective
 * @param {int} screenIndex
 * @returns {Mixer}
 * @throws com.bitwig.base.control_surface.ControlSurfaceException
 */
Host.prototype.createMixer = function(perspective, screenIndex){};

/**
 * Opens a TCP Host socket
 * @param {string} name
 * @param {int} defaultPort
 * @returns {RemoteSocket}
 */
Host.prototype.createRemoteConnection = function(name, defaultPort){};

/**
 * @param {int} numTracks
 * @param {int} numSends
 * @param {int} numScenes
 * @returns {TrackBank}
 * @throws com.bitwig.base.control_surface.ControlSurfaceException
 */
Host.prototype.createTrackBank = function(numTracks, numSends, numScenes){};

/**
 * @returns {Transport}
 * @throws com.bitwig.base.control_surface.ControlSurfaceException
 */
Host.prototype.createTransport = function(){};

/**
 * @param {int} numControllers
 * @returns {UserControlBank}
 * @throws com.bitwig.base.control_surface.ControlSurfaceException
 */
Host.prototype.createUserControls = function(numControllers){};

/**
 * Define the controller. Must be called at the global scope of the script
 * @param {string} vendor
 * @param {string} name
 * @param {string} version
 * @param {string} uuid
 * @throws com.bitwig.base.control_surface.ControlSurfaceException
 */
Host.prototype.defineController = function(vendor, name, version, uuid){};

/**
 * @param {int} numInports
 * @param {int} numOutports
 */
Host.prototype.defineMidiPorts = function(numInports, numOutports){};

/**
 * Define the sysex "identity reply" message (if any) that the MIDI device sends after receiving the standard Identity Request (F0 7E 7F 06 01 F7) message Must be called at the global scope of the script, but is optional. Only applicable to scripts with 1 MIDI in and 1 MIDI out
 * @param {string} reply
 */
Host.prototype.defineSysexIdentityReply = function(reply){};

/**
 * @param {string} s
 */
Host.prototype.errorln = function(s){};

/**
 * The highest supported API version of the Host application.
 * @returns {int}
 */
Host.prototype.getHostApiVersion = function(){};

/**
 * The product name of the Host application.
 * @returns {string}
 */
Host.prototype.getHostProduct = function(){};

/**
 * The vendor of the Host application.
 * @returns {string}
 */
Host.prototype.getHostVendor = function(){};

/**
 * The version number of the Host application.
 * @returns {string}
 */
Host.prototype.getHostVersion = function(){};

/**
 * @param {int} index
 * @returns {MidiIn}
 * @throws com.bitwig.base.control_surface.ControlSurfaceException
 */
Host.prototype.getMidiInPort = function(index){};

/**
 * @param {int} index
 * @returns {MidiOut}
 * @throws com.bitwig.base.control_surface.ControlSurfaceException
 */
Host.prototype.getMidiOutPort = function(index){};

/**
 * @returns {boolean}
 */
Host.prototype.platformIsLinux = function(){};

/**
 * @returns {boolean}
 */
Host.prototype.platformIsMac = function(){};

/**
 * @returns {boolean}
 */
Host.prototype.platformIsWindows = function(){};

/**
 * @param {string} s
 */
Host.prototype.println = function(s){};

/**
 * @param {function} callback
 * @param {string[]} args
 * @param {int} delay
 * @throws com.bitwig.base.control_surface.ControlSurfaceException
 */
Host.prototype.scheduleTask = function(callback, args, delay){};

/**
 * @param {string} text
 */
Host.prototype.showPopupNotification = function(text){};

host = new Host();