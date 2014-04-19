function PrimaryDevice(){
    this.DeviceType = new DeviceType();
    this.ChainLocation = new ChainLocation();
}

PrimaryDevice.prototype = new Device();
PrimaryDevice.prototype.constructor = PrimaryDevice;

/**
 * @param {PrimaryDevice.DeviceType} deviceType
 * @param {PrimaryDevice.ChainLocation} chainLocation
 * @param {function} callback
 */
PrimaryDevice.prototype.addCanSwitchToDeviceObserver = function(deviceType, chainLocation, callback){};

/**
 * @param {PrimaryDevice.DeviceType} deviceType
 * @param {PrimaryDevice.ChainLocation} chainLocation
 */
PrimaryDevice.prototype.switchToDevice = function(deviceType, chainLocation){};