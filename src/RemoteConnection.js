function RemoteConnection(){}

RemoteConnection.prototype.disconnect = function(){};

/**
 * @param {int[]} data - array of bytes
 * @throws IOException
 */
RemoteConnection.prototype.send = function(data){};

/**
 * @param {function} callback
 */
RemoteConnection.prototype.setDisconnectCallback = function(callback){};

/**
 * Set callback used for receiving data.
 * @param {function} callback
 */
RemoteConnection.prototype.setReceiveCallback = function(callback){};